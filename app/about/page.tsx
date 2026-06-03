import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About Us | Expert Hygiene Services Sydney",
  description: "5+ years of premium cleaning in Sydney. 120+ happy clients, 4.9-star rated. Meet the team behind Expert Hygiene Services.",
  alternates: { canonical: "https://experthygiene.com.au/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-5">About Us</p>
            <h1 className="font-display font-900 text-5xl md:text-6xl text-white mb-5 leading-tight">
              Built on Results.<br />
              <span style={{ color: "#D4AF37" }}>Trusted by Sydney.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Expert Hygiene Services has been delivering premium cleaning across Sydney for over 5 years — earning a 4.9-star reputation from 120+ satisfied clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "120+", label: "Happy Clients" },
              { value: "4.9★", label: "Google Rating" },
              { value: "100%", label: "Bond Back Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-900 text-3xl text-navy mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-5">Our Story</p>
              <h2 className="font-display font-800 text-4xl text-navy mb-6 leading-tight">
                Why We Started
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                <p>
                  We started with one belief: Sydney homes and businesses deserve a genuinely clean environment — not just surface tidiness, but deep, hygienic cleaning that makes a measurable difference to health and wellbeing.
                </p>
                <p>
                  Today, we&apos;re a team of certified, insured specialists using commercial-grade equipment and eco-safe products — trusted by 120+ clients across every Sydney suburb.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image src="/images/hero/hero-cleaner-dusting-02.jpg" alt="Expert Hygiene Services team" fill className="object-cover" sizes="600px" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-2xl overflow-hidden">
                  <Image src="/images/hero/hero-professional-cleaner-01.jpg" alt="Professional cleaning" fill className="object-cover" sizes="300px" />
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden">
                  <Image src="/images/commercial-cleaning/commercial-cleaning-01.jpg" alt="Commercial cleaning" fill className="object-cover" sizes="300px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-800 text-3xl text-navy mb-12">Why Sydney Chooses Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Fully trained, background-checked & insured technicians on every job",
              "Commercial-grade equipment delivering professional results every time",
              "Eco-safe, Australian Standards certified cleaning products",
              "Bond Back Guarantee — we return free if your agent isn't satisfied",
              "Transparent pricing — written quotes, no hidden fees",
              "2-hour response time on all enquiries",
              "Same-day and emergency bookings across all Sydney suburbs",
              "20% off for all new customers on their first service",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-100">
                <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection title="Experience the Difference" subtitle="Join 120+ satisfied Sydney clients." />
    </>
  );
}
