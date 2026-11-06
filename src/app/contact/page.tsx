import React from 'react';
import { Metadata } from 'next';
import { Phone, MapPin, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { DEFAULT_SITE_SETTINGS } from '@/lib/data/settings';
import { TEXAS_LOCATIONS } from '@/lib/data/locations';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Contact Us | 24/7 Emergency Dispatch | Service Squad Houston',
  description:
    'Need plumbing repairs, emergency AC service, water extraction, or fire cleanup in Houston? Contact Service Squad 24/7 at (713) 999-9150.',
  keywords: ['contact Service Squad', 'emergency plumber Houston phone', '24 hour AC repair Houston contact']
};

export default function ContactPage() {
  const mainHub = TEXAS_LOCATIONS[0];

  return (
    <div className="bg-[#F7F7F8] min-h-screen text-slate-900 font-sans py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
            Customer Support &amp; Service Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B192C] mt-2">
            Contact Service Squad
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            For urgent plumbing leaks, broken AC units, or sudden water/fire damage, call our team immediately or submit your service request below for prompt on-site mobilization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Direct Info & Hubs */}
          <div className="space-y-6">
            <div className="bg-[#0B192C] text-white p-7 rounded-2xl shadow-xl space-y-6 border border-slate-800">
              <div>
                <span className="text-xs uppercase font-extrabold text-[#F4793E] tracking-wider">
                  Direct Hotline
                </span>
                <div className="mt-2">
                  <a
                    href="tel:7139999150"
                    className="text-2xl sm:text-3xl font-black text-white hover:text-[#F4793E] transition-colors flex items-center gap-3"
                  >
                    <Phone className="w-6 h-6 text-[#F4793E] fill-current" />
                    <span>(713) 999-9150</span>
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Live customer care team standing by to assist you.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-5 space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F4793E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Central Houston Hub:</strong>
                    <div>{mainHub.address.street}</div>
                    <div>{mainHub.city}, {mainHub.state} {mainHub.zip}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#559A23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Operating Hours:</strong>
                    <div>Emergency Response: Always Available</div>
                    <div>Standard Service: Mon - Sat 7:00 AM - 7:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#559A23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Credentials:</strong>
                    <div>Licensed Texas Contractor &amp; IICRC Certified</div>
                    <div>$2M Commercial Liability Insured</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Primary Coverage Cities
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {['Houston', 'Bellaire', 'Katy', 'Pearland', 'Rosenberg', 'Stafford', 'Sugar Land'].map((c) => (
                    <span key={c} className="bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      {c}, TX
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Authentic Fleet & Facility Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="h-44 w-full">
                <img
                  src={SITE_IMAGES.fleetVan}
                  alt="Service Squad Houston Fleet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F4793E]">
                  Regional Fleet Staging
                </span>
                <h4 className="font-bold text-[#0B192C] text-sm">
                  Mobile Response Units Deployed Daily
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our fully stocked vans operate around the clock with commercial-grade restoration and mechanical repair equipment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-7 sm:p-9 rounded-2xl shadow-xl border border-slate-200">
              <h2 className="text-2xl font-black text-[#0B192C] mb-2">
                Request Service or Emergency Dispatch
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the form below. A Service Squad dispatch supervisor will contact you within minutes.
              </p>
              <EmergencyIntakeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
