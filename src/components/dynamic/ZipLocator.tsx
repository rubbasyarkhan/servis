'use client';

import React, { useState } from 'react';
import { Search, MapPin, Phone, CheckCircle, ArrowRight, AlertTriangle, Navigation } from 'lucide-react';
import { useLocation } from '@/lib/context/LocationContext';
import { LocationHub } from '@/lib/types';
import Link from 'next/link';

export function ZipLocator() {
  const { activeLocation, lookupZip, detectUserLocation } = useLocation();
  const [zipInput, setZipInput] = useState('');
  const [searchedLocation, setSearchedLocation] = useState<LocationHub | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;

    setLoading(true);
    const result = await lookupZip(zipInput);
    setSearchedLocation(result);
    setHasSearched(true);
    setLoading(false);
  };

  const displayLoc = searchedLocation || activeLocation;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Find Local Help & Response Teams
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B192C]">
            Locate Your Nearest Texas Squad
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Enter your ZIP code to verify local service coverage and direct team dispatch.
          </p>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2 max-w-md w-full">
          <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                placeholder="Enter 5-Digit ZIP (e.g. 77081, 77494)"
                maxLength={5}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0B192C] hover:bg-[#1E3E62] text-white px-5 py-3 rounded-lg font-bold text-sm transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Checking...' : 'Check Hub'}
            </button>
          </form>
          <button
            type="button"
            onClick={async () => {
              setLoading(true);
              const loc = await detectUserLocation();
              if (loc) {
                setSearchedLocation(loc);
                setZipInput(loc.zip || '');
                setHasSearched(true);
              }
              setLoading(false);
            }}
            disabled={loading}
            className="border border-slate-300 hover:border-[#559A23] hover:text-[#559A23] bg-white text-slate-700 px-3.5 py-3 rounded-lg font-bold text-xs transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
            title="Use My Current Location"
          >
            <Navigation className="w-3.5 h-3.5 text-[#559A23]" />
            <span className="hidden sm:inline">GPS</span>
          </button>
        </div>
      </div>

      {/* Result Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900 text-base sm:text-lg">
              {displayLoc.city}, {displayLoc.state || 'TX'} Command Hub
            </span>
            {displayLoc.isMainHub && (
              <span className="text-[11px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded">
                Central Houston Hub (ZIP 77081)
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              Direct Coverage Hub ({displayLoc.serviceRadiusMiles}-Mile Service Radius)
            </span>
            <span>•</span>
            <span>{displayLoc.emergencyHours}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${displayLoc.phone.replace(/[^0-9]/g, '')}`}
            data-callrail="true"
            className="bg-[#F4793E] hover:bg-[#E0672E] text-white px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>{displayLoc.phone}</span>
          </a>

          <Link
            href={`/locations/${displayLoc.slug}`}
            className="text-slate-700 hover:text-[#F4793E] font-bold text-xs sm:text-sm flex items-center gap-1"
          >
            <span>Hub Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {hasSearched && !searchedLocation && (
        <div className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 p-2.5 rounded-lg flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>
            ZIP code is handled by our Central Houston staging fleet. Call our team at (713) 999-9150 for immediate assistance.
          </span>
        </div>
      )}
    </div>
  );
}
