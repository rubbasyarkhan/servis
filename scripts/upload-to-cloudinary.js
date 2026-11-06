/**
 * Cloudinary Bulk Asset Uploader
 * 
 * Uploads all images from `public/Images`, `public/services`, `public/icons`,
 * `public/static`, and brand root assets into Cloudinary CDN.
 * 
 * Usage:
 *   node scripts/upload-to-cloudinary.js
 *   node scripts/upload-to-cloudinary.js --dry-run
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
try {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || '';
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        process.env[key] = val.trim();
      }
    });
  }
} catch (e) {
  // Ignore
}

const cloudinary = require('cloudinary').v2;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('\n❌ ERROR: Cloudinary credentials missing in .env.local');
  console.error('Expected:');
  console.error('  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...');
  console.error('  CLOUDINARY_API_KEY=...');
  console.error('  CLOUDINARY_API_SECRET=...\n');
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

function sanitizePathToPublicId(rawPath) {
  let p = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
  try { p = decodeURIComponent(p); } catch (e) {}

  const dotIndex = p.lastIndexOf('.');
  const slashIndex = p.lastIndexOf('/');
  if (dotIndex > slashIndex && dotIndex !== -1) {
    p = p.slice(0, dotIndex);
  }

  const sanitized = p
    .split('/')
    .map(segment => {
      return segment
        .replace(/&/g, 'and')
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9_\-]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');
    })
    .join('/');

  return `servicesquads/${sanitized}`;
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const SUPPORTED_EXTS = new Set(['.webp', '.jpg', '.jpeg', '.png', '.svg', '.gif']);

async function main() {
  console.log(`\n========================================`);
  console.log(`🚀 Starting Cloudinary Asset Upload`);
  console.log(`☁️  Cloud Name: ${cloudName}`);
  console.log(`🔑 API Key:    ${apiKey}`);
  console.log(`Mode:          ${dryRun ? 'DRY-RUN (Simulated)' : 'LIVE UPLOAD'}`);
  console.log(`========================================\n`);

  const publicDir = path.join(__dirname, '..', 'public');
  const foldersToUpload = ['Images', 'services', 'icons', 'static'];
  const fileMap = new Map(); // publicId -> { localPath, relPath }

  for (const folder of foldersToUpload) {
    const dir = path.join(publicDir, folder);
    const files = getAllFiles(dir);
    for (const f of files) {
      const ext = path.extname(f).toLowerCase();
      if (!SUPPORTED_EXTS.has(ext)) continue;
      const rel = path.relative(publicDir, f).replace(/\\/g, '/');
      const pid = sanitizePathToPublicId(rel);
      
      // If we already have this public_id (e.g. from .jpg vs .webp), prefer .webp
      if (fileMap.has(pid)) {
        if (ext === '.webp') {
          fileMap.set(pid, { localPath: f, relPath: rel, publicId: pid });
        }
      } else {
        fileMap.set(pid, { localPath: f, relPath: rel, publicId: pid });
      }
    }
  }

  // Root assets
  const rootAssets = [
    'logo.png',
    'logo.webp',
    'default-hero.webp',
    'default-placeholder.webp',
    'default-service.webp',
    'hero-restoration.webp',
  ];

  for (const asset of rootAssets) {
    const full = path.join(publicDir, asset);
    if (fs.existsSync(full)) {
      const pid = sanitizePathToPublicId(asset);
      fileMap.set(pid, { localPath: full, relPath: asset, publicId: pid });
    }
  }

  const items = Array.from(fileMap.values());
  console.log(`Discovered ${items.length} unique optimized image assets to upload.\n`);

  if (dryRun) {
    console.log(`[DRY RUN] Previewing first 10 assets:`);
    items.slice(0, 10).forEach(item => {
      console.log(`  - ${item.relPath} -> ${item.publicId}`);
    });
    console.log(`\nDry run complete. Run without --dry-run to start live upload.`);
    return;
  }

  const CONCURRENCY = 6;
  let index = 0;
  let completed = 0;
  let errors = 0;
  const manifest = {};
  const startTime = Date.now();

  async function worker(workerId) {
    while (index < items.length) {
      const i = index++;
      const item = items[i];

      let attempts = 0;
      let success = false;
      while (attempts < 3 && !success) {
        attempts++;
        try {
          const res = await cloudinary.uploader.upload(item.localPath, {
            public_id: item.publicId,
            overwrite: true,
            resource_type: 'image',
          });
          success = true;
          completed++;
          manifest[item.relPath] = {
            public_id: res.public_id,
            url: res.secure_url,
            format: res.format,
            bytes: res.bytes,
          };

          if (completed % 15 === 0 || completed === items.length) {
            const pct = Math.round((completed / items.length) * 100);
            const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
            console.log(`[${pct}%] ${completed}/${items.length} uploaded (${elapsedSec}s) - Last: ${item.relPath}`);
          }
        } catch (err) {
          if (attempts >= 3) {
            errors++;
            console.error(`❌ Failed [${item.relPath}]: ${err.message}`);
          } else {
            // Short backoff before retry
            await new Promise(r => setTimeout(r, 1000));
          }
        }
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1));
  await Promise.all(workers);

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n========================================`);
  console.log(`✅ Upload complete in ${durationSec}s!`);
  console.log(`Total Uploaded: ${completed}`);
  console.log(`Total Errors:   ${errors}`);
  console.log(`========================================\n`);

  fs.writeFileSync(
    path.join(__dirname, 'cloudinary-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Saved upload manifest to scripts/cloudinary-manifest.json`);
}

main().catch(err => {
  console.error('\nFatal upload error:', err);
  process.exit(1);
});
