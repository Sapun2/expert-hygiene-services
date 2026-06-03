"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!servicesOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [servicesOpen]);

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-navy text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wide">
        <span className="text-gold-400">20% Off First Service</span>
        <span className="mx-3 opacity-30">|</span>
        <a href={SITE_CONFIG.phoneHref} className="hover:text-gold-300 transition-colors">
          {SITE_CONFIG.phone}
        </a>
        <span className="mx-3 opacity-30">|</span>
        <span className="opacity-60">Bond Back Guarantee</span>
      </div>

      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-white shadow-sm border-slate-100" : "bg-white border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18" style={{ height: "72px" }}>

            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logos/logo-horizontal.svg"
                alt="Expert Hygiene Services"
                width={200}
                height={52}
                priority
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-navy transition-colors py-2"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  Services
                  <ChevronDown size={14} className={cn("transition-transform duration-200", servicesOpen && "rotate-180")} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          href={s.slug}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-navy font-medium transition-colors border-b border-slate-50 last:border-0"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2 text-sm font-bold text-navy hover:text-teal-600 transition-colors">
                <Phone size={15} className="text-teal-500" />
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-navy/90 transition-colors">
                Free Quote
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="px-6 py-5 space-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 text-slate-700 font-semibold text-sm border-b border-slate-50"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Services</p>
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={s.slug}
                      className="py-2 text-sm text-slate-600 hover:text-navy font-medium"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <a href={SITE_CONFIG.phoneHref} className="flex items-center justify-center gap-2 border border-navy text-navy font-bold text-sm py-3 rounded-lg">
                  <Phone size={16} /> {SITE_CONFIG.phone}
                </a>
                <Link href="/contact" className="flex items-center justify-center bg-navy text-white font-bold text-sm py-3 rounded-lg" onClick={() => setIsMobileOpen(false)}>
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
