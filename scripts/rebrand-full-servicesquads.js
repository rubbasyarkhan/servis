const fs = require('fs');

const servicesData = [
  {
    category: 'Plumbing',
    items: [
      { name: 'Water Quality Improvements', slug: 'water-quality-improvements' },
      { name: 'Clogged Drain/Rooter Service', slug: 'clogged-drain-rooter-service' },
      { name: 'Sewer Repair', slug: 'sewer-repair' },
      { name: 'Sump Pumps', slug: 'sump-pumps' },
      { name: 'Whole House Repiping', slug: 'whole-house-repiping' },
      { name: 'Garbage Disposal Repair', slug: 'garbage-disposal-repair' },
      { name: 'Drain Cleaning', slug: 'drain-cleaning' },
      { name: 'Plumbing Installations', slug: 'plumbing-installations' },
      { name: 'Commercial Plumbing', slug: 'commercial-plumbing' },
      { name: 'Clogged Toilet Repairs', slug: 'clogged-toilet-repairs' },
      { name: 'Plumbing Leak Detection', slug: 'plumbing-leak-detection' },
      { name: 'Busted Pipe Repair', slug: 'busted-pipe-repair' },
      { name: 'Hydro Jetting', slug: 'hydro-jetting' },
      { name: 'Toilet Parts Installation', slug: 'toilet-parts-installation' },
      { name: 'Leaky Faucets Repair', slug: 'leaky-faucets-repair' },
      { name: 'Shower Valve Replacement', slug: 'shower-valve-replacement' },
      { name: 'Water Heaters Installation', slug: 'water-heaters-installation' },
      { name: 'Water Heaters Repair', slug: 'water-heaters-repair' },
      { name: 'Plumbing Repairs', slug: 'plumbing-repairs' },
      { name: 'Gas Line Repairs', slug: 'gas-line-repairs' }
    ]
  },
  {
    category: 'Air Conditioning',
    items: [
      { name: 'AC Installation', slug: 'ac-installation' },
      { name: 'AC Repair', slug: 'ac-repair' },
      { name: 'Air Duct Cleaning', slug: 'air-duct-cleaning' },
      { name: 'Dryer Vent Cleaning', slug: 'dryer-vent-cleaning' }
    ]
  },
  {
    category: 'Water Damage',
    items: [
      { name: 'Commercial Water Damage', slug: 'commercial-water-damage' },
      { name: 'Residential Water Damage', slug: 'residential-water-damage' },
      { name: 'Flood Damage Restoration', slug: 'flood-damage-restoration' }
    ]
  },
  {
    category: 'Fire Damage',
    items: [
      { name: 'Fire Damage Repair', slug: 'fire-damage-repair' },
      { name: 'Smoke Damage Restoration', slug: 'smoke-damage-restoration' }
    ]
  },
  {
    category: 'Remodeling',
    items: [
      { name: 'Commercial Construction', slug: 'commercial-construction' },
      { name: 'Bathroom Remodeling', slug: 'bathroom-remodeling' },
      { name: 'Residential Renovation', slug: 'residential-renovation' },
      { name: 'Damage Reconstruction', slug: 'damage-reconstruction' }
    ]
  },
  {
    category: 'Others',
    items: [
      { name: 'Mold Removal', slug: 'mold-removal' },
      { name: 'Residential Board Up', slug: 'residential-board-up' }
    ]
  }
];

const raw = fs.readFileSync('src/lib/data/servpro-homepage-html.ts', 'utf8');
const matchJson = raw.match(/export const SERVPRO_HOMEPAGE_HTML = ("[\s\S]*");/);
let html = JSON.parse(matchJson[1]);

// 1. BUILD THE NEW NAVBAR
const navbarHtml = `<header class="service-squads-header" style="position:sticky;top:0;z-index:9999;background:#ffffff;box-shadow:0 2px 12px rgba(0,0,0,0.08);border-bottom:1px solid #e2e8f0;font-family:inherit;">
  <div style="max-width:1440px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:84px;">
    
    <!-- Logo -->
    <a href="/" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
      <img src="/logo.png" alt="Service Squads" style="height:48px;width:auto;object-fit:contain;display:block;" />
      <div style="display:flex;flex-direction:column;line-height:1.1;">
        <span style="font-weight:900;font-size:22px;letter-spacing:-0.5px;color:#0B192C;text-transform:uppercase;">
          Service<span style="color:#F4793E;">Squads</span>
        </span>
        <span style="font-size:10px;font-weight:700;color:#559A23;letter-spacing:1px;text-transform:uppercase;">
          Houston Property Services
        </span>
      </div>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="desktop-nav" style="display:flex;align-items:center;gap:20px;">
      <a href="/" style="color:#0B192C;font-weight:700;font-size:14px;text-decoration:none;padding:8px 0;transition:color 0.2s;">Home</a>
      <a href="/about" style="color:#0B192C;font-weight:700;font-size:14px;text-decoration:none;padding:8px 0;transition:color 0.2s;">About Us</a>
      
      <!-- Services Megamenu Trigger -->
      <div class="nav-dropdown" style="position:relative;padding:8px 0;">
        <button type="button" style="background:transparent;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;color:#0B192C;font-weight:700;font-size:14px;padding:0;">
          <span>Services</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <!-- Services Megamenu Panel -->
        <div class="megamenu-panel" style="position:absolute;top:100%;left:-220px;width:960px;background:#ffffff;box-shadow:0 16px 48px rgba(0,0,0,0.15);border:1px solid #e2e8f0;border-radius:16px;padding:28px;display:none;grid-template-columns:repeat(3, 1fr);gap:24px;z-index:99999;">
          <!-- Plumbing -->
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="font-size:14px;font-weight:900;color:#F4793E;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #F4793E;padding-bottom:4px;margin-bottom:4px;">
              Plumbing
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;max-height:280px;overflow-y:auto;padding-right:8px;">
              ${servicesData[0].items.map(it => `<a href="/services/${it.slug}" style="font-size:13px;color:#334155;text-decoration:none;transition:color 0.15s;line-height:1.3;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'">${it.name}</a>`).join('\n')}
            </div>
          </div>

          <!-- Air Conditioning & Remodeling -->
          <div style="display:flex;flex-direction:column;gap:20px;">
            <div>
              <div style="font-size:14px;font-weight:900;color:#F4793E;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #F4793E;padding-bottom:4px;margin-bottom:8px;">
                Air Conditioning
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                ${servicesData[1].items.map(it => `<a href="/services/${it.slug}" style="font-size:13px;color:#334155;text-decoration:none;transition:color 0.15s;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'">${it.name}</a>`).join('\n')}
              </div>
            </div>

            <div>
              <div style="font-size:14px;font-weight:900;color:#F4793E;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #F4793E;padding-bottom:4px;margin-bottom:8px;">
                Remodeling &amp; Construction
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                ${servicesData[4].items.map(it => `<a href="/services/${it.slug}" style="font-size:13px;color:#334155;text-decoration:none;transition:color 0.15s;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'">${it.name}</a>`).join('\n')}
              </div>
            </div>
          </div>

          <!-- Water Damage, Fire Damage & Others -->
          <div style="display:flex;flex-direction:column;gap:20px;">
            <div>
              <div style="font-size:14px;font-weight:900;color:#F4793E;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #F4793E;padding-bottom:4px;margin-bottom:8px;">
                Water Damage
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                ${servicesData[2].items.map(it => `<a href="/services/${it.slug}" style="font-size:13px;color:#334155;text-decoration:none;transition:color 0.15s;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'">${it.name}</a>`).join('\n')}
              </div>
            </div>

            <div>
              <div style="font-size:14px;font-weight:900;color:#F4793E;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #F4793E;padding-bottom:4px;margin-bottom:8px;">
                Fire Damage
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                ${servicesData[3].items.map(it => `<a href="/services/${it.slug}" style="font-size:13px;color:#334155;text-decoration:none;transition:color 0.15s;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'">${it.name}</a>`).join('\n')}
              </div>
            </div>

            <div>
              <div style="font-size:14px;font-weight:900;color:#F4793E;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #F4793E;padding-bottom:4px;margin-bottom:8px;">
                Other Services
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                ${servicesData[5].items.map(it => `<a href="/services/${it.slug}" style="font-size:13px;color:#334155;text-decoration:none;transition:color 0.15s;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'">${it.name}</a>`).join('\n')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Areas Dropdown -->
      <div class="nav-dropdown" style="position:relative;padding:8px 0;">
        <button type="button" style="background:transparent;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;color:#0B192C;font-weight:700;font-size:14px;padding:0;">
          <span>Service Areas</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div class="dropdown-panel" style="position:absolute;top:100%;left:0;width:220px;background:#ffffff;box-shadow:0 12px 32px rgba(0,0,0,0.12);border:1px solid #e2e8f0;border-radius:12px;padding:12px;display:none;flex-direction:column;gap:6px;z-index:99999;">
          <a href="/locations/houston-tx" style="font-size:13px;font-weight:600;color:#334155;text-decoration:none;padding:6px 10px;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'">Houston, Texas</a>
          <a href="/locations/bellaire-tx" style="font-size:13px;font-weight:600;color:#334155;text-decoration:none;padding:6px 10px;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'">Bellaire, Texas</a>
          <a href="/locations/katy-tx" style="font-size:13px;font-weight:600;color:#334155;text-decoration:none;padding:6px 10px;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'">Katy, Texas</a>
          <a href="/locations/pearland-tx" style="font-size:13px;font-weight:600;color:#334155;text-decoration:none;padding:6px 10px;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'">Pearland, Texas</a>
          <a href="/locations/rosenberg-tx" style="font-size:13px;font-weight:600;color:#334155;text-decoration:none;padding:6px 10px;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'">Rosenberg, Texas</a>
          <a href="/locations/stafford-tx" style="font-size:13px;font-weight:600;color:#334155;text-decoration:none;padding:6px 10px;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'">Stafford, Texas</a>
          <a href="/locations/sugar-land-tx" style="font-size:13px;font-weight:600;color:#334155;text-decoration:none;padding:6px 10px;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'">Sugar Land, Texas</a>
        </div>
      </div>

      <a href="/membership" style="color:#0B192C;font-weight:700;font-size:14px;text-decoration:none;padding:8px 0;transition:color 0.2s;">Membership</a>
      <a href="/resources" style="color:#0B192C;font-weight:700;font-size:14px;text-decoration:none;padding:8px 0;transition:color 0.2s;">Blog</a>
      <a href="/offers" style="color:#0B192C;font-weight:700;font-size:14px;text-decoration:none;padding:8px 0;transition:color 0.2s;">Offers</a>
      <a href="/emergency-services" style="color:#F4793E;font-weight:800;font-size:14px;text-decoration:none;padding:8px 0;transition:color 0.2s;">Emergency 24/7</a>
      <a href="/contact" style="color:#0B192C;font-weight:700;font-size:14px;text-decoration:none;padding:8px 0;transition:color 0.2s;">Contact Us</a>
    </nav>

    <!-- Emergency Hotline CTA -->
    <div style="display:flex;align-items:center;gap:12px;">
      <a href="tel:7139999150" style="background:#F4793E;color:#ffffff;padding:10px 20px;border-radius:10px;font-weight:900;font-size:14px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(244,121,62,0.35);transition:background 0.2s;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>(713) 999-9150</span>
      </a>
    </div>

  </div>
</header>`;

// Replace old header
const navStart = html.indexOf('class="sidebar-header__root-0srltu"');
const heroStart = html.indexOf('<section class="service-squad-hero-section"');

if (navStart !== -1 && heroStart !== -1) {
  const rootDivStart = html.lastIndexOf('<div', navStart);
  html = html.slice(0, rootDivStart) + navbarHtml + html.slice(heroStart);
  console.log('Replaced old navigation header with new Service Squads header!');
}

// 2. BUILD THE EXPERT SERVICES SECTION (Replacing Section 2)
const servicesGridHtml = `<section class="service-squads-expert-services" style="background:#ffffff;padding:72px 0;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
  <div style="max-width:1440px;margin:0 auto;padding:0 32px;">
    
    <div style="text-align:center;max-width:760px;margin:0 auto 48px auto;">
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(244,121,62,0.12);padding:6px 16px;border-radius:20px;margin-bottom:12px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#F4793E;"></span>
        <span style="font-size:12px;font-weight:800;color:#F4793E;letter-spacing:1px;text-transform:uppercase;">Houston Premier Contractor</span>
      </div>
      <h2 style="font-size:clamp(28px, 4vw, 42px);font-weight:900;color:#0B192C;line-height:1.2;margin:0 0 12px 0;">
        Our Core Expert Services
      </h2>
      <p style="font-size:16px;color:#64748b;line-height:1.6;margin:0;">
        From 24/7 disaster extraction and structural drying to full plumbing repairs, HVAC, and turnkey remodeling, Service Squad delivers reliable solutions across Greater Houston.
      </p>
    </div>

    <!-- 6 Category Grid -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));gap:32px;">
      
      <!-- 1. Plumbing -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:48px;height:48px;border-radius:14px;background:#F4793E;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:22px;">
            🚰
          </div>
          <div>
            <h3 style="font-size:20px;font-weight:900;color:#0B192C;margin:0;">Plumbing Services</h3>
            <span style="font-size:12px;color:#64748b;font-weight:600;">20 Expert Services</span>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:8px 16px;margin-top:8px;">
          ${servicesData[0].items.map(it => `<a href="/services/${it.slug}" style="font-size:13px;color:#334155;text-decoration:none;display:flex;align-items:center;gap:6px;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'"><span style="color:#559A23;font-size:10px;">▸</span>${it.name}</a>`).join('\n')}
        </div>
      </div>

      <!-- 2. Air Conditioning -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:48px;height:48px;border-radius:14px;background:#559A23;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:22px;">
            ❄️
          </div>
          <div>
            <h3 style="font-size:20px;font-weight:900;color:#0B192C;margin:0;">Air Conditioning</h3>
            <span style="font-size:12px;color:#64748b;font-weight:600;">HVAC &amp; Duct Solutions</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;">
          ${servicesData[1].items.map(it => `<a href="/services/${it.slug}" style="font-size:14px;color:#334155;text-decoration:none;display:flex;align-items:center;gap:8px;font-weight:600;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'"><span style="color:#559A23;">✓</span>${it.name}</a>`).join('\n')}
        </div>
      </div>

      <!-- 3. Water Damage -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:48px;height:48px;border-radius:14px;background:#0284c7;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:22px;">
            💧
          </div>
          <div>
            <h3 style="font-size:20px;font-weight:900;color:#0B192C;margin:0;">Water Damage Restoration</h3>
            <span style="font-size:12px;color:#64748b;font-weight:600;">24/7 Rapid Extraction</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;">
          ${servicesData[2].items.map(it => `<a href="/services/${it.slug}" style="font-size:14px;color:#334155;text-decoration:none;display:flex;align-items:center;gap:8px;font-weight:600;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'"><span style="color:#559A23;">✓</span>${it.name}</a>`).join('\n')}
        </div>
      </div>

      <!-- 4. Fire Damage -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:48px;height:48px;border-radius:14px;background:#dc2626;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:22px;">
            🔥
          </div>
          <div>
            <h3 style="font-size:20px;font-weight:900;color:#0B192C;margin:0;">Fire &amp; Smoke Damage</h3>
            <span style="font-size:12px;color:#64748b;font-weight:600;">Full Recovery &amp; Deodorization</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;">
          ${servicesData[3].items.map(it => `<a href="/services/${it.slug}" style="font-size:14px;color:#334155;text-decoration:none;display:flex;align-items:center;gap:8px;font-weight:600;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'"><span style="color:#559A23;">✓</span>${it.name}</a>`).join('\n')}
        </div>
      </div>

      <!-- 5. Remodeling -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:48px;height:48px;border-radius:14px;background:#d97706;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:22px;">
            🔨
          </div>
          <div>
            <h3 style="font-size:20px;font-weight:900;color:#0B192C;margin:0;">Remodeling &amp; Construction</h3>
            <span style="font-size:12px;color:#64748b;font-weight:600;">Turnkey Rebuilding</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;">
          ${servicesData[4].items.map(it => `<a href="/services/${it.slug}" style="font-size:14px;color:#334155;text-decoration:none;display:flex;align-items:center;gap:8px;font-weight:600;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'"><span style="color:#559A23;">✓</span>${it.name}</a>`).join('\n')}
        </div>
      </div>

      <!-- 6. Others -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:48px;height:48px;border-radius:14px;background:#475569;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:22px;">
            🛡️
          </div>
          <div>
            <h3 style="font-size:20px;font-weight:900;color:#0B192C;margin:0;">Other Specialized Services</h3>
            <span style="font-size:12px;color:#64748b;font-weight:600;">Mold &amp; Emergency Board Up</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;">
          ${servicesData[5].items.map(it => `<a href="/services/${it.slug}" style="font-size:14px;color:#334155;text-decoration:none;display:flex;align-items:center;gap:8px;font-weight:600;" onmouseover="this.style.color='#F4793E'" onmouseout="this.style.color='#334155'"><span style="color:#559A23;">✓</span>${it.name}</a>`).join('\n')}
        </div>
      </div>

    </div>
  </div>
</section>`;

// Replace old service tiles section
const sec2Start = html.indexOf('<section class="service-tiles__section-3dsivo"');
if (sec2Start !== -1) {
  const sec2End = html.indexOf('</section>', sec2Start) + 10;
  html = html.slice(0, sec2Start) + servicesGridHtml + html.slice(sec2End);
  console.log('Replaced old service tiles section with new Expert Services grid!');
}

// 3. REMOVE ALL "EXPERIENCE TEXT"
html = html.replace(/<strong>30\+\s*Years<\/strong>\s*Experience/gi, '<strong>Licensed &amp; Insured</strong>');
html = html.replace(/59\+\s*Years\s*of\s*Experience/gi, 'Top-Quality Service');
html = html.replace(/More\s*than\s*50\s*Years\s*of\s*Experience/gi, 'Our Core Expert Services');
html = html.replace(/Years\s*of\s*Restoration\s*Experience/gi, 'Emergency Dispatches Handled');
html = html.replace(/With\s*decades\s*of\s*experience,\s*Service Squad/gi, 'Service Squad');
html = html.replace(/With\s*over\s*a\s*decade\s*of\s*hands-on\s*experience,\s*Service Squad/gi, 'Service Squad');
html = html.replace(/With\s*over\s*a\s*decade\s*of\s*trusted\s*experience,\s*/gi, '');
html = html.replace(/have\s*over\s*50\s*years\s*of\s*experience,\s*and\s*arrive/gi, 'arrive');
html = html.replace(/Delivering\s*trusted\s*restoration\s*services\s*since\s*1967\./gi, 'Delivering trusted restoration, plumbing, and AC services in Houston.');

// Save updated html
const tsContent = `// Auto-generated exact Servpro homepage DOM with Service Squad branding & colors
export const SERVPRO_HOMEPAGE_HTML = ${JSON.stringify(html)};
`;

fs.writeFileSync('src/lib/data/servpro-homepage-html.ts', tsContent, 'utf8');
console.log('Finished updating src/lib/data/servpro-homepage-html.ts');
