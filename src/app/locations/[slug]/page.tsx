import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  getAllLocations, 
  getLocationBySlug, 
  getAllServices 
} from '@/lib/cms/api';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  ChevronRight,
  UserCheck,
  Building2
} from 'lucide-react';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/utils';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locations = await getAllLocations();
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Disaster Restoration & 24/7 Extraction in ${location.city}, TX | Service Squad`,
    description: `Emergency water damage restoration, fire repair, mold remediation, and plumbing in ${location.city}, TX. Call ${location.phone} for 60-min response.`,
    openGraph: {
      title: `Service Squad Restoration - ${location.city}, TX`,
      description: `24/7 Disaster restoration in ${location.city}, Texas. Call ${location.phone}.`,
      type: 'website',
      url: `https://servicesquadtx.com/locations/${location.slug}`
    }
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);
  const services = await getAllServices();

  if (!location) {
    notFound();
  }

  const localBusinessSchema = generateLocalBusinessSchema(location);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/#locations' },
    { name: `${location.city}, TX`, url: `/locations/${location.slug}` }
  ]);

  return (
    <div className="space-y-16">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="bg-[#0B192C] text-white pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#locations" className="hover:text-white transition-colors">
              Texas Locations
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400 font-semibold">{location.city}, TX</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#F4793E]" />
              <span>
                {location.isMainHub ? 'Central Hub' : 'Regional Hub'} • {location.serviceRadiusMiles}-Mile Service Coverage
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Disaster Restoration &amp; Multi-Trade Services in {location.city}, TX
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Serving {location.city} residents and commercial facilities with rapid on-site emergency water extraction, fire recovery, mold remediation, packout, and licensed reconstruction.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                data-callrail="true"
                className="bg-[#F4793E] hover:bg-[#E05600] text-white text-center px-8 py-3.5 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wide"
              >
                <Phone className="w-5 h-5" />
                <span>Call Local Branch: {location.phone}</span>
              </a>

              <a
                href="#intake-form"
                className="bg-[#1E3E62] hover:bg-[#2B527E] text-white border border-slate-600 text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-colors"
              >
                Request Service Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Branch Details Card */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-black text-[#0B192C]">
                    {location.city} Field Command Facility
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {location.address.street}, {location.address.city}, {location.address.state} {location.address.zip}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900 text-xs font-bold shrink-0">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{location.localReviewStats.rating} / 5.0 ({location.localReviewStats.count} Reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                  <span><strong>Availability:</strong> {location.emergencyHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Field Director:</strong> {location.localManager}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Coverage:</strong> {location.serviceRadiusMiles}-Mile Immediate Dispatch Radius</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
                  <span><strong>Licensing:</strong> Texas TDLR & IICRC Certified</span>
                </div>
              </div>
            </section>

            {/* Local Services Offered */}
            <section>
              <h2 className="text-2xl font-black text-[#0B192C] mb-6">
                Full-Trade Restoration Services in {location.city}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((svc) => (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.slug}`}
                    className="p-5 rounded-xl bg-white border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all group"
                  >
                    <div className="font-bold text-slate-900 group-hover:text-orange-600 text-sm mb-1">
                      {svc.title}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {svc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* ZIP Codes Covered */}
            <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h2 className="text-xl font-black text-[#0B192C] mb-3">
                {location.city} Service ZIP Codes Covered
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Our mobile restoration units are stationed strategically to guarantee rapid arrival across the following postal codes:
              </p>
              <div className="flex flex-wrap gap-2">
                {location.coveredZips.map((zip) => (
                  <span
                    key={zip}
                    className="bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold px-3 py-1.5 rounded-md"
                  >
                    ZIP {zip}
                  </span>
                ))}
              </div>
            </section>

            {/* Local Response Fleet & Field Crews */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="mb-4">
                <span className="text-xs font-bold text-[#F4793E] uppercase tracking-wider">
                  Direct Field Deployment
                </span>
                <h2 className="text-2xl font-black text-[#0B192C] mt-0.5">
                  Our {location.city} Field Response Fleet
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Service Squad operates dedicated GPS-tracked mobile response units staged strategically throughout {location.city} and surrounding Texas neighborhoods to guarantee rapid on-site arrival.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                  <div className="h-48 w-full">
                    <img
                      src={SITE_IMAGES.fleetVan}
                      alt={`${location.city} Service Squad Fleet`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 text-sm">{location.city} Direct Dispatch Units</h4>
                    <p className="text-xs text-slate-500 mt-1">Dispatched locally with commercial drying pumps and diagnostic gear.</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                  <div className="h-48 w-full">
                    <img
                      src={SITE_IMAGES.technicianEstimate}
                      alt={`${location.city} On-Site Estimator`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 text-sm">Certified Field Directors</h4>
                    <p className="text-xs text-slate-500 mt-1">Providing upfront itemized quotes and insurance guidance in {location.city}.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Local Customer Testimonials */}
            {location.localTestimonials.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-xl font-black text-[#0B192C] mb-6">
                  Verified Reviews from {location.city} Property Owners
                </h2>
                <div className="space-y-4">
                  {location.localTestimonials.map((t, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold text-slate-900 text-sm">{t.author}</span>
                          <span className="text-xs text-slate-500 ml-2">({t.role})</span>
                        </div>
                        <div className="flex items-center text-amber-500">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 italic">
                        "{t.comment}"
                      </p>
                      <div className="text-[11px] font-semibold text-orange-600 mt-2">
                        Service Provided: {t.service}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Lead Intake Form Sidebar */}
          <div className="space-y-6">
            <div id="intake-form" className="sticky top-24 space-y-6">
              <EmergencyIntakeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
