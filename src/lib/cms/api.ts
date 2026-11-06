import { CORE_SERVICES } from '../data/services';
import { TEXAS_LOCATIONS } from '../data/locations';
import { DEFAULT_SITE_SETTINGS } from '../data/settings';
import { ServiceLine, LocationHub, SiteSettings, ServiceTradeSlug } from '../types';
import { createDynamicHub } from '../location/detector';

/**
 * Headless CMS Abstraction Layer
 * 
 * In production with Sanity or Strapi connected, these functions
 * perform GROQ or REST queries against the Headless CMS API.
 * Currently, they resolve from our typed seed repositories.
 */

export async function getAllServices(): Promise<ServiceLine[]> {
  return CORE_SERVICES;
}

export async function getServiceBySlug(slug: string): Promise<ServiceLine | null> {
  const service = CORE_SERVICES.find((s) => s.slug === slug);
  return service || null;
}

export async function getAllLocations(): Promise<LocationHub[]> {
  return TEXAS_LOCATIONS;
}

export async function getLocationBySlug(slug: string): Promise<LocationHub | null> {
  const location = TEXAS_LOCATIONS.find((l) => l.slug === slug);
  return location || null;
}

export async function getMainHubLocation(): Promise<LocationHub> {
  const mainHub = TEXAS_LOCATIONS.find((l) => l.isMainHub);
  return mainHub || TEXAS_LOCATIONS[0];
}

export async function findLocationByZip(zip: string): Promise<LocationHub | null> {
  const cleanZip = zip.trim().slice(0, 5);
  if (!cleanZip) return null;

  // 1. Direct match with static covered zips or primary zip
  const directMatch = TEXAS_LOCATIONS.find(
    (l) => l.zip === cleanZip || l.coveredZips.includes(cleanZip)
  );
  if (directMatch) return directMatch;

  // 2. Query US Postal database via Zippopotam (fast, free)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
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

        const staticByCity = TEXAS_LOCATIONS.find(
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

  // 3. Fallback for Texas ZIP prefixes
  if (cleanZip.startsWith('77') || cleanZip.startsWith('75') || cleanZip.startsWith('78') || cleanZip.startsWith('76')) {
    const mainHub = await getMainHubLocation();
    return {
      ...mainHub,
      zip: cleanZip
    };
  }

  return null;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return DEFAULT_SITE_SETTINGS;
}
