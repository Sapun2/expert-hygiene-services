import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery | Expert Hygiene Services | Cleaning Results Sydney",
  description: "See our professional cleaning results across Sydney. Curtain cleaning, bond cleaning, carpet cleaning and more. Real results from real jobs.",
  alternates: { canonical: "https://experthygiene.com.au/gallery" },
};

const galleryItems = [
  { src: "/images/curtain-cleaning/curtain-cleaning-luxury-room-03.jpg", alt: "Curtain cleaning luxury living room Sydney", category: "Curtain Cleaning" },
  { src: "/images/curtain-cleaning/curtain-cleaning-blockout-01.jpg", alt: "Blockout curtain cleaning Sydney", category: "Curtain Cleaning" },
  { src: "/images/end-of-lease/end-of-lease-bathroom-01.jpg", alt: "Bond clean bathroom Sydney", category: "End of Lease" },
  { src: "/images/end-of-lease/end-of-lease-mopping-02.jpg", alt: "Professional mopping end of lease", category: "End of Lease" },
  { src: "/images/carpet-cleaning/carpet-cleaning-steam-01.jpg", alt: "Carpet steam cleaning Sydney", category: "Carpet Cleaning" },
  { src: "/images/carpet-cleaning/carpet-cleaning-vacuum-02.jpg", alt: "Carpet vacuum cleaning", category: "Carpet Cleaning" },
  { src: "/images/upholstery-cleaning/sofa-cleaning-01.jpg", alt: "Sofa upholstery cleaning Sydney", category: "Upholstery" },
  { src: "/images/mattress-cleaning/mattress-cleaning-01.jpg", alt: "Mattress cleaning Sydney", category: "Mattress" },
  { src: "/images/commercial-cleaning/commercial-cleaning-01.jpg", alt: "Commercial office cleaning", category: "Commercial" },
  { src: "/images/commercial-cleaning/commercial-cleaning-02.jpg", alt: "Commercial pressure washing", category: "Commercial" },
  { src: "/images/pressure-washing/pressure-washing-01.jpg", alt: "Pressure washing outdoor Sydney", category: "Pressure Washing" },
  { src: "/images/pressure-washing/pressure-washing-02.jpg", alt: "Water pressure cleaning", category: "Pressure Washing" },
  { src: "/images/curtain-cleaning/curtain-cleaning-sheer-02.jpg", alt: "Sheer curtain cleaning", category: "Curtain Cleaning" },
  { src: "/images/hero/hero-luxury-interior-04.jpg", alt: "Luxury interior after cleaning", category: "Results" },
  { src: "/images/gallery/gallery-01.jpg", alt: "Professional cleaning result", category: "Results" },
  { src: "/images/gallery/gallery-02.jpg", alt: "Expert cleaning service", category: "Results" },
  { src: "/images/curtain-cleaning/curtain-natural-light-06.jpg", alt: "Curtains after professional cleaning", category: "Curtain Cleaning" },
  { src: "/images/end-of-lease/end-of-lease-interior-03.jpg", alt: "Clean apartment interior", category: "End of Lease" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 font-bold text-sm uppercase tracking-widest mb-4">Our Work</span>
          <h1 className="font-display font-900 text-5xl md:text-6xl text-white mb-6">
            Real Results from
            <span className="block text-gold-400">Real Sydney Jobs</span>
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Browse our gallery of professional cleaning results across residential and commercial
            properties throughout Sydney.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <div key={i} className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-md group">
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gold-500 text-navy text-xs font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Results Like These?"
        subtitle="Get your free quote today and experience the Expert Hygiene difference."
      />
    </>
  );
}
