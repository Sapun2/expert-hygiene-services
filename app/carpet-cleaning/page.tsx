import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Carpet Cleaning Sydney | Steam & Hot Water Extraction | Stain Removal",
  description: "Professional carpet cleaning Sydney — hot water extraction, dry cleaning & stain removal. Safe for kids & pets. 4.9★ rated. Same day available. Free quotes.",
  alternates: { canonical: "https://experthygiene.com.au/carpet-cleaning" },
};

export default function CarpetCleaningPage() {
  return (
    <ServicePageTemplate
      title="Carpet Cleaning Sydney" heroHeading="Carpet Cleaning Sydney Experts"
      subtitle="Deep carpet cleaning using hot water extraction and dry cleaning methods. Removes stains, allergens, and bacteria — safe for your whole family."
      heroImage="/images/carpet-cleaning/carpet-cleaning-steam-01.jpg"
      heroAlt="Professional carpet steam cleaning Sydney"
      breadcrumb="Carpet Cleaning Sydney"
      intro="Your carpets are one of the largest surface areas in your home, and they trap more dust, allergens, bacteria, and pollutants than any other surface. Regular professional carpet cleaning is essential not just for appearance, but for your family's health."
      introParagraph2="Expert Hygiene Services uses commercial-grade hot water extraction (steam cleaning) and dry cleaning techniques to deep clean your carpets, removing embedded dirt, stains, pet hair, and allergens that vacuuming simply cannot reach."
      features={[
        "Hot water extraction & dry cleaning methods",
        "Removes embedded dirt, dust mites & allergens",
        "Powerful stain removal including wine, coffee & pet stains",
        "Safe for children, pets & allergy sufferers",
        "Fast-drying — walkable in 2–4 hours",
        "Residential & commercial carpet cleaning",
      ]}
      galleryImages={[
        { src: "/images/carpet-cleaning/carpet-cleaning-steam-01.jpg", alt: "Carpet steam cleaning Sydney" },
        { src: "/images/carpet-cleaning/carpet-cleaning-vacuum-02.jpg", alt: "Carpet vacuum cleaning Sydney" },
        { src: "/images/hero/hero-floor-cleaning-03.jpg", alt: "Professional floor cleaning Sydney" },
        { src: "/images/commercial-cleaning/commercial-cleaning-01.jpg", alt: "Commercial carpet cleaning" },
      ]}
      services={[
        { title: "Residential Carpet Cleaning", desc: "Deep clean for all home carpets using hot water extraction. Removes dirt, dust mites, stains and odours." },
        { title: "Commercial Carpet Cleaning", desc: "Office, retail and commercial carpet cleaning. After-hours and weekend availability to minimise disruption." },
        { title: "Stain Removal Treatment", desc: "Specialist stain removal for wine, coffee, tea, pet urine, blood, and grease. We remove what others can't." },
        { title: "Pet Odour & Stain Removal", desc: "Enzyme-based treatment that neutralises pet urine odour and stains completely, not just masking the smell." },
        { title: "Carpet Sanitisation", desc: "Anti-bacterial and anti-fungal treatment for carpets in bathrooms, playrooms and high-traffic areas." },
        { title: "End of Lease Carpet Cleaning", desc: "Bond-standard carpet cleaning that meets real estate inspection requirements. Often required by lease agreements." },
      ]}
      ctaTitle="Book Carpet Cleaning Today"
      ctaSubtitle="Same-day service available. 20% off first clean. All Sydney suburbs covered."
    />
  );
}
