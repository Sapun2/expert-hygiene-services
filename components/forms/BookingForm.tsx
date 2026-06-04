"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Phone, ClipboardList, Home, Layers, Sofa, Bed, Building2, Droplets, Grid3x3 } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  { name: "Curtain Cleaning",     icon: ClipboardList, color: "text-blue-600",    bg: "bg-blue-50   border-blue-200" },
  { name: "End Of Lease Cleaning",icon: Home,          color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
  { name: "Carpet Cleaning",      icon: Layers,        color: "text-amber-600",   bg: "bg-amber-50  border-amber-200" },
  { name: "Upholstery Cleaning",  icon: Sofa,          color: "text-purple-600",  bg: "bg-purple-50 border-purple-200" },
  { name: "Mattress Cleaning",    icon: Bed,           color: "text-pink-600",    bg: "bg-pink-50   border-pink-200" },
  { name: "Commercial Cleaning",  icon: Building2,     color: "text-slate-600",   bg: "bg-slate-50  border-slate-200" },
  { name: "Pressure Washing",     icon: Droplets,      color: "text-cyan-600",    bg: "bg-cyan-50   border-cyan-200" },
  { name: "Tile Cleaning",        icon: Grid3x3,       color: "text-orange-600",  bg: "bg-orange-50 border-orange-200" },
];

type Step = 1 | 2 | 3;

interface BookingFormProps {
  /** Pre-select a service and skip step 1 */
  defaultService?: string;
  /** Light or dark card background */
  variant?: "light" | "dark";
}

export default function BookingForm({ defaultService, variant = "light" }: BookingFormProps) {
  const hasPreset = Boolean(defaultService);
  const [step, setStep]       = useState<Step>(hasPreset ? 2 : 1);
  const [submitting, setSubmitting] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [error, setError]     = useState("");

  const [service,  setService]  = useState(defaultService || "");
  const [name,     setName]     = useState("");
  const [phone,    setPhone]    = useState("");
  const [email,    setEmail]    = useState("");
  const [address,  setAddress]  = useState("");
  const [notes,    setNotes]    = useState("");

  const isDark = variant === "dark";

  // ── helpers ──────────────────────────────────────────────────────────────
  const inputCls = cn(
    "w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent",
    isDark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/30"
      : "bg-white border-slate-200 text-navy placeholder:text-slate-400"
  );
  const labelCls = cn(
    "block text-xs font-bold uppercase tracking-wider mb-1.5",
    isDark ? "text-white/50" : "text-slate-500"
  );
  const headingCls = cn("font-display font-800 text-lg mb-4", isDark ? "text-white" : "text-navy");

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, address, service, notes }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setTrackingId(data.id);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please call 0468 070 392.");
    } finally {
      setSubmitting(false);
    }
  };

  const validateStep2 = () => {
    if (!name.trim())    return "Full name is required.";
    if (!phone.trim())   return "Phone number is required.";
    if (!email.trim() || !email.includes("@")) return "A valid email is required.";
    if (!address.trim()) return "Property address is required.";
    return null;
  };

  // ── Success state ─────────────────────────────────────────────────────────
  if (trackingId) {
    return (
      <div className="text-center py-4">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={40} className="text-emerald-500" />
        </div>
        <h3 className={cn("font-display font-800 text-2xl mb-1", isDark ? "text-white" : "text-navy")}>
          Booking Request Sent!
        </h3>
        <p className={cn("text-sm mb-6", isDark ? "text-white/60" : "text-slate-500")}>
          We&apos;ll call you within <strong>2 hours</strong>. Our team will be in touch shortly.
        </p>

        <div className={cn("rounded-xl p-4 mb-5", isDark ? "bg-gold-500/20 border border-gold-500/30" : "bg-gold-50 border border-gold-200")}>
          <p className={cn("text-sm font-bold", isDark ? "text-gold-300" : "text-gold-700")}>
            🎉 20% off your first service — already applied!
          </p>
        </div>

        <a href="tel:0468070392" className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-teal-600 transition-colors w-full">
          <Phone size={16} /> Prefer to call? 0468 070 392
        </a>
      </div>
    );
  }

  // ── Step indicator ────────────────────────────────────────────────────────
  const steps = hasPreset ? [2, 3] : [1, 2, 3];
  const stepLabels: Record<number, string> = { 1: "Service", 2: "Details", 3: "Confirm" };

  const StepIndicator = () => (
    <div className="mb-6">
      <div className="flex items-center gap-1.5">
        {steps.map((s, idx) => (
          <div key={s} className="flex items-center gap-1.5 flex-1">
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all",
              step > s ? "bg-teal-500 text-white" :
              step === s ? "bg-navy text-white" :
              isDark ? "bg-white/10 text-white/30" : "bg-slate-100 text-slate-400"
            )}>
              {step > s ? <CheckCircle2 size={14} /> : idx + 1}
            </div>
            {idx < steps.length - 1 && (
              <div className={cn("flex-1 h-px transition-all", step > s ? "bg-teal-500" : isDark ? "bg-white/10" : "bg-slate-200")} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {steps.map((s) => (
          <span key={s} className={cn("text-xs transition-colors", step === s ? (isDark ? "text-white font-semibold" : "text-navy font-semibold") : isDark ? "text-white/30" : "text-slate-400")}>
            {stepLabels[s]}
          </span>
        ))}
      </div>
    </div>
  );

  // ── Step 1 — Service picker ───────────────────────────────────────────────
  if (step === 1) return (
    <div>
      <StepIndicator />
      <h3 className={headingCls}>What needs cleaning?</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.name}
              onClick={() => { setService(s.name); setStep(2); }}
              className={cn(
                "flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
                service === s.name ? "border-navy bg-navy/5" : "border-slate-100 hover:border-slate-300"
              )}
            >
              <span className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border", s.bg)}>
                <Icon size={20} className={s.color} />
              </span>
              <span className={cn("font-semibold text-sm leading-tight", isDark ? "text-white" : "text-navy")}>{s.name}</span>
            </button>
          );
        })}
      </div>
      <p className={cn("text-center text-xs mt-4", isDark ? "text-white/30" : "text-slate-400")}>
        Select a service to continue
      </p>
    </div>
  );

  // ── Step 2 — Details ──────────────────────────────────────────────────────
  if (step === 2) return (
    <div>
      <StepIndicator />

      {/* Selected service chip */}
      <div className={cn("flex items-center gap-3 p-3 rounded-xl mb-5", isDark ? "bg-white/10" : "bg-slate-50")}>
        <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
          {(() => { const found = SERVICES.find(s => s.name === service); if (!found) return null; const Icon = found.icon; return <Icon size={16} className="text-white" />; })()}
        </div>
        <p className={cn("font-bold text-sm flex-1", isDark ? "text-white" : "text-navy")}>{service}</p>
        {!hasPreset && (
          <button onClick={() => setStep(1)} className="text-xs text-teal-500 font-semibold hover:underline">Change</button>
        )}
      </div>

      <h3 className={headingCls}>Your details</h3>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Full Name *</label>
            <input type="text" placeholder="John Smith" value={name} onChange={e => setName(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Phone *</label>
            <input type="tel" placeholder="0400 000 000" value={phone} onChange={e => setPhone(e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Property Address *</label>
          <input type="text" placeholder="123 Example St, Sydney NSW 2000" value={address} onChange={e => setAddress(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Notes (optional)</label>
          <textarea placeholder="Any special requirements or questions..." value={notes} onChange={e => setNotes(e.target.value)} rows={2} className={cn(inputCls, "resize-none")} />
        </div>
      </div>

      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

      <button
        onClick={() => {
          const err = validateStep2();
          if (err) { setError(err); return; }
          setError(""); setStep(3);
        }}
        className="mt-5 w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-3.5 rounded-xl text-sm hover:bg-navy/90 transition-colors"
      >
        Review My Request <ArrowRight size={16} />
      </button>
    </div>
  );

  // ── Step 3 — Confirm ──────────────────────────────────────────────────────
  return (
    <div>
      <StepIndicator />
      <h3 className={headingCls}>Confirm your booking</h3>

      <div className={cn("rounded-2xl p-5 space-y-3 mb-5 divide-y", isDark ? "bg-white/5 border border-white/10 divide-white/10" : "bg-slate-50 border border-slate-100 divide-slate-100")}>
        {[
          { label: "Service",  val: service  },
          { label: "Name",     val: name     },
          { label: "Phone",    val: phone    },
          { label: "Email",    val: email    },
          { label: "Address",  val: address  },
          ...(notes ? [{ label: "Notes", val: notes }] : []),
        ].map(row => (
          <div key={row.label} className="flex gap-4 pt-3 first:pt-0">
            <span className={cn("text-xs font-bold uppercase tracking-wider w-16 flex-shrink-0 mt-0.5", isDark ? "text-white/30" : "text-slate-400")}>{row.label}</span>
            <span className={cn("text-sm font-medium", isDark ? "text-white" : "text-navy")}>{row.val}</span>
          </div>
        ))}
      </div>

      <div className={cn("rounded-xl p-4 mb-5 text-center", isDark ? "bg-gold-500/20 border border-gold-500/30" : "bg-gold-50 border border-gold-200")}>
        <p className={cn("text-sm font-bold", isDark ? "text-gold-300" : "text-gold-700")}>
          🎉 20% off your first service — automatically applied
        </p>
      </div>

      {error && <p className="text-red-400 text-xs mb-3 text-center">{error}</p>}

      <div className="flex gap-3">
        <button
          onClick={() => setStep(2)}
          className={cn("flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-colors", isDark ? "border-white/20 text-white hover:bg-white/10" : "border-slate-200 text-slate-600 hover:bg-slate-50")}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="flex-1 flex items-center justify-center gap-2 bg-gold-500 text-navy font-bold py-3.5 rounded-xl text-sm hover:bg-gold-400 transition-colors disabled:opacity-60"
        >
          {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Submit Booking <ArrowRight size={16} /></>}
        </button>
      </div>
      <p className={cn("text-xs text-center mt-3", isDark ? "text-white/30" : "text-slate-400")}>
        No obligation · Reply within 2 hours · You&apos;ll receive a tracking link
      </p>
    </div>
  );
}
