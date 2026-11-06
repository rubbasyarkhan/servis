import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Service Squad',
  description: 'Terms of service, emergency restoration authorization, and telecommunications agreement for Service Squad.'
};

export default function TermsOfServicePage() {
  return (
    <div className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-1">
            Terms of Service & Restoration Agreement
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: November 2, 2026 • Governing Law: State of Texas
          </p>
        </div>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service Squad website, booking emergency property restoration services, or requesting quote estimations, you agree to be bound by these Terms of Service and all applicable federal, Texas state, and local building regulations.
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">2. Emergency Dispatch & Service Authorization</h2>
          <p>
            When requesting immediate emergency dispatch (e.g. water extraction, fire board-up, or structural stabilization), the property owner or authorized facility representative authorizes Service Squad to enter the premises, assess structural hazards, deploy drying and containment machinery, and perform emergency mitigation procedures necessary to prevent further property deterioration.
          </p>
        </section>

        <section className="bg-slate-50 border-l-4 border-slate-900 p-6 rounded-r-xl space-y-3">
          <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide">
            3. TCPA Communications & SMS Terms
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            You expressly acknowledge and agree that submitting your phone number constitutes consent to receive emergency service dispatches, appointment confirmations, and automated SMS alerts. Reply STOP to cancel at any time. Refer to our <Link href="/privacy-policy" className="text-orange-600 font-bold underline">Privacy Policy</Link> for detailed TCPA provisions.
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">4. Direct Insurance Carrier Billing & Deductibles</h2>
          <p>
            Service Squad works directly with all standard property insurance carriers (including State Farm, Allstate, USAA, Farmers, Chubb, Liberty Mutual, and others) using Xactimate® pricing protocols. The property owner remains responsible for any applicable policy deductibles or non-covered elective remodeling upgrades.
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">5. State of Texas Licensing & Jurisdiction</h2>
          <p>
            All contracting agreements are executed under the laws of the State of Texas. Service Squad operates in full compliance with the Texas Department of Licensing and Regulation (TDLR) and Texas Department of State Health Services (DSHS) regulations regarding mold remediation and general contracting.
          </p>
        </section>
      </div>
    </div>
  );
}
