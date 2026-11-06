import React from 'react';
import Link from 'next/link';
import { Phone, AlertTriangle, ArrowRight, Home, Wrench, ShieldAlert } from 'lucide-react';
import { CORE_SERVICES } from '@/lib/data/services';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-orange-100 text-[#F4793E] rounded-2xl flex items-center justify-center mx-auto">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            404 Error - Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-3">
            Looking for Emergency Property Restoration?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            The page you requested may have been relocated or archived, but our team is active and standing by.
          </p>
        </div>

        {/* Immediate Call to Action */}
        <div className="bg-[#0B192C] text-white p-6 rounded-2xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Direct Customer Hotline
          </div>
          <a
            href="tel:7139999150"
            data-callrail="true"
            className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-3.5 rounded-xl font-black text-lg shadow-lg transition-transform active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span>Call (713) 999-9150</span>
          </a>
          <p className="text-xs text-slate-400">
            Rapid on-site response across Greater Houston and Texas.
          </p>
        </div>

        {/* Quick Nav Alternatives */}
        <div className="text-left pt-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Quick Navigation Links
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {CORE_SERVICES.slice(0, 4).map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="p-2.5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50/50 text-slate-800 font-bold transition-all flex items-center justify-between"
              >
                <span>{s.shortTitle}</span>
                <ArrowRight className="w-3 h-3 text-orange-500" />
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Service Squad Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
