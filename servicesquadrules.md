# Service Squad Engineering & Design Standards (`servicesquadrules.md`)

This document defines the strict engineering standards, architectural constraints, design system tokens, and development rules for the **Service Squad** multi-trade, multi-location web platform.

---

## 1. Tech Stack & Standards

### 1.1 Core Technologies
- **Framework:** Next.js 16+ (App Router) with React 19 and TypeScript (Strict Mode).
- **Styling:** Tailwind CSS v4 utilizing modern `@theme` variables and utility classes.
- **Icons:** `lucide-react` for clean, consistent UI iconography.
- **Data & Future CMS Layer:** Decoupled TypeScript interfaces designed for 100% plug-and-play integration with Headless CMS (Sanity.io / Strapi). Presentational components MUST NOT query or bind directly to CMS-specific SDKs. All data access must pass through a standardized repository/adapter pattern (`/src/lib/cms/` or `/src/lib/data/`).

### 1.2 Component Directory Architecture
```text
src/
├── app/                      # Next.js App Router (pages, layouts, dynamic routes, API endpoints)
│   ├── (marketing)/          # Primary marketing silo
│   ├── locations/            # Dynamic franchise & city hubs (/locations/[slug])
│   ├── services/             # Dynamic service line silos (/services/[slug])
│   ├── contact/              # Dedicated lead intake & contact hub
│   ├── privacy-policy/       # Compliance & TCPA legal page
│   ├── terms-of-service/     # Compliance & terms of service
│   ├── api/                  # CRM webhook & lead submission endpoints
│   ├── not-found.tsx         # Conversion-engineered 404 page
│   └── sitemap.ts            # Programmatic XML sitemap generator
├── components/
│   ├── ui/                   # Atomic primitives (Button, Card, Badge, Modal, Input, Textarea)
│   ├── layout/               # Header, Sticky Emergency Bar, Footer, Mobile Navigation
│   ├── forms/                # Multi-Step Emergency Request Form, Quick Quote, File Upload
│   ├── dynamic/              # Location selector, Zip search, Commercial/Residential toggle
│   └── seo/                  # JSON-LD Schema generators (LocalBusiness, Service, FAQ)
├── lib/
│   ├── cms/                  # CMS Adapter layer (Sanity schema equivalents & GROQ mock queries)
│   ├── data/                 # Dynamic seed data (8 Core Trades, Texas Cities, Testimonials)
│   ├── types/                # Strict TypeScript type definitions
│   ├── hooks/                # Custom React hooks (useLocationPhone, useZipLookup, useFormStep)
│   └── utils/                # Formatting, phone sanitizer, JSON-LD builders, class merger
```

### 1.3 Responsive Breakpoints
Strict adherence to standard responsive breakpoints:
- **Mobile (`< 640px`):** Stacked single-column layouts, persistent sticky click-to-call bottom bar, touch-friendly tap targets (minimum 44x44px).
- **Tablet (`640px - 1023px`):** Two-column card grids, condensed navigation, inline quick quote triggers.
- **Desktop (`1024px - 1279px`):** Full multi-trade mega menus, split hero with inline interactive form, sticky emergency phone header.
- **Wide Desktop (`1280px+`):** Max container width `max-w-7xl` (1280px) with centered padding `px-4 sm:px-6 lg:px-8`.

### 1.4 Performance & Core Web Vitals Benchmarks
- **Mobile PageSpeed:** Minimum score of **90+** on Google PageSpeed Insights.
- **Largest Contentful Paint (LCP):** Strictly under **1.8 seconds**.
- **First Input Delay / Interaction to Next Paint (INP):** Under **200ms**.
- **Cumulative Layout Shift (CLS):** Strictly under **0.1**.
- **Third-Party Script Optimization:** All tracking scripts (CallRail DNI, Google Tag Manager, Live Chat widgets) MUST use lazy-loading strategies (`next/script` with `strategy="lazyOnload"` or interaction trigger) to avoid blocking main-thread rendering.

---

## 2. Design Frame & Constraints

### 2.1 Custom Color Palette (Service Squad Brand Tokens)
Service Squad departs from the legacy green/orange motif of Servpro and implements a modern, high-trust emergency authority palette:

```css
/* Brand Color Definitions */
--color-brand-primary: #0B192C;        /* Deep Emergency Navy - Trust & Authority */
--color-brand-primary-light: #1E3E62;  /* Slate Navy - Secondary elements & headers */
--color-brand-accent: #FF6500;         /* High-Vis Dispatch Orange - Urgent CTA & Actions */
--color-brand-accent-hover: #E05600;   /* Darkened Accent for hover states */
--color-brand-amber: #F59E0B;          /* Emergency Amber - Alert badges & ratings */
--color-brand-surface: #F8FAFC;        /* Clean Light Slate - Background cards */
--color-brand-surface-dark: #070F1E;   /* Dark Section Background */
--color-brand-border: #E2E8F0;         /* Crisp Border Divider */
--color-emergency-red: #DC2626;        /* Critical 24/7 Dispatch Banner */
```

### 2.2 Typography Scale
- **Headings Font:** Inter / System Sans-Serif (`font-sans`), font weights: `font-bold` (700) or `font-extrabold` (800).
- **Body Font:** Inter (`font-sans`), font weight: `font-normal` (400) or `font-medium` (500).
- **Scale Hierarchy:**
  - `H1` (Hero Titles): `text-3xl sm:text-5xl lg:text-6xl` (Tight tracking, leading-none to leading-tight).
  - `H2` (Section Titles): `text-2xl sm:text-3xl lg:text-4xl` (Bold, high-contrast).
  - `H3` (Card & Feature Titles): `text-lg sm:text-xl lg:text-2xl`.
  - Body Text: `text-base sm:text-lg` with `leading-relaxed` for maximum readability.
  - Microcopy / Badges: `text-xs sm:text-sm` with `font-semibold` and uppercase tracking.

### 2.3 Whitespace & Layout System
- Section vertical spacing: `py-14 sm:py-20 lg:py-24`.
- Component gap spacing: 4px base multiplier (`gap-2`, `gap-4`, `gap-6`, `gap-8`, `gap-12`).
- Card padding: `p-6 sm:p-8`.
- Form field height: minimum `h-12` (48px) for accessibility and emergency input speed.

### 2.4 Component Isolation & Decoupled Data Contract
- **Zero Raw Hardcoding Rule:** Never hardcode trade lists, city names, telephone numbers, or email addresses directly inside presentational JSX.
- All dynamic data MUST be passed via typed props or consumed via clean data provider hooks.
- Every service line and city location template must be capable of rendering any dataset satisfying the `ServiceLine` and `LocationHub` interfaces.

---

## 3. Servpro Clone Functional Logic Requirements

### 3.1 Dynamic Telephone & Call Tracking (CallRail DNI Compatible)
- Support default corporate dispatch phone number (e.g., `(713) 555-SQUAD` / `(713) 555-7782`).
- Dynamically override phone number based on selected city/franchise hub (e.g. Katy branch: `(281) 555-KATY`).
- Render HTML phone links with `tel:` protocol, tracking data attributes (`data-callrail="true"`), and sticky accessibility.

### 3.2 Service Area Locator ("Find Local Help")
- ZIP code search input resolving immediately to the nearest Texas hub.
- Houston 77081 30-mile coverage zone logic with instant status: *"Within 60-Minute Rapid Response Zone"*.
- Interactive dropdown of active Texas franchise hubs.

### 3.3 Audience Switcher (Commercial vs. Residential)
- Dual-mode toggle allowing facility managers (Commercial) and homeowners (Residential) to view relevant restoration workflows, compliance specs, and case studies.

### 3.4 Multi-Step Emergency Damage Intake Funnel
- Step 1: Emergency Trade Selection (Water, Fire, Mold, Content Packout, Remodeling, Handyman, Plumbing, HVAC).
- Step 2: Property Type & Damage Urgency (Active Flood, Standing Water, Structural Fire, Odor, Remodel Planning).
- Step 3: Location / Property Details (Address, ZIP, Commercial Facility vs Single-Family Home).
- Step 4: Photo & Media Upload (Property damage photos, equipment tags, floor plans).
- Step 5: Contact Information & Mandatory TCPA Opt-In Checkbox with compliant disclaimer text.

---

## 4. Code Quality & Zero-Hallucination Policy

1. **TypeScript Strictness:** No `any` types. All API payloads, props, form states, and schema objects must have explicit interfaces or types.
2. **Missing Data Defense:** Every component consuming dynamic data must provide graceful fallback UI states or default content rather than crashing or displaying `undefined`.
3. **TCPA Compliance Guarantee:** All lead intake forms must feature explicit consent disclosures for SMS/automated calls before form submission is enabled.
4. **Structured Data Validation:** Every dynamic page template must inject valid JSON-LD schemas (`LocalBusiness`, `Service`, `FAQPage`) ready to pass Google Rich Results tests with zero errors.
