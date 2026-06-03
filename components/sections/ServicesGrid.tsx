import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/utils";

export default function ServicesGrid() {
  const featured = SERVICES.filter((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy leading-tight">
              What We Do
            </h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-navy transition-colors self-start md:self-auto">
            Get a Quote <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {featured.map((s) => (
            <Link key={s.id} href={s.slug} className="group relative overflow-hidden rounded-2xl h-80 flex items-end">
              <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="relative z-10 p-8 w-full flex items-end justify-between">
                <div>
                  <span className="inline-block text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Featured</span>
                  <h3 className="font-display font-800 text-2xl text-white">{s.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((s) => (
            <Link key={s.id} href={s.slug} className="group relative overflow-hidden rounded-2xl h-52 flex items-end">
              <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="relative z-10 p-6 w-full flex items-end justify-between">
                <h3 className="font-display font-700 text-lg text-white">{s.name}</h3>
                <ArrowUpRight size={16} className="text-white/60 group-hover:text-gold-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
