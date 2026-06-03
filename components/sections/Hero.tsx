"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

interface HeroProps {
  heading?: string;
  subheading?: string;
  imageSrc?: string;
  imageAlt?: string;
  showStats?: boolean;
  badge?: string;
}

export default function Hero({
  heading = "Sydney's Premium\nCleaning Specialists",
  subheading = "Curtain cleaning, bond cleaning, carpet & more — 5+ years, 120+ clients, bond back guaranteed.",
  imageSrc = "/images/hero/hero-floor-cleaning-03.jpg",
  imageAlt = "Expert Hygiene Services Sydney",
  showStats = true,
  badge,
}: HeroProps) {
  const lines = heading.split("\n");

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-2xl">

          {badge && (
            <div className="inline-flex items-center gap-2 border border-gold-400/40 text-gold-400 text-xs font-bold px-4 py-1.5 rounded-full mb-8 tracking-wider uppercase">
              {badge}
            </div>
          )}

          <h1 className="font-display font-900 text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 tracking-tight">
            {lines[0]}
            {lines[1] && <span className="block" style={{ color: "#D4AF37" }}>{lines[1]}</span>}
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
            {subheading}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {["Bond Back Guarantee", "4.9★ Google Rating", "Same Day Available"].map((t) => (
              <span key={t} className="text-xs font-semibold text-white/60 border border-white/20 px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy font-bold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors text-sm">
              Get Free Quote <ArrowRight size={16} />
            </Link>
            <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:border-white/60 transition-colors text-sm">
              <Phone size={16} /> {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        {showStats && (
          <div className="mt-20 flex flex-wrap gap-8">
            {[
              { value: "5+", label: "Years" },
              { value: "120+", label: "Clients" },
              { value: "4.9★", label: "Rating" },
              { value: "100%", label: "Bond Back" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-gold-500/40 pl-5">
                <div className="font-display font-900 text-2xl text-white">{s.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
