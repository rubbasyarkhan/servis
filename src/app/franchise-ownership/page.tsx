import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Building2, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  TrendingUp,
  DollarSign,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Franchise Ownership Opportunities | Service Squad',
  description: 'Own a high-growth disaster restoration franchise with Service Squad. Proven business model, insurance vendor status, and comprehensive operational training.',
  keywords: ['restoration franchise for sale', 'own a restoration business', 'Service Squad franchise opportunities', 'property restoration franchise Texas']
};

export default function FranchiseOwnershipPage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="bg-[#0B192C] text-white pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#F4793E]" />
              <span>Franchise Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Own a Service Squad Restoration Franchise
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Disaster restoration is a \$60+ billion essential, recession-resilient industry. By partnering with Service Squad, you gain instant brand authority, direct access to national insurance carrier programs, proven operational systems, and unmatched corporate support.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg"
              >
                <span>Request Franchise Prospectus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Why Franchise With Us
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Built for Long-Term Scalability & Operational Dominance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Direct Carrier Flow</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tap into established third-party administrator (TPA) networks and insurance program claims dispatched directly to your franchise territory.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Turnkey Multi-Trade Stack</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unlike single-service competitors, our model enables you to capture both emergency mitigation and high-margin architectural reconstruction revenue.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">World-Class Academy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hands-on training covering psychrometric science, Xactimate line-item profitability, team recruitment, and commercial business development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl font-black">
            Inquire About Available Territories
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Exclusive territories are currently available across key metropolitan and suburban markets in Texas and the Southwest.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider"
            >
              <span>Connect With Franchise Development</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
