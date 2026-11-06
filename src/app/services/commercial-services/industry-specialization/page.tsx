import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Building2, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

const INDUSTRIES = [
  { id: 'healthcare', name: 'Healthcare & Hospitals', description: 'Critical infection containment (ICRA protocols), negative air filtration, and emergency decontamination.' },
  { id: 'hospitality', name: 'Hospitality & Hotels', description: 'Discreet, rapid extraction and odor removal ensuring minimal guest disruption and room vacancy loss.' },
  { id: 'education', name: 'Education & Universities', description: 'Safe structural drying, mold remediation, and complete turnkey reconstruction during scheduled breaks or rapid turnaround.' },
  { id: 'commercial', name: 'Commercial High-Rise & Office', description: 'Multi-floor water extraction, sprinkler discharge containment, and tenant-ready buildouts.' },
  { id: 'retail', name: 'Retail & Shopping Centers', description: 'Rapid inventory salvage, clean-up, and board-up to get doors reopened safely and quickly.' },
  { id: 'industrial', name: 'Industrial & Manufacturing', description: 'Heavy structural drying, chemical cleanup, machinery protection, and safety compliance.' }
];

export const metadata: Metadata = {
  title: 'Commercial Industry Specializations | Service Squad',
  description: 'Specialized commercial disaster restoration for hospitals, hotels, schools, multi-family properties, and industrial manufacturing plants in Texas.',
  keywords: ['commercial restoration industries', 'hospital infection control restoration', 'hotel water damage repair', 'multi-family property restoration']
};

export default function IndustrySpecializationPage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.commercialBuildout2}
            alt="Commercial Industry Restoration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-[#0B192C]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services/commercial-services" className="hover:text-white transition-colors">Commercial</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-orange-400">Industries Serviced</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#F4793E]" />
              <span>Tailored Industry Protocols</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Property Restoration Specializing in Your Industry
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every industry has distinct regulatory requirements, sensitive equipment, and occupancy schedules. Service Squad provides specialized training and customized restoration protocols for eight major commercial sectors.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="tel:7139999150"
                data-callrail="true"
                className="bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-4 rounded-xl font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-orange-600/30 uppercase tracking-wide"
              >
                <Phone className="w-5 h-5 " />
                <span>Call (713) 999-9150</span>
              </a>

              <Link
                href="#intake-form"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center px-6 py-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Industry Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div 
              key={ind.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:border-orange-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center p-3 mb-6 text-[#F4793E]">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-orange-600">
                  Custom SOPs & Compliance Ready
                </span>
                <Link
                  href="#intake-form"
                  className="text-xs font-black text-slate-900 hover:text-orange-600 flex items-center gap-1"
                >
                  Request Facility Service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form Anchor */}
      <section id="intake-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Industry Intake
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Connect With an Industry Restoration Specialist
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Submit your commercial property requirements below. Our commercial team will respond immediately.
          </p>
        </div>
        <EmergencyIntakeForm />
      </section>
    </div>
  );
}
