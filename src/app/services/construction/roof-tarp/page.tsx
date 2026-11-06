import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Hammer, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Wind, 
  ShieldAlert 
} from 'lucide-react';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Emergency Roof Tarping & Board-Up Services | Service Squad',
  description: '24/7 Emergency roof tarping and window board-up in Houston, TX. Rapid envelope stabilization after storm, fire, or tree impact. Call Service Squad.',
  keywords: ['emergency roof tarping Houston', 'window board up services', 'storm damage board up', 'emergency property tarping Texas']
};

export default function RoofTarpPage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={SITE_IMAGES.roofTarping1}
            alt="Service Squad Emergency Roof Tarping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services/construction" className="hover:text-white transition-colors">Construction</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-orange-400">Roof Tarping & Board-Up</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-[#F4793E]" />
              <span>Immediate Envelope Stabilization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Emergency Roof Tarping & Board-Up Services
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When high winds tear away shingles, a tree falls through your attic, or firefighting crews vent a ceiling, exposed openings allow massive rainwater intrusion. Service Squad deploys within 60 minutes to seal roofs and board up compromised windows.
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
                <span>Dispatch Tarp Crew Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Immediate Tarping Matters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Prevent Secondary Damage</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Uncovered roof breaches cause catastrophic insulation soaking, drywall ceiling collapses, and electrical fires. Tarping prevents further rain infiltration immediately.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Heavy-Duty Poly Fastening</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never use flimsy tarps or sandbags that blow away. We fasten industrial-grade 10-mil UV-resistant tarps with custom wooden batten furring strips.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Insurance Compliance</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Most property insurance policies strictly require homeowners and business owners to take reasonable steps to prevent further damage. Our emergency tarp invoice is fully covered by your insurance policy.
            </p>
          </div>
        </div>
      </section>

      {/* Field Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
            Authentic Job Sites
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-1">
            Recent Roof Tarping &amp; Stabilization Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-56 w-full">
              <img
                src={SITE_IMAGES.roofTarping1}
                alt="Severe Roof Damage Tarping"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Residential Roof Envelope Stabilization</h4>
              <p className="text-xs text-slate-500 mt-1">Storm-damaged shingle coverage with wooden furring batten strips.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-56 w-full">
              <img
                src={SITE_IMAGES.roofTarping2}
                alt="Emergency Commercial Tarp Application"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Commercial Roof Emergency Sealing</h4>
              <p className="text-xs text-slate-500 mt-1">Industrial membrane protection before full structural rebuild.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-56 w-full">
              <img
                src={SITE_IMAGES.roofDecking}
                alt="Roof Decking Inspection & Repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Roof Decking &amp; Structural Repair</h4>
              <p className="text-xs text-slate-500 mt-1">Full replacement of rotted plywood decking and underlayment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Anchor */}
      <section id="intake-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Emergency Dispatch
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Request Emergency Tarping & Board-Up
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Technicians are on standby 24/7. Submit your location for immediate contact.
          </p>
        </div>
        <EmergencyIntakeForm />
      </section>
    </div>
  );
}
