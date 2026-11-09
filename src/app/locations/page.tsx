import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Search,
  Building2,
  Star
} from 'lucide-react';
import { getAllLocations } from '@/lib/cms/api';
import { ZipLocator } from '@/components/dynamic/ZipLocator';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Texas Response Hubs & Locations Directory | Service Squad',
  description: 'Find your nearest Service Squad 24/7 restoration and emergency response hub across Texas. Under 60-minute on-site dispatch.',
  keywords: ['restoration company near me', 'Service Squad locations', 'Houston restoration hub', 'Katy TX emergency water damage', 'The Woodlands TX mold remediation']
};

export default async function LocationsDirectoryPage() {
  const locations = await getAllLocations();

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={SITE_IMAGES.fleetVan}
            alt="Service Squad Texas Response Fleet"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#F4793E]" />
              <span>Texas Response Directory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Find Your Nearest Service Squad Location
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Disaster doesn’t wait for business hours. Service Squad maintains strategically positioned response hubs and mobile fleet units across Greater Houston and Texas to guarantee arrival in 60 minutes or less.
            </p>

            <div className="pt-2">
              <ZipLocator />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-orange-600">
              Active Coverage
            </span>
            <h2 className="text-3xl font-black text-[#0B192C] mt-1">
              Active Texas Response Hubs
            </h2>
          </div>
          <div className="text-xs text-slate-500">
            All branches operate 24/7/365 emergency call centers
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-orange-500 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  {loc.isMainHub ? (
                    <span className="text-[11px] bg-blue-600 text-white font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Central Hub
                    </span>
                  ) : (
                    <span className="text-[11px] bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-full">
                      Branch Hub
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                  {loc.city}, TX
                </h3>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {loc.address.street}, {loc.city}, TX {loc.zip}
                </p>

                <div className="flex items-center gap-2 mb-4 text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800">
                    {loc.localReviewStats?.rating ?? (loc as any).googleReviewRating ?? 4.9}
                  </span>
                  <span className="text-slate-400">
                    ({loc.localReviewStats?.count ?? (loc as any).googleReviewCount ?? 250} Reviews)
                  </span>
                </div>

                <div className="text-xs text-slate-600 space-y-1 mb-6">
                  <div><strong>Response Radius:</strong> {loc.serviceRadiusMiles || 30} Miles</div>
                  <div><strong>Hours:</strong> {loc.emergencyHours || '24/7/365 Emergency Dispatch'}</div>
                  <div><strong>Dispatch Director:</strong> {loc.localManager || 'Marcus Vance, Master Restorer (IICRC #84920)'}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                  className="text-sm font-black text-orange-600 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>{loc.phone}</span>
                </a>

                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-xs font-bold text-slate-900 group-hover:text-orange-600 flex items-center gap-1"
                >
                  Branch Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black">
            Don&apos;t See Your Exact City Listed?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Our Central Houston Hub (ZIP 77081) deploys mobile restoration trailers across all surrounding counties within 60 minutes.
          </p>
          <div className="pt-2">
            <a
              href="tel:7139999150"
              className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-4 rounded-xl font-black text-base shadow-xl uppercase tracking-wider"
            >
              <Phone className="w-5 h-5" />
              <span>Call Corporate Dispatch: (713) 999-9150</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
