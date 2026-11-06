const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/faucet.png', name: 'plumbing-icon.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/air-conditioner.png', name: 'ac-icon.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/flood.png', name: 'water-icon.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/fire.png', name: 'fire-icon.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/home-repair.png', name: 'remodeling-icon.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/construction.png', name: 'construction-icon.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/New-Project-2.webp', name: 'service-water.webp' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/New-Project-3.webp', name: 'service-fire.webp' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/New-Project-6.webp', name: 'service-plumbing.webp' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/ra18az-endeavor-line-prestige-series-air-conditioner-6ed888f0-ab87-45b0-80f4-b3df96f748fa-410x410@2x.png', name: 'service-ac.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/02/Service-Squads-Construction-Portfolios-8.webp', name: 'service-remodeling.webp' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/02/Service-Squads-Construction-Portfolios-10.webp', name: 'service-commercial.webp' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/service-squad-emergency-247-icon1hu.png', name: 'emergency-badge.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/SSS-Membership-For-Timely-Services-and-Easy-Life1.png', name: 'membership-banner.png' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/07/service-squad-service-area-2-1.webp', name: 'service-areas-map.webp' },
  { url: 'https://servicesquads.com/wp-content/uploads/2024/03/Payement-Methods-Service-Squads.png', name: 'payment-methods.png' }
];

const destDir = path.join(__dirname, '../public/services');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

async function downloadAll() {
  for (const item of images) {
    try {
      console.log(`Downloading ${item.name}...`);
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(path.join(destDir, item.name), Buffer.from(buffer));
        console.log(`✓ Saved ${item.name} (${buffer.byteLength} bytes)`);
      } else {
        console.warn(`Failed ${item.url}: HTTP ${res.status}`);
      }
    } catch (e) {
      console.error(`Error downloading ${item.name}:`, e.message);
    }
  }
}

downloadAll();
