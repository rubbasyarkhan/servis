const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let subdirs = fs.readdirSync(dir);
  let files = [];
  for (let file of subdirs) {
    let full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(getFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

const all = getFiles('public/Images');
console.log('Total files in public/Images:', all.length);

const categories = {};
for (const f of all) {
  const rel = path.relative('public/Images', f);
  const parts = rel.split(path.sep);
  const cat = parts[0];
  if (!categories[cat]) categories[cat] = [];
  categories[cat].push({
    relPath: '/Images/' + rel.replace(/\\/g, '/'),
    name: path.basename(f),
    size: fs.statSync(f).size
  });
}

for (const cat in categories) {
  console.log(`\n=== Category: ${cat} (${categories[cat].length} files) ===`);
  categories[cat].forEach((item, idx) => {
    if (idx < 6) {
      console.log(`  - ${item.relPath} (${Math.round(item.size / 1024)} KB)`);
    }
  });
  if (categories[cat].length > 6) {
    console.log(`  ... and ${categories[cat].length - 6} more`);
  }
}

// Write a JSON map for easy consumption
fs.writeFileSync('scripts/images-inventory.json', JSON.stringify(categories, null, 2));
console.log('\nWrote inventory to scripts/images-inventory.json');
