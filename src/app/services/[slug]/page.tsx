import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  getAllServices, 
  getServiceBySlug 
} from '@/lib/cms/api';
import { 
  Phone, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Wrench, 
  HelpCircle, 
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  MapPin
} from 'lucide-react';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils';
import { getServiceImages } from '@/lib/data/gallery-images';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'article',
      url: `https://servicesquadtx.com/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateFAQSchema(service.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: service.shortTitle, url: `/services/${service.slug}` }
  ]);
  const galleryImages = getServiceImages(service.slug);

  return (
    <div className="space-y-16">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        {galleryImages.length > 0 && (
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={galleryImages[0]}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400 font-semibold">{service.shortTitle}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#F4793E]/20 border border-[#F4793E] text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4793E]" />
              <span>Licensed &amp; Certified Texas Trade</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {service.heroTagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="tel:7139999150"
                data-callrail="true"
                className="bg-[#F4793E] hover:bg-[#E05600] text-white text-center px-8 py-3.5 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wide"
              >
                <Phone className="w-5 h-5" />
                <span>Call Today: (713) 999-9150</span>
              </a>

              <a
                href="#intake-form"
                className="bg-[#1E3E62] hover:bg-[#2B527E] text-white border border-slate-600 text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-colors"
              >
                Request Online Quote
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
            {/* Overview */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h2 className="text-2xl font-black text-[#0B192C] mb-4">
                Service Overview & Rapid Mitigation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>IICRC Certified Master Restorers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Xactimate® Insurance Estimating</span>
                </div>
              </div>
            </section>

            {/* Sub-Services Breakdown */}
            {(service.subServices || []).length > 0 && (
              <section>
                <h2 className="text-2xl font-black text-[#0B192C] mb-6">
                  Specialized {service.shortTitle} Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(service.subServices || []).map((sub) => (
                    <div
                      key={sub.id}
                      className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm"
                    >
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {sub.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {sub.description}
                      </p>

                      {Boolean(sub.keySteps?.length) && (
                        <div className="space-y-1 text-xs text-slate-500">
                          {(sub.keySteps || []).map((step, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Real Field Work & Project Photos */}
            {galleryImages.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <div className="mb-4">
                  <span className="text-xs font-bold text-[#F4793E] uppercase tracking-wider">
                    Authentic Field Documentation
                  </span>
                  <h2 className="text-2xl font-black text-[#0B192C] mt-0.5">
                    Real {service.shortTitle} Job Sites
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Every project is documented with detailed before, during, and after photographic proof to verify code compliance, ensure quality standards, and facilitate seamless insurance claims.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.slice(0, 3).map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="group relative h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm"
                    >
                      <img
                        src={imgSrc}
                        alt={`${service.shortTitle} Field Job ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-white text-xs font-bold">Service Squad Project</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Restoration Process Timeline */}
            {(service.processSteps || []).length > 0 && (
              <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-2xl font-black text-[#0B192C] mb-6">
                  Our Proven Step-by-Step Emergency Process
                </h2>
                <div className="space-y-6">
                  {(service.processSteps || []).map((step) => (
                    <div key={step.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-slate-900">
                            {step.title}
                          </h3>
                          {step.timeWindow && (
                            <span className="text-[11px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">
                              {step.timeWindow}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Industrial Equipment Utilized */}
            {(service.equipment || []).length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-orange-600" />
                  <h2 className="text-xl font-black text-[#0B192C]">
                    Commercial-Grade Technology & Equipment
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  We deploy industry-leading heavy restoration machinery to accelerate recovery time and guarantee pre-loss moisture standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                  {(service.equipment || []).map((eq, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Service Availability / Locations */}
            {(service.locations || []).length > 0 && (
              <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <h2 className="text-xl font-black text-[#0B192C]">
                    Available Service Locations
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  {service.shortTitle} is dispatched 24/7 across the following local Texas branch facilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(service.locations || []).map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-orange-500 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-orange-600 text-sm">
                            {loc.city}, {loc.state}
                          </div>
                          {loc.phone && (
                            <span className="text-[11px] text-slate-500">Dispatch: {loc.phone}</span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs Accordion */}
            {(service.faqs || []).length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-orange-600" />
                  <h2 className="text-2xl font-black text-[#0B192C]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {(service.faqs || []).map((faq, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-xl p-4">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar / Lead Intake */}
          <div className="space-y-6">
            <div id="intake-form" className="sticky top-24 space-y-6">
              <EmergencyIntakeForm preselectedTrade={service.slug} />

              {/* Insurance Billing Assurance */}
              <div className="bg-slate-100 rounded-xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Hassle-Free Insurance Processing
                </div>
                <p>
                  We bill your insurance carrier directly using official Xactimate® line-item claims pricing. You only pay your policy deductible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
