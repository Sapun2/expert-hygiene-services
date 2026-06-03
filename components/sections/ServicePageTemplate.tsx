import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import BookingForm from "@/components/forms/BookingForm";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { FAQS, SITE_CONFIG } from "@/lib/utils";

interface ServicePageProps {
  title: string;
  heroHeading?: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  breadcrumb: string;
  intro: string;
  introParagraph2?: string;
  features: string[];
  galleryImages: { src: string; alt: string }[];
  services: { title: string; desc: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export default function ServicePageTemplate({
  title, heroHeading, subtitle, heroImage, heroAlt,
  breadcrumb, intro, features, galleryImages, services,
  ctaTitle, ctaSubtitle,
}: ServicePageProps) {
  return (
    <>
      <Hero
        heading={heroHeading || breadcrumb}
        subheading={subtitle}
        imageSrc={heroImage}
        imageAlt={heroAlt}
        showStats={false}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-navy font-medium">{breadcrumb}</span>
        </div>
      </div>

      {/* ── BOOKING FORM — first section ── */}
      <section className="py-12 bg-white" id="quote">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Left copy */}
            <div className="lg:col-span-2">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">Book Online</p>
              <h2 className="font-display font-800 text-3xl lg:text-4xl text-navy mb-4 leading-tight">
                {title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{intro}</p>
              <ul className="space-y-2.5 mb-6">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center gap-2 text-navy font-bold text-sm hover:text-teal-600 transition-colors">
                <Phone size={16} className="text-teal-500" /> Or call {SITE_CONFIG.phone}
              </a>
            </div>

            {/* Right — form with service pre-selected */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60 p-6 md:p-8">
                <BookingForm defaultService={title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-14 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.slice(0, 4).map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 0 || i === 3 ? "h-64" : "h-48"}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="300px" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What we offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-800 text-3xl text-navy mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <div key={s.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-navy mb-2 text-sm">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />
      <CTASection title={ctaTitle} subtitle={ctaSubtitle} />
    </>
  );
}
