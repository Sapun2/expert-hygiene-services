import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SYDNEY_SUBURBS } from "@/lib/utils";

export default function SydneyMap() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="/images/sydney/sydney-suburbs-01.jpg"
              alt="Sydney suburbs — Expert Hygiene Services coverage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-500" />
                  <span className="font-bold text-navy text-sm">All Sydney suburbs — 7 days a week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">Coverage</p>
            <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy mb-5 leading-tight">
              We Cover All<br />of Greater Sydney
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
              From the Northern Beaches to Cronulla, Penrith to Bondi — our mobile teams operate across every Sydney suburb, every day.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {SYDNEY_SUBURBS.slice(0, 16).map((s) => (
                <span key={s} className="text-xs text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full font-medium">
                  {s}
                </span>
              ))}
              <span className="text-xs text-teal-600 font-bold px-3 py-1.5 rounded-full border border-teal-200 bg-teal-50">
                +{SYDNEY_SUBURBS.length - 16} more
              </span>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal-600 transition-colors">
              Check your suburb <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
