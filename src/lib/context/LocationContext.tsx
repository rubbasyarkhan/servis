'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
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
  const userManualOverrideRef = useRef<boolean>(false);

  // Update phone whenever activeLocation changes
  useEffect(() => {
    setPhoneNumber(activeLocation.phone);
  }, [activeLocation]);

  // Persist helper
  const setActiveLocation = useCallback((loc: LocationHub) => {
    userManualOverrideRef.current = true;
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
      const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.city && parsed.phone) {
          userManualOverrideRef.current = true;
          setActiveLocationState(parsed);
          return;
        }
      }
    } catch {
      // Ignore storage read error
    }

    // If no prior location was saved and user has not picked one yet, auto-detect location via IP in background
    let mounted = true;
    detectUserLocationFromIP().then((detected) => {
      if (mounted && detected && !userManualOverrideRef.current) {
        try {
          const stored = localStorage.getItem(STORAGE_KEY);
          if (!stored) {
            setActiveLocationState(detected);
          }
        } catch {
          setActiveLocationState(detected);
        }
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const setActiveLocationBySlug = useCallback((slug: string) => {
    const found = TEXAS_LOCATIONS.find((l) => l.slug === slug);
    if (found) {
      setActiveLocation(found);
    }
  }, [setActiveLocation]);

  const lookupZip = useCallback(async (zip: string): Promise<LocationHub | null> => {
    userManualOverrideRef.current = true;
    const loc = await findLocationByZip(zip);
    if (loc) {
      setActiveLocation(loc);
      return loc;
    }
    return null;
  }, [setActiveLocation]);

  const detectUserLocation = useCallback(async (): Promise<LocationHub | null> => {
    userManualOverrideRef.current = true;
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
