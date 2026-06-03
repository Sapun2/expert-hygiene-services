"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { SERVICES } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Required"),
  address: z.string().min(5, "Required"),
  service: z.string().min(1, "Required"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface QuoteFormProps {
  dark?: boolean;
}

export default function QuoteForm({ dark = false }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call 0468 070 392.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/30"
      : "bg-white border-slate-200 text-navy placeholder:text-slate-400"
  }`;

  const labelClass = `block text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-white/50" : "text-slate-500"}`;

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <CheckCircle2 size={48} className="text-teal-500 mx-auto mb-4" />
        <h3 className={`font-display font-800 text-xl mb-2 ${dark ? "text-white" : "text-navy"}`}>
          We&apos;ll be in touch within 2 hours.
        </h3>
        <p className={`text-sm ${dark ? "text-white/50" : "text-slate-400"}`}>
          For urgent bookings call 0468 070 392.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name</label>
          <input {...register("name")} placeholder="John Smith" className={inputClass} />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input {...register("phone")} type="tel" placeholder="0400 000 000" className={inputClass} />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input {...register("email")} type="email" placeholder="john@example.com" className={inputClass} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Address</label>
          <input {...register("address")} placeholder="123 Example St, Sydney" className={inputClass} />
          {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Service</label>
          <select {...register("service")} className={inputClass}>
            <option value="">Select service...</option>
            {SERVICES.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Notes (optional)</label>
        <textarea {...register("notes")} rows={3} placeholder="Any details or special requirements..." className={`${inputClass} resize-none`} />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 text-navy font-bold py-4 rounded-lg hover:bg-gold-400 transition-colors text-sm disabled:opacity-60"
      >
        {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Get My Free Quote <ArrowRight size={16} /></>}
      </button>

      <p className={`text-xs text-center ${dark ? "text-white/30" : "text-slate-400"}`}>
        We respond within 2 hours. No obligation.
      </p>
    </form>
  );
}
