/**
 * Sanity Dataset Seeder
 * 
 * Extracts all 8 core services, sub-services, Texas franchise locations,
 * and global site settings from the project agreement models and formats
 * them into Sanity documents.
 * 
 * Usage:
 *   node scripts/seed-sanity.js
 *   node scripts/seed-sanity.js --token=YOUR_SANITY_EDITOR_TOKEN
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

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

const args = process.argv.slice(2);
const tokenArg = args.find(a => a.startsWith('--token='))?.split('=')[1];
const token = tokenArg || process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_READ_TOKEN;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wtk1cisw';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Parse source TS files into JSON-ready objects
function extractTSExport(filePath, exportName) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match export const <name> = [ ... ] or { ... }
  const regex = new RegExp(`export const ${exportName}[^=]*=\\s*([\\s\\S]*?);\\s*(?:export|$)`);
  const match = content.match(regex);
  if (!match) {
    throw new Error(`Could not find export "${exportName}" in ${filePath}`);
  }
  let code = match[1].trim();
  // Evaluate cleanly
  const fn = new Function(`return (${code})`);
  return fn();
}

const servicesPath = path.join(__dirname, '..', 'src/lib/data/services.ts');
const locationsPath = path.join(__dirname, '..', 'src/lib/data/locations.ts');
const settingsPath = path.join(__dirname, '..', 'src/lib/data/settings.ts');

const servicesData = extractTSExport(servicesPath, 'CORE_SERVICES');
const locationsData = extractTSExport(locationsPath, 'TEXAS_LOCATIONS');
const settingsData = extractTSExport(settingsPath, 'DEFAULT_SITE_SETTINGS');

console.log(`\n========================================`);
console.log(`📦 Sanity Dataset Seeder`);
console.log(`Project ID: ${projectId}`);
console.log(`Dataset:    ${dataset}`);
console.log(`========================================\n`);

console.log(`Loaded:`);
console.log(`- Services:  ${servicesData.length} records`);
console.log(`- Locations: ${locationsData.length} Texas franchise hubs`);
console.log(`- Settings:  Corporate Global Brand settings\n`);

// Transform into Sanity documents
const sanityDocs = [];

// 1. Services
servicesData.forEach(s => {
  sanityDocs.push({
    _id: `service-${s.slug}`,
    _type: 'service',
    title: s.title,
    shortTitle: s.shortTitle,
    slug: { _type: 'slug', current: s.slug },
    iconName: s.iconName,
    category: s.category || 'both',
    heroTagline: s.heroTagline,
    description: s.description,
    emergencyResponseTime: s.emergencyResponseTime || '< 60 Minutes On-Site',
    subServices: (s.subServices || []).map((sub, idx) => ({
      _key: sub.id || `sub-${idx}`,
      title: sub.title,
      description: sub.description,
      keySteps: sub.keySteps || [],
    })),
    processSteps: (s.processSteps || []).map((step, idx) => ({
      _key: `step-${step.step || idx + 1}`,
      step: step.step,
      title: step.title,
      description: step.description,
      timeWindow: step.timeWindow || '',
    })),
    equipment: s.equipment || [],
    commercialCapabilities: s.commercialCapabilities || [],
    residentialCapabilities: s.residentialCapabilities || [],
    insuranceGuidance: s.insuranceGuidance || '',
    faqs: (s.faqs || []).map((f, idx) => ({
      _key: `faq-${idx}`,
      question: f.question,
      answer: f.answer,
    })),
    seo: {
      title: s.seo?.title || s.title,
      description: s.seo?.description || s.description,
      keywords: s.seo?.keywords || [],
    },
  });
});

// 2. Locations
locationsData.forEach(l => {
  sanityDocs.push({
    _id: `location-${l.slug}`,
    _type: 'location',
    city: l.city,
    slug: { _type: 'slug', current: l.slug },
    state: l.state,
    zip: l.zip,
    isMainHub: Boolean(l.isMainHub),
    serviceRadiusMiles: l.serviceRadiusMiles || 30,
    phone: l.phone,
    address: l.address,
    geo: l.geo,
    coveredZips: l.coveredZips || [],
    dniTrackingNumber: l.dniTrackingNumber || '',
    googleReviewRating: l.googleReviewRating || 4.9,
    googleReviewCount: l.googleReviewCount || 500,
  });
});

// 3. Site Settings
sanityDocs.push({
  _id: 'siteSettings',
  _type: 'siteSettings',
  companyName: settingsData.companyName,
  legalEntity: settingsData.legalEntity,
  emergencyPhone: settingsData.emergencyPhone,
  corporateOffice: settingsData.corporateOffice,
  licenseNumber: settingsData.licenseNumber,
  operatingHours: settingsData.operatingHours,
  emergencyResponseSLA: settingsData.emergencyResponseSLA,
  serviceRadiusMiles: settingsData.serviceRadiusMiles,
  crmWebhookUrl: settingsData.crmWebhookUrl || 'https://api.servicesquadtx.com/webhook/leads',
  callRailDniScript: settingsData.callRailDniScript || '',
});

// Write to NDJSON file
const ndjsonPath = path.join(__dirname, 'sanity-seed-data.ndjson');
const ndjsonContent = sanityDocs.map(d => JSON.stringify(d)).join('\n');
fs.writeFileSync(ndjsonPath, ndjsonContent);
console.log(`✅ Generated ${sanityDocs.length} Sanity documents in:`);
console.log(`   ${ndjsonPath}\n`);

// If token is provided, push directly via Sanity Mutate API
if (token && token !== 'your_sanity_read_token_optional') {
  console.log(`🚀 Pushing ${sanityDocs.length} documents to Sanity (${projectId}/${dataset})...`);

  const mutations = sanityDocs.map(doc => ({
    createOrReplace: doc,
  }));

  const payload = JSON.stringify({ mutations });
  const req = https.request({
    hostname: `${projectId}.api.sanity.io`,
    port: 443,
    path: `/v2024-01-01/data/mutate/${dataset}?visibility=sync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'Authorization': `Bearer ${token}`,
    },
  }, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log(`\n🎉 SUCCESS! All ${sanityDocs.length} documents have been populated into Sanity CMS!`);
        console.log(`Visit http://localhost:3000/studio to see your live services, locations, and settings.`);
      } else {
        console.error(`\n❌ Sanity API error (${res.statusCode}):`, body);
      }
    });
  });

  req.on('error', (err) => {
    console.error('\n❌ Network error while seeding:', err.message);
  });

  req.write(payload);
  req.end();
} else {
  console.log(`ℹ️  No Sanity Editor API token found.`);
  console.log(`To automatically push all documents into Sanity in 1 second:`);
  console.log(`1. In sanity.io/manage -> Click Project "${projectId}" -> "API" tab`);
  console.log(`2. Under "Tokens", click "Add API token" -> Name: "Seeder", Permissions: "Editor" -> Save & Copy`);
  console.log(`3. Run:`);
  console.log(`   node scripts/seed-sanity.js --token=YOUR_TOKEN\n`);
}
