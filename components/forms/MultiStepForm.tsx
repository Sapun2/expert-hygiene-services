"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Phone, Home, Layers, Sofa, Bed, Building2, Droplets, Grid3x3, ClipboardList } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { id: "curtain", name: "Curtain Cleaning", icon: <ClipboardList size={22} />, color: "bg-blue-50 border-blue-200 text-blue-700" },
  { id: "lease", name: "End of Lease", icon: <Home size={22} />, color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { id: "carpet", name: "Carpet Cleaning", icon: <Layers size={22} />, color: "bg-amber-50 border-amber-200 text-amber-700" },
  { id: "upholstery", name: "Upholstery", icon: <Sofa size={22} />, color: "bg-purple-50 border-purple-200 text-purple-700" },
  { id: "mattress", name: "Mattress Cleaning", icon: <Bed size={22} />, color: "bg-pink-50 border-pink-200 text-pink-700" },
  { id: "commercial", name: "Commercial", icon: <Building2 size={22} />, color: "bg-slate-50 border-slate-200 text-slate-700" },
  { id: "pressure", name: "Pressure Washing", icon: <Droplets size={22} />, color: "bg-cyan-50 border-cyan-200 text-cyan-700" },
  { id: "tile", name: "Tile Cleaning", icon: <Grid3x3 size={22} />, color: "bg-orange-50 border-orange-200 text-orange-700" },
];

type Step = 1 | 2 | 3;

interface FormData {
  service: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

export default function MultiStepForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({ service: "", name: "", phone: "", email: "", address: "", notes: "" });

  const set = (k: keyof FormData, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call 0468 070 392.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={40} className="text-emerald-500" />
        </div>
        <h3 className="font-display font-800 text-2xl text-navy mb-2">You&apos;re all set!</h3>
        <p className="text-slate-500 text-sm mb-1">We&apos;ll call you within <strong>2 hours</strong>.</p>
        <p className="text-slate-400 text-xs mb-6">Check your email for a confirmation.</p>
        <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center">
          <p className="text-gold-700 font-bold text-sm">🎉 20% off applied to your booking!</p>
        </div>
        <a href="tel:0468070392" className="mt-5 flex items-center justify-center gap-2 bg-navy text-white font-bold py-3 px-6 rounded-xl text-sm">
          <Phone size={16} /> Call us now: 0468 070 392
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              step > s ? "bg-teal-500 text-white" : step === s ? "bg-navy text-white" : "bg-slate-100 text-slate-400"
            }`}>
              {step > s ? <CheckCircle2 size={16} /> : s}
            </div>
            {s < 3 && <div className={`flex-1 h-0.5 transition-all duration-500 ${step > s ? "bg-teal-500" : "bg-slate-100"}`} />}
          </div>
        ))}
      </div>

      {/* Step labels */}
      <div className="flex justify-between text-xs text-slate-400 mb-6 -mt-2">
        <span className={step === 1 ? "text-navy font-semibold" : ""}>Service</span>
        <span className={step === 2 ? "text-navy font-semibold" : ""}>Your Details</span>
        <span className={step === 3 ? "text-navy font-semibold" : ""}>Confirm</span>
      </div>

      {/* Step 1 — Service selection */}
      {step === 1 && (
        <div>
          <h3 className="font-display font-800 text-lg text-navy mb-4">What needs cleaning?</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => { set("service", s.name); setStep(2); }}
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  form.service === s.name
                    ? "border-navy bg-navy/5"
                    : "border-slate-100 hover:border-slate-300"
                }`}
              >
                <span className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${s.color} border`}>
                  {s.icon}
                </span>
                <span className="font-semibold text-navy text-sm leading-tight">{s.name}</span>
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">Select a service to continue</p>
        </div>
      )}

      {/* Step 2 — Contact details */}
      {step === 2 && (
        <div>
          <div className="flex items-center gap-3 mb-5 p-3 bg-slate-50 rounded-xl">
            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
              {SERVICES.find((s) => s.name === form.service)?.icon && (
                <span className="text-white">{SERVICES.find((s) => s.name === form.service)?.icon}</span>
              )}
            </div>
            <div>
              <p className="text-xs text-slate-400">Selected service</p>
              <p className="font-bold text-navy text-sm">{form.service}</p>
            </div>
            <button onClick={() => setStep(1)} className="ml-auto text-xs text-teal-600 font-semibold">Change</button>
          </div>

          <h3 className="font-display font-800 text-lg text-navy mb-4">Your details</h3>
          <div className="space-y-3">
            {[
              { key: "name", label: "Full Name", placeholder: "John Smith", type: "text" },
              { key: "phone", label: "Phone Number", placeholder: "0400 000 000", type: "tel" },
              { key: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
              { key: "address", label: "Property Address", placeholder: "123 Example St, Sydney NSW", type: "text" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof FormData]}
                  onChange={(e) => set(f.key as keyof FormData, e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Notes (optional)</label>
              <textarea
                placeholder="Anything we should know..."
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                rows={2}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button onClick={() => setStep(1)} className="flex items-center gap-2 px-4 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl text-sm hover:bg-slate-50">
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => {
                if (!form.name || !form.phone || !form.email || !form.address) {
                  setError("Please fill in all required fields.");
                  return;
                }
                setError("");
                setStep(3);
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-bold py-3 rounded-xl text-sm hover:bg-navy/90 transition-colors"
            >
              Review & Submit <ArrowRight size={16} />
            </button>
          </div>
          {error && <p className="text-red-500 text-xs mt-2 text-center">{error}</p>}
        </div>
      )}

      {/* Step 3 — Confirm */}
      {step === 3 && (
        <div>
          <h3 className="font-display font-800 text-lg text-navy mb-4">Confirm your request</h3>

          <div className="bg-slate-50 rounded-2xl p-5 space-y-3 mb-5">
            {[
              { label: "Service", value: form.service },
              { label: "Name", value: form.name },
              { label: "Phone", value: form.phone },
              { label: "Email", value: form.email },
              { label: "Address", value: form.address },
              ...(form.notes ? [{ label: "Notes", value: form.notes }] : []),
            ].map((r) => (
              <div key={r.label} className="flex gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-16 flex-shrink-0 pt-0.5">{r.label}</span>
                <span className="text-sm text-navy font-medium">{r.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 mb-5 text-center">
            <p className="text-gold-700 font-bold text-sm">🎉 20% off your first service — applied automatically</p>
          </div>

          {error && <p className="text-red-500 text-xs mb-3 text-center">{error}</p>}

          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="flex items-center gap-2 px-4 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl text-sm hover:bg-slate-50">
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex-1 flex items-center justify-center gap-2 bg-gold-500 text-navy font-bold py-3.5 rounded-xl text-sm hover:bg-gold-400 transition-colors disabled:opacity-60"
            >
              {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Submit Request <ArrowRight size={16} /></>}
            </button>
          </div>
          <p className="text-xs text-slate-400 text-center mt-3">No obligation · We reply within 2 hours</p>
        </div>
      )}
    </div>
  );
}
