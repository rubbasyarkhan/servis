# Service Squad Development Checklist & Milestone Tracker

Active tracking checklist for the **Service Squad** multi-trade, multi-location web platform. This checklist maps directly to the Master Web Development & Services Agreement and the Servpro functional clone specifications.

---

## 1. Project Initialization & Architecture Setup
- [x] Initialize Next.js 16+ project with TypeScript, App Router, and Tailwind CSS v4.
- [x] Configure icon system (`lucide-react`) and responsive layout primitives.
- [x] Establish `servicesquadrules.md` defining strict architecture, tokens, and quality standards.
- [x] Establish `checklist.md` for live progress tracking.
- [x] Define modular folder hierarchy (`/components`, `/lib/data`, `/lib/types`, `/lib/context`, `/lib/cms`, `/lib/utils`).
- [x] Configure custom brand design system tokens (Emergency Navy `#0B192C`, Slate `#1E3E62`, Dispatch Orange `#FF6500`, Amber `#F59E0B`).

---

## 2. Decoupled Data Layer (Future Headless CMS Model)
- [x] Define strict TypeScript interfaces for Service Lines, Sub-Services, and Location Hubs (`/lib/types/index.ts`).
- [x] Implement typed mock data repository for all 8 Core Trades:
  - [x] Water Damage Restoration & Extraction
  - [x] Fire & Smoke Damage Restoration
  - [x] Mold Remediation & Environmental Services
  - [x] Content Packout, Inventory & Cleaning
  - [x] Remodeling, Renovation & Reconstruction
  - [x] Handyman & Property Maintenance Services
  - [x] Plumbing Services
  - [x] HVAC (Heating, Ventilation & Air Conditioning) Services
- [x] Implement typed mock data repository for initial Texas Franchise/Location Hubs:
  - [x] Greater Houston Hub (Central - ZIP 77081, 30-mile radius)
  - [x] Katy, TX
  - [x] Sugar Land, TX
  - [x] The Woodlands, TX
  - [x] Pearland, TX
  - [x] Cypress, TX
- [x] Implement Global Site Settings model (DNI phone numbers, emergency banners, review counts, CRM webhooks).
- [x] Create CMS-ready query layer (`/lib/cms/api.ts`) abstracting data fetching so Sanity/Strapi can be plugged in seamlessly.

---

## 3. Servpro Clone Functional Logic & State Management
- [x] Implement Dynamic Phone Number & Location Context (`LocationContext`):
  - [x] Corporate default emergency number: `(713) 555-7782` (`(713) 555-SQUAD`).
  - [x] Automatic telephone number swapping based on active location/franchise branch.
  - [x] Dynamic Number Insertion (CallRail DNI) script placeholder and data attributes.
- [x] Build "Find Local Help" / Service Area Locator:
  - [x] Instant ZIP code search component resolving distance and local hub.
  - [x] 30-Mile Houston radius indicator (60-minute rapid emergency dispatch badge).
  - [x] Dropdown city selector for fast navigation to city landing pages.
- [x] Build Audience Switcher:
  - [x] Residential vs. Commercial toggle dynamically switching copy, specs, and case studies.
- [x] Build Multi-Step Emergency Damage Intake & Quote Funnel:
  - [x] Step 1: Trade selection dropdown (Water, Fire, Mold, Content Packout, Remodeling, Handyman, Plumbing, HVAC).
  - [x] Step 2: Damage assessment (Urgency, standing water/soot level, property type).
  - [x] Step 3: Location details (Address, ZIP, commercial vs. residential).
  - [x] Step 4: Media Upload field (Photos, damage videos, equipment tags, floor plans).
  - [x] Step 5: Customer contact information with mandatory TCPA text-messaging consent checkbox.
  - [x] Client-side state persistence and responsive wizard UI.
  - [x] API route handler (`/api/leads`) simulating webhook dispatch to Zapier/CRM with <60s confirmation trigger.

---

## 4. Master Layout Templates & Front-End Execution
- [x] **Master Layout 1: Global Header & Homepage Layout (`/`)**:
  - [x] Top Emergency Bar: 24/7 Rapid Dispatch status + Dynamic Click-to-Call.
  - [x] Main Navigation: Multi-trade mega menu, Commercial/Residential switcher, Location directory, "Request Service" CTA.
  - [x] Hero Section: High-urgency headline, dual action buttons (Call Now vs. Request Online), embedded Quick Quote intake.
  - [x] Core Trades Grid: Cards for all 8 service silos with iconography and key capabilities.
  - [x] 1-4-8 Emergency Response Protocol timeline (1 hr contact, 4 hr on-site, 8 hr verbal briefing).
  - [x] Social Proof & Trust Badges: IICRC certified, licensed & insured, 4.9-star Google rating badge.
  - [x] Coverage Map / Texas Hubs directory.
  - [x] Global Footer: Trade directory, legal links, 24/7 dispatch hotline, copyright.
- [x] **Master Layout 2: Master Service & Sub-Service Template (`/services/[slug]`)**:
  - [x] Dynamic routing driven by trade data.
  - [x] Breadcrumb navigation with SEO structured data.
  - [x] Emergency overview & standard operating procedures.
  - [x] Sub-service breakdown cards (e.g. Water: Extraction, Drying, Moisture Mapping).
  - [x] Interactive FAQ accordion with `FAQPage` JSON-LD schema.
  - [x] Sticky emergency quote trigger.
- [x] **Master Layout 3: Master Location & Franchise Template (`/locations/[slug]`)**:
  - [x] Dynamic routing driven by city data (`/locations/houston-tx/`, `/locations/katy-tx/`).
  - [x] Localized hero with local branch phone number, dispatch address, and response radius.
  - [x] Local ZIP code service coverage list.
  - [x] Local customer reviews and verified projects.
  - [x] Direct lead form pre-routed to the specific location branch.
- [x] **System, Compliance & Essential Pages**:
  - [x] `/contact/` dedicated contact and media intake page.
  - [x] `/privacy-policy/` with mandatory TCPA disclosures.
  - [x] `/terms-of-service/` with service terms and text messaging policy.
  - [x] Conversion-engineered `404` error page with sticky emergency call button and search.

---

## 5. Technical SEO, Core Web Vitals & Integrations
- [x] Automated JSON-LD structured data generator (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`).
- [x] Dynamic `sitemap.ts` programmatically outputting all services and locations.
- [x] Search engine directives (`robots.ts`).
- [x] Open Graph & Twitter meta tags with dynamic social preview configuration.
- [x] Lazy-load wrapper for third-party scripts (Live Chat, GTM, CallRail DNI) preserving sub-1.8s LCP.
- [x] Production build and zero-error verification (`npm run build`).

---

## 6. Full Servpro Reference Website Parity & Extended Pages
- [x] Integrated official Servpro restoration assets, SVGs, and industry graphics (`public/dcs-images/` and `servpro-assets.ts`).
- [x] Enhanced Homepage matching Servpro reference sections:
  - [x] Live detected location card with 186,441 verified review badge (4.8 stars) and instant ZIP lookup.
  - [x] Servpro Value Ribbon (Available 24/7, 59+ Years of Experience, IICRC Certified).
  - [x] Service Specialists Tiles with official SVGs and direct routing.
  - [x] Commercial Industry Specialization grid (Healthcare ICRA, Hospitality, Education, Retail, Property, Manufacturing, Dining, Government).
  - [x] "Faster to any Size Disaster™" & 1-4-8 Emergency SLA timeline.
  - [x] Direct Insurance Claim Process Section (Xactimate® alignment, photo logging, direct carrier billing).
  - [x] Restoration Resources library (drywall water extraction, furnace safety, flood room deodorization).
  - [x] Supporting First Responders community partnership section.
  - [x] Immediate Emergency Intake Funnel with TCPA compliance.
  - [x] High-visibility Emergency CTA Dispatch Banner.
- [x] Expanded Commercial Services Silo:
  - [x] `/services/commercial-services` (Comprehensive commercial property restoration).
  - [x] `/services/commercial-services/large-loss` (Commercial Large Loss Catastrophe Response Team).
  - [x] `/services/commercial-services/emergency-ready-plan` (Free ERP facility walkthrough & profile).
  - [x] `/services/commercial-services/industry-specialization` (8 specialized commercial sectors).
- [x] Expanded Construction & Envelope Stabilization:
  - [x] `/services/construction/roof-tarp` (24/7 Emergency roof tarping & window board-up).
- [x] Expanded Locations, Education & Corporate Hubs:
  - [x] `/locations` (Master Texas Response Hubs Directory with interactive ZIP lookup).
  - [x] `/resources` (Restoration knowledge base, disaster guides, and interactive FAQs).
  - [x] `/about` (Company heritage, leadership, licensing, and IICRC credentials).
  - [x] `/careers` (Career opportunities, IICRC sponsorship, full-time openings).
  - [x] `/franchise-ownership` (Franchise ownership model, territory opportunities).
- [x] Comprehensive Mega Header & Master Footer mirroring Servpro sitemap structure.
- [x] Verified complete static generation (37 pages rendered with 0 errors via `npm run build`).
