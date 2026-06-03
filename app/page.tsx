import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import MultiStepForm from "@/components/forms/MultiStepForm";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import SydneyMap from "@/components/sections/SydneyMap";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Phone, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Hero badge="20% Off First Service" />
      <TrustBar />

      {/* ── FORM — immediately after hero ── */}
      <section className="py-10 md:py-16 bg-white" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">

            {/* Left — value props (hidden on mobile to keep form first) */}
            <div className="hidden lg:block lg:col-span-2 sticky top-28">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">Free Quote</p>
              <h2 className="font-display font-800 text-4xl text-navy mb-4 leading-tight">
                Get a Quote<br />in 2 Minutes
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-7">
                3 simple steps. No phone tag. We confirm pricing within 2 hours and can book same day.
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-3 mb-7 p-4 bg-slate-50 rounded-2xl">
                <div className="flex -space-x-2">
                  {["J", "S", "M", "P"].map((l, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center border-2 border-white">{l}</div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-gold-500 fill-gold-500" />)}
                  </div>
                  <p className="text-slate-600 text-xs"><strong>120+ Sydney clients</strong> trust us</p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Reply within 2 hours, 7 days a week",
                  "20% off your first service",
                  "Bond back guaranteed",
                  "Same-day bookings available",
                  "No hidden fees, ever",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-teal-500/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-teal-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 mb-2">Prefer to call?</p>
                <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center gap-2 text-navy font-bold text-lg hover:text-teal-600 transition-colors">
                  <Phone size={20} className="text-teal-500" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Right — the form */}
            <div className="lg:col-span-3">
              {/* Mobile heading */}
              <div className="lg:hidden mb-6 text-center">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-2">Free Quote · No Obligation</p>
                <h2 className="font-display font-800 text-2xl text-navy">Get your quote in 2 minutes</h2>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60 p-6 md:p-8">
                <MultiStepForm />
              </div>

              {/* Mobile trust */}
              <div className="lg:hidden mt-4 flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-gold-500 fill-gold-500" />)}
                </div>
                <p className="text-slate-500 text-xs">4.9 stars · 120+ Sydney clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <SydneyMap />
      <FAQSection />
      <CTASection />
    </>
  );
}
