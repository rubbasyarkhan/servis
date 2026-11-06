import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Briefcase, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Users,
  Clock,
  Sparkles,
  MapPin
} from 'lucide-react';
import { SITE_IMAGES } from '@/lib/data/gallery-images';

export const metadata: Metadata = {
  title: 'Careers at Service Squad | Join Texas’s Premier Restoration Team',
  description: 'Explore career opportunities at Service Squad: Water restoration technicians, fire cleanup specialists, project managers, and dispatchers. Apply today.',
  keywords: ['restoration jobs Houston', 'water damage technician jobs', 'Service Squad careers', 'disaster restoration employment Texas']
};

export default function CareersPage() {
  const openings = [
    {
      title: 'Lead Emergency Water Mitigation Technician',
      location: 'Houston, TX (Central Hub)',
      type: 'Full-Time / Emergency Rotation',
      description: 'Operate truck-mount extractors, thermal imaging cameras, and LGR dehumidifiers. IICRC WRT certification preferred. Top compensation + on-call bonuses.'
    },
    {
      title: 'Fire & Smoke Restoration Specialist',
      location: 'Katy, TX Branch',
      type: 'Full-Time',
      description: 'Lead structural cleaning, thermal fogging, soot removal, and contents inventory. IICRC FSRT certification a plus.'
    },
    {
      title: 'Commercial Project Director / Large Loss Estimator',
      location: 'Houston, TX / Regional Travel',
      type: 'Full-Time',
      description: 'Manage commercial large-loss restoration projects, Xactimate line items, subcontractor scheduling, and insurance adjuster negotiations.'
    },
    {
      title: '24/7 Emergency Dispatch Coordinator',
      location: 'Houston Central Command Center',
      type: 'Full-Time / Night Shifts Available',
      description: 'Intake emergency calls from property owners, dispatch mobile fleet units via GPS, and coordinate initial on-site logistics.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={SITE_IMAGES.hvacCrew}
            alt="Service Squad Technicians"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-[#F4793E]" />
              <span>We Are Hiring</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Build Your Career with Service Squad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Join a team of passionate problem-solvers who show up on people&apos;s toughest days and make things right. We offer comprehensive industry training, IICRC certification sponsorship, modern fleet equipment, and competitive pay.
            </p>

            <div className="pt-2">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 bg-[#F4793E] hover:bg-[#E05600] text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at Service Squad */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Paid IICRC Certifications</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We invest in your professional growth by fully sponsoring your IICRC training, licensing exams, and OSHA credentials.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Competitive Pay & Bonuses</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Top industry hourly wages, emergency dispatch premiums, health/dental insurance, and 401(k) matching.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Supportive Culture</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A safety-first, family-oriented culture that recognizes hard work, leadership, and customer care.
            </p>
          </div>
        </div>
      </section>

      {/* Life at Service Squad Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
            Our Team in Action
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Life at Service Squad
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Work with top-tier tools, experienced mentors, and team members who have your back on every dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-48 w-full">
              <img
                src={SITE_IMAGES.techniciansOnSite1}
                alt="Service Squad Technicians on Site"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Certified Field Crews</h4>
              <p className="text-xs text-slate-500 mt-1">Direct support and collaborative team deployment.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-48 w-full">
              <img
                src={SITE_IMAGES.techniciansOnSite2}
                alt="Technical Team Consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Professional Equipment</h4>
              <p className="text-xs text-slate-500 mt-1">Equipped with commercial diagnostic tools &amp; vans.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-48 w-full">
              <img
                src={SITE_IMAGES.plumbingTraining}
                alt="Hands-on Technical Training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Paid Skill Advancement</h4>
              <p className="text-xs text-slate-500 mt-1">Weekly training in our dedicated Houston trade labs.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="h-48 w-full">
              <img
                src={SITE_IMAGES.fleetVan}
                alt="Service Squad Response Vehicle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Modern Fleet Fleet</h4>
              <p className="text-xs text-slate-500 mt-1">Take-home company vehicle program for lead technicians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600">
            Current Opportunities
          </span>
          <h2 className="text-3xl font-black text-[#0B192C] mt-1">
            Available Career Openings
          </h2>
        </div>

        <div className="space-y-4">
          {openings.map((job, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-orange-500 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-black text-slate-900">{job.title}</h3>
                  <span className="text-[11px] font-bold bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500">{job.location}</div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {job.description}
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-slate-900 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 transition-colors text-center"
              >
                Apply Online →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
