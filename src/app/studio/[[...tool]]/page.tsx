'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

// Suppress known upstream Sanity sortable list DOM attribute warning in React development mode
if (typeof window !== 'undefined') {
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('disableTransition')) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
