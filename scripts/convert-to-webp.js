const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '../public/Images');

function getAllFiles(dirPath, arrayOfFiles = []) {
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

async function convertAll() {
  const allFiles = getAllFiles(IMAGES_DIR);
  const imageFiles = allFiles.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.jfif'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} source images...`);

  // Parallel processing helper
  const CONCURRENCY = 8;
  let index = 0;
  let convertedCount = 0;
  let skippedCount = 0;
  let totalOrigSize = 0;
  let totalWebpSize = 0;

  async function worker() {
    while (index < imageFiles.length) {
      const i = index++;
      const imgPath = imageFiles[i];
      const ext = path.extname(imgPath);
      const baseName = imgPath.slice(0, -ext.length);
      const webpPath = `${baseName}.webp`;

      try {
        if (fs.existsSync(webpPath)) {
          skippedCount++;
          continue;
        }

        const origStat = fs.statSync(imgPath);
        totalOrigSize += origStat.size;

        await sharp(imgPath)
          .webp({ quality: 80, effort: 2 })
          .toFile(webpPath);

        const webpStat = fs.statSync(webpPath);
        totalWebpSize += webpStat.size;
        convertedCount++;

        if (convertedCount % 20 === 0) {
          console.log(`Converted ${convertedCount} new images (${skippedCount} already existed)...`);
        }
      } catch (err) {
        console.error(`Error converting ${path.basename(imgPath)}:`, err.message);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  console.log(`\nAll done! Converted: ${convertedCount}, Already had WebP: ${skippedCount}, Total: ${imageFiles.length}`);
}

convertAll().catch(console.error);
