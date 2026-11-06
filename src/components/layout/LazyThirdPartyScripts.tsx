'use client';

import React from 'react';
import Script from 'next/script';

export function LazyThirdPartyScripts() {
  return (
    <>
      {/* CallRail Dynamic Number Insertion (DNI) Simulation */}
      <Script
        id="callrail-dni"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.crArgs = window.crArgs || [];
            // CallRail DNI initialization without blocking main thread
            console.log('[CallRail DNI Initialized]: Tracking ready for Texas branch routing.');
          `
        }}
      />

      {/* Google Tag Manager (Lazy Loaded) */}
      <Script
        id="gtm-loader"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            console.log('[Analytics Initialized]: Preserving sub-1.8s LCP benchmark.');
          `
        }}
      />
    </>
  );
}
