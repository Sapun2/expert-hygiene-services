import Link from "next/link";
import { SYDNEY_SUBURBS } from "@/lib/utils";

export default function SuburbsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">Service Area</p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy leading-tight mb-4">
            We Cover All of Greater Sydney
          </h2>
          <p className="text-slate-500 text-base">
            From the Northern Beaches to Cronulla, Penrith to Bondi — 7 days a week, 7am–8pm.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SYDNEY_SUBURBS.map((suburb) => (
            <span
              key={suburb}
              className="border border-slate-200 bg-white text-slate-600 text-sm font-medium px-4 py-2 rounded-full hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 transition-colors cursor-default"
            >
              {suburb}
            </span>
          ))}
          <span className="border border-dashed border-slate-200 text-slate-400 text-sm px-4 py-2 rounded-full">
            + many more
          </span>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-lg hover:bg-navy/90 transition-colors text-sm"
          >
            Check If We Service Your Suburb →
          </Link>
        </div>
      </div>
    </section>
  );
}
