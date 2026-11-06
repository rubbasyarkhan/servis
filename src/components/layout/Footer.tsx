'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, ShieldCheck, Clock, Award, Building2, Home, BookOpen, Briefcase } from 'lucide-react';
import { CORE_SERVICES } from '@/lib/data/services';
import { TEXAS_LOCATIONS } from '@/lib/data/locations';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import { useLocation } from '@/lib/context/LocationContext';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const { phoneNumber, rawPhoneNumber, settings } = useLocation();

  const primaryServices = CORE_SERVICES.filter(s => 
    ['water-damage', 'fire-damage', 'mold-remediation', 'storm-services', 'construction', 'cleaning-services'].includes(s.slug)
  );

  return (
    <footer className="bg-[#070F1E] text-slate-400 text-sm border-t border-slate-800">
      {/* Upper Emergency Action Strip */}
      <div className="bg-[#0B192C] border-b border-slate-800/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-extrabold text-lg sm:text-xl">
                Rapid Disaster Emergency Services
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Water extraction, fire board-up, and property loss containment across Greater Houston and Texas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${rawPhoneNumber}`}
              data-callrail="true"
              className="bg-[#FF6500] hover:bg-[#E05600] text-white px-6 py-3 rounded-lg font-black text-base flex items-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call {phoneNumber}</span>
            </a>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg font-bold text-sm border border-slate-700 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={getCloudinaryUrl('/logo.webp')} alt="Service Squad" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-black text-white tracking-tight">
                SERVICE<span className="text-[#F4793E]">SQUAD</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Service Squad is a premier multi-trade disaster recovery and property restoration contractor, delivering professional water extraction, fire damage restoration, mold remediation, storm recovery, and full turnkey reconstruction.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{settings.licenseInfo}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Restoration Services */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Home className="w-4 h-4 text-orange-500" />
              <span>Restoration Services</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {primaryServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/construction/roof-tarp" className="hover:text-white transition-colors">
                  Emergency Roof Tarping & Board-Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Commercial & Large Loss */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-orange-500" />
              <span>Commercial Services</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/commercial-services" className="hover:text-white transition-colors">
                  Commercial Restoration Overview
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-services/large-loss" className="hover:text-white transition-colors">
                  Commercial Large Loss Team
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-services/emergency-ready-plan" className="hover:text-white transition-colors">
                  Emergency Ready Plan (ERP)
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-services/industry-specialization" className="hover:text-white transition-colors">
                  Industries Serviced
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning-services" className="hover:text-white transition-colors">
                  Specialized Biohazard & Pathogens
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Texas Coverage Hubs & Company */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Locations & Company</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/locations" className="text-orange-400 font-bold hover:underline">
                  View All Texas Locations →
                </Link>
              </li>
              {TEXAS_LOCATIONS.slice(0, 4).map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{loc.city}, TX</span>
                    {loc.isMainHub && (
                      <span className="text-[10px] text-blue-400 font-bold">(Hub)</span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers & Job Openings
                </Link>
              </li>
              <li>
                <Link href="/franchise-ownership" className="hover:text-white transition-colors">
                  Own a Franchise
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Restoration Resources
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Service Squad. All rights reserved.
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact & Claims
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
