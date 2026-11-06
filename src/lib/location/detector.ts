import { LocationHub } from '../types';
import { TEXAS_LOCATIONS } from '../data/locations';

/**
 * Creates a dynamic LocationHub object for any detected city/state/zip
 */
export function createDynamicHub(
  city: string,
  state: string = 'TX',
  zip: string = '',
  lat: number = 29.7604,
  lng: number = -95.3698
): LocationHub {
  const cleanCity = city.trim();
  const cleanSlug = `hub-${cleanCity.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return {
    id: `loc-${cleanSlug}`,
    slug: cleanSlug,
    city: cleanCity,
    state: state.toUpperCase(),
    zip: zip.trim(),
    isMainHub: cleanCity.toLowerCase() === 'houston',
    serviceRadiusMiles: 45,
    phone: '(713) 999-9150',
    address: {
      street: 'Direct Dispatch Service Fleet',
      city: cleanCity,
      state: state.toUpperCase(),
      zip: zip.trim()
    },
    emergencyHours: 'Immediate Dispatch Coverage',
    coveredZips: zip ? [zip.trim()] : [],
    localManager: 'Field Operations Director',
    localReviewStats: {
      rating: 4.9,
      count: 156
    },
    localTestimonials: [
      {
        author: 'Verified Property Owner',
        role: 'Homeowner',
        comment: `Service Squad team arrived promptly in ${cleanCity} and resolved our issue with clean, professional workmanship.`,
        rating: 5,
        service: 'Property Restoration & Repairs'
      }
    ],
    geo: {
      lat,
      lng
    }
  };
}

/**
 * Match a city name or ZIP against known static Texas locations
 */
export function matchStaticLocation(city?: string, zip?: string): LocationHub | null {
  if (zip) {
    const cleanZip = zip.trim().slice(0, 5);
    const byZip = TEXAS_LOCATIONS.find(
      (l) => l.zip === cleanZip || l.coveredZips.includes(cleanZip)
    );
    if (byZip) return byZip;
  }

  if (city) {
    const cleanCity = city.trim().toLowerCase();
    const byCity = TEXAS_LOCATIONS.find(
      (l) => l.city.toLowerCase() === cleanCity
    );
    if (byCity) return byCity;
  }

  return null;
}

/**
 * Detect location via client IP address (Fast, non-intrusive)
 */
export async function detectUserLocationFromIP(): Promise<LocationHub | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch('https://ipwho.is/', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error('IP lookup failed');
    const data = await res.json();

    if (data.success && data.city) {
      const city = data.city;
      const state = data.region_code || data.region || 'TX';
      const zip = data.postal || '';
      const lat = data.latitude || 29.7604;
      const lng = data.longitude || -95.3698;

      const staticMatch = matchStaticLocation(city, zip);
      if (staticMatch) {
        return {
          ...staticMatch,
          zip: zip || staticMatch.zip
        };
      }

      return createDynamicHub(city, state, zip, lat, lng);
    }
  } catch (err) {
    // Fallback IP provider
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const fbRes = await fetch('https://ipapi.co/json/', {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (fbRes.ok) {
        const data = await fbRes.json();
        if (data.city) {
          const city = data.city;
          const state = data.region_code || data.region || 'TX';
          const zip = data.postal || '';
          const lat = data.latitude || 29.7604;
          const lng = data.longitude || -95.3698;

          const staticMatch = matchStaticLocation(city, zip);
          if (staticMatch) return { ...staticMatch, zip: zip || staticMatch.zip };
          return createDynamicHub(city, state, zip, lat, lng);
        }
      }
    } catch {
      // Both IP lookups failed
    }
  }

  return null;
}

/**
 * Detect location via Browser Geolocation API + Reverse Geocoding
 */
export async function detectUserLocationFromBrowser(): Promise<LocationHub | null> {
  if (typeof window === 'undefined' || !('geolocation' in navigator)) {
    return detectUserLocationFromIP();
  }

  return new Promise((resolve) => {
    let resolved = false;

    const fallbackToIp = async () => {
      if (resolved) return;
      resolved = true;
      const ipHub = await detectUserLocationFromIP();
      resolve(ipHub);
    };

    // 6-second timeout before falling back to IP
    const timeoutTimer = setTimeout(() => {
      fallbackToIp();
    }, 6000);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        if (resolved) return;
        clearTimeout(timeoutTimer);

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        try {
          const controller = new AbortController();
          const rTimeout = setTimeout(() => controller.abort(), 4000);

          const rRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`,
            { signal: controller.signal }
          );
          clearTimeout(rTimeout);

          if (!rRes.ok) throw new Error('Reverse geocode failed');
          const data = await rRes.json();

          const city = data.city || data.locality || data.principalSubdivision || '';
          const rawState = data.principalSubdivisionCode || '';
          const state = rawState.replace(/^US-/, '') || data.countryCode || 'TX';
          const zip = data.postcode || '';

          if (city) {
            resolved = true;
            const staticMatch = matchStaticLocation(city, zip);
            if (staticMatch) {
              resolve({
                ...staticMatch,
                zip: zip || staticMatch.zip
              });
              return;
            }

            resolve(createDynamicHub(city, state, zip, lat, lng));
            return;
          }
        } catch {
          // If reverse geocoding fails, fallback to IP
        }

        fallbackToIp();
      },
      (error) => {
        // Geolocation denied or unavailable -> fallback to IP
        fallbackToIp();
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000
      }
    );
  });
}
