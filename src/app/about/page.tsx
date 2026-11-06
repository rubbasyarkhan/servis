import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  MapPin,
  Wrench,
  Flame,
  Droplets,
  Wind,
  Check,
  Sparkles
} from 'lucide-react';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'About Us | Service Squad Houston',
  description: 'Learn about Service Squad: premier plumbing, HVAC, disaster restoration, and turnkey construction provider in Greater Houston, TX. Call (713) 999-9150.',
  keywords: ['about Service Squad', 'Houston restoration company', 'licensed contractor Houston', 'plumbing HVAC construction Houston']
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F7F8] min-h-screen text-slate-900 font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-[#0B192C] text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={SITE_IMAGES.fleetVan} alt="Service Squad Fleet Operations" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-[#F4793E] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F4793E]" />
              <span>Your Trusted Home &amp; Commercial Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              About Service Squad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Welcome to Service Squad, your premier home and commercial service provider in the Greater Houston area. Founded with a mission to deliver top-notch property trades, licensed emergency recovery, and customer-first craftsmanship.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="tel:7139999150"
                className="bg-[#F4793E] hover:bg-[#E0672E] text-white px-8 py-4 rounded-xl font-black text-base flex items-center gap-3 uppercase tracking-wide shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call Today: (713) 999-9150</span>
              </a>
              <Link
                href="/contact"
                className="bg-[#1E3E62] hover:bg-[#2B527E] text-white border border-slate-600 px-6 py-4 rounded-xl font-bold text-base transition-colors"
              >
                Request Online Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Mission & Story */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F4793E] mb-3">
              <span>Our Story &amp; Dedication</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] leading-tight mb-6">
              Redefining Multi-Trade Excellence in Greater Houston
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Service Squad was established with a singular objective: to eliminate the stress of property damage and mechanical breakdowns by delivering dependable, end-to-end solutions under one roof. What began as a dedicated local initiative has expanded into a comprehensive service contractor trusted across Houston, Bellaire, Katy, Pearland, Sugar Land, and surrounding Texas communities.
              </p>
              <p>
                Our specialized divisions encompass licensed plumbing repairs, rapid 24/7 air conditioning, certified water and fire disaster recovery, mold remediation, and complete turnkey general construction. Every technician deployed is fully background-checked, insured, and equipped with industry-leading diagnostic technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#F4793E] mb-1">24/7/365</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Emergency Response</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#559A23] mb-1">Sub-60 Min</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average On-Site Arrival</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={SITE_IMAGES.technicianEstimate} 
              alt="Service Squad Technician Customer Consultation" 
              className="rounded-2xl shadow-xl border border-slate-200 w-full object-cover max-h-[480px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0B192C] text-white p-6 rounded-2xl shadow-2xl border border-slate-700 max-w-xs hidden sm:block">
              <div className="text-xs font-bold text-[#F4793E] uppercase tracking-wider mb-1">Certified Craftsmanship</div>
              <div className="text-sm text-slate-300">All technicians are licensed, bonded, insured, and background-checked for your peace of mind.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Service Squad (4 Pillars) */}
      <section className="bg-white py-16 border-t border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
              Why Property Owners Rely on Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2">
              The Service Squad Standard
            </h2>
            <p className="text-base text-slate-500 mt-3">
              Professional standards, transparent communication, and verified technical expertise on every call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#F4793E] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2">Licensed &amp; Bonded</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully credentialed Texas general contractors and certified remediation specialists adhering to OSHA and IICRC standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#559A23] mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2">Rapid Response</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When burst pipes or AC failure strike, our local Houston staging fleet mobilizes immediately to protect your home.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2">Upfront Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent itemized estimates before work starts. No hidden surprises or arbitrary overtime fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2">Multi-Trade Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From emergency mitigation to final coat of paint, our teams complete turnkey projects without subcontractor delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Before & After Workmanship */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
              Demonstrated Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2">
              Before &amp; After Property Restoration
            </h2>
            <p className="text-base text-slate-500 mt-2">
              See how our certified crews restore flooded, fire-damaged, and outdated properties back to pristine condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative h-64 bg-slate-900">
                  <img
                    src={SITE_IMAGES.remodelBefore1}
                    alt="Master Bathroom Before Remodel"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                    Before
                  </span>
                </div>
                <div className="relative h-64 bg-slate-900">
                  <img
                    src={SITE_IMAGES.remodelAfter1}
                    alt="Master Bathroom After Remodel"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#559A23] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#F4793E] uppercase">Residential Construction</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Master Bathroom Full Demolition &amp; Luxury Rebuild</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Complete tile tear-out, custom dual vanity installation, frameless glass walk-in shower, and moisture-resistant drywall.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative h-64 bg-slate-900">
                  <img
                    src={SITE_IMAGES.remodelBefore2}
                    alt="Water Damaged Flooring Before"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                    Before
                  </span>
                </div>
                <div className="relative h-64 bg-slate-900">
                  <img
                    src={SITE_IMAGES.remodelAfter2}
                    alt="Flooring After Water Mitigation"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#559A23] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#559A23] uppercase">Emergency Flood Recovery</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Post-Burst-Pipe Structural Drying &amp; Floor Reconstruction</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Emergency extraction, antimicrobial treatment, subfloor stabilization, and brand-new engineered hardwood installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities, Training Labs & Fleet */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#559A23]">
              Houston Headquarters &amp; Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2">
              Our Training Facilities &amp; Service Fleet
            </h2>
            <p className="text-base text-slate-500 mt-2">
              We invest heavily in hands-on training labs and specialized response vehicles to guarantee superior on-site service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <div className="h-48 w-full">
                <img
                  src={SITE_IMAGES.trainingFacility}
                  alt="Service Squad Training Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 text-sm">Houston Training Center</h4>
                <p className="text-xs text-slate-600 mt-1">Continuous technical calibration and apprentice safety certifications.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <div className="h-48 w-full">
                <img
                  src={SITE_IMAGES.fleetVan}
                  alt="Service Squad Response Van"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 text-sm">Direct-Dispatch Vans</h4>
                <p className="text-xs text-slate-600 mt-1">Equipped with mobile extraction units, desiccant air movers, and parts.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <div className="h-48 w-full">
                <img
                  src={SITE_IMAGES.hvacCrew}
                  alt="Service Squad HVAC Crew"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 text-sm">Certified Field Crews</h4>
                <p className="text-xs text-slate-600 mt-1">Licensed technicians delivering precision repair and rapid response.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <div className="h-48 w-full">
                <img
                  src={SITE_IMAGES.plumbingTraining}
                  alt="Commercial Plumbing Mockup Lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 text-sm">Plumbing Rig Labs</h4>
                <p className="text-xs text-slate-600 mt-1">Hands-on water heater, valve replacement, and repiping practice rigs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#0B192C] text-white py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">
              Need Prompt Property Assistance?
            </h3>
            <p className="text-sm text-slate-300">
              Our 24-hour dispatchers are standing by across Greater Houston and Texas.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:7139999150"
              className="bg-[#F4793E] hover:bg-[#E0672E] text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg"
            >
              Call (713) 999-9150
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
