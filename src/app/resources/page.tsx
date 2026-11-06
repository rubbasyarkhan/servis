import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  BookOpen, 
  Droplets, 
  Flame, 
  ShieldAlert, 
  Wind, 
  Phone, 
  ArrowRight, 
  HelpCircle,
  FileCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Restoration Resources, Disaster Guides & FAQs | Service Squad',
  description: 'Comprehensive guides on water damage drying, fire smoke cleanup, mold prevention, storm response, and insurance claim navigation from Service Squad.',
  keywords: ['restoration resources', 'water damage repair guide', 'smoke odor cleanup', 'mold prevention tips', 'insurance claim tips']
};

export default function ResourcesPage() {
  const articles = [
    {
      id: 'drywall-water-damage',
      category: 'Water Damage',
      title: 'How to Spot, Prevent, and Help Repair Drywall Water Damage',
      image: SITE_IMAGES.moistureInspection,
      excerpt: 'Water damage inside sheetrock weakens wall structure and creates hidden breeding grounds for black mold. Learn the early warning signs and proper drying protocols.',
      readTime: '5 min read',
      tag: 'Critical Guide'
    },
    {
      id: 'furnace-safety',
      category: 'Fire & Safety',
      title: 'Furnace Safety: Types and Essential Emergency Maintenance',
      image: SITE_IMAGES.acCompressorCheck,
      excerpt: 'Faulty heating systems cause thousands of residential structure fires annually. Learn how to inspect heat exchangers, test carbon monoxide detectors, and maintain filters.',
      readTime: '6 min read',
      tag: 'Fire Prevention'
    },
    {
      id: 'flooded-room-deodorize',
      category: 'Odor & Biohazard',
      title: 'How to Deodorize a Flooded Room & Eliminate Microbial Odors',
      image: SITE_IMAGES.hardwoodDrying,
      excerpt: 'Musty odors indicate active bacterial or fungal colonization in subfloors. Discover how industrial hydroxyl generators and botanical antimicrobials eliminate smells at the molecular source.',
      readTime: '4 min read',
      tag: 'Sanitization'
    },
    {
      id: 'insurance-claims-guide',
      category: 'Insurance & Claims',
      title: 'Navigating Your Homeowners Insurance Claim for Water & Fire Losses',
      image: SITE_IMAGES.technicianEstimate,
      excerpt: 'A comprehensive step-by-step walkthrough of what adjusters look for, how Xactimate estimating works, and why itemized moisture mapping speeds up your settlement.',
      readTime: '8 min read',
      tag: 'Claims Roadmap'
    },
    {
      id: 'mold-after-flood',
      category: 'Mold Remediation',
      title: 'The 48-Hour Mold Window: What Happens When Drywall Stays Wet',
      image: SITE_IMAGES.bustedPipe,
      excerpt: 'Stachybotrys and Aspergillus spores germinate within 24 to 48 hours of initial water contact. Learn why rapid professional extraction is essential before mold takes hold.',
      readTime: '5 min read',
      tag: 'Environmental'
    },
    {
      id: 'commercial-business-continuity',
      category: 'Commercial ERP',
      title: 'Why 50% of Businesses Never Recover from Disasters Without an ERP',
      image: SITE_IMAGES.commercialBuildout2,
      excerpt: 'Discover how pre-mapping critical utility shutoffs and having a pre-signed master services agreement prevents devastating downtime for facility managers.',
      readTime: '7 min read',
      tag: 'Business Continuity'
    }
  ];

  const faqs = [
    {
      q: 'How fast can Service Squad arrive at my property?',
      a: 'We maintain a guaranteed sub-60-minute emergency dispatch across Greater Houston and our Texas branch hubs. Our dispatchers are on duty 24/7/365.'
    },
    {
      q: 'Will my insurance policy cover water or fire restoration?',
      a: 'Most standard homeowners and commercial property policies cover sudden and accidental water damage (such as burst pipes or water heater failures) and fire disasters. We work directly with your adjuster to document and bill the carrier directly.'
    },
    {
      q: 'Can I stay in my home during the restoration process?',
      a: 'Depending on the severity of the loss, air quality (smoke or mold spores), and power requirements, you may be able to stay in unaffected sections. For extensive losses, your policy’s Loss of Use / ALE (Additional Living Expenses) clause typically covers temporary hotel accommodations.'
    },
    {
      q: 'What is the difference between mitigation and reconstruction?',
      a: 'Mitigation is the immediate emergency response to stop damage from spreading (water extraction, drying, board-up, containment). Reconstruction is the general contracting phase to rebuild drywall, flooring, electrical, and cabinetry back to pre-loss condition.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="bg-[#0B192C] text-white pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#F4793E]" />
              <span>Restoration Knowledge Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Restoration Resources & Disaster Guides
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When disaster strikes, having accurate information can save thousands in property loss. Browse our library of restoration guides, prevention checklists, and insurance claim advice compiled by certified restoration specialists.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="tel:7139999150"
                data-callrail="true"
                className="bg-[#F4793E] hover:bg-[#E05600] text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 uppercase tracking-wide shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call 24/7 Hotline: (713) 999-9150</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Educational Guides
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Featured Restoration Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article 
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-orange-500 hover:shadow-xl transition-all group"
            >
              {art.image && (
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B192C]/85 backdrop-blur-none text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {art.category}
                  </div>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-bold text-orange-600 uppercase tracking-wider">
                      {art.tag}
                    </span>
                    <span className="text-slate-400 font-medium">
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600 flex items-center gap-1">
                    Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Common Questions
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Frequently Asked Restoration Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Have an Immediate Property Emergency?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Our certified restoration technicians are standing by to answer questions and assist you.
          </p>
          <div className="pt-2">
            <a
              href="tel:7139999150"
              className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call (713) 999-9150</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
