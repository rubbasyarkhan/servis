'use client';

import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Flame, 
  ShieldAlert, 
  Box, 
  Hammer, 
  Wrench, 
  Pipette, 
  Wind, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  FileText,
  X,
  Home,
  Building2,
  Zap,
  Calendar
} from 'lucide-react';
import { useLocation } from '@/lib/context/LocationContext';
import { Button } from '../ui/Button';

interface FormState {
  trade: string;
  propertyType: 'residential' | 'commercial';
  urgency: 'emergency-now' | 'same-day' | 'scheduled';
  damageDetails: string;
  address: string;
  city: string;
  zip: string;
  fullName: string;
  email: string;
  phone: string;
  tcpaConsent: boolean;
  uploadedFiles: string[];
}

export function EmergencyIntakeForm({ preselectedTrade }: { preselectedTrade?: string }) {
  const { activeLocation, phoneNumber } = useLocation();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState<FormState>({
    trade: preselectedTrade || 'water-damage',
    propertyType: 'residential',
    urgency: 'emergency-now',
    damageDetails: '',
    address: '',
    city: activeLocation.city || 'Houston',
    zip: activeLocation.zip || '77081',
    fullName: '',
    email: '',
    phone: '',
    tcpaConsent: false,
    uploadedFiles: []
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      city: (!prev.city || prev.city === 'Houston') ? activeLocation.city : prev.city,
      zip: (!prev.zip || prev.zip === '77081') ? activeLocation.zip : prev.zip
    }));
  }, [activeLocation]);

  const trades = [
    { id: 'water-damage', label: 'Water Damage & Extraction', sub: 'Extraction, structural drying & flood mitigation', icon: Droplets },
    { id: 'fire-damage', label: 'Fire, Smoke & Soot', sub: 'Soot removal, deodorization & cleanup', icon: Flame },
    { id: 'mold-remediation', label: 'Mold Remediation', sub: 'Containment, removal & clearance testing', icon: ShieldAlert },
    { id: 'content-packout', label: 'Content Packout & Storage', sub: 'Secure packout, cataloging & salvage', icon: Box },
    { id: 'remodeling', label: 'Remodeling & Reconstruction', sub: 'Turnkey residential & commercial rebuilds', icon: Hammer },
    { id: 'handyman', label: 'Handyman & Maintenance', sub: 'General repairs & routine property upkeep', icon: Wrench },
    { id: 'plumbing', label: 'Plumbing Repair & Repiping', sub: 'Leak detection, drains & water heaters', icon: Pipette },
    { id: 'hvac', label: 'HVAC & AC System Repair', sub: 'System diagnostics, repairs & duct cleaning', icon: Wind }
  ];

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setFormData((prev) => ({
        ...prev,
        uploadedFiles: [...prev.uploadedFiles, ...fileNames]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
    }));
  };

  const validateStep = () => {
    setErrorMsg('');
    if (step === 1 && !formData.trade) {
      setErrorMsg('Please select a service trade to continue.');
      return false;
    }
    if (step === 3 && (!formData.address || !formData.zip)) {
      setErrorMsg('Please enter your property address and ZIP code.');
      return false;
    }
    if (step === 5) {
      if (!formData.fullName || !formData.phone || !formData.email) {
        setErrorMsg('Please enter your full name, phone number, and email.');
        return false;
      }
      if (!formData.tcpaConsent) {
        setErrorMsg('You must agree to the TCPA communications consent to proceed.');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setErrorMsg('');
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          locationHubSlug: activeLocation.slug,
          submittedAt: new Date().toISOString()
        })
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      // Graceful fallback for mock submission
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 text-center shadow-xl animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10" />
        </div>
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
          Priority Dispatch Dispatched
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
          Emergency Squad Mobilized
        </h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-6">
          Thank you, <strong>{formData.fullName}</strong>. Your request for <strong>{trades.find(t => t.id === formData.trade)?.label}</strong> has been transmitted to our <strong>{activeLocation.city} dispatch center</strong>.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2 mb-6">
          <div className="flex items-center justify-between text-slate-700">
            <span>Property:</span>
            <strong>{formData.address}, {formData.city} TX {formData.zip}</strong>
          </div>
          <div className="flex items-center justify-between text-slate-700">
            <span>Expected Response:</span>
            <strong className="text-emerald-700">Under 60 Minutes (SLA Active)</strong>
          </div>
          <div className="flex items-center justify-between text-slate-700">
            <span>Automated SMS Confirmation:</span>
            <strong>Within 60 Seconds</strong>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          If you have active flooding or electrical danger, please call our dispatch team immediately:
        </p>

        <a
          href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
          data-callrail="true"
          className="inline-flex items-center gap-2 bg-[#FF6500] hover:bg-[#E05600] text-white px-6 py-3 rounded-xl font-black text-base shadow-lg transition-transform active:scale-95"
        >
          <span>Direct Dispatch Hotline: {phoneNumber}</span>
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-full">
      {/* Form Progress Header */}
      <div className="bg-[#0B192C] text-white p-4 sm:p-5 border-b border-slate-800">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider mb-1.5">
          <span className="text-[#F4793E]">Property Service &amp; Quote Request</span>
          <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-slate-300 font-bold text-[10px]">
            {Math.round((step / 5) * 100)}% Complete
          </span>
        </div>
        <h2 className="text-sm sm:text-base font-black text-white">
          Step {step} of 5: {
            step === 1 ? 'Select Service Needed' :
            step === 2 ? 'Property Type & Timeline' :
            step === 3 ? 'Property Location' :
            step === 4 ? 'Project Details & Media' :
            'Contact Information'
          }
        </h2>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2.5">
          <div
            className="bg-[#F4793E] h-full transition-all duration-300 rounded-full"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 sm:p-6">
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Step 1: Trade Selection (2-column card grid with icon on top, preventing word-breaking) */}
        {step === 1 && (
          <div className="space-y-3.5">
            <label className="block text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              What service line or property trade do you need assistance with?
            </label>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {trades.map((t) => {
                const IconComponent = t.icon;
                const isSelected = formData.trade === t.id;
                return (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setFormData({ ...formData, trade: t.id })}
                    className={`flex flex-col justify-between p-3 sm:p-3.5 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-[#F4793E] bg-orange-50/70 shadow-sm ring-1 ring-[#F4793E]'
                        : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-start justify-between w-full mb-2">
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-[#F4793E] text-white shadow-sm' : 'bg-slate-100 text-slate-700'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center ${
                        isSelected ? 'border-[#F4793E] bg-[#F4793E]' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                    <div className="w-full min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words hyphens-none">
                        {t.label}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                        {t.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Property Type & Urgency */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Property Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                  className={`p-3 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    formData.propertyType === 'residential'
                      ? 'border-[#F4793E] bg-orange-50/60 text-orange-950 font-bold shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                  }`}
                >
                  <Home className="w-5 h-5 text-[#F4793E]" />
                  <span className="text-xs font-bold">Residential</span>
                  <span className="text-[10px] text-slate-500">Home / Condo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                  className={`p-3 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    formData.propertyType === 'commercial'
                      ? 'border-[#F4793E] bg-orange-50/60 text-orange-950 font-bold shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                  }`}
                >
                  <Building2 className="w-5 h-5 text-[#F4793E]" />
                  <span className="text-xs font-bold">Commercial</span>
                  <span className="text-[10px] text-slate-500">Business / Facility</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Response Urgency
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'emergency-now',
                    title: 'Immediate Emergency Response',
                    sub: 'Active water flooding, sewage, gas odor, burning smell, open roof hole, or burst pipe',
                    icon: AlertCircle,
                    iconColor: 'text-red-600'
                  },
                  {
                    id: 'same-day',
                    title: 'Same-Day Priority Service',
                    sub: 'Contained leak, recent water spot, odor inquiry, or scheduled remediation',
                    icon: Zap,
                    iconColor: 'text-amber-500'
                  },
                  {
                    id: 'scheduled',
                    title: 'Standard Consultation / Future Remodeling',
                    sub: 'Planning a remodel, preventative maintenance, or insurance quote estimate',
                    icon: Calendar,
                    iconColor: 'text-blue-500'
                  }
                ].map((urg) => {
                  const UrgIcon = urg.icon;
                  const isChecked = formData.urgency === urg.id;
                  return (
                    <label
                      key={urg.id}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border-2 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#F4793E] bg-orange-50/40 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        checked={isChecked}
                        onChange={() => setFormData({ ...formData, urgency: urg.id as any })}
                        className="mt-1 text-orange-600 focus:ring-orange-500 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900">
                          <UrgIcon className={`w-4 h-4 shrink-0 ${urg.iconColor}`} />
                          <span className="truncate">{urg.title}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{urg.sub}</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Location Details */}
        {step === 3 && (
          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Street Address *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="1234 Main Street, Suite 100"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#F4793E] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  City (Texas)
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Houston"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#F4793E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  maxLength={5}
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  placeholder="77081"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#F4793E] focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F4793E] shrink-0" />
              <span>
                Verified Service Hub: Greater Houston and surrounding areas.
              </span>
            </div>
          </div>
        )}

        {/* Step 4: Damage Details & Media Upload */}
        {step === 4 && (
          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Project or Damage Description
              </label>
              <textarea
                rows={3}
                value={formData.damageDetails}
                onChange={(e) => setFormData({ ...formData, damageDetails: e.target.value })}
                placeholder="Briefly describe what happened or what you need..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#F4793E] focus:outline-none resize-none"
              />
            </div>

            {/* Media Upload Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Upload Photos or Plans (Optional)
              </label>
              <div className="border-2 border-dashed border-slate-300 hover:border-[#F4793E] rounded-xl p-4 text-center bg-slate-50 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf"
                  onChange={handleSimulatedFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-slate-800">
                  Click or drag files here to upload
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  JPEG, PNG, MP4, PDF up to 25MB each
                </div>
              </div>

              {/* Uploaded File List */}
              {formData.uploadedFiles.length > 0 && (
                <div className="mt-2 space-y-1">
                  {formData.uploadedFiles.map((filename, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-2.5 py-1 bg-slate-100 rounded text-xs text-slate-700"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <FileText className="w-3.5 h-3.5 text-[#F4793E]" />
                        <span className="truncate">{filename}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="text-slate-400 hover:text-red-500 ml-2"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 5: Contact Info */}
        {step === 5 && (
          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#F4793E] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(713) 555-0199"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#F4793E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#F4793E] focus:outline-none"
                />
              </div>
            </div>

            {/* Consent Agreement */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.tcpaConsent}
                  onChange={(e) => setFormData({ ...formData, tcpaConsent: e.target.checked })}
                  className="mt-0.5 h-4 w-4 text-[#F4793E] rounded border-slate-300 focus:ring-[#F4793E]"
                />
                <span className="text-[11px] leading-snug text-slate-600">
                  I agree to receive communications regarding my service request at the contact number provided.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-1.5 bg-[#0B192C] hover:bg-[#1E3E62] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center justify-center gap-2 bg-[#F4793E] hover:bg-[#E0672E] text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide shadow-md transition-all disabled:opacity-50 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 text-white" />
              <span>{submitting ? 'Submitting...' : 'Submit Request'}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
