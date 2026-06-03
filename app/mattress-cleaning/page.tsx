import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Mattress Cleaning Sydney | Dust Mite & Allergen Treatment | Sanitisation",
  description: "Professional mattress cleaning & sanitisation Sydney. Removes dust mites, allergens, bacteria & stains. Sleep healthier. 4.9★ rated. Free quotes. All suburbs.",
  alternates: { canonical: "https://experthygiene.com.au/mattress-cleaning" },
};

export default function MattressCleaningPage() {
  return (
    <ServicePageTemplate
      title="Mattress Cleaning Sydney" heroHeading="Mattress Cleaning Sydney Specialists"
      subtitle="Professional mattress sanitisation removes dust mites, allergens, bacteria and stains. Sleep cleaner, breathe better, live healthier."
      heroImage="/images/mattress-cleaning/mattress-cleaning-01.jpg"
      heroAlt="Professional mattress cleaning Sydney — Expert Hygiene Services"
      breadcrumb="Mattress Cleaning Sydney"
      intro="Did you know the average mattress can contain up to 10 million dust mites? These microscopic creatures and their waste products are a leading trigger for asthma, eczema, and allergic rhinitis. Professional mattress cleaning is essential for maintaining a healthy sleeping environment."
      introParagraph2="Our mattress sanitisation service uses UV-C light treatment, HEPA vacuuming, and steam cleaning to eliminate dust mites, bacteria, mould spores, and allergens from deep within your mattress — not just the surface."
      features={[
        "Eliminates up to 99% of dust mites",
        "Anti-bacterial & anti-fungal treatment",
        "UV-C light sanitisation",
        "HEPA deep vacuuming",
        "Stain removal treatment",
        "Same-day service available",
      ]}
      galleryImages={[
        { src: "/images/mattress-cleaning/mattress-cleaning-01.jpg", alt: "Mattress cleaning technician Sydney" },
        { src: "/images/hero/hero-cleaner-dusting-02.jpg", alt: "Professional cleaning service" },
        { src: "/images/upholstery-cleaning/sofa-cleaning-01.jpg", alt: "Professional cleaning" },
        { src: "/images/curtain-cleaning/curtain-cleaning-technician-05.jpg", alt: "Cleaning technician" },
      ]}
      services={[
        { title: "Dust Mite Treatment", desc: "Complete dust mite elimination using HEPA vacuuming, UV-C light and steam treatment." },
        { title: "Mattress Sanitisation", desc: "Anti-bacterial and anti-fungal treatment for a hygienically clean sleeping surface." },
        { title: "Stain Removal", desc: "Targeted treatment for sweat stains, urine stains, blood and other biological matter." },
        { title: "Odour Elimination", desc: "Deodorising treatment for musty, sweaty or pet-related odours." },
        { title: "Allergen Reduction", desc: "Reduces allergen levels for asthma and allergy sufferers. Safe for children." },
        { title: "All Mattress Types", desc: "We clean single, double, queen, king and custom mattresses. Memory foam, pocket spring, latex and hybrid." },
      ]}
      ctaTitle="Book Mattress Cleaning Today"
      ctaSubtitle="Sleep better from tonight. Same-day service available across all Sydney suburbs."
    />
  );
}
