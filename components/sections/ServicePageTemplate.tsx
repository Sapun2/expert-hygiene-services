import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import QuoteForm from "@/components/forms/QuoteForm";
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
  title,
  heroHeading,
  subtitle,
  heroImage,
  heroAlt,
  breadcrumb,
  intro,
  features,
  galleryImages,
  services,
  ctaTitle,
  ctaSubtitle,
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

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">Sydney Specialists</p>
              <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy mb-6 leading-tight">{title}</h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">{intro}</p>

              <ul className="space-y-3 mb-10">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors text-sm">
                  Free Quote <ArrowRight size={16} />
                </Link>
                <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center gap-2 border border-slate-200 text-navy font-bold px-6 py-3 rounded-lg hover:border-navy transition-colors text-sm">
                  <Phone size={15} /> {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.slice(0, 4).map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-xl ${i === 0 ? "h-64" : i === 3 ? "h-64" : "h-44"}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="300px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-800 text-3xl text-navy mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-7 border border-slate-100">
                <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Free Quote</p>
            <h2 className="font-display font-800 text-3xl text-white mb-2">Get a Quote in 2 Hours</h2>
            <p className="text-white/40 text-sm">No obligation. Same-day bookings available.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <QuoteForm dark={false} />
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />
      <CTASection title={ctaTitle} subtitle={ctaSubtitle} />
    </>
  );
}
