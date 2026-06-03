import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Shield } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import QuoteForm from "@/components/forms/QuoteForm";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "End of Lease Cleaning Sydney | Bond Cleaning | 100% Bond Back Guarantee",
  description:
    "Professional end of lease cleaning Sydney. Bond back guaranteed or we return free. Full vacate cleans meeting real estate inspection standards. Same day available. 4.9★ rated.",
  alternates: { canonical: "https://experthygiene.com.au/end-of-lease-cleaning" },
  openGraph: {
    title: "End of Lease Cleaning Sydney | Bond Back Guaranteed",
    description: "Complete bond cleaning Sydney. Meet every real estate agent checklist item. Guaranteed bond return or free re-clean.",
    images: [{ url: "/images/end-of-lease/end-of-lease-bathroom-01.jpg" }],
  },
};

const bondFaqs = [
  {
    question: "What does your bond back guarantee mean exactly?",
    answer: "If your property manager or real estate agent is not satisfied with our end-of-lease clean, we will return to the property within 72 hours and re-clean any identified areas at absolutely no extra cost to you.",
  },
  {
    question: "What is included in an end-of-lease clean?",
    answer: "Our standard bond clean includes: all rooms (vacuuming, mopping, dusting), kitchen (oven, stovetop, rangehood, benches, cupboards inside and out), bathrooms and toilets (tiles, grout, shower screens), walls (spot cleaning), windows (interior), skirting boards, light switches, door frames, and all general cleaning to real estate inspection standard.",
  },
  {
    question: "Do you clean carpets as part of the bond clean?",
    answer: "Carpet steam cleaning can be added as an optional extra. We recommend it if your lease agreement requires professional carpet cleaning — many do. We offer a discounted rate when booked alongside your bond clean.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 48–72 hours before your move-out date. However, we also offer same-day and next-day emergency bookings subject to availability — call us on 0468 070 392.",
  },
  {
    question: "Do I need to be present during the clean?",
    answer: "No, you don't need to be present. Many clients provide access (key or code) and we complete the clean while they handle moving. We provide a completion report and photos upon finishing.",
  },
];

export default function EndOfLeaseCleaningPage() {
  return (
    <>
      <Hero
        heading={"End of Lease Cleaning\nBond Back Guaranteed"}
        subheading="Sydney's most trusted bond cleaning specialists. We meet every real estate agent's inspection checklist — guaranteed, or we return free of charge."
        imageSrc="/images/end-of-lease/end-of-lease-bathroom-01.jpg"
        imageAlt="Professional end of lease cleaning Sydney — Expert Hygiene Services"
        showStats={false}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-navy">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-navy font-medium">End of Lease Cleaning Sydney</span>
        </div>
      </div>

      {/* Guarantee Banner */}
      <div className="bg-teal-600 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Shield size={24} className="text-white" />
            <span className="font-bold text-lg">Bond Back Guarantee:</span>
            <span>Not satisfied? We return within 72 hours and re-clean — free of charge, no questions asked.</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-3">
                Bond Cleaning Specialists
              </span>
              <h2 className="font-display font-800 text-4xl md:text-5xl text-navy mb-6 leading-tight">
                Get Your Full Bond Back
                <span className="block text-teal-600">Every Time</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Moving out is stressful enough. Don&apos;t risk losing your bond over a substandard clean.
                Expert Hygiene Services delivers thorough, systematic end-of-lease cleaning that meets
                the exacting standards of Sydney&apos;s most demanding property managers.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our bond cleaning checklist covers every item on a standard real estate inspection — from
                oven degreasing to window track cleaning. We photograph every area before and after,
                providing documentation of the property&apos;s condition.
              </p>

              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Shield size={24} className="text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Our Bond Back Guarantee</h3>
                    <p className="text-slate-600 text-sm">
                      If your landlord or property manager identifies any cleaning issue at inspection,
                      contact us within 72 hours and we will return to re-clean the relevant areas
                      at zero additional cost.
                    </p>
                  </div>
                </div>
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

            <div className="space-y-4">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/end-of-lease/end-of-lease-bathroom-01.jpg" alt="Clean bathroom end of lease Sydney" fill className="object-cover" sizes="600px" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/end-of-lease/end-of-lease-mopping-02.jpg" alt="Professional mopping end of lease" fill className="object-cover" sizes="300px" />
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/end-of-lease/end-of-lease-interior-03.jpg" alt="Clean apartment interior bond clean" fill className="object-cover" sizes="300px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-800 text-3xl md:text-4xl text-navy mb-3">
              What&apos;s Included in Our Bond Clean
            </h2>
            <p className="text-slate-600 text-lg">
              Every area of the property covered — to real estate inspection standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Kitchen",
                items: ["Oven deep clean (inside & out)", "Stovetop & rangehood degrease", "Benchtops & splashback", "Cupboards inside & out", "Sink & tapware polish", "Dishwasher interior"],
              },
              {
                title: "Bathrooms & Toilets",
                items: ["Shower screen & tiles scrubbed", "Grout cleaning", "Basin, toilet & bath sanitised", "Mirror polish", "Tapware & fixtures", "Exhaust fan cleaning"],
              },
              {
                title: "Living Areas & Bedrooms",
                items: ["Vacuum all floors", "Mop hard floors", "Dust all surfaces", "Skirting boards wiped", "Door handles & frames", "Light switches & plates"],
              },
              {
                title: "Walls & Ceilings",
                items: ["Spot clean wall marks", "Cobweb removal (all ceilings)", "Light fittings dusted", "Architraves cleaned", "Window sills & tracks", "Wardrobe interior"],
              },
              {
                title: "Windows (Interior)",
                items: ["All window glass cleaned", "Window frames wiped", "Window sills dust & wiped", "Sliding door tracks", "Flyscreen cleaning", "Balcony door glass"],
              },
              {
                title: "Optional Add-ons",
                items: ["Carpet steam cleaning", "Upholstery cleaning", "Garage cleaning", "Balcony & outdoor areas", "Pressure washing", "Wall washing (full)"],
              },
            ].map((section) => (
              <div key={section.title} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                <h3 className="font-bold text-navy text-lg mb-4 pb-3 border-b border-slate-100">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={15} className="text-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-800 text-3xl md:text-4xl text-white mb-3">
              Get Your Bond Clean Quote
            </h2>
            <p className="text-white/70">
              Free, no-obligation quote within 2 hours. Same-day bookings available.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection faqs={bondFaqs} title="End of Lease Cleaning FAQs" />
      <CTASection
        title="Don't Risk Your Bond"
        subtitle="Book Sydney's most trusted end-of-lease cleaners today. Bond back guaranteed or we return free."
      />
    </>
  );
}
