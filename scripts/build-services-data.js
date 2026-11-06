const fs = require('fs');

const rawServices = [
  // Plumbing
  { category: 'Plumbing', title: 'Water Quality Improvements', slug: 'water-quality-improvements', icon: 'Droplets' },
  { category: 'Plumbing', title: 'Clogged Drain / Rooter Service', slug: 'clogged-drain-rooter-service', icon: 'Pipette' },
  { category: 'Plumbing', title: 'Sewer Repair', slug: 'sewer-repair', icon: 'Wrench' },
  { category: 'Plumbing', title: 'Sump Pumps', slug: 'sump-pumps', icon: 'ArrowDownCircle' },
  { category: 'Plumbing', title: 'Whole House Repiping', slug: 'whole-house-repiping', icon: 'GitCommit' },
  { category: 'Plumbing', title: 'Garbage Disposal Repair', slug: 'garbage-disposal-repair', icon: 'Trash2' },
  { category: 'Plumbing', title: 'Drain Cleaning', slug: 'drain-cleaning', icon: 'RotateCw' },
  { category: 'Plumbing', title: 'Plumbing Installations', slug: 'plumbing-installations', icon: 'PlusCircle' },
  { category: 'Plumbing', title: 'Commercial Plumbing', slug: 'commercial-plumbing', icon: 'Building2' },
  { category: 'Plumbing', title: 'Clogged Toilet Repairs', slug: 'clogged-toilet-repairs', icon: 'Tool' },
  { category: 'Plumbing', title: 'Plumbing Leak Detection', slug: 'plumbing-leak-detection', icon: 'Search' },
  { category: 'Plumbing', title: 'Busted Pipe Repair', slug: 'busted-pipe-repair', icon: 'AlertTriangle' },
  { category: 'Plumbing', title: 'Hydro Jetting', slug: 'hydro-jetting', icon: 'Zap' },
  { category: 'Plumbing', title: 'Toilet Parts Installation', slug: 'toilet-parts-installation', icon: 'Settings' },
  { category: 'Plumbing', title: 'Leaky Faucets Repair', slug: 'leaky-faucets-repair', icon: 'Droplet' },
  { category: 'Plumbing', title: 'Shower Valve Replacement', slug: 'shower-valve-replacement', icon: 'Sliders' },
  { category: 'Plumbing', title: 'Water Heaters Installation', slug: 'water-heaters-installation', icon: 'Flame' },
  { category: 'Plumbing', title: 'Water Heaters Repair', slug: 'water-heaters-repair', icon: 'Wrench' },
  { category: 'Plumbing', title: 'Plumbing Repairs', slug: 'plumbing-repairs', icon: 'PenTool' },
  { category: 'Plumbing', title: 'Gas Line Repairs', slug: 'gas-line-repairs', icon: 'AlertOctagon' },

  // Air Conditioning
  { category: 'Air Conditioning', title: 'AC Installation', slug: 'ac-installation', icon: 'Thermometer' },
  { category: 'Air Conditioning', title: 'AC Repair', slug: 'ac-repair', icon: 'Wind' },
  { category: 'Air Conditioning', title: 'Air Duct Cleaning', slug: 'air-duct-cleaning', icon: 'Airplay' },
  { category: 'Air Conditioning', title: 'Dryer Vent Cleaning', slug: 'dryer-vent-cleaning', icon: 'Compass' },

  // Water Damage
  { category: 'Water Damage', title: 'Commercial Water Damage', slug: 'commercial-water-damage', icon: 'Building' },
  { category: 'Water Damage', title: 'Residential Water Damage', slug: 'residential-water-damage', icon: 'Home' },
  { category: 'Water Damage', title: 'Flood Damage Restoration', slug: 'flood-damage-restoration', icon: 'CloudRain' },

  // Fire Damage
  { category: 'Fire Damage', title: 'Fire Damage Repair', slug: 'fire-damage-repair', icon: 'Flame' },
  { category: 'Fire Damage', title: 'Smoke Damage Restoration', slug: 'smoke-damage-restoration', icon: 'CloudFog' },

  // Remodeling
  { category: 'Remodeling', title: 'Commercial Construction', slug: 'commercial-construction', icon: 'Briefcase' },
  { category: 'Remodeling', title: 'Bathroom Remodeling', slug: 'bathroom-remodeling', icon: 'CheckSquare' },
  { category: 'Remodeling', title: 'Residential Renovation', slug: 'residential-renovation', icon: 'Maximize2' },
  { category: 'Remodeling', title: 'Damage Reconstruction', slug: 'damage-reconstruction', icon: 'Hammer' },

  // Others
  { category: 'Others', title: 'Mold Removal', slug: 'mold-removal', icon: 'Biohazard' },
  { category: 'Others', title: 'Residential Board Up', slug: 'residential-board-up', icon: 'Shield' }
];

const generatedServices = rawServices.map((s, idx) => ({
  id: `srv-${s.slug}`,
  slug: s.slug,
  title: `${s.title} in Houston, TX`,
  shortTitle: s.title,
  iconName: s.icon,
  category: 'both',
  heroTagline: `Professional 24/7 ${s.title} Services Across Greater Houston, TX`,
  description: `Service Squad provides fast, reliable, and licensed ${s.title} for residential and commercial properties throughout Houston, Katy, Sugar Land, Pearland, and surrounding areas. Our expert technicians are equipped with advanced tools to deliver long-lasting solutions with transparent pricing and exceptional customer care.`,
  emergencyResponseTime: 'Available 24/7 (Rapid Response)',
  subServices: [
    {
      id: `sub-${s.slug}-1`,
      title: `Emergency ${s.title}`,
      description: `Immediate on-site diagnostics and rapid execution to prevent secondary property damage.`
    },
    {
      id: `sub-${s.slug}-2`,
      title: `Comprehensive Inspection & Assessment`,
      description: `In-depth analysis using modern diagnostic equipment to identify root causes and deliver permanent repairs.`
    },
    {
      id: `sub-${s.slug}-3`,
      title: `Turnkey Completion & Quality Guarantee`,
      description: `Complete repair, restoration, and clean-up backed by our 100% satisfaction guarantee.`
    }
  ],
  processSteps: [
    { step: 1, title: '24/7 Dispatch & Arrival', description: 'Our licensed squad arrives rapidly on site.' },
    { step: 2, title: 'Inspection & Quote', description: 'Comprehensive diagnostic scan with clear, upfront pricing.' },
    { step: 3, title: 'Professional Execution', description: 'Skilled technicians complete the work adhering to safety codes.' },
    { step: 4, title: 'Final Inspection & Clean Up', description: 'Rigorous quality testing and total clean up of your property.' }
  ],
  equipment: ['Industrial diagnostic tools', 'Specialized extraction & repair equipment', 'Digital meters & thermal scanners'],
  commercialCapabilities: ['Commercial multi-unit buildings', 'Office complexes', 'Retail & industrial facilities'],
  residentialCapabilities: ['Single family homes', 'Apartments & condos', 'Historic residential properties'],
  faqs: [
    {
      question: `How quickly can Service Squad respond for ${s.title}?`,
      answer: `We provide 24/7 rapid dispatch across Greater Houston, Katy, Sugar Land, and surrounding Texas cities. We arrive promptly to assess and resolve your needs.`
    },
    {
      question: `Are your technicians licensed and insured?`,
      answer: `Yes, all Service Squad technicians are fully licensed, bonded, and insured, delivering trusted, top-tier craftsmanship.`
    },
    {
      question: `Do you provide upfront pricing for ${s.title}?`,
      answer: `Yes. We provide completely transparent, upfront pricing before any work begins with no hidden surprises.`
    }
  ],
  insuranceGuidance: `We work seamlessly with all major property insurance carriers, providing detailed photo documentation and direct billing assistance.`,
  seo: {
    title: `${s.title} Houston TX | Service Squad`,
    description: `Need ${s.title} in Houston, TX? Service Squad offers 24/7 emergency dispatch, licensed technicians, and upfront pricing. Call (713) 999-9150.`,
    keywords: [`${s.title} Houston`, `${s.title} near me`, 'Houston property services', 'Service Squad Houston']
  }
}));

const fileContent = `import { ServiceLine } from '../types';

export const CORE_SERVICES: ServiceLine[] = ${JSON.stringify(generatedServices, null, 2)};
`;

fs.writeFileSync('src/lib/data/services.ts', fileContent, 'utf8');
console.log('Successfully generated', generatedServices.length, 'services in src/lib/data/services.ts');
