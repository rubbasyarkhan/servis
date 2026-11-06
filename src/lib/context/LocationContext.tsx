'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LocationHub, SiteSettings } from '../types';
import { TEXAS_LOCATIONS } from '../data/locations';
import { DEFAULT_SITE_SETTINGS } from '../data/settings';
import { findLocationByZip } from '../cms/api';
import { detectUserLocationFromBrowser, detectUserLocationFromIP } from '../location/detector';

type AudienceMode = 'residential' | 'commercial';

interface LocationContextType {
  activeLocation: LocationHub;
  audienceMode: AudienceMode;
  phoneNumber: string;
  rawPhoneNumber: string;
  isDetectingLocation: boolean;
  setAudienceMode: (mode: AudienceMode) => void;
  setActiveLocation: (loc: LocationHub) => void;
  setActiveLocationBySlug: (slug: string) => void;
  lookupZip: (zip: string) => Promise<LocationHub | null>;
  detectUserLocation: () => Promise<LocationHub | null>;
  settings: SiteSettings;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const STORAGE_KEY = 'servicesquad_user_location';

export function LocationProvider({
  children,
  initialLocationSlug
}: {
  children: React.ReactNode;
  initialLocationSlug?: string;
}) {
  const defaultLocation =
    TEXAS_LOCATIONS.find((l) => l.slug === initialLocationSlug) ||
    TEXAS_LOCATIONS.find((l) => l.isMainHub) ||
    TEXAS_LOCATIONS[0];

  const [activeLocation, setActiveLocationState] = useState<LocationHub>(defaultLocation);
  const [audienceMode, setAudienceMode] = useState<AudienceMode>('residential');
  const [phoneNumber, setPhoneNumber] = useState<string>(defaultLocation.phone);
  const [isDetectingLocation, setIsDetectingLocation] = useState<boolean>(false);

  // Update phone whenever activeLocation changes
  useEffect(() => {
    setPhoneNumber(activeLocation.phone);
  }, [activeLocation]);

  // Persist helper
  const setActiveLocation = useCallback((loc: LocationHub) => {
    setActiveLocationState(loc);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(loc));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Client-side auto detection on initial mount (runs once after hydration)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.city && parsed.phone) {
          setActiveLocationState(parsed);
          return;
        }
      }
    } catch {
      // Ignore storage read error
    }

    // If no prior location was saved, auto-detect location via IP in background
    let mounted = true;
    detectUserLocationFromIP().then((detected) => {
      if (mounted && detected) {
        setActiveLocation(detected);
      }
    });

    return () => {
      mounted = false;
    };
  }, [setActiveLocation]);

  const setActiveLocationBySlug = useCallback((slug: string) => {
    const found = TEXAS_LOCATIONS.find((l) => l.slug === slug);
    if (found) {
      setActiveLocation(found);
    }
  }, [setActiveLocation]);

  const lookupZip = useCallback(async (zip: string): Promise<LocationHub | null> => {
    const loc = await findLocationByZip(zip);
    if (loc) {
      setActiveLocation(loc);
      return loc;
    }
    return null;
  }, [setActiveLocation]);

  const detectUserLocation = useCallback(async (): Promise<LocationHub | null> => {
    setIsDetectingLocation(true);
    try {
      const detected = await detectUserLocationFromBrowser();
      if (detected) {
        setActiveLocation(detected);
        return detected;
      }
      return null;
    } finally {
      setIsDetectingLocation(false);
    }
  }, [setActiveLocation]);

  return (
    <LocationContext.Provider
      value={{
        activeLocation,
        audienceMode,
        phoneNumber,
        rawPhoneNumber: phoneNumber.replace(/[^0-9]/g, ''),
        isDetectingLocation,
        setAudienceMode,
        setActiveLocation,
        setActiveLocationBySlug,
        lookupZip,
        detectUserLocation,
        settings: DEFAULT_SITE_SETTINGS
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
