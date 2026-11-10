import { CORE_SERVICES } from '../data/services';
import { TEXAS_LOCATIONS } from '../data/locations';
import { DEFAULT_SITE_SETTINGS } from '../data/settings';
import { ServiceLine, LocationHub, SiteSettings } from '../types';
import { createDynamicHub } from '../location/detector';
import { sanityFetch } from '../sanity/client';
import { 
  servicesQuery, 
  serviceBySlugQuery, 
  locationsQuery, 
  locationBySlugQuery, 
  siteSettingsQuery 
} from '../sanity/queries';
import { isSanityConfigured } from '../sanity/config';

/**
 * Headless CMS Abstraction Layer
 * 
 * Fully connected to Sanity CMS via GROQ queries with ISR tag caching.
 * Gracefully falls back to typed seed data if Sanity is unconfigured
 * or temporarily unreachable.
 */

export async function getAllServices(): Promise<ServiceLine[]> {
  if (isSanityConfigured) {
    const liveServices = await sanityFetch<ServiceLine[]>(servicesQuery, {}, ['service']);
    if (liveServices && liveServices.length > 0) {
      return liveServices;
    }
  }
  return CORE_SERVICES;
}

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  'water-damage-restoration': 'residential-water-damage',
  'water-damage': 'residential-water-damage',
  'fire-damage-restoration': 'fire-damage-repair',
  'fire-damage': 'fire-damage-repair',
  'mold-remediation': 'mold-removal',
  'mold': 'mold-removal',
  'plumbing': 'plumbing-repairs',
  'hvac': 'ac-repair',
  'air-conditioning': 'ac-repair',
  'reconstruction': 'damage-reconstruction',
  'board-up': 'residential-board-up',
};

export async function getServiceBySlug(slug: string): Promise<ServiceLine | null> {
  const resolvedSlug = SERVICE_SLUG_ALIASES[slug] || slug;

  if (isSanityConfigured) {
    // If Sanity is active, query Sanity first
    const liveService = await sanityFetch<ServiceLine>(serviceBySlugQuery, { slug: resolvedSlug }, [`service:${resolvedSlug}`]);
    if (liveService) {
      return liveService;
    }

    // Check if Sanity dataset has records. If it does, and this service isn't there, it was intentionally deleted/doesn't exist
    const allLive = await sanityFetch<ServiceLine[]>(servicesQuery, {}, ['service']);
    if (allLive && allLive.length > 0) {
      return null;
    }
  }

  // Fallback to static backup only if Sanity is completely unconfigured/empty
  const service = CORE_SERVICES.find((s) => s.slug === resolvedSlug || s.slug === slug);
  return service || null;
}

export async function getAllLocations(): Promise<LocationHub[]> {
  if (isSanityConfigured) {
    const liveLocations = await sanityFetch<LocationHub[]>(locationsQuery, {}, ['location']);
    if (liveLocations && liveLocations.length > 0) {
      return liveLocations;
    }
  }
  return TEXAS_LOCATIONS;
}

export async function getLocationBySlug(slug: string): Promise<LocationHub | null> {
  const normalizedSlug = slug.endsWith('-tx') ? slug : `${slug}-tx`;

  if (isSanityConfigured) {
    const liveLocation = await sanityFetch<LocationHub>(locationBySlugQuery, { slug: normalizedSlug }, [`location:${normalizedSlug}`]);
    if (liveLocation) {
      return liveLocation;
    }
    if (normalizedSlug !== slug) {
      const liveOriginal = await sanityFetch<LocationHub>(locationBySlugQuery, { slug }, [`location:${slug}`]);
      if (liveOriginal) return liveOriginal;
    }

    // If Sanity has locations, don't resurrect a deleted location from static fallback
    const allLiveLocations = await sanityFetch<LocationHub[]>(locationsQuery, {}, ['location']);
    if (allLiveLocations && allLiveLocations.length > 0) {
      return null;
    }
  }

  const location = TEXAS_LOCATIONS.find((l) => l.slug === normalizedSlug || l.slug === slug);
  return location || null;
}

export async function getMainHubLocation(): Promise<LocationHub> {
  const allLocations = await getAllLocations();
  const mainHub = allLocations.find((l) => l.isMainHub);
  return mainHub || allLocations[0];
}

export async function findLocationByZip(query: string): Promise<LocationHub | null> {
  const clean = query.trim();
  if (!clean) return null;

  const allLocations = await getAllLocations();
  const lowerClean = clean.toLowerCase();

  // 1. Direct match by City name or Slug
  const cityMatch = allLocations.find(
    (l) =>
      l.city.toLowerCase() === lowerClean ||
      l.slug.toLowerCase() === lowerClean ||
      l.slug.toLowerCase() === `${lowerClean}-tx`
  );
  if (cityMatch) return cityMatch;

  // 2. Direct match with static covered zips or primary zip
  const cleanZip = clean.replace(/[^0-9]/g, '').slice(0, 5);
  if (cleanZip.length === 5) {
    const directMatch = allLocations.find(
      (l) => l.zip === cleanZip || (l.coveredZips || []).includes(cleanZip)
    );
    if (directMatch) {
      return {
        ...directMatch,
        zip: cleanZip,
      };
    }

    // 3. Query US Postal database via Zippopotam (fast, free)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);
      const res = await fetch(`https://api.zippopotam.us/us/${cleanZip}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const place = data.places?.[0];
        if (place) {
          const placeName = place['place name'] || '';
          const state = place['state abbreviation'] || 'TX';
          const lat = parseFloat(place.latitude) || 29.7604;
          const lng = parseFloat(place.longitude) || -95.3698;

          const staticByCity = allLocations.find(
            (l) => l.city.toLowerCase() === placeName.toLowerCase()
          );
          if (staticByCity) {
            return {
              ...staticByCity,
              zip: cleanZip
            };
          }

          return createDynamicHub(placeName, state, cleanZip, lat, lng);
        }
      }
    } catch {
      // Network or timeout
    }

    // 4. Fallback for Texas ZIP prefixes (77xxx, 75xxx, 78xxx, 76xxx)
    if (
      cleanZip.startsWith('77') ||
      cleanZip.startsWith('75') ||
      cleanZip.startsWith('78') ||
      cleanZip.startsWith('76')
    ) {
      const mainHub = await getMainHubLocation();
      return {
        ...mainHub,
        zip: cleanZip
      };
    }

    // 5. Fallback for any other valid 5-digit US ZIP code
    return createDynamicHub(`ZIP ${cleanZip}`, 'TX', cleanZip, 29.7604, -95.3698);
  }

  // 6. If user entered a city name not in predefined list (e.g. "Dallas", "Austin")
  if (clean.length >= 3 && !/^\d+$/.test(clean)) {
    return createDynamicHub(clean, 'TX', '', 29.7604, -95.3698);
  }

  return null;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isSanityConfigured) {
    const liveSettings = await sanityFetch<SiteSettings>(siteSettingsQuery, {}, ['siteSettings']);
    if (liveSettings && liveSettings.companyName) {
      return liveSettings;
    }
  }
  return DEFAULT_SITE_SETTINGS;
}
