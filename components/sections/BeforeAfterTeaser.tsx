import Link from "next/link";
import Image from "next/image";

const pairs = [
  {
    service: "Carpet Cleaning",
    suburb: "Parramatta",
    before: "/images/carpet-cleaning/carpet-cleaning-steam-01.jpg",
    after: "/images/carpet-cleaning/carpet-cleaning-steam-01.jpg",
  },
  {
    service: "End of Lease",
    suburb: "Bondi",
    before: "/images/end-of-lease/end-of-lease-bathroom-01.jpg",
    after: "/images/end-of-lease/end-of-lease-bathroom-01.jpg",
  },
  {
    service: "Curtain Cleaning",
    suburb: "Mosman",
    before: "/images/curtain-cleaning/curtain-cleaning-blockout-01.jpg",
    after: "/images/curtain-cleaning/curtain-cleaning-blockout-01.jpg",
  },
  {
    service: "Upholstery",
    suburb: "Manly",
    before: "/images/upholstery-cleaning/sofa-cleaning-01.jpg",
    after: "/images/upholstery-cleaning/sofa-cleaning-01.jpg",
  },
];

export default function BeforeAfterTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy leading-tight">
              See the Difference
            </h2>
            <p className="text-slate-500 mt-3 text-base">Real results from real Sydney homes.</p>
          </div>
          <Link href="/gallery" className="text-sm font-bold text-teal-600 hover:text-navy transition-colors self-start md:self-auto whitespace-nowrap">
            View Full Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pairs.map(({ service, suburb, after }) => (
            <div key={service} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <Image
                src={after}
                alt={`${service} result — ${suburb}, Sydney`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-xs">{service}</p>
                <p className="text-white/50 text-xs">{suburb}, Sydney</p>
              </div>
              <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                After
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">Photos from recent jobs across Sydney suburbs.</p>
      </div>
    </section>
  );
}
