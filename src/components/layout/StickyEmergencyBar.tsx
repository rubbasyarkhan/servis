'use client';

import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { useLocation } from '@/lib/context/LocationContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function StickyEmergencyBar() {
  const pathname = usePathname();
  const { phoneNumber, rawPhoneNumber, activeLocation } = useLocation();

  if (pathname === '/') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0B192C] border-t border-slate-700 px-3 py-2 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${rawPhoneNumber}`}
          data-callrail="true"
          className="flex-1 flex items-center justify-center gap-2 bg-[#FF6500] hover:bg-[#E05600] text-white py-3 px-3 rounded-lg font-extrabold text-sm shadow-lg active:scale-95 transition-all text-center uppercase tracking-wide"
        >
          <Phone className="w-4 h-4" />
          <span>Call {phoneNumber}</span>
        </a>

        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white py-3 px-3 rounded-lg font-bold text-xs border border-slate-600 shadow-md active:scale-95 transition-all text-center"
        >
          <AlertCircle className="w-3.5 h-3.5 text-orange-400" />
          <span>Request Service</span>
        </Link>
      </div>
    </div>
  );
}
