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
  FileCheck,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Emergency Ready Plan (ERP) for Businesses | Service Squad',
  description: 'Proactive disaster preparedness for facility managers. Free Emergency Ready Plan (ERP) mapping critical shutoffs and priority recovery protocols.',
  keywords: ['emergency ready plan ERP', 'commercial disaster planning', 'facility risk assessment', 'business continuity restoration']
};

export default function EmergencyReadyPlanPage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.commercialBuildout1}
            alt="Service Squad Commercial Emergency Preparedness"
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
            <span className="text-orange-400">Emergency Ready Plan (ERP)</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F4793E]" />
              <span>Proactive Risk Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Service Squad Emergency Ready Plan (ERP)
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Up to 50% of businesses never reopen following a catastrophic disaster. The Service Squad Emergency Ready Profile serves as a digital quick-reference guide containing critical building shut-off locations, key contacts, and priority action steps so you can mitigate damage before our crews even arrive.
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
                <span>Request Free ERP Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why ERP Matters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Preparation Minimizes Downtime
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Why Every Facility Needs an Emergency Ready Plan
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            During a flood or fire, seconds count. Knowing exact shutoff valves prevents tens of thousands in secondary structural damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-black text-xl mb-4">
              01
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">A No-Cost Assessment</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We conduct a comprehensive walk-through of your facility at no charge to document critical valves, riser shutoffs, power mains, and floor plans.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xl mb-4">
              02
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Concise Digital Profile</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your customized ERP is accessible digitally on mobile devices or in print format, detailing exact physical shut-off steps and photos for building staff.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-xl mb-4">
              03
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Priority Response Status</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ERP partners receive top priority queue dispatch during widespread regional catastrophes such as hurricanes, tropical storms, and severe freezes.
            </p>
          </div>
        </div>
      </section>

      {/* Form Anchor */}
      <section id="intake-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Complimentary Service
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Schedule Your Free Facility ERP Walkthrough
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Submit your commercial property details below. A commercial project manager will contact you within 24 hours.
          </p>
        </div>
        <EmergencyIntakeForm />
      </section>
    </div>
  );
}
