import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logos/logo-horizontal.svg"
              alt="Expert Hygiene Services"
              width={160}
              height={42}
              className="h-10 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Sydney&apos;s premium cleaning specialists. 5+ years. 120+ clients. Bond back guaranteed.
            </p>
            <div className="space-y-3">
              <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm">
                <Phone size={14} className="text-teal-500" /> {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm">
                <Mail size={14} className="text-teal-500" /> {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={14} className="text-teal-500" /> Sydney, NSW
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={s.slug} className="text-white/50 hover:text-white transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
                { label: "Free Quote", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
              ].map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Promise */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Our Promise</h3>
            <ul className="space-y-3">
              {[
                "Bond Back Guarantee",
                "Same Day Service",
                "Free Quotes",
                "20% Off First Clean",
                "Eco-Safe Products",
                "Fully Insured",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-5 text-xs">
            <Link href="/privacy-policy" className="text-white/20 hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms-conditions" className="text-white/20 hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
