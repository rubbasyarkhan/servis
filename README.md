# Service Squad Web Platform

Custom, multi-trade, multi-location web platform for **Service Squad** engineered natively on **Next.js 16 (App Router)** and architected for seamless integration with a Headless CMS (Sanity / Strapi).

Replicates the core conversion flows, functional logic, and emergency response features of **Servpro.com** while delivering a tailored Texas emergency authority design system, custom color tokens, and optimized performance.

---

## Key Features & Functional Modules

1. **Dynamic Telephone & Call Tracking (CallRail DNI Ready):**
   - Central corporate emergency number: `(713) 555-7782` (`(713) 555-SQUAD`).
   - Dynamic branch phone number swapping based on the active Texas location.
   - Preserves PageSpeed with lazy-loaded DNI script injection.

2. **"Find Local Help" / Service Area Locator:**
   - Instant 5-digit ZIP code resolution with 30-mile Greater Houston Hub (ZIP 77081) status indicator.
   - Rapid-response zone validation (< 60 minutes on-site SLA).

3. **Multi-Trade Emergency Intake & Quote Funnel:**
   - 5-step responsive wizard intake (`/contact` and inline embeds).
   - Multi-trade routing covering all 8 service silos.
   - Secure media upload capability for damage photos, videos, equipment tags, and floor plans.
   - Mandatory TCPA consent verification with compliant legal disclosures.
   - Simulated webhook API dispatch (`/api/leads`) with < 60s confirmation trigger.

4. **8 Core Service Silos (`/services/[slug]`):**
   - Water Damage Restoration & Extraction
   - Fire & Smoke Damage Restoration
   - Mold Remediation & Environmental Services
   - Content Packout, Inventory & Cleaning
   - Remodeling, Renovation & Reconstruction
   - Handyman & Property Maintenance Services
   - Plumbing Services
   - HVAC Services

5. **Texas Location Hubs (`/locations/[slug]`):**
   - Greater Houston Hub (Central - ZIP 77081)
   - Katy, TX
   - Sugar Land, TX
   - The Woodlands, TX
   - Pearland, TX
   - Cypress, TX

6. **Audience Mode Toggle:**
   - Switch between **Residential** and **Commercial** restoration workflows and specifications.

7. **The 1-4-8 Emergency Protocol:**
   - Replicated industry standard: 1-hour contact, 4-hour on-site stabilization, 8-hour adjuster scope briefing.

8. **Technical SEO & Structured Data:**
   - Automated JSON-LD generators for `EmergencyService` / `LocalBusiness`, `Service`, `FAQPage`, and `BreadcrumbList`.
   - Programmatic dynamic `sitemap.xml` and `robots.txt`.
   - Conversion-engineered custom `404` page with sticky emergency call bar.

---

## Project Structure & Architecture

```text
├── checklist.md              # Live active tracking checklist
├── servicesquadrules.md      # Engineering rules, color tokens & design constraints
├── src/
│   ├── app/
│   │   ├── api/leads/        # Lead ingestion & CRM webhook dispatch
│   │   ├── contact/          # Dedicated contact & photo intake
│   │   ├── locations/[slug]/ # Dynamic location hub template (SSG)
│   │   ├── services/[slug]/  # Dynamic service silo template (SSG)
│   │   ├── privacy-policy/   # Legal & TCPA text-messaging policy
│   │   ├── terms-of-service/ # Restoration terms of service
│   │   ├── not-found.tsx     # Conversion-engineered 404 page
│   │   ├── sitemap.ts        # Dynamic programmatic XML sitemap
│   │   └── robots.ts         # Search engine directives
│   ├── components/
│   │   ├── dynamic/          # ZipLocator, AudienceToggle
│   │   ├── forms/            # EmergencyIntakeForm (5-step wizard)
│   │   ├── layout/           # Header, EmergencyTopBar, StickyEmergencyBar, Footer
│   │   ├── seo/              # JsonLd component
│   │   └── ui/               # Button, Card, Badge
│   └── lib/
│       ├── cms/              # CMS abstraction layer (Sanity/Strapi ready)
│       ├── context/          # LocationContext & dynamic telephone state
│       ├── data/             # Typed seed data for 8 trades & Texas hubs
│       ├── types/            # Strict TypeScript definitions
│       └── utils/            # JSON-LD builders, phone sanitizer, clsx merger
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build
```

# servis
