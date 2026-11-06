import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy & TCPA Disclosures | Service Squad',
  description: 'Service Squad Privacy Policy, consumer data protection practices, and TCPA text-messaging consent terms.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-1">
            Privacy Policy & TCPA Communications Agreement
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: November 2, 2026 • Effective Immediately
          </p>
        </div>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            Service Squad (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects personal information provided by consumers when requesting emergency restoration services, obtaining quote estimates, submitting property damage photographs, or contacting our dispatch centers. This information may include your name, physical property address, telephone number, email address, insurance carrier details, and media files showing property conditions.
          </p>
        </section>

        {/* Mandatory TCPA Text-Messaging Disclosure */}
        <section className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl space-y-3">
          <h2 className="text-lg font-black text-orange-900 uppercase tracking-wide">
            2. Mandatory TCPA Text-Messaging & Telephone Consent Disclosures
          </h2>
          <p className="text-xs sm:text-sm text-orange-950 leading-relaxed">
            By submitting an online contact form, booking an emergency consultation, submitting damage media, or transmitting your telephone number to Service Squad, you provide your <strong>express written consent</strong> under the Telephone Consumer Protection Act (47 U.S.C. &sect; 227) (&ldquo;TCPA&rdquo;) and applicable Texas telecommunications regulations to receive telephone calls, automated calls, prerecorded voice messages, artificial voice messages, and SMS/MMS text messages from Service Squad and its authorized franchise service contractors at the telephone number(s) provided.
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-orange-900 space-y-1.5">
            <li><strong>Purpose of Communications:</strong> Communications may include emergency arrival notifications, damage estimation updates, technician dispatch status, insurance documentation requests, and service satisfaction audits.</li>
            <li><strong>Consent Not a Condition of Purchase:</strong> Consent to receive marketing or promotional text messages is never a mandatory condition of purchasing any property restoration goods or services.</li>
            <li><strong>Message & Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier and wireless plan.</li>
            <li><strong>How to Opt-Out:</strong> You may revoke consent and opt out of SMS communications at any time by replying <strong>STOP</strong> to any text message received. For help, reply <strong>HELP</strong> or contact our dispatch center at (713) 999-9150.</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">3. Media & Photograph Usage</h2>
          <p>
            Photographs, floor plans, and video recordings uploaded through our platform are utilized strictly for evaluating damage extent, generating Xactimate® insurance restoration estimates, and documenting structural conditions before and after mitigation. We do not sell or monetize consumer property imagery.
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">4. Sharing with Insurance Adjusters & Subcontractors</h2>
          <p>
            To facilitate insurance claim processing, we may share structural drying logs, moisture readings, itemized content inventories, and photographic documentation directly with your designated insurance carrier, independent adjusters, or licensed trade specialists (e.g. master plumbers or electricians).
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
          <p>
            For privacy inquiries or to update your personal data preferences, please contact:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
            <div><strong>Service Squad Legal & Privacy Affairs</strong></div>
            <div>6750 Westpark Dr, Ste 200, Houston, TX 77081</div>
            <div>Phone: (713) 999-9150</div>
            <div>Email: privacy@servicesquadtx.com</div>
          </div>
        </section>
      </div>
    </div>
  );
}
