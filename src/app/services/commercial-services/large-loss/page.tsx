import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Building2, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Droplets, 
  Wind, 
  FileCheck, 
  ChevronRight 
} from 'lucide-react';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Commercial Large Loss Response Team | Service Squad',
  description: 'Elite catastrophe mobilization for commercial high-rises, industrial complexes, and multi-facility disasters. 24/7 incident command.',
  keywords: ['commercial large loss restoration', 'industrial disaster recovery', 'high-rise water extraction', 'desiccant drying trailers Texas']
};

export default function CommercialLargeLossPage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={SITE_IMAGES.commercialBuildout2}
            alt="Service Squad Commercial Large Loss"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services/commercial-services" className="hover:text-white transition-colors">Commercial</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-orange-400">Large Loss Team</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#F4793E]" />
              <span>Commercial Catastrophe Division</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Large Loss Response Team
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When catastrophic property damage strikes a major hospital, high-rise office tower, manufacturing plant, or retail center, standard residential equipment is not enough. The Service Squad Commercial Large Loss Team deploys heavy industrial equipment, desiccant trailers, and certified Incident Commanders within minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="tel:7139999150"
                data-callrail="true"
                className="bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-4 rounded-xl font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-orange-600/30 uppercase tracking-wide"
              >
                <Phone className="w-5 h-5 " />
                <span>Priority Dispatch: (713) 999-9150</span>
              </a>

              <Link
                href="#intake-form"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center px-6 py-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Commercial Roster</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Rapid Mobilization</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Catastrophe trailers stationed strategically across Texas with industrial generators, high-capacity air scrubbers, and drying systems ready for immediate deployment.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Incident Command Structure</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every large loss is assigned a dedicated Project Director who interfaces directly with risk managers, facilities directors, adjusters, and corporate leadership.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Detailed Insurance Billing</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Daily moisture logs, thermal infrared imaging reports, time-and-materials tracking, and direct submission via commercial Xactimate® guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Equipment Fleet */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-orange-400">
              Heavy Industrial Fleet
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              Engineered for Multi-Story & Campus-Scale Losses
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="text-3xl font-black text-orange-500 mb-1">15,000 CFM</div>
              <h4 className="text-base font-bold text-white mb-2">Desiccant Drying Trailers</h4>
              <p className="text-xs text-slate-400">
                Mass moisture extraction ducted directly into multi-floor elevator shafts and commercial spaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="text-3xl font-black text-emerald-400 mb-1">500 kW</div>
              <h4 className="text-base font-bold text-white mb-2">Towable Diesel Power</h4>
              <p className="text-xs text-slate-400">
                Self-contained heavy electrical generation powering emergency systems and drying equipment when the grid is severed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="text-3xl font-black text-cyan-400 mb-1">ICRA Class IV</div>
              <h4 className="text-base font-bold text-white mb-2">Hospital Containment</h4>
              <p className="text-xs text-slate-400">
                Strict negative air pressure barriers ensuring surgical suites and patient wards remain 100% uncontaminated.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="text-3xl font-black text-amber-400 mb-1">24/7 Live</div>
              <h4 className="text-base font-bold text-white mb-2">Incident Command</h4>
              <p className="text-xs text-slate-400">
                Full-time onsite liaison coordinating shift work, safety compliance, and rapid tenant return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Project Field Documentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
            Proven Industrial Deployments
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">
            Commercial Rebuild &amp; Mitigation Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Real documentation from our large-scale commercial framing, interior buildouts, and catastrophe flood extraction operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-56 w-full">
              <img
                src={SITE_IMAGES.commercialBuildout2}
                alt="Commercial Multi-Floor Interior Buildout"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-900 text-sm">Commercial Interior Structural Framing</h4>
              <p className="text-xs text-slate-500 mt-1">Multi-unit steel stud framing and full mechanical/plumbing integration.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-56 w-full">
              <img
                src={SITE_IMAGES.commercialBuildout1}
                alt="Commercial Facility Reconstruction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-900 text-sm">High-Square-Footage Rebuild</h4>
              <p className="text-xs text-slate-500 mt-1">Turnkey drywall, acoustics, and code-compliant commercial finishes.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-56 w-full">
              <img
                src={SITE_IMAGES.waterExtractionVan}
                alt="Commercial Mobile Water Extraction Unit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-900 text-sm">Industrial Mobile Extraction Unit</h4>
              <p className="text-xs text-slate-500 mt-1">High-volume vacuum extraction and LGR dehumidification trailers on site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Anchor */}
      <section id="intake-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Commercial Intake
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Dispatch Large Loss Team
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Submit your commercial facility details below for immediate priority escalation.
          </p>
        </div>
        <EmergencyIntakeForm />
      </section>
    </div>
  );
}
