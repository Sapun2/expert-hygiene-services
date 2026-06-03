import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready for a Cleaner Home?",
  subtitle = "Same-day bookings available. 20% off your first service.",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-5">Book Now</p>
        <h2 className="font-display font-900 text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-white/50 text-lg mb-10">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy font-bold px-10 py-4 rounded-lg hover:bg-gold-400 transition-colors text-sm">
            Get Free Quote <ArrowRight size={16} />
          </Link>
          <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-10 py-4 rounded-lg hover:border-white/40 transition-colors text-sm">
            <Phone size={16} /> {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
