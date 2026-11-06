const fs = require('fs');
const inv = JSON.parse(fs.readFileSync('scripts/images-inventory.json', 'utf8'));

const featured = {};

for (const cat in inv) {
  const imgs = inv[cat].filter(f => !f.name.endsWith('.mp4'));
  featured[cat] = imgs.map(f => f.relPath);
}

fs.writeFileSync('scripts/featured-images.json', JSON.stringify(featured, null, 2));
console.log('Categories curated:');
Object.keys(featured).forEach(k => console.log(`- ${k}: ${featured[k].length} images`));
