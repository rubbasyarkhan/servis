import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Tag, Phone, CheckCircle2, Clock, ShieldCheck, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Current Specials & Coupons | Service Squad Houston',
  description: 'Save on AC repairs, water heater installation, plumbing inspections, and emergency services in Houston, TX. Call (713) 999-9150.',
  keywords: ['AC repair coupons Houston', 'water heater discounts', 'plumbing specials Houston TX']
};

export default function OffersPage() {
  const offers = [
    {
      id: 'tankless-wh',
      title: 'Tankless Water Heater Installation',
      discount: 'Save $500',
      badge: 'Most Popular',
      image: SITE_IMAGES.waterHeater,
      desc: 'Upgrade to endless hot water and energy efficiency with a professional tankless water heater installation.',
      terms: 'Limit one per household. Cannot be combined with other offers. Mention code TANKLESS500.',
      expires: 'Limited Time Offer'
    },
    {
      id: 'traditional-wh',
      title: 'Traditional Water Heater Replacement',
      discount: 'Save $250',
      badge: 'Standard Tank Special',
      image: SITE_IMAGES.cleanWaterLine,
      desc: 'Complete installation of standard 40 or 50-gallon Rheem energy-efficient water heaters with haul-away.',
      terms: 'Standard residential installations only. Mention code TANK250.',
      expires: 'Limited Time Offer'
    },
    {
      id: 'ac-tuneup',
      title: 'Comprehensive AC System Tune-Up',
      discount: '$79 Special',
      badge: 'Seasonal Savings',
      image: SITE_IMAGES.acCoilInspection,
      desc: '21-point air conditioning diagnostic check, refrigerant pressure review, electrical component testing, and coil inspection.',
      terms: 'Single system residential tune-up. Mention code ACTUNE79.',
      expires: 'Limited Time Offer'
    },
    {
      id: 'drain-cleaning',
      title: 'Main Line Drain Rooter / Clearing',
      discount: '$99 Drain Special',
      badge: 'Emergency Clearing',
      image: SITE_IMAGES.sewerLineRepair,
      desc: 'High-torque motorized cable auger clearing for accessible clean-out drains to restore free-flowing plumbing.',
      terms: 'Accessible cleanouts only. Normal business hours. Mention code DRAIN99.',
      expires: 'Limited Time Offer'
    },
    {
      id: 'plumbing-inspect',
      title: 'Whole-Home Plumbing Safety Inspection',
      discount: 'Free with Repair',
      badge: 'Peace of Mind',
      image: SITE_IMAGES.plumbingTraining,
      desc: 'Complete inspection of emergency shutoff valves, water heater connections, toilets, faucets, and supply lines.',
      terms: 'Complimentary with any completed repair service.',
      expires: 'Ongoing Promotion'
    },
    {
      id: 'sss-membership',
      title: 'SSS Club Home Protection Program',
      discount: '15% Off All Repairs',
      badge: 'VIP Membership',
      image: SITE_IMAGES.fleetVan,
      desc: 'Join the Service Squad Super Saver (SSS) program for priority dispatch, annual tune-ups, and 15% off all trades.',
      terms: 'Available for all Houston homeowners.',
      expires: 'Active'
    }
  ];

  return (
    <div className="bg-[#F7F7F8] min-h-screen text-slate-900 font-sans">
      
      {/* Hero */}
      <section className="bg-[#0B192C] text-white pt-16 pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-[#F4793E] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Tag className="w-4 h-4 text-[#F4793E]" />
              <span>Verified Houston Service Coupons</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Exclusive Discounts &amp; Service Offers
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Keep your home running efficiently without breaking the bank. Take advantage of our current seasonal promotions on plumbing, air conditioning, and emergency repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Coupons Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white rounded-2xl border-2 border-dashed border-slate-300 hover:border-[#F4793E] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all relative group"
            >
              <div className="relative h-44 w-full bg-slate-900">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 bg-[#F4793E] text-white text-[11px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-md">
                  {offer.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-[#F4793E] mb-2 tracking-tight">
                    {offer.discount}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B192C] mb-2 leading-snug">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {offer.desc}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-5 leading-normal">
                    <span className="font-bold text-slate-500">Terms: </span>{offer.terms}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="tel:7139999150"
                      className="flex-1 bg-[#F4793E] hover:bg-[#E0672E] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white" />
                      <span>Claim via Call</span>
                    </a>
                    <Link
                      href={`/contact?offer=${offer.id}`}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-colors"
                    >
                      Book Online
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SSS Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#559A23]">
              <Sparkles className="w-4 h-4 text-[#559A23]" />
              <span>Maximum Long-Term Savings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Want 15% Off All Repairs Year-Round?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Join the Service Squad Super Saver (SSS) program. Enjoy zero diagnostic fees, guaranteed priority scheduling, annual AC &amp; plumbing tune-ups, and ongoing repair discounts.
            </p>
          </div>
          <Link
            href="/membership"
            className="bg-[#559A23] hover:bg-[#46811C] text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wide shrink-0 transition-all shadow-lg"
          >
            Explore SSS Membership →
          </Link>
        </div>
      </section>

    </div>
  );
}
