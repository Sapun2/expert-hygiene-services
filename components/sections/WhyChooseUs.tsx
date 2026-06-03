import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const points = [
  { num: "01", title: "Certified & Insured", body: "All technicians are fully trained, background-checked, and carry public liability insurance." },
  { num: "02", title: "Bond Back Guarantee", body: "Not satisfied? We return within 72 hours and re-clean at no charge — every time." },
  { num: "03", title: "Transparent Pricing", body: "Written quotes before every job. What we quote is what you pay. No surprises." },
  { num: "04", title: "Eco-Safe Products", body: "Australian Standards certified products — effective, safe for children and pets." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[560px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/hero-cleaner-dusting-02.jpg"
                alt="Expert Hygiene Services — professional cleaning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-xl px-6 py-5 border border-slate-100 max-w-xs">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-gold-500 text-sm">★</span>)}
                <span className="text-navy font-bold text-sm ml-1">4.9</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed italic">"Bond returned in full — exceptional service."</p>
              <p className="text-navy font-bold text-xs mt-2">James T. — Bondi</p>
            </div>
            <div className="absolute top-6 left-6 bg-gold-500 text-navy text-xs font-bold px-4 py-2 rounded-full">
              20% Off First Service
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              Sydney&apos;s Most<br />Trusted Cleaners
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-md">
              5+ years. 120+ clients. A 4.9-star reputation built on results, reliability, and genuine care — not promises.
            </p>

            <div className="space-y-8">
              {points.map((p) => (
                <div key={p.num} className="flex gap-5">
                  <span className="font-display font-900 text-3xl text-slate-100 leading-none flex-shrink-0 w-10">{p.num}</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 mt-10 text-sm font-bold text-navy hover:text-teal-600 transition-colors">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
