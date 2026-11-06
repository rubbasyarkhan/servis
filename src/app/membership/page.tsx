import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Check, Clock, Phone, Sparkles, Zap, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'SSS Membership Club | Service Squad Super Saver Program',
  description: 'Join the Service Squad Super Saver (SSS) membership. Save on annual HVAC tune-ups, plumbing checks, zero diagnostic fees & 15% discount on all repairs.',
  keywords: ['home service membership Houston', 'AC maintenance plan', 'plumbing protection plan Houston TX']
};

export default function MembershipPage() {
  const benefits = [
    {
      title: '15% Off All Repairs',
      desc: 'Save 15% on any plumbing, AC, drain cleaning, or home service repair throughout the year.'
    },
    {
      title: 'Zero Diagnostic Fees',
      desc: 'Never pay standard dispatch or trip inspection fees when work is performed on your property.'
    },
    {
      title: 'Priority 24/7 Scheduling',
      desc: 'Jump to the front of the dispatch line. When disaster strikes, SSS members receive guaranteed priority response.'
    },
    {
      title: 'Annual 21-Point AC Tune-Up',
      desc: 'Comprehensive cooling system health check to maximize efficiency and extend equipment lifespan.'
    },
    {
      title: 'Whole-Home Plumbing Inspection',
      desc: 'Annual evaluation of all supply lines, valves, water heater safety checks, and leak detection.'
    },
    {
      title: 'Extended Warranties',
      desc: 'Double parts and labor warranty protection on all repairs completed by Service Squad technicians.'
    }
  ];

  return (
    <div className="bg-[#F7F7F8] min-h-screen text-slate-900 font-sans">
      
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={SITE_IMAGES.technicianEstimate}
            alt="Service Squad Membership Inspection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-[#559A23] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#559A23]" />
              <span>Service Squad Super Saver (SSS) Program</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Start Saving on Home Repairs with SSS Membership
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Protect your home investment, lower your seasonal utility bills, and gain peace of mind with Houston’s premier multi-trade VIP protection plan.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="tel:7139999150"
                className="bg-[#F4793E] hover:bg-[#E0672E] text-white px-8 py-4 rounded-xl font-black text-base flex items-center gap-3 uppercase tracking-wide shadow-xl"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call to Join: (713) 999-9150</span>
              </a>
              <Link
                href="/contact?type=membership"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-base transition-colors"
              >
                Sign Up Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Details Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-wider text-[#559A23]">
            Comprehensive Protection
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2">
            Why Hundreds of Houstonians Choose SSS
          </h2>
          <p className="text-base text-slate-500 mt-3">
            One membership covers your heating, air conditioning, plumbing, and emergency property recovery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-[#559A23] mb-4">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B192C] mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Join Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#559A23] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-block bg-green-100 text-[#559A23] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Easy Monthly or Annual Billing
            </div>
            <h2 className="text-3xl font-black text-[#0B192C]">
              Ready to Lock In Your Protection?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Contact our membership coordinator today or mention SSS during your next technician visit. Start saving on your very first service.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="tel:7139999150"
              className="w-full sm:w-auto bg-[#F4793E] hover:bg-[#E0672E] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-center uppercase shadow-md"
            >
              Call (713) 999-9150
            </a>
            <Link
              href="/contact?plan=sss"
              className="w-full sm:w-auto bg-[#0B192C] hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-sm text-center"
            >
              Enroll Online
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
