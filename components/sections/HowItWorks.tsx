import Link from "next/link";
import { ClipboardList, CheckCircle2, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Request a Free Quote",
    desc: "Fill in our 2-minute form or call 0468 070 392. Tell us what needs cleaning, your location, and preferred time.",
  },
  {
    icon: CheckCircle2,
    step: "02",
    title: "We Confirm Your Booking",
    desc: "We reply within 2 hours with your written quote and available time slots. No obligations — no pressure.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "We Clean. You Relax.",
    desc: "Our certified team arrives on time and delivers guaranteed results. Bond back promise included on every job.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy leading-tight">
            Booking Is Simple
          </h2>
          <p className="text-slate-500 mt-4 text-base leading-relaxed">
            Three steps from enquiry to a spotless home or office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-teal-200 via-gold-300 to-teal-200" />

          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/60 flex items-center justify-center">
                  <Icon size={32} className="text-teal-500" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-gold-400 text-xs font-black">{step}</span>
                </div>
              </div>
              <h3 className="font-display font-800 text-lg text-navy mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-lg hover:bg-navy/90 transition-colors text-sm"
          >
            Book Your Free Quote →
          </Link>
          <p className="text-slate-400 text-xs mt-3">
            Or call <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="text-teal-600 font-semibold hover:underline">{SITE_CONFIG.phone}</a> — we answer 7 days
          </p>
        </div>
      </div>
    </section>
  );
}
