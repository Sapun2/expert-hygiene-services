import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Reviews</p>
            <h2 className="font-display font-800 text-4xl lg:text-5xl text-white leading-tight">
              What Sydney<br />Says About Us
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-gold-400 fill-gold-400" />)}
            </div>
            <span className="text-white/60 text-sm">4.9 · 120+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
              <div className="flex gap-0.5 mb-5">
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} className="text-gold-400 fill-gold-400" />)}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">{r.name}</p>
                  <p className="text-white/40 text-xs">{r.suburb}</p>
                </div>
                <span className="text-xs text-white/30 border border-white/10 px-3 py-1 rounded-full">{r.service}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(3, 6).map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
              <div className="flex gap-0.5 mb-5">
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} className="text-gold-400 fill-gold-400" />)}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">{r.name}</p>
                  <p className="text-white/40 text-xs">{r.suburb}</p>
                </div>
                <span className="text-xs text-white/30 border border-white/10 px-3 py-1 rounded-full">{r.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
