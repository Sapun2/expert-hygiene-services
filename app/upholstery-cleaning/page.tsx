import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Upholstery Cleaning Sydney | Sofa & Couch Steam Cleaning",
  description: "Professional upholstery and sofa cleaning Sydney. Steam clean all fabric types — sofas, couches, armchairs & more. Safe & effective. Free quotes. 4.9★ rated.",
  alternates: { canonical: "https://experthygiene.com.au/upholstery-cleaning" },
};

export default function UpholsteryCleaningPage() {
  return (
    <ServicePageTemplate
      title="Upholstery Cleaning Sydney" heroHeading="Upholstery Cleaning Sydney Specialists"
      subtitle="Restore your furniture to like-new condition. Professional steam cleaning for sofas, couches, armchairs, ottomans, and all upholstered furniture."
      heroImage="/images/upholstery-cleaning/sofa-cleaning-01.jpg"
      heroAlt="Professional sofa upholstery cleaning Sydney"
      breadcrumb="Upholstery Cleaning Sydney"
      intro="Upholstered furniture accumulates dust, oils, pet dander, food crumbs, and bacteria over time. Without professional cleaning, your sofa becomes a reservoir of allergens that impacts your indoor air quality and family's health."
      introParagraph2="Our upholstery cleaning specialists use steam extraction and low-moisture cleaning methods specifically selected for each fabric type — whether you have linen, velvet, microfibre, leather, or synthetic blends."
      features={[
        "Sofa, couch, armchair & ottoman cleaning",
        "All fabric types: linen, velvet, microfibre, synthetic",
        "Steam extraction & low-moisture methods",
        "Pet hair, stain & odour removal",
        "Safe for children and pets",
        "Quick-drying — ready in 2–4 hours",
      ]}
      galleryImages={[
        { src: "/images/upholstery-cleaning/sofa-cleaning-01.jpg", alt: "Sofa cleaning Sydney" },
        { src: "/images/hero/hero-cleaner-dusting-02.jpg", alt: "Professional cleaning service" },
        { src: "/images/mattress-cleaning/mattress-cleaning-01.jpg", alt: "Upholstery cleaning technician" },
        { src: "/images/curtain-cleaning/curtain-cleaning-steam-04.jpg", alt: "Steam cleaning service" },
      ]}
      services={[
        { title: "Sofa & Couch Cleaning", desc: "Deep steam clean for 2-seater, 3-seater, L-shape and corner sofas. Removes embedded dirt, oils and allergens." },
        { title: "Armchair Cleaning", desc: "Individual armchair and accent chair cleaning. All shapes and sizes, all fabric types." },
        { title: "Ottoman & Footstool Cleaning", desc: "Professional cleaning for ottomans, footstools and chaise lounges." },
        { title: "Pet Hair & Odour Treatment", desc: "Specialised enzyme treatment removes pet hair, dander and urine odour from all upholstered furniture." },
        { title: "Stain & Spot Treatment", desc: "Targeted stain removal for wine, coffee, food, ink, grease and other stubborn marks." },
        { title: "Commercial Upholstery Cleaning", desc: "Office chairs, reception seating, restaurant booth seating and hotel furniture cleaning." },
      ]}
      pageSlug="upholstery-cleaning"
      ctaTitle="Book Your Sofa Clean Today"
      ctaSubtitle="Free quotes, same-day available, 20% off first service. All Sydney suburbs."
    />
  );
}
