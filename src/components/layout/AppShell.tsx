'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { LocationProvider } from '@/lib/context/LocationContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyEmergencyBar } from '@/components/layout/StickyEmergencyBar';
import { LazyThirdPartyScripts } from '@/components/layout/LazyThirdPartyScripts';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return (
      <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-[#101112]">
        {children}
      </div>
    );
  }

  return (
    <LocationProvider>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <StickyEmergencyBar />
      <LazyThirdPartyScripts />
    </LocationProvider>
  );
}
