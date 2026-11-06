const fs = require('fs');

// 1. Core Service Cards with Images (NO EMOJIS, proper images + icons)
const serviceCards = [
  {
    title: 'Plumbing Services',
    slug: 'plumbing-repairs',
    image: '/services/service-plumbing.webp',
    icon: '/services/plumbing-icon.png',
    badge: '20 Expert Services',
    desc: 'Licensed Houston plumbers for leak detection, drain cleaning, water heaters, repiping, and 24/7 emergency repairs.'
  },
  {
    title: 'Air Conditioning',
    slug: 'ac-repair',
    image: '/services/service-ac.png',
    icon: '/services/ac-icon.png',
    badge: 'HVAC & Duct Solutions',
    desc: 'Fast 24/7 AC repair, new system installations, duct cleaning, and seasonal maintenance across Greater Houston.'
  },
  {
    title: 'Water Damage Restoration',
    slug: 'commercial-water-damage',
    image: '/services/service-water.webp',
    icon: '/services/water-icon.png',
    badge: '24/7 Rapid Extraction',
    desc: 'Immediate emergency water extraction, structural drying, flood cleanup, and direct insurance billing assistance.'
  },
  {
    title: 'Fire & Smoke Damage',
    slug: 'fire-damage-repair',
    image: '/services/service-fire.webp',
    icon: '/services/fire-icon.png',
    badge: 'Full Property Recovery',
    desc: 'Complete soot removal, thermal fogging deodorization, structural cleaning, and turnkey reconstruction.'
  },
  {
    title: 'Remodeling & Construction',
    slug: 'commercial-construction',
    image: '/services/service-remodeling.webp',
    icon: '/services/remodeling-icon.png',
    badge: 'Turnkey Rebuilding',
    desc: 'Commercial tenant buildouts, luxury bathroom remodeling, residential renovation, and catastrophic reconstruction.'
  },
  {
    title: 'Mold & Board-Up Services',
    slug: 'mold-removal',
    image: '/services/service-commercial.webp',
    icon: '/services/construction-icon.png',
    badge: 'TDLR Certified Remediation',
    desc: 'Certified toxic mold remediation, air containment, negative air filtration, and emergency residential board-up.'
  }
];

const serviceAreas = [
  { name: 'Houston, Texas', slug: 'houston' },
  { name: 'Bellaire, Texas', slug: 'bellaire' },
  { name: 'Katy, Texas', slug: 'katy' },
  { name: 'Pearland, Texas', slug: 'pearland' },
  { name: 'Rosenberg, Texas', slug: 'rosenberg' },
  { name: 'Stafford, Texas', slug: 'stafford' },
  { name: 'Sugar Land, Texas', slug: 'sugar-land' }
];

// Load fresh raw HTML
let html = fs.readFileSync('www.servpro.com/index.html', 'utf8');

// 2. BUILD NAVBAR (NO EMOJIS, proper icons)
const navbarHtml = `<header class="service-squads-header" style="position:sticky;top:0;z-index:9999;background:#ffffff;box-shadow:0 2px 12px rgba(0,0,0,0.08);border-bottom:1px solid #e2e8f0;font-family:inherit;">
  <div style="max-width:1440px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:84px;">
    
    <!-- Logo -->
    <a href="/" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
      <img src="/logo.png" alt="Service Squads" style="height:48px;width:auto;object-fit:contain;display:block;" />
      <div style="display:flex;flex-direction:column;line-height:1.1;">
        <span style="font-weight:900;font-size:22px;letter-spacing:-0.5px;color:#0B192C;text-transform:uppercase;">
          Service<span style="color:#F4793E;">Squads</span>
        </span>
        <span style="font-weight:800;font-size:10px;letter-spacing:1px;color:#559A23;text-transform:uppercase;">
          Restoration &amp; Multi-Trade
        </span>
      </div>
    </a>

    <!-- Nav Items -->
    <nav style="display:flex;align-items:center;gap:24px;">
      <a href="/" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;transition:color 0.2s;">Home</a>
      <a href="/about" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;transition:color 0.2s;">About Us</a>

      <!-- Services Dropdown -->
      <div class="nav-dropdown" style="position:relative;display:inline-block;padding:12px 0;">
        <a href="#services-grid" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;display:flex;align-items:center;gap:4px;">
          <span>Services</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 1.5L6 6.5L11 1.5"/></svg>
        </a>

        <!-- Megamenu panel -->
        <div class="megamenu-panel" style="position:absolute;top:100%;left:-160px;width:760px;background:#ffffff;border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,0.15);border:1px solid #e2e8f0;padding:24px;display:none;grid-template-columns:repeat(2, 1fr);gap:16px;z-index:100000;">
          ${serviceCards.map(s => `
            <a href="/services/${s.slug}" style="display:flex;align-items:center;gap:12px;padding:10px;border-radius:12px;text-decoration:none;background:#f8fafc;border:1px solid #f1f5f9;transition:all 0.15s;" onmouseover="this.style.borderColor='#F4793E';this.style.background='#fff7ed'" onmouseout="this.style.borderColor='#f1f5f9';this.style.background='#f8fafc'">
              <img src="${s.icon}" alt="${s.title}" style="width:36px;height:36px;object-fit:contain;" />
              <div>
                <div style="font-weight:800;font-size:13px;color:#0B192C;">${s.title}</div>
                <div style="font-size:11px;color:#64748b;font-weight:600;">${s.badge}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <!-- Service Areas Dropdown -->
      <div class="nav-dropdown" style="position:relative;display:inline-block;padding:12px 0;">
        <a href="/locations" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;display:flex;align-items:center;gap:4px;">
          <span>Service Areas</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 1.5L6 6.5L11 1.5"/></svg>
        </a>

        <!-- Areas dropdown panel -->
        <div class="dropdown-panel" style="position:absolute;top:100%;left:0;width:240px;background:#ffffff;border-radius:14px;box-shadow:0 16px 40px rgba(0,0,0,0.12);border:1px solid #e2e8f0;padding:14px;display:none;flex-direction:column;gap:8px;z-index:100000;">
          <div style="font-size:11px;font-weight:900;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;padding-bottom:4px;border-bottom:1px solid #f1f5f9;">Texas Coverage Hubs</div>
          ${serviceAreas.map(a => `
            <a href="/locations/${a.slug}" style="font-size:13px;font-weight:700;color:#334155;text-decoration:none;padding:6px 8px;border-radius:6px;transition:background 0.15s, color 0.15s;" onmouseover="this.style.background='#fff4ec';this.style.color='#F4793E'" onmouseout="this.style.background='transparent';this.style.color='#334155'">
              ${a.name}
            </a>
          `).join('')}
          <div style="border-top:1px solid #f1f5f9;padding-top:6px;margin-top:2px;">
            <a href="/locations" style="font-size:12px;font-weight:800;color:#F4793E;text-decoration:none;display:block;text-align:center;">View All Texas Hubs →</a>
          </div>
        </div>
      </div>

      <a href="/resources" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;transition:color 0.2s;">Membership</a>
      <a href="/resources" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;transition:color 0.2s;">Blog</a>
      <a href="/contact?offer=membership" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;transition:color 0.2s;">Offers</a>
      <a href="/contact?type=emergency" style="color:#dc2626;font-size:14px;font-weight:800;text-decoration:none;display:flex;align-items:center;gap:6px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#dc2626;"></span>
        <span>Emergency 24/7</span>
      </a>
      <a href="/contact" style="color:#0B192C;font-size:14px;font-weight:700;text-decoration:none;transition:color 0.2s;">Contact Us</a>
    </nav>

    <!-- Phone CTA -->
    <div style="display:flex;align-items:center;gap:12px;">
      <a href="tel:7139999150" style="background:#F4793E;color:#ffffff;padding:12px 22px;border-radius:12px;font-weight:900;font-size:15px;text-decoration:none;display:flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(244,121,62,0.35);transition:background 0.2s;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>(713) 999-9150</span>
      </a>
    </div>

  </div>
</header>`;

// 3. BUILD HERO SECTION (NO EMOJIS, proper icons and images)
const heroHtml = `<section class="service-squad-hero-section" style="position:relative;background:#0B192C;overflow:hidden;min-height:640px;display:flex;flex-direction:column;justify-content:space-between;">
  <!-- Background Image with Gradient Overlay -->
  <div style="position:absolute;inset:0;z-index:1;">
    <img src="/hero-restoration.jpg" alt="Disaster Restoration & Multi-Trade Squad" style="width:100%;height:100%;object-fit:cover;object-position:center right;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(11,25,44,0.96) 0%, rgba(11,25,44,0.85) 50%, rgba(11,25,44,0.45) 100%);"></div>
  </div>

  <!-- Hero Content Area -->
  <div style="position:relative;z-index:10;max-width:1440px;margin:0 auto;width:100%;padding:64px 32px 48px 32px;display:flex;flex-direction:column;gap:24px;">
    
    <!-- Subtitle Pill -->
    <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(244,121,62,0.18);border:1px solid #F4793E;padding:6px 16px;border-radius:24px;width:fit-content;">
      <span style="width:8px;height:8px;border-radius:50%;background:#F4793E;"></span>
      <span style="color:#ffffff;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">SERVICE SQUAD HOUSTON • 24/7 DISPATCH</span>
    </div>

    <!-- Main Headline -->
    <h1 style="color:#ffffff;font-size:clamp(30px, 4.5vw, 54px);font-weight:900;line-height:1.12;letter-spacing:-0.5px;max-width:850px;margin:0;text-shadow:0 3px 12px rgba(0,0,0,0.6);">
      24/7 Emergency Plumbing, AC Repair &amp; Water Damage Restoration in Houston, TX
    </h1>

    <p style="color:#cbd5e1;font-size:17px;line-height:1.6;max-width:760px;margin:0;text-shadow:0 1px 4px rgba(0,0,0,0.5);">
      From emergency water extraction and fire remediation to licensed plumbing, AC repair, and turnkey construction across Greater Houston, Katy, Sugar Land, and surrounding Texas communities.
    </p>

    <!-- Location Card Box -->
    <div style="background:rgba(11,25,44,0.94);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.22);border-radius:18px;padding:24px 28px;max-width:540px;box-shadow:0 16px 40px rgba(0,0,0,0.55);">
      <!-- Location Header Row -->
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4793E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span style="color:#F4793E;font-size:13px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">
          Your detected location:
        </span>
      </div>

      <!-- City & Branch -->
      <div id="hero-detected-city" style="color:#ffffff !important;font-size:32px;font-weight:900;line-height:1.15;margin-bottom:4px;letter-spacing:-0.5px;text-shadow:0 2px 8px rgba(0,0,0,0.4);">
        Houston, TX
      </div>
      <div id="hero-detected-branch" style="color:#F4793E !important;font-size:18px;font-weight:800;line-height:1.3;margin-bottom:12px;">
        Service Squad of Greater Houston (ZIP 77081)
      </div>

      <!-- Rapid Response Zone Badge -->
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(85,154,35,0.22);border:1px solid #559A23;color:#88C859;padding:6px 14px;border-radius:24px;font-size:12px;font-weight:800;margin-bottom:16px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#559A23;box-shadow:0 0 8px #559A23;display:inline-block;"></span>
        <span>Within 60-Minute Rapid Response Zone</span>
      </div>

      <!-- Change Location Row -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid rgba(255,255,255,0.14);flex-wrap:wrap;gap:8px;">
        <span style="color:#cbd5e1;font-size:13px;font-weight:600;">Need service elsewhere?</span>
        <button type="button" id="hero-change-loc-btn" style="background:#ffffff;color:#F4793E;border:none;padding:7px 18px;border-radius:8px;font-size:13px;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;gap:6px;box-shadow:0 2px 8px rgba(0,0,0,0.2);transition:all 0.2s;">
          <span>Change / Enter ZIP</span>
          <span style="font-size:14px;">→</span>
        </button>
      </div>
    </div>

    <!-- Action Buttons -->
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:6px;">
      <a href="tel:7139999150" style="background:#F4793E;color:#ffffff;padding:16px 32px;border-radius:12px;font-size:15px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;text-decoration:none;box-shadow:0 6px 20px rgba(244,121,62,0.45);display:inline-flex;align-items:center;gap:8px;transition:all 0.2s;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        Call 24/7 Dispatch: (713) 999-9150
      </a>
      <a href="#services-grid" style="background:rgba(255,255,255,0.12);color:#ffffff;border:1px solid rgba(255,255,255,0.25);padding:16px 28px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;transition:all 0.2s;">
        View Core Services →
      </a>
    </div>
  </div>

  <!-- Trust Ribbon at Bottom of Hero -->
  <div style="position:relative;z-index:10;background:rgba(11,25,44,0.96);backdrop-filter:blur(8px);border-top:1px solid rgba(255,255,255,0.12);padding:16px 32px;">
    <div style="max-width:1440px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;">
      
      <!-- Trust Points (NO EMOJIS, proper SVGs) -->
      <div style="display:flex;align-items:center;gap:32px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:8px;color:#cbd5e1;font-size:14px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#559A23" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span><strong>Licensed, Bonded &amp; Insured</strong></span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;color:#cbd5e1;font-size:14px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#559A23" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span><strong>Under 60-Minute</strong> Rapid Response</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;color:#cbd5e1;font-size:14px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#559A23" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span><strong>24/7/365</strong> Emergency On-Call</span>
        </div>
      </div>

      <!-- Hotline Pill -->
      <a href="tel:7139999150" style="background:#F4793E;color:#ffffff;padding:10px 22px;border-radius:10px;font-size:15px;font-weight:900;text-decoration:none;display:inline-flex;align-items:center;gap:10px;box-shadow:0 4px 14px rgba(244,121,62,0.35);">
        <span style="font-size:17px;">(713) 999-9150</span>
        <span style="font-size:11px;font-weight:700;opacity:0.95;text-transform:uppercase;letter-spacing:0.5px;">We're Here to Help 24/7</span>
      </a>

    </div>
  </div>
</section>`;

// 4. BUILD NEW SERVICES SECTION (VISUAL CARDS WITH IMAGES ON TOP, SERVICE NAME BELOW, NO LISTS, NO EMOJIS!)
const visualServicesHtml = `<section id="services-grid" style="background:#F7F7F8;padding:84px 0;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
  <div style="max-width:1440px;margin:0 auto;padding:0 32px;">
    
    <!-- Section Header -->
    <div style="text-align:center;max-width:760px;margin:0 auto 56px auto;">
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(244,121,62,0.12);padding:6px 18px;border-radius:20px;margin-bottom:14px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#F4793E;"></span>
        <span style="font-size:12px;font-weight:800;color:#F4793E;letter-spacing:1px;text-transform:uppercase;">Houston Premier Multi-Trade Contractor</span>
      </div>
      <h2 style="font-size:clamp(30px, 4vw, 44px);font-weight:900;color:#0B192C;line-height:1.2;margin:0 0 14px 0;">
        Our Core Services
      </h2>
      <p style="font-size:16px;color:#64748b;line-height:1.6;margin:0;">
        Top-quality residential and commercial solutions delivered by licensed, insured professionals across Greater Houston, Katy, Sugar Land, and surrounding Texas communities.
      </p>
    </div>

    <!-- 6 Visual Cards Grid (Card with Image on Top, Service Name & Description Below) -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));gap:32px;">
      ${serviceCards.map(s => `
        <div style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06);border:1px solid #e2e8f0;display:flex;flex-direction:column;transition:transform 0.25s, box-shadow 0.25s;" onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 16px 36px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.06)'">
          
          <!-- Card Image Top -->
          <div style="position:relative;width:100%;height:220px;background:#0B192C;overflow:hidden;">
            <img src="${s.image}" alt="${s.title}" style="width:100%;height:100%;object-fit:cover;object-position:center;transition:transform 0.4s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
            <div style="position:absolute;top:16px;left:16px;background:rgba(255,255,255,0.95);backdrop-filter:blur(6px);padding:6px 12px;border-radius:10px;display:flex;align-items:center;gap:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
              <img src="${s.icon}" alt="" style="width:20px;height:20px;object-fit:contain;" />
              <span style="font-size:11px;font-weight:800;color:#0B192C;text-transform:uppercase;letter-spacing:0.5px;">${s.badge}</span>
            </div>
          </div>

          <!-- Card Body Below Image -->
          <div style="padding:28px;display:flex;flex-direction:column;flex:1;justify-content:space-between;">
            <div>
              <h3 style="font-size:22px;font-weight:900;color:#0B192C;margin:0 0 10px 0;line-height:1.25;">
                ${s.title}
              </h3>
              <p style="font-size:14px;color:#64748b;line-height:1.6;margin:0 0 20px 0;">
                ${s.desc}
              </p>
            </div>

            <div style="padding-top:16px;border-top:1px solid #f1f5f9;display:flex;align-items:center;justify-content:space-between;">
              <a href="/services/${s.slug}" style="color:#F4793E;font-size:14px;font-weight:800;text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:gap 0.2s;">
                <span>View Details</span>
                <span style="font-size:16px;">→</span>
              </a>
              <a href="tel:7139999150" style="background:#559A23;color:#ffffff;padding:8px 16px;border-radius:8px;font-size:12px;font-weight:800;text-decoration:none;text-transform:uppercase;letter-spacing:0.5px;">
                24/7 Dispatch
              </a>
            </div>
          </div>

        </div>
      `).join('\n')}
    </div>

  </div>
</section>`;

// 5. COMMERCIAL LARGE LOSS SECTION (Replacing firefighter & Servpro logos section, NO EMOJIS)
const commercialShowcaseHtml = `<section style="background:#070F1E;padding:80px 0;color:#ffffff;border-top:1px solid #1e293b;">
  <div style="max-width:1440px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;">
    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(244,121,62,0.18);border:1px solid #F4793E;padding:6px 16px;border-radius:24px;margin-bottom:16px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#F4793E;"></span>
        <span style="color:#ffffff;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">Commercial Large Loss &amp; Facilities</span>
      </div>
      <h2 style="font-size:clamp(28px, 4vw, 42px);font-weight:900;line-height:1.2;margin:0 0 16px 0;">
        Fast Turnaround for Commercial Facilities
      </h2>
      <p style="color:#94a3b8;font-size:16px;line-height:1.7;margin:0 0 24px 0;">
        Every hour of downtime costs your business revenue. Service Squad’s commercial emergency response division deploys high-volume desiccant dehumidifiers, thermal imaging, and licensed general contractor trades to restore office towers, healthcare facilities, schools, and industrial complexes across Greater Houston.
      </p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px;">
        <div style="background:rgba(255,255,255,0.05);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
          <div style="font-size:22px;font-weight:900;color:#F4793E;">Sub-60 Min</div>
          <div style="font-size:12px;color:#cbd5e1;font-weight:600;">On-Site Mobilization</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
          <div style="font-size:22px;font-weight:900;color:#559A23;">IICRC &amp; TDLR</div>
          <div style="font-size:12px;color:#cbd5e1;font-weight:600;">Fully Certified &amp; Bonded</div>
        </div>
      </div>
      <a href="tel:7139999150" style="background:#F4793E;color:#ffffff;padding:14px 28px;border-radius:10px;font-weight:800;font-size:14px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">
        <span>Call Commercial Dispatch: (713) 999-9150</span>
      </a>
    </div>

    <div>
      <img src="/default-hero.jpg" alt="Commercial Disaster Operations" style="width:100%;border-radius:20px;box-shadow:0 20px 50px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.1);object-fit:cover;max-height:450px;" />
    </div>
  </div>
</section>`;

// 6. PERFORM CLEAN REPLACEMENTS
// A. Replace Navigation Header
const navToken = 'class="header__desktopheader-07kha0"';
const heroToken = '<section class="hero-with-location-styles__section-2lgh5v"';

const navIdx = html.indexOf(navToken);
const heroIdx = html.indexOf(heroToken);

if (navIdx !== -1 && heroIdx !== -1) {
  const rootDivStart = html.lastIndexOf('<div', navIdx);
  html = html.slice(0, rootDivStart) + navbarHtml + html.slice(heroIdx);
  console.log('Replaced navigation header successfully!');
}

// B. Replace Hero Section
const heroSectionStart = html.indexOf('<section class="hero-with-location-styles__section-2lgh5v"');
if (heroSectionStart !== -1) {
  const heroSectionEnd = html.indexOf('</section>', heroSectionStart) + 10;
  html = html.slice(0, heroSectionStart) + heroHtml + html.slice(heroSectionEnd);
  console.log('Replaced hero section successfully!');
}

// C. Replace Service Tiles Section with Visual Service Cards (Card with Image on top, service name below!)
const sec2Start = html.indexOf('<section class="service-tiles__section-3dsivo"');
if (sec2Start !== -1) {
  const sec2End = html.indexOf('</section>', sec2Start) + 10;
  html = html.slice(0, sec2Start) + visualServicesHtml + html.slice(sec2End);
  console.log('Replaced service tiles section with Visual Service Cards!');
}

// D. Replace Firefighter & Servpro logos section
const ffStart = html.indexOf('firefighter-and-logos.png');
if (ffStart !== -1) {
  const ffSecStart = html.lastIndexOf('<section', ffStart);
  const ffSecEnd = html.indexOf('</section>', ffStart) + 10;
  html = html.slice(0, ffSecStart) + commercialShowcaseHtml + html.slice(ffSecEnd);
  console.log('Replaced firefighter section with Commercial Operations showcase!');
}

// E. REMOVE THE RAW GATSBY FOOTER WITH BROKEN CERTIFICATES AND SERVPRO FIRST RESPONDER BOWL LOGO!
const footerStart = html.indexOf('<footer class="footer-base__sitefooter-34bdqo"');
if (footerStart !== -1) {
  const footerEnd = html.indexOf('</footer>', footerStart) + 9;
  html = html.slice(0, footerStart) + html.slice(footerEnd);
  console.log('Removed raw Gatsby footer with broken certificates & Servpro logos!');
}

// 7. CLEAN ALL SERVPRO REFERENCES, LOGOS, EMOJIS, AND EXPERIENCE CLAIMS
html = html.replace(/SERVPRO/gi, 'Service Squad');
html = html.replace(/servpro\.com/gi, 'servicesquads.com');
html = html.replace(/Like it never even happened\./gi, 'Restored to pre-loss condition or better.');
html = html.replace(/Like it never even happened®/gi, 'Restored to pre-loss condition or better.');
html = html.replace(/1-800-SERVPRO/gi, '(713) 999-9150');
html = html.replace(/800-737-8776/gi, '713-999-9150');
html = html.replace(/186,441 Reviews/gi, '267+ Verified Reviews');
html = html.replace(/30\+\s*Years/gi, 'Licensed &amp; Insured');
html = html.replace(/59\+\s*Years\s*of\s*Experience/gi, 'Top-Quality Service');
html = html.replace(/More\s*than\s*50\s*Years\s*of\s*Experience/gi, 'Our Core Expert Services');
html = html.replace(/Years\s*of\s*Restoration\s*Experience/gi, 'Emergency Dispatches Handled');
html = html.replace(/With\s*decades\s*of\s*experience,\s*/gi, '');
html = html.replace(/With\s*over\s*a\s*decade\s*of\s*hands-on\s*experience,\s*/gi, '');
html = html.replace(/With\s*over\s*a\s*decade\s*of\s*trusted\s*experience,\s*/gi, '');
html = html.replace(/backed\s*by\s*over\s*a\s*decade\s*of\s*licensed,\s*bonded\s*excellence/gi, 'backed by licensed, bonded, and insured excellence');
html = html.replace(/Over\s*a\s*decade\s*of\s*trusted\s*restoration\s*&\s*emergency\s*services\s*across\s*Greater\s*Houston\./gi, 'Premier licensed restoration, plumbing & AC services across Greater Houston.');
html = html.replace(/Delivering\s*trusted\s*restoration\s*services\s*since\s*1967\./gi, 'Delivering trusted restoration, plumbing, and AC services across Greater Houston.');
html = html.replace(/have\s*over\s*50\s*years\s*of\s*experience,\s*and\s*arrive/gi, 'arrive');

// Remove any remaining emojis across entire HTML
html = html.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');

// Replace any servpro logo images
html = html.replace(/\/dcs-images\/[^\"]*logo[^\"]*\.svg/gi, '/logo.png');

// 8. SAVE USING JSON.STRINGIFY
const tsContent = `// Auto-generated exact Servpro homepage DOM with Service Squad branding & colors
export const SERVPRO_HOMEPAGE_HTML = ${JSON.stringify(html)};
`;

fs.writeFileSync('src/lib/data/servpro-homepage-html.ts', tsContent, 'utf8');
console.log('Homepage overhaul complete! Saved to src/lib/data/servpro-homepage-html.ts');
