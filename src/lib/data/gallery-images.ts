/**
 * Authentic Service Squad Photo Assets & Project Gallery Registry
 * All paths are resolved through getCloudinaryUrl() so they automatically
 * load from Cloudinary CDN with f_auto,q_auto optimization when configured,
 * or seamlessly fall back to local public assets.
 */

import { getCloudinaryUrl } from '@/lib/cloudinary';

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  tag: string;
  location?: string;
  beforeSrc?: string;
  afterSrc?: string;
}

export const SITE_IMAGES = {
  // Brand, Multi-Trade Hero & Fleet
  heroBanner: getCloudinaryUrl('/Images/herofinal2.webp'),
  heroComposite: getCloudinaryUrl('/Images/herofinal2.webp'),
  fleetVan: getCloudinaryUrl('/Images/Office & Facility/vehicle wrap design-01.webp'),
  trainingFacility: getCloudinaryUrl('/Images/Office & Facility/Service Squad Commercial Training Facility.webp'),
  plumbingTraining: getCloudinaryUrl('/Images/Office & Facility/Service Squad Commercial Plumbing Training Facility.webp'),
  toiletTraining: getCloudinaryUrl('/Images/Office & Facility/Service Squad Commercial Toilet Traning Facility.webp'),
  plumbingServiceVan: getCloudinaryUrl('/Images/Office & Facility/Service Squad Plumbing Service.webp'),
  
  // Team & Multi-Trade Technicians
  hvacCrew: getCloudinaryUrl('/Images/Team/Service Squad HVAC Crew.webp'),
  technicianEstimate: getCloudinaryUrl('/Images/Team/Service Squad Technician Customer Estimate.webp'),
  techniciansOnSite1: getCloudinaryUrl('/Images/Team/54049.webp'),
  techniciansOnSite2: getCloudinaryUrl('/Images/Team/54050.webp'),
  teamMeeting: getCloudinaryUrl('/Images/Team/20200819_134239.webp'),

  // Plumbing
  plumbingRepair: getCloudinaryUrl('/Images/Plumbing/repair.webp'),
  waterHeater: getCloudinaryUrl('/Images/Plumbing/Water Heater Images.webp'),
  sewerLineRepair: getCloudinaryUrl('/Images/Plumbing/Sewer Line Repair.webp'),
  trenchlessSewer: getCloudinaryUrl('/Images/Plumbing/Trenchless-Sewer-Line-Replacement.webp'),
  pipeReplacement: getCloudinaryUrl('/Images/Plumbing/20201111_131421.webp'),
  cleanWaterLine: getCloudinaryUrl('/Images/Plumbing/20180530_100416.webp'),

  // Air Conditioning & Ducts
  acUnitInstall: getCloudinaryUrl('/Images/Air Conditioning/62616.webp'),
  acCompressorCheck: getCloudinaryUrl('/Images/Air Conditioning/62617.webp'),
  acCoilInspection: getCloudinaryUrl('/Images/Air Conditioning/20200403_150748.webp'),
  ductCleaningLg: getCloudinaryUrl('/Images/Air Duct & Dryer Vent Cleaning/air-duct-cleaning-lg.webp'),
  ductCleaningTools: getCloudinaryUrl('/Images/Air Duct & Dryer Vent Cleaning/clean-indoor-air-10.webp'),
  ventCleaningJob: getCloudinaryUrl('/Images/Air Duct & Dryer Vent Cleaning/20190327_125401.webp'),

  // Water Damage
  bustedPipe: getCloudinaryUrl('/Images/Water Damage/Busted Pipe.webp'),
  dryingEquip1: getCloudinaryUrl('/Images/Water Damage/20180515_120808.webp'),
  dryingEquip2: getCloudinaryUrl('/Images/Water Damage/20180120_131810.webp'),
  dryingDehum: getCloudinaryUrl('/Images/Water Damage/20181206_133323.webp'),
  hardwoodDrying: getCloudinaryUrl('/Images/Water Damage/20200731_163839.webp'),
  moistureInspection: getCloudinaryUrl('/Images/Water Damage/20191212_112021.webp'),
  waterExtractionVan: getCloudinaryUrl('/Images/Water Damage/10270-ab18fd93-1be1-4314-916f-0d0f5cf55443.webp'),

  // Fire Damage
  fireRemediation: getCloudinaryUrl('/Images/Fire Damage/fire-damage-restoration-services-houston-tx-1.webp'),
  smokeDamageHeader: getCloudinaryUrl('/Images/Fire Damage/HeaderImage-FireDamage.webp'),
  charredDrywall: getCloudinaryUrl('/Images/Fire Damage/20191225_125229.webp'),
  sootCleaning: getCloudinaryUrl('/Images/Fire Damage/20191231_164955.webp'),
  fireRestorationCrew: getCloudinaryUrl('/Images/Fire Damage/20200103_172627.webp'),

  // Remodeling & Construction
  remodelBefore1: getCloudinaryUrl('/Images/Residential Remodeling & Construction/Before 1.webp'),
  remodelAfter1: getCloudinaryUrl('/Images/Residential Remodeling & Construction/After 1.webp'),
  remodelBefore2: getCloudinaryUrl('/Images/Residential Remodeling & Construction/Before 2.webp'),
  remodelAfter2: getCloudinaryUrl('/Images/Residential Remodeling & Construction/After 2.webp'),
  drywallRebuild: getCloudinaryUrl('/Images/Residential Remodeling & Construction/20181103_155049.webp'),
  bathroomRemodel: getCloudinaryUrl('/Images/Residential Remodeling & Construction/20191010_151614_HDR1.webp'),
  commercialBuildout1: getCloudinaryUrl('/Images/Commercial Remodenling & Construction/image_50416385.webp'),
  commercialBuildout2: getCloudinaryUrl('/Images/Commercial Remodenling & Construction/image_67207681.webp'),

  // Roofing
  roofTarping1: getCloudinaryUrl('/Images/Roofing/image_50438145.webp'),
  roofTarping2: getCloudinaryUrl('/Images/Roofing/image_67219201.webp'),
  roofDecking: getCloudinaryUrl('/Images/Roofing/image_50725121.webp'),

  // Content Packout
  packoutBoxes: getCloudinaryUrl('/Images/Content Pack Out and Storage/20210709_201411.webp'),
  contentProtection: getCloudinaryUrl('/Images/Content Pack Out and Storage/20210710_135457.webp')
};

export const SHOWCASE_PROJECTS: GalleryImage[] = [
  {
    id: 'proj-1',
    src: SITE_IMAGES.waterHeater,
    title: 'High-Efficiency Tankless Water Heater Installation',
    category: 'plumbing',
    tag: 'Plumbing Service',
    location: 'Houston, TX'
  },
  {
    id: 'proj-2',
    src: SITE_IMAGES.remodelAfter1,
    title: 'Luxury Master Bathroom Full Renovation',
    category: 'remodeling',
    tag: 'Remodeling',
    location: 'Sugar Land, TX',
    beforeSrc: SITE_IMAGES.remodelBefore1,
    afterSrc: SITE_IMAGES.remodelAfter1
  },
  {
    id: 'proj-3',
    src: SITE_IMAGES.dryingEquip1,
    title: 'Commercial LGR Dehumidification & Flood Extraction',
    category: 'water-damage',
    tag: 'Water Restoration',
    location: 'Katy, TX'
  },
  {
    id: 'proj-4',
    src: SITE_IMAGES.acUnitInstall,
    title: 'High-SEER Residential AC System Replacement',
    category: 'ac',
    tag: 'HVAC Services',
    location: 'Pearland, TX'
  },
  {
    id: 'proj-5',
    src: SITE_IMAGES.fireRemediation,
    title: 'Residential Kitchen Fire & Soot Decontamination',
    category: 'fire-damage',
    tag: 'Fire Recovery',
    location: 'Houston, TX'
  },
  {
    id: 'proj-6',
    src: SITE_IMAGES.ductCleaningLg,
    title: 'Full HVAC Air Duct Sanitization & Dust Removal',
    category: 'ac',
    tag: 'Air Duct Cleaning',
    location: 'The Woodlands, TX'
  },
  {
    id: 'proj-7',
    src: SITE_IMAGES.roofTarping1,
    title: 'Emergency Storm Damage Roof Tarping & Enclosure',
    category: 'remodeling',
    tag: 'Roofing & Tarping',
    location: 'Cypress, TX'
  },
  {
    id: 'proj-8',
    src: SITE_IMAGES.commercialBuildout2,
    title: 'Turnkey Commercial Interior Buildout & Framing',
    category: 'commercial',
    tag: 'Commercial Construction',
    location: 'Houston, TX'
  },
  {
    id: 'proj-9',
    src: SITE_IMAGES.remodelAfter2,
    title: 'Complete Post-Flood Residential Reconstruction',
    category: 'remodeling',
    tag: 'Reconstruction',
    location: 'Bellaire, TX',
    beforeSrc: SITE_IMAGES.remodelBefore2,
    afterSrc: SITE_IMAGES.remodelAfter2
  }
];

export function getServiceImages(slugOrCategory: string): string[] {
  const s = slugOrCategory.toLowerCase();
  if (s.includes('plumb') || s.includes('drain') || s.includes('sewer') || s.includes('water-heater') || s.includes('toilet') || s.includes('pipe') || s.includes('faucet') || s.includes('leak')) {
    return [
      SITE_IMAGES.plumbingRepair,
      SITE_IMAGES.waterHeater,
      SITE_IMAGES.sewerLineRepair,
      SITE_IMAGES.plumbingTraining,
      SITE_IMAGES.pipeReplacement,
      SITE_IMAGES.cleanWaterLine
    ];
  }
  if (s.includes('water') || s.includes('flood') || s.includes('extract')) {
    return [
      SITE_IMAGES.bustedPipe,
      SITE_IMAGES.dryingEquip1,
      SITE_IMAGES.dryingDehum,
      SITE_IMAGES.hardwoodDrying,
      SITE_IMAGES.moistureInspection,
      SITE_IMAGES.waterExtractionVan
    ];
  }
  if (s.includes('fire') || s.includes('smoke') || s.includes('soot')) {
    return [
      SITE_IMAGES.fireRemediation,
      SITE_IMAGES.smokeDamageHeader,
      SITE_IMAGES.charredDrywall,
      SITE_IMAGES.sootCleaning,
      SITE_IMAGES.fireRestorationCrew
    ];
  }
  if (s.includes('air') || s.includes('ac-') || s.includes('duct') || s.includes('vent') || s.includes('hvac')) {
    return [
      SITE_IMAGES.acUnitInstall,
      SITE_IMAGES.acCompressorCheck,
      SITE_IMAGES.ductCleaningLg,
      SITE_IMAGES.ductCleaningTools,
      SITE_IMAGES.ventCleaningJob,
      SITE_IMAGES.hvacCrew
    ];
  }
  if (s.includes('roof') || s.includes('tarp')) {
    return [
      SITE_IMAGES.roofTarping1,
      SITE_IMAGES.roofTarping2,
      SITE_IMAGES.roofDecking
    ];
  }
  if (s.includes('pack') || s.includes('storage') || s.includes('content')) {
    return [
      SITE_IMAGES.packoutBoxes,
      SITE_IMAGES.contentProtection
    ];
  }
  // Default remodeling / construction
  return [
    SITE_IMAGES.remodelAfter1,
    SITE_IMAGES.remodelBefore1,
    SITE_IMAGES.bathroomRemodel,
    SITE_IMAGES.drywallRebuild,
    SITE_IMAGES.commercialBuildout1,
    SITE_IMAGES.commercialBuildout2
  ];
}
