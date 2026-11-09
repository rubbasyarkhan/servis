import { LocationHub, ServiceLine, FAQItem } from '../types';
import { getCloudinaryUrl } from '@/lib/cloudinary';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function sanitizePhone(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = sanitizePhone(phone);
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

// JSON-LD Structured Data Schema Generators

export function generateLocalBusinessSchema(location: LocationHub, domain = 'https://servicesquadtx.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    '@id': `${domain}/locations/${location.slug}#localbusiness`,
    name: `Service Squad Restoration - ${location.city}`,
    image: getCloudinaryUrl('/Images/herofinal2.webp'),
    telephone: location.phone,
    url: `${domain}/locations/${location.slug}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.lat,
      longitude: location.geo.lng
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    areaServed: (location.coveredZips || []).map((zip) => ({
      '@type': 'AdministrativeArea',
      name: `ZIP ${zip}, ${location.city}, TX`
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (location.localReviewStats?.rating ?? (location as any).googleReviewRating ?? 4.9).toString(),
      reviewCount: (location.localReviewStats?.count ?? (location as any).googleReviewCount ?? 250).toString(),
      bestRating: '5',
      worstRating: '1'
    }
  };
}

export function generateServiceSchema(service: ServiceLine, domain = 'https://servicesquadtx.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${domain}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Service Squad',
      telephone: '(713) 999-9150',
      url: domain
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Offerings`,
      itemListElement: (service.subServices || []).map((sub, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: sub.title,
          description: sub.description
        },
        position: idx + 1
      }))
    }
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqs || []).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[], domain = 'https://servicesquadtx.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${domain}${item.url}`
    }))
  };
}
