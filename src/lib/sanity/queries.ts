import { groq } from 'next-sanity';

/**
 * GROQ query to retrieve all service lines
 */
export const servicesQuery = groq`
  *[_type == "service"] | order(title asc) {
    "id": _id,
    "slug": slug.current,
    title,
    shortTitle,
    iconName,
    svgIcon,
    category,
    heroTagline,
    description,
    emergencyResponseTime,
    subServices[] {
      "id": _key,
      title,
      description,
      keySteps
    },
    processSteps[] {
      step,
      title,
      description,
      timeWindow
    },
    equipment,
    commercialCapabilities,
    residentialCapabilities,
    insuranceGuidance,
    faqs[] {
      question,
      answer
    },
    locations[]-> {
      "id": _id,
      "slug": slug.current,
      city,
      state,
      phone
    },
    seo {
      title,
      description,
      keywords
    }
  }
`;

/**
 * GROQ query to retrieve a single service by slug
 */
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    title,
    shortTitle,
    iconName,
    svgIcon,
    category,
    heroTagline,
    description,
    emergencyResponseTime,
    subServices[] {
      "id": _key,
      title,
      description,
      keySteps
    },
    processSteps[] {
      step,
      title,
      description,
      timeWindow
    },
    equipment,
    commercialCapabilities,
    residentialCapabilities,
    insuranceGuidance,
    faqs[] {
      question,
      answer
    },
    locations[]-> {
      "id": _id,
      "slug": slug.current,
      city,
      state,
      phone
    },
    seo {
      title,
      description,
      keywords
    }
  }
`;

/**
 * GROQ query to retrieve all location hubs
 */
export const locationsQuery = groq`
  *[_type == "location"] | order(isMainHub desc, city asc) {
    "id": _id,
    "slug": slug.current,
    city,
    state,
    zip,
    isMainHub,
    serviceRadiusMiles,
    phone,
    address {
      street,
      city,
      state,
      zip
    },
    geo {
      lat,
      lng
    },
    "coveredZips": coalesce(coveredZips, []),
    dniTrackingNumber,
    googleReviewRating,
    googleReviewCount,
    "localReviewStats": {
      "rating": coalesce(googleReviewRating, 4.9),
      "count": coalesce(googleReviewCount, 250)
    },
    "emergencyHours": "24 Hours / 7 Days / 365 Days a Year",
    "localManager": "Marcus Vance, Master Restorer (IICRC #84920)",
    "localTestimonials": [
      {
        "author": "David R.",
        "role": "Commercial Facility Director",
        "comment": "Service Squad had extraction trucks on site in 35 minutes. Outstanding service.",
        "rating": 5,
        "service": "Water Damage Restoration"
      }
    ]
  }
`;

/**
 * GROQ query to retrieve a single location by slug
 */
export const locationBySlugQuery = groq`
  *[_type == "location" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    city,
    state,
    zip,
    isMainHub,
    serviceRadiusMiles,
    phone,
    address {
      street,
      city,
      state,
      zip
    },
    geo {
      lat,
      lng
    },
    "coveredZips": coalesce(coveredZips, []),
    dniTrackingNumber,
    googleReviewRating,
    googleReviewCount,
    "localReviewStats": {
      "rating": coalesce(googleReviewRating, 4.9),
      "count": coalesce(googleReviewCount, 250)
    },
    "emergencyHours": "24 Hours / 7 Days / 365 Days a Year",
    "localManager": "Marcus Vance, Master Restorer (IICRC #84920)",
    "localTestimonials": [
      {
        "author": "David R.",
        "role": "Commercial Facility Director",
        "comment": "Service Squad had extraction trucks on site in 35 minutes. Outstanding service.",
        "rating": 5,
        "service": "Water Damage Restoration"
      }
    ]
  }
`;

/**
 * GROQ query to retrieve site global settings
 */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    companyName,
    legalEntity,
    emergencyPhone,
    corporateOffice {
      street,
      city,
      state,
      zip
    },
    licenseNumber,
    operatingHours,
    emergencyResponseSLA,
    serviceRadiusMiles,
    crmWebhookUrl,
    callRailDniScript
  }
`;
