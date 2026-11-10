'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Flame, 
  Droplets, 
  Wind, 
  Hammer, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Star,
  Award,
  ChevronRight,
  Sparkles,
  Navigation
} from 'lucide-react';
import { useLocation } from '@/lib/context/LocationContext';
import { TEXAS_LOCATIONS } from '@/lib/data/locations';
import { EmergencyIntakeForm } from '@/components/forms/EmergencyIntakeForm';
import { SITE_IMAGES, SHOWCASE_PROJECTS, GalleryImage } from '@/lib/data/gallery-images';
import { getCloudinaryUrl } from '@/lib/cloudinary';

const CORE_CARDS = [
  {
    title: 'Plumbing Services',
    slug: 'plumbing-repairs',
    image: SITE_IMAGES.plumbingRepair,
    icon: getCloudinaryUrl('/services/plumbing-icon.webp'),
    badge: '20 Expert Services',
    desc: 'Licensed Houston plumbers for leak detection, drain cleaning, water heaters, whole-house repiping, and emergency repairs.'
  },
  {
    title: 'Air Conditioning',
    slug: 'ac-repair',
    image: SITE_IMAGES.acUnitInstall,
    icon: getCloudinaryUrl('/services/ac-icon.webp'),
    badge: 'HVAC & Duct Solutions',
    desc: 'Fast AC repair, new system installations, air duct cleaning, and seasonal maintenance across Greater Houston.'
  },
  {
    title: 'Water Damage Restoration',
    slug: 'commercial-water-damage',
    image: SITE_IMAGES.dryingEquip1,
    icon: getCloudinaryUrl('/services/water-icon.webp'),
    badge: 'Rapid Extraction & Drying',
    desc: 'Emergency water extraction, structural dehumidification, flood cleanup, and direct insurance billing assistance.'
  },
  {
    title: 'Fire & Smoke Damage',
    slug: 'fire-damage-repair',
    image: SITE_IMAGES.fireRemediation,
    icon: getCloudinaryUrl('/services/fire-icon.webp'),
    badge: 'Full Property Recovery',
    desc: 'Complete soot removal, thermal fogging deodorization, structural cleaning, and turnkey reconstruction.'
  },
  {
    title: 'Remodeling & Construction',
    slug: 'commercial-construction',
    image: SITE_IMAGES.remodelAfter1,
    icon: getCloudinaryUrl('/services/remodeling-icon.webp'),
    badge: 'Turnkey Rebuilding',
    desc: 'Commercial tenant buildouts, luxury bathroom remodeling, residential renovation, and catastrophic reconstruction.'
  },
  {
    title: 'Mold & Board-Up Services',
    slug: 'mold-removal',
    image: SITE_IMAGES.roofTarping1,
    icon: getCloudinaryUrl('/services/construction-icon.webp'),
    badge: 'TDLR Certified Remediation',
    desc: 'Certified toxic mold remediation, air containment, negative air filtration, and emergency residential board-up.'
  }
];

export function HomePageClient() {
  const { activeLocation, setActiveLocation, phoneNumber, lookupZip, detectUserLocation, isDetectingLocation } = useLocation();
  const [zipModalOpen, setZipModalOpen] = useState(false);
  const [zipInput, setZipInput] = useState('');
  const [localDetecting, setLocalDetecting] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<string>('all');
  const [beforeAfterToggle, setBeforeAfterToggle] = useState<Record<string, boolean>>({});

  const toggleBeforeAfter = (id: string) => {
    setBeforeAfterToggle((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isDetecting = isDetectingLocation || localDetecting;

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = zipInput.trim();
    if (!clean) return;
    setLocalDetecting(true);
    try {
      const found = await lookupZip(clean);
      if (found) {
        setActiveLocation(found);
      }
      // Auto-close modal immediately so the user returns to the hero section with the updated location
      setZipModalOpen(false);
      setZipInput('');
    } catch (err) {
      console.error('Location lookup error:', err);
    } finally {
      setLocalDetecting(false);
    }
  };

  const handleDetectLocation = async () => {
    setLocalDetecting(true);
    try {
      const detected = await detectUserLocation();
      if (detected) {
        setActiveLocation(detected);
      }
      // Auto-close modal immediately
      setZipModalOpen(false);
      setZipInput('');
    } catch (err) {
      console.error('Location detection failed:', err);
    } finally {
      setLocalDetecting(false);
    }
  };

  const handleSelectHub = (hub: (typeof TEXAS_LOCATIONS)[number]) => {
    setActiveLocation(hub);
    setZipModalOpen(false);
    setZipInput('');
  };

  return (
    <div className="bg-[#F7F7F8] text-slate-900 font-sans min-h-screen">
      
      {/* 1. HERO SECTION (STRUCTURED TWO-COLUMN SERVPRO ARCHITECTURE - FULLY RESPONSIVE) */}
      <section 
        className="relative w-full overflow-hidden bg-[#0d0d0d] text-white min-h-[460px] md:min-h-[500px] lg:min-h-[520px] xl:min-h-[560px] flex items-center"
      >
        {/* Right-Aligned Hero Image (Service Squad Fleet & Multi-Trade Technicians) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex justify-end">
          <img
            src={SITE_IMAGES.heroBanner}
            alt="Service Squad Fleet &amp; Uniformed Technicians - Plumbing, HVAC, Water &amp; Fire Restoration"
            className="w-full h-full object-cover object-[right_center] sm:object-[75%_center] lg:object-[right_center] xl:object-[82%_center]"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Slanted Dark Geometric Panel (Solid Opaque #0d0d0d polygon - Generous buffer for large screens) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute left-0 top-0 bottom-0 z-[1] pointer-events-none w-[56vw] xl:w-[50vw] 2xl:w-[46vw] min-w-[560px] max-w-[940px] 2xl:max-w-[1020px] bg-[#0d0d0d] [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] shadow-2xl"
        />

        {/* Mobile/Tablet Responsive Left-to-Right Dark Gradient Overlay */}
        <div
          aria-hidden="true"
          className="lg:hidden absolute inset-0 z-[1] bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/90 sm:via-[#0d0d0d]/80 to-transparent pointer-events-none"
        />

        {/* Main Hero Content Container (Wide Layout - Reduced Horizontal Margin on Big Screens) */}
        <div className="relative z-[2] max-w-[1840px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 lg:py-14 flex flex-col justify-center">
          
          {/* Left Column: H1 Headline & Exact SERVPRO-Style Location Detector (Strictly Capped to Dark Box) */}
          <div className="max-w-xl lg:max-w-[420px] xl:max-w-[460px] space-y-4 sm:space-y-5">

            {/* H1 Headline (Decreased Font Size - Fits 100% Inside Slanted Box) */}
            <h1 className="text-2xl sm:text-3xl lg:text-[31px] xl:text-[34px] font-black text-white leading-[1.16] tracking-tight">
              The #1 Trusted Plumbing, HVAC, Water &amp; Fire Damage Restoration.
            </h1>

            {/* Location Detector (100% Exact Match & Safe Within Box) */}
            <div className="space-y-1 text-left">
              <div className="text-white text-xs sm:text-sm lg:text-[15px] font-normal tracking-wide">
                Your detected location is:
              </div>
              <div className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-normal text-[#F4793E] tracking-tight leading-tight">
                {activeLocation.city}, {activeLocation.state}
              </div>
              <div className="pt-0.5">
                <a
                  href={`tel:${phoneNumber.replace(/[^0-9]/g, '') || '7139999150'}`}
                  data-callrail="true"
                  className="text-[#F4793E] hover:text-[#ff8a50] underline decoration-1 underline-offset-4 font-normal text-xs sm:text-sm lg:text-[16px] xl:text-[17px] leading-snug inline-block"
                >
                  For service in your area, please call our National Call Center.
                </a>
              </div>
              <div className="flex items-center gap-2 pt-3 sm:pt-4 text-xs sm:text-sm text-white">
                <span>Need help elsewhere?</span>
                <button
                  type="button"
                  onClick={() => setZipModalOpen(true)}
                  className="text-white hover:text-[#F4793E] underline decoration-1 underline-offset-2 font-normal cursor-pointer transition-colors"
                >
                  Update/change location
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Right Chevron for Mobile/Tablet (Fully Responsive, Scaled Down) */}
          <div className="mt-6 sm:mt-8 lg:hidden z-[3] w-full flex justify-start">
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, '') || '7139999150'}`}
              data-callrail="true"
              className="relative group block w-full max-w-[270px] sm:max-w-[310px] aspect-[572/132] overflow-visible text-decoration-none cursor-pointer active:scale-95 transition-transform"
            >
              <svg
                viewBox="0 0 572 132"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full drop-shadow-xl"
              >
                <path
                  d="M55.3329 0H572V132H55.3329L0 68.3571L55.3329 0Z"
                  fill="#F4793E"
                  className="group-hover:fill-[#e0672e] transition-colors"
                />
              </svg>
              <div className="relative z-10 w-full h-full flex flex-row items-center">
                <div className="w-[10%] shrink-0" aria-hidden="true" />
                <div className="flex-1 flex flex-col items-center justify-center text-center pr-[12%]">
                  <span className="block text-lg sm:text-xl font-bold text-white tracking-tight leading-none whitespace-nowrap">
                    {phoneNumber || '(713) 999-9150'}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-normal text-white mt-1 leading-tight tracking-wide whitespace-nowrap">
                    We&apos;re Here to Help<sup>&reg;</sup> 24/7
                  </span>
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Pinned Right Floating Orange Chevron Call CTA (Desktop: Compact & Scaled Down) */}
        <div className="hidden lg:flex absolute right-0 bottom-6 lg:bottom-8 xl:bottom-10 z-[3] items-center">
          <a
            href={`tel:${phoneNumber.replace(/[^0-9]/g, '') || '7139999150'}`}
            data-callrail="true"
            className="relative group block w-[320px] lg:w-[350px] xl:w-[390px] aspect-[572/132] overflow-visible text-decoration-none cursor-pointer transition-transform hover:scale-[1.01] active:scale-98"
          >
            {/* Exact SERVPRO Chevron SVG Background */}
            <svg
              viewBox="0 0 572 132"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full drop-shadow-2xl"
            >
              <path
                d="M55.3329 0H572V132H55.3329L0 68.3571L55.3329 0Z"
                fill="#F4793E"
                className="group-hover:fill-[#e0672e] transition-colors"
              />
            </svg>

            {/* Text Layer Centered Inside Chevron */}
            <div className="relative z-10 w-full h-full flex flex-row items-center">
              {/* Left chevron spacer (approx 9.7%) */}
              <div className="w-[9.7%] shrink-0" aria-hidden="true" />
              
              {/* Content body */}
              <div className="flex-1 flex flex-col items-center justify-center text-center pr-[14%]">
                <span className="block text-xl lg:text-[22px] xl:text-[25px] font-bold text-white tracking-tight leading-none whitespace-nowrap">
                  {phoneNumber || '(713) 999-9150'}
                </span>
                <span className="block text-[11px] lg:text-xs font-normal text-white mt-1 leading-tight tracking-wide whitespace-nowrap">
                  We&apos;re Here to Help<sup>&reg;</sup> 24/7
                </span>
              </div>
            </div>
          </a>
        </div>

      </section>

      {/* 2. VISUAL SERVICES SECTION (IMAGES ON TOP, NO EMOJIS, NO BULLET LISTS) */}
      <section id="services-section" className="py-20 lg:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
            Comprehensive Multi-Trade Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] mt-2 tracking-tight">
            Explore Our Core Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From urgent plumbing and AC repairs to full-scale water extraction, fire remediation, and complete structural reconstruction, Service Squad delivers certified contractor expertise.
          </p>
        </div>

        {/* 6 Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_CARDS.map((card) => (
            <div
              key={card.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Card Photo on Top */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/95 border border-slate-200 px-3 py-1 rounded-full text-[11px] font-black text-[#0B192C] shadow-sm">
                  {card.badge}
                </div>
              </div>

              {/* Content Below Photo */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={card.icon} 
                      alt="" 
                      className="w-9 h-9 object-contain shrink-0" 
                    />
                    <h3 className="text-xl font-bold text-[#0B192C]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href={`/services/${card.slug}`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs sm:text-sm font-black text-[#F4793E] hover:text-[#CA5620] transition-colors"
                >
                  <span>View Details &amp; Options</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 REAL FIELD WORK & RECENT PROJECTS SHOWCASE */}
      <section className="bg-slate-100/70 border-t border-slate-200 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
                Real Job Sites • Genuine Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] mt-2 tracking-tight">
                Recent Projects Across Greater Houston
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Browse authentic on-site photos from our plumbing installations, emergency flood drying, fire decontamination, and full turnkey property remodels.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'water-damage', label: 'Water Extraction' },
                { id: 'plumbing', label: 'Plumbing' },
                { id: 'remodeling', label: 'Remodeling (Before/After)' },
                { id: 'ac', label: 'AC & Air Ducts' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setGalleryFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    galleryFilter === tab.id
                      ? 'bg-[#0B192C] text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOWCASE_PROJECTS.filter(
              (p) => galleryFilter === 'all' || p.category === galleryFilter
            ).map((project) => {
              const isShowingBefore = beforeAfterToggle[project.id];
              const displayImg = project.beforeSrc && project.afterSrc
                ? (isShowingBefore ? project.beforeSrc : project.afterSrc)
                : project.src;

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col group"
                >
                  {/* Photo Container */}
                  <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={displayImg}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 bg-[#0B192C]/90 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.tag}
                    </div>

                    {/* Location Badge */}
                    {project.location && (
                      <div className="absolute bottom-4 left-4 bg-white/95 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <MapPin className="w-3 h-3 text-[#F4793E]" />
                        <span>{project.location}</span>
                      </div>
                    )}

                    {/* Before / After Switcher (if available) */}
                    {project.beforeSrc && project.afterSrc && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleBeforeAfter(project.id);
                        }}
                        className="absolute top-4 right-4 bg-[#F4793E] hover:bg-[#E0672E] text-white text-[11px] font-black px-3 py-1.5 rounded-lg shadow-md cursor-pointer transition-colors"
                      >
                        {isShowingBefore ? 'Showing: BEFORE (Click for After)' : 'Showing: AFTER (Click for Before)'}
                      </button>
                    )}
                  </div>

                  {/* Caption & CTA */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#0B192C] leading-snug">
                        {project.title}
                      </h3>
                      {project.beforeSrc && (
                        <p className="text-xs text-[#559A23] font-semibold mt-1">
                          Interactive Before &amp; After Restoration
                        </p>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F4793E] hover:text-[#CA5620]"
                    >
                      <span>Request Free On-Site Inspection</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.7 HEADQUARTERS, TRAINING FACILITY & FLEET */}
      <section className="bg-[#0B192C] text-white py-20 lg:py-24 border-y border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#559A23]">
              Built for Rapid Texas Response
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight">
              Our Training Facility &amp; Direct-Dispatch Fleet
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              We own and operate state-of-the-art training facilities and a full fleet of fully stocked service vans across Greater Houston so our technicians arrive prepared to solve your issue on the first visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Facility Showcase (7 Cols) */}
            <div className="lg:col-span-7 bg-[#071324] border border-slate-700 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="relative h-72 sm:h-96 w-full">
                <img
                  src={SITE_IMAGES.trainingFacility}
                  alt="Service Squad Commercial Training Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#F4793E] text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Houston Training Academy
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-2">
                  Comprehensive Multi-Trade Diagnostic &amp; Assembly Labs
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our Houston training headquarters features full-scale mockups for commercial plumbing, high-efficiency water heaters, HVAC compressors, and disaster drying chambers. Every Service Squad master technician undergoes ongoing hands-on training to maintain top-tier certification.
                </p>
              </div>
            </div>

            {/* Side Grid (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Fleet Van */}
              <div className="bg-[#071324] border border-slate-700 rounded-2xl overflow-hidden flex items-center p-4 gap-4 shadow-xl">
                <div className="w-28 sm:w-36 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                  <img
                    src={SITE_IMAGES.fleetVan}
                    alt="Service Squad Fleet Van"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F4793E] block mb-1">
                    Mobile Units
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    GPS-Tracked Mobile Response Vans
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Stocked with industrial extraction pumps, sewer cameras, and replacement parts.
                  </p>
                </div>
              </div>

              {/* HVAC Crew */}
              <div className="bg-[#071324] border border-slate-700 rounded-2xl overflow-hidden flex items-center p-4 gap-4 shadow-xl">
                <div className="w-28 sm:w-36 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                  <img
                    src={SITE_IMAGES.hvacCrew}
                    alt="Service Squad HVAC Crew"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#559A23] block mb-1">
                    Certified Technicians
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    Licensed Master Trade Technicians
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Background-checked, drug-tested, and certified for residential and commercial service.
                  </p>
                </div>
              </div>

              {/* Plumbing Training Lab */}
              <div className="bg-[#071324] border border-slate-700 rounded-2xl overflow-hidden flex items-center p-4 gap-4 shadow-xl">
                <div className="w-28 sm:w-36 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                  <img
                    src={SITE_IMAGES.plumbingTraining}
                    alt="Service Squad Plumbing Training Lab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F4793E] block mb-1">
                    Plumbing Academy
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    Commercial Plumbing Rig Lab
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Ensuring precision pipe fitting, leak detection, and valve calibration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTRACTOR ADVANTAGE (WHY CHOOSE SERVICE SQUAD) */}
      <section className="bg-white border-y border-slate-200 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-wider text-[#559A23]">
              The Service Squad Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2">
              Why Home &amp; Business Owners Trust Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              One reputable partner for all your mechanical repairs, disaster mitigation, and structural rebuilding needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F4793E] flex items-center justify-center font-black">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C]">Multi-Trade Capability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No need to manage separate plumbers, HVAC technicians, and rebuilders. Our integrated squad handles everything turnkey.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-[#559A23] flex items-center justify-center font-black">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C]">Direct Insurance Billing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We work directly with your property insurance carrier using Xactimate estimating to ensure thorough documentation and zero headaches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F4793E] flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C]">Licensed &amp; Certified</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Texas Master Plumbers, TDLR-licensed HVAC technicians, and IICRC-certified restoration masters on every job site.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-[#559A23] flex items-center justify-center font-black">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C]">Upfront Transparent Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear, itemized quotes before any work begins. No hidden trip surcharges or surprise billing at completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEMBERSHIP & OFFERS BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
              Save on Property Maintenance
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              Service Squad Super Saver (SSS) Membership
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Get annual AC tune-ups, complimentary plumbing inspections, 15% discount on all repairs, and VIP priority scheduling for just $12.99/month.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap shrink-0">
            <Link
              href="/membership"
              className="bg-[#F4793E] hover:bg-[#E0672E] text-white font-black text-sm px-6 py-3.5 rounded-xl transition-colors uppercase tracking-wider"
            >
              Explore Membership
            </Link>
            <Link
              href="/offers"
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              View Active Coupons →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TEXAS SERVICE HUBS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
              Local Texas Coverage
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B192C] mt-1">
              Service Squad Texas Hubs
            </h2>
          </div>
          <Link
            href="/locations"
            className="text-xs sm:text-sm font-bold text-[#F4793E] hover:underline flex items-center gap-1"
          >
            <span>View All Regional Locations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TEXAS_LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#F4793E] hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F4793E] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="font-bold text-sm text-[#0B192C] group-hover:text-[#F4793E] transition-colors">
                {loc.city}, TX
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                {loc.serviceRadiusMiles}-Mile Radius
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. ONLINE ESTIMATE & SERVICE INTAKE FORM */}
      <section className="bg-slate-100 border-t border-slate-200 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#F4793E]">
                Direct Service Request
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2">
                Request an On-Site Inspection or Quote
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Submit your project details below and our Houston command center will contact you promptly.
              </p>
            </div>

            <EmergencyIntakeForm />
          </div>
        </div>
      </section>

      {/* Clean Interactive Location Lookup Modal */}
      {zipModalOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#F7F7F8] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => { setZipModalOpen(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl font-bold w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#F4793E]/15 flex items-center justify-center text-[#F4793E]">
                <MapPin className="w-6 h-6 text-[#F4793E]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1e293b]">
                  Change Service Location
                </h3>
                <p className="text-xs text-slate-500">
                  Select your city or enter your 5-digit ZIP code.
                </p>
              </div>
            </div>

            {/* Quick Select Franchise Hubs */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                Quick Select Texas Hub
              </label>
              <div className="flex flex-wrap gap-2">
                {TEXAS_LOCATIONS.map((loc) => {
                  const isCurrent = activeLocation.city.toLowerCase() === loc.city.toLowerCase();
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => handleSelectHub(loc)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#F4793E] text-white shadow-sm ring-2 ring-[#F4793E]/30'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {loc.city}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative my-4 flex items-center justify-center">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-[#F7F7F8] px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider absolute">
                or search by ZIP / City
              </span>
            </div>

            <form onSubmit={handleLookup} className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Enter 5-digit ZIP (e.g. 77081, 77494) or City"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                maxLength={25}
                className="flex-1 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F4793E]"
              />
              <button
                type="submit"
                disabled={isDetecting}
                className="bg-[#0B192C] hover:bg-[#1E3E62] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
              >
                {isDetecting ? 'Applying...' : 'Apply'}
              </button>
            </form>

            <div>
              <button
                type="button"
                onClick={handleDetectLocation}
                disabled={isDetecting}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-300 hover:border-[#559A23] hover:text-[#559A23] rounded-xl text-xs font-semibold text-slate-700 transition-all shadow-sm cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#559A23]"></span>
                {isDetecting ? 'Detecting GPS location...' : 'Use My Current GPS Location'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
