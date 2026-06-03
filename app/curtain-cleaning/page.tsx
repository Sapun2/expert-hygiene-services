import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Star } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import QuoteForm from "@/components/forms/QuoteForm";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Curtain Cleaning Sydney | Professional On-Site Steam Cleaning",
  description:
    "Expert curtain cleaning Sydney — on-site steam injection, all curtain types. Sheers, blockout, eyelet, pleated & commercial drapes. 4.9★ rated. Free quotes. 20% off first clean.",
  alternates: { canonical: "https://experthygiene.com.au/curtain-cleaning" },
  openGraph: {
    title: "Curtain Cleaning Sydney | Expert Hygiene Services",
    description: "Professional on-site curtain steam cleaning across all Sydney suburbs. All curtain types. Free quote.",
    images: [{ url: "/images/curtain-cleaning/curtain-cleaning-blockout-01.jpg" }],
  },
};

const curtainFaqs = [
  {
    question: "Do you clean curtains on-site or take them away?",
    answer: "We primarily clean curtains on-site using our professional steam injection system — no need to take them down. For heavily soiled or delicate drapes, we also offer an off-site specialist service.",
  },
  {
    question: "What types of curtains do you clean?",
    answer: "We clean all curtain types including sheer curtains, blockout curtains, eyelet curtains, pencil pleat, pinch pleat, roman blinds, and commercial drapery. We also clean hospital curtains and hospitality/hotel drapes.",
  },
  {
    question: "How long does curtain cleaning take?",
    answer: "For an average home with 4–6 sets of curtains, the process takes approximately 2–3 hours. Your curtains are typically dry within 2–4 hours after cleaning.",
  },
  {
    question: "Will steam cleaning shrink my curtains?",
    answer: "No. Our technicians assess each curtain's fabric before choosing the appropriate cleaning method and temperature. We use controlled steam injection that is safe for all fabrics including silk, velvet, and linen.",
  },
  {
    question: "Do you service commercial curtain cleaning?",
    answer: "Yes. We clean curtains in offices, hotels, restaurants, medical centres, and schools across Sydney. We can work out of business hours to minimise disruption.",
  },
];

export default function CurtainCleaningPage() {
  return (
    <>
      <Hero
        heading={"Curtain Cleaning\nSydney Specialists"}
        subheading="Professional on-site curtain steam cleaning across all Sydney suburbs. We clean all curtain types without removing them — fast, effective, and fabric-safe."
        imageSrc="/images/curtain-cleaning/curtain-cleaning-luxury-room-03.jpg"
        imageAlt="Professional curtain cleaning Sydney — Expert Hygiene Services"
        showStats={false}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-navy">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-navy font-medium">Curtain Cleaning Sydney</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-3">
                Sydney&apos;s Curtain Specialists
              </span>
              <h2 className="font-display font-800 text-4xl md:text-5xl text-navy mb-6 leading-tight">
                Professional Curtain Cleaning
                <span className="block text-teal-600">Without the Hassle</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Your curtains accumulate dust, allergens, mould spores, and odours over time.
                Regular professional cleaning not only restores their appearance but also improves
                indoor air quality for your family.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Expert Hygiene Services uses advanced <strong>steam injection technology</strong> that
                cleans curtains <em>in place</em> — no removal, no disruption, no re-hanging.
                Our technicians are trained to handle every fabric type from delicate sheers to
                heavy blockout drapes.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "No removal required — cleaned in place",
                  "All fabric types: silk, velvet, linen, polyester",
                  "Sheer, blockout, eyelet, roman & pleated styles",
                  "Removes dust, allergens, mould & odours",
                  "Dry within 2–4 hours",
                  "Fully insured technicians",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-teal-500 flex-shrink-0" />
                    <span className="text-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Quote <ArrowRight size={18} />
                </Link>
                <a href={SITE_CONFIG.phoneHref} className="btn-outline">
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/curtain-cleaning/curtain-cleaning-blockout-01.jpg" alt="Blockout curtain cleaning Sydney" fill className="object-cover" sizes="300px" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/curtain-cleaning/curtain-cleaning-steam-04.jpg" alt="Curtain steam cleaning Sydney" fill className="object-cover" sizes="300px" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/curtain-cleaning/curtain-cleaning-sheer-02.jpg" alt="Sheer curtain cleaning Sydney" fill className="object-cover" sizes="300px" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/curtain-cleaning/curtain-natural-light-06.jpg" alt="Clean curtains natural light" fill className="object-cover" sizes="300px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-800 text-3xl md:text-4xl text-navy mb-3">
              Curtain Cleaning Services We Offer
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Comprehensive curtain cleaning for every home and business in Sydney.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Residential Curtain Cleaning", desc: "On-site steam cleaning for all home curtains. We clean in place without disruption to your daily routine." },
              { title: "Sheer & Voile Curtain Cleaning", desc: "Gentle steam cleaning for delicate sheer fabrics that restores clarity and removes embedded dust." },
              { title: "Blockout Curtain Cleaning", desc: "Deep cleaning for heavy blockout curtains that removes mould, dust and allergens without damaging the coating." },
              { title: "Commercial Curtain Cleaning", desc: "Office, hotel, restaurant and retail curtain cleaning. After-hours service available to minimise disruption." },
              { title: "Hospital & Medical Curtain Cleaning", desc: "Specialised anti-bacterial cleaning for hospital curtains meeting hygiene compliance standards." },
              { title: "Curtain Odour Treatment", desc: "Deodorising and sanitising treatment for curtains affected by smoke, cooking smells or mould odour." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                <h3 className="font-bold text-navy text-lg mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5+", label: "Years of Curtain Cleaning" },
              { value: "120+", label: "Happy Sydney Clients" },
              { value: "4.9★", label: "Google Rating" },
              { value: "All", label: "Sydney Suburbs Covered" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display font-900 text-3xl text-gold-400 mb-1">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-800 text-3xl md:text-4xl text-navy mb-3">
              Get a Free Curtain Cleaning Quote
            </h2>
            <p className="text-slate-600">
              Tell us about your curtains and we&apos;ll provide a transparent quote within 2 hours.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection faqs={curtainFaqs} title="Curtain Cleaning FAQs" />
      <CTASection
        title="Book Your Curtain Clean Today"
        subtitle="Sydney-wide service, same-day available, 20% off your first clean. Call or quote online now."
      />
    </>
  );
}
