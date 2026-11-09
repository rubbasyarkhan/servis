'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  Home as HomeIcon,
  Sparkles,
  Flame,
  Droplets,
  Wrench,
  Hammer,
  Wind,
  AlertCircle
} from 'lucide-react';
import { useLocation } from '@/lib/context/LocationContext';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import { usePathname } from 'next/navigation';
import { SERVICE_CATEGORIES } from '@/lib/data/services';

const SERVICE_AREAS = [
  { name: 'Houston Hub (Central)', slug: 'houston-tx' },
  { name: 'Katy, Texas', slug: 'katy-tx' },
  { name: 'Sugar Land, Texas', slug: 'sugar-land-tx' },
  { name: 'The Woodlands, Texas', slug: 'the-woodlands-tx' },
  { name: 'Pearland, Texas', slug: 'pearland-tx' },
  { name: 'Cypress, Texas', slug: 'cypress-tx' },
];

export function Header() {
  const pathname = usePathname();
  const { phoneNumber, rawPhoneNumber, activeLocation } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  if (pathname?.startsWith('/studio')) return null;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img 
              src={getCloudinaryUrl('/logo.webp')} 
              alt="Service Squad" 
              className="h-12 w-auto object-contain shrink-0" 
              style={{ height: '48px', width: 'auto', maxHeight: '48px' }}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-black text-xl text-[#0B192C] tracking-tight">
                SERVICE <span className="text-[#F4793E]">SQUAD</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#559A23] uppercase">
                Restoration &amp; Multi-Trade
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            <Link 
              href="/" 
              className="font-bold text-sm text-slate-800 hover:text-[#F4793E] transition-colors"
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className="font-bold text-sm text-slate-800 hover:text-[#F4793E] transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 font-bold text-sm py-2 transition-colors ${
                  servicesOpen ? 'text-[#F4793E]' : 'text-slate-800 hover:text-[#F4793E]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full -left-48 w-[880px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-3 gap-6 animate-in fade-in-50 duration-150">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.category} className="space-y-2">
                      <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                        <span className="text-xs font-black uppercase tracking-wider text-[#0B192C]">
                          {cat.category}
                        </span>
                        <span className="text-[10px] font-bold text-[#F4793E] bg-orange-50 px-1.5 py-0.5 rounded">
                          {cat.services.length}
                        </span>
                      </div>
                      <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
                        {cat.services.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/services/${srv.slug}`}
                            className="block text-xs font-medium text-slate-600 hover:text-[#F4793E] hover:bg-slate-50 p-1 rounded transition-colors truncate"
                            onClick={() => setServicesOpen(false)}
                          >
                            • {srv.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 font-bold text-sm py-2 transition-colors ${
                  areasOpen ? 'text-[#F4793E]' : 'text-slate-800 hover:text-[#F4793E]'
                }`}
              >
                <span>Service Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} />
              </button>

              {areasOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-200 p-3 space-y-1 animate-in fade-in-50 duration-150">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/locations/${area.slug}`}
                      className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#F4793E] hover:bg-orange-50 p-2 rounded-lg transition-colors"
                      onClick={() => setAreasOpen(false)}
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#F4793E] shrink-0" />
                      <span>{area.name}</span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link 
                      href="/locations"
                      className="block text-center text-[11px] font-bold text-[#F4793E] hover:underline"
                      onClick={() => setAreasOpen(false)}
                    >
                      View All Texas Hubs →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/resources" 
              className="font-bold text-sm text-slate-800 hover:text-[#F4793E] transition-colors"
            >
              Membership
            </Link>

            <Link 
              href="/resources" 
              className="font-bold text-sm text-slate-800 hover:text-[#F4793E] transition-colors"
            >
              Blog
            </Link>

            <Link 
              href="/offers" 
              className="font-bold text-sm text-slate-800 hover:text-[#F4793E] transition-colors"
            >
              Offers
            </Link>

            <Link 
              href="/contact" 
              className="font-bold text-sm text-slate-800 hover:text-[#F4793E] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Phone Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7139999150"
              className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#E0672E] text-white px-5 py-2.5 rounded-xl font-black text-sm tracking-wide shadow-md shadow-orange-500/20 transition-all hover:shadow-lg"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>(713) 999-9150</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="tel:7139999150"
              className="p-2 rounded-lg bg-orange-50 text-[#F4793E]"
              aria-label="Call (713) 999-9150"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <Link 
              href="/" 
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/offers" 
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offers &amp; Coupons
            </Link>
            <Link 
              href="/membership" 
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              href="/contact" 
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <div>
            <div className="font-black text-xs uppercase tracking-wider text-slate-400 mb-2">
              Our 6 Expert Service Silos
            </div>
            <div className="space-y-3">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.category} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-xs text-[#0B192C] mb-2">{cat.category}</div>
                  <div className="grid grid-cols-1 gap-1">
                    {cat.services.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        className="text-xs text-slate-600 hover:text-[#F4793E] py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {srv.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-black text-xs uppercase tracking-wider text-slate-400 mb-2">
              Service Areas
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              {SERVICE_AREAS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/locations/${a.slug}`}
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 text-slate-800 hover:text-[#F4793E]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MapPin className="w-3 h-3 text-[#F4793E] shrink-0" />
                  <span>{a.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href="tel:7139999150"
              className="w-full flex items-center justify-center gap-2 bg-[#F4793E] text-white py-3 rounded-xl font-black text-sm"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call (713) 999-9150</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
