const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) getFiles(full, files);
    else if (/\.(tsx|ts|js|jsx)$/.test(f)) files.push(full);
  });
  return files;
}

const all = getFiles('src');
const found = new Set();
const regex = /['"`]((\/(?:Images|services|icons|static|logo|default-)[^'"`]+?\.(?:webp|jpg|jpeg|png|svg))|(?:\/logo\.[a-z]+))['"`]/gi;

all.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = regex.exec(content)) !== null) {
    found.add(m[1]);
  }
});

console.log('Total referenced images in src code:', found.size);
Array.from(found).sort().forEach(p => console.log(' -', p));
