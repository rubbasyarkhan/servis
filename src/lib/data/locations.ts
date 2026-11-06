import { LocationHub } from '../types';

export const TEXAS_LOCATIONS: LocationHub[] = [
  {
    id: 'loc-houston',
    slug: 'houston-tx',
    city: 'Houston',
    state: 'TX',
    zip: '77081',
    isMainHub: true,
    serviceRadiusMiles: 30,
    phone: '(713) 999-9150',
    address: {
      street: '6750 Westpark Dr, Ste 200',
      city: 'Houston',
      state: 'TX',
      zip: '77081'
    },
    emergencyHours: '24 Hours / 7 Days / 365 Days a Year',
    coveredZips: [
      '77081', '77002', '77005', '77019', '77024', '77027', '77030', '77036',
      '77042', '77056', '77057', '77063', '77074', '77077', '77079', '77096'
    ],
    localManager: 'Marcus Vance, Master Restorer (IICRC #84920)',
    localReviewStats: {
      rating: 4.9,
      count: 247
    },
    localTestimonials: [
      {
        author: 'David R.',
        role: 'Commercial Facility Director, Galleria Houston',
        comment:
          'When a 4-inch water main ruptured on the 3rd floor at 2:00 AM, Service Squad had extraction trucks on site in 35 minutes. They saved our hardwood and had our tenants operating again within 48 hours.',
        rating: 5,
        service: 'Water Damage Restoration'
      },
      {
        author: 'Elena Morales',
        role: 'Homeowner in Meyerland / 77081',
        comment:
          'Dealing with post-storm floodwater is terrifying, but Marcus and his team were polite, professional, and handled every detail directly with my insurance adjuster. Outstanding service.',
        rating: 5,
        service: 'Water Damage & Reconstruction'
      }
    ],
    geo: {
      lat: 29.7196,
      lng: -95.4851
    }
  },
  {
    id: 'loc-katy',
    slug: 'katy-tx',
    city: 'Katy',
    state: 'TX',
    zip: '77494',
    isMainHub: false,
    serviceRadiusMiles: 25,
    phone: '(281) 555-5289',
    address: {
      street: '22722 Kingsland Blvd',
      city: 'Katy',
      state: 'TX',
      zip: '77494'
    },
    emergencyHours: '24/7 Rapid Emergency Response',
    coveredZips: ['77494', '77493', '77449', '77450', '77492'],
    localManager: 'Braden Cole, Restoration Project Director',
    localReviewStats: {
      rating: 4.9,
      count: 118
    },
    localTestimonials: [
      {
        author: 'Sarah Jenkins',
        role: 'Cinco Ranch Homeowner',
        comment:
          'A failed upstairs water heater flooded through our ceiling. Service Squad arrived within 40 minutes, set up dry-out machines, and then completely rebuilt the ceiling better than it was before.',
        rating: 5,
        service: 'Plumbing & Water Damage'
      }
    ],
    geo: {
      lat: 29.7858,
      lng: -95.8245
    }
  },
  {
    id: 'loc-sugar-land',
    slug: 'sugar-land-tx',
    city: 'Sugar Land',
    state: 'TX',
    zip: '77479',
    isMainHub: false,
    serviceRadiusMiles: 25,
    phone: '(281) 555-7842',
    address: {
      street: '1650 Highway 6 S',
      city: 'Sugar Land',
      state: 'TX',
      zip: '77479'
    },
    emergencyHours: '24/7 Emergency Dispatch',
    coveredZips: ['77479', '77478', '77498', '77477'],
    localManager: 'Alicia Thorne, Environmental Specialist',
    localReviewStats: {
      rating: 4.8,
      count: 94
    },
    localTestimonials: [
      {
        author: 'Michael Chang',
        role: 'First Colony Resident',
        comment:
          'Found hidden mold behind our guest bathroom baseboards. Alicia’s containment team was clean, sealed the room completely, and got independent clearance on the first test.',
        rating: 5,
        service: 'Mold Remediation'
      }
    ],
    geo: {
      lat: 29.6197,
      lng: -95.6349
    }
  },
  {
    id: 'loc-the-woodlands',
    slug: 'the-woodlands-tx',
    city: 'The Woodlands',
    state: 'TX',
    zip: '77380',
    isMainHub: false,
    serviceRadiusMiles: 30,
    phone: '(936) 555-8663',
    address: {
      street: '2002 Timberloch Pl',
      city: 'The Woodlands',
      state: 'TX',
      zip: '77380'
    },
    emergencyHours: '24/7 Rapid Response',
    coveredZips: ['77380', '77381', '77382', '77384', '77385'],
    localManager: 'Jordan Matthews, Structural Drying Specialist',
    localReviewStats: {
      rating: 5.0,
      count: 82
    },
    localTestimonials: [
      {
        author: 'Robert Sterling',
        role: 'Town Center Retail Manager',
        comment:
          'Small electrical fire generated heavy smoke throughout our boutique. Service Squad ran thermal fogging and air scrubbers over the weekend. Zero smoke smell remained Monday morning.',
        rating: 5,
        service: 'Fire & Smoke Damage'
      }
    ],
    geo: {
      lat: 30.1588,
      lng: -95.4613
    }
  },
  {
    id: 'loc-pearland',
    slug: 'pearland-tx',
    city: 'Pearland',
    state: 'TX',
    zip: '77584',
    isMainHub: false,
    serviceRadiusMiles: 25,
    phone: '(281) 555-7327',
    address: {
      street: '2803 Business Center Dr',
      city: 'Pearland',
      state: 'TX',
      zip: '77584'
    },
    emergencyHours: '24/7 Emergency Dispatch',
    coveredZips: ['77584', '77581', '77588'],
    localManager: 'Carlos Mendoza, Senior Field Lead',
    localReviewStats: {
      rating: 4.9,
      count: 67
    },
    localTestimonials: [
      {
        author: 'Jessica Nguyen',
        role: 'Shadow Creek Ranch Resident',
        comment:
          'AC compressor died in July and the attic drain pan overflowed into the master bedroom. They fixed the HVAC and dried the ceiling all in one day. Truly a full-service squad.',
        rating: 5,
        service: 'HVAC & Water Damage'
      }
    ],
    geo: {
      lat: 29.5636,
      lng: -95.286
    }
  },
  {
    id: 'loc-cypress',
    slug: 'cypress-tx',
    city: 'Cypress',
    state: 'TX',
    zip: '77429',
    isMainHub: false,
    serviceRadiusMiles: 25,
    phone: '(281) 555-2977',
    address: {
      street: '25222 Northwest Fwy',
      city: 'Cypress',
      state: 'TX',
      zip: '77429'
    },
    emergencyHours: '24/7 Emergency Dispatch',
    coveredZips: ['77429', '77433', '77410'],
    localManager: 'Travis Hill, Reconstruction Lead',
    localReviewStats: {
      rating: 4.8,
      count: 53
    },
    localTestimonials: [
      {
        author: 'Greg Anderson',
        role: 'Bridgeland Homeowner',
        comment:
          'Rebuilt our kitchen and living room flooring following a refrigerator ice-maker leak. High-end craftsmanship, timely updates, and clean dust containment throughout.',
        rating: 5,
        service: 'Remodeling & Reconstruction'
      }
    ],
    geo: {
      lat: 29.9691,
      lng: -95.6972
    }
  }
];
