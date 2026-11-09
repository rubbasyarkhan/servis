import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Wrench, 
  Droplets, 
  Flame, 
  Wind, 
  Hammer, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Phone
} from 'lucide-react';
import { getAllServices } from '@/lib/cms/api';
import { SERVICE_CATEGORIES } from '@/lib/data/services';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'All Restoration, Plumbing & HVAC Services | Service Squad',
  description: 'Comprehensive 24/7 disaster restoration, emergency plumbing, HVAC, mold removal, and reconstruction services across Greater Houston and Texas.',
};

export default async function ServicesDirectoryPage() {
  const allServices = await getAllServices();

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={SITE_IMAGES.heroBanner}
            alt="Service Squad Emergency Response Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F4793E]" />
              <span>Full Trade Directory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Comprehensive Disaster Restoration &amp; Trade Services
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From catastrophic flood and fire recovery to licensed 24/7 plumbing, HVAC repair, and full structural reconstruction. We provide turnkey emergency restoration backed by IICRC certification.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:7139999150"
                className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#e0682e] text-white font-black px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-500/20 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call 24/7 Dispatch: (713) 999-9150</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl transition-colors border border-white/20 text-sm"
              >
                <span>Request Service Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Specialized Silos
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Explore All 8 Trade Categories
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm sm:text-base">
            Select a service category below to view specific emergency procedures, equipment, certified response times, and sub-services.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.category} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F4793E]">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#0B192C]">{cat.category}</h3>
                    <p className="text-xs text-slate-500">{cat.services.length} Specialized Offerings</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.services.map((srv) => {
                  const matchingDoc = allServices.find((s) => s.slug === srv.slug);
                  return (
                    <Link
                      key={srv.slug}
                      href={`/services/${srv.slug}`}
                      className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <h4 className="font-bold text-[#0B192C] group-hover:text-[#F4793E] transition-colors text-sm sm:text-base">
                          {srv.name}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {matchingDoc?.description || `Professional emergency service and repairs throughout Greater Houston and Texas.`}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-3 border-t border-slate-100 text-xs">
                        <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                          <Clock className="w-3 h-3 text-orange-500" />
                          <span>&lt; 60 Min Arrival</span>
                        </span>
                        <span className="font-bold text-orange-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          View Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
