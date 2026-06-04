import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Commercial Cleaning Sydney | Office & Business Cleaning Services",
  description: "Professional commercial cleaning Sydney — offices, retail, medical, industrial. Flexible scheduling, fully insured. 4.9★ rated. Free quotes. Sydney wide.",
  alternates: { canonical: "https://experthygiene.com.au/commercial-cleaning" },
};

export default function CommercialCleaningPage() {
  return (
    <ServicePageTemplate
      title="Commercial Cleaning Sydney" heroHeading="Commercial Cleaning Sydney Professionals"
      subtitle="Tailored commercial cleaning solutions for offices, retail spaces, medical centres, schools and industrial facilities. Reliable, consistent, and fully insured."
      heroImage="/images/commercial-cleaning/commercial-cleaning-01.jpg"
      heroAlt="Commercial office cleaning Sydney — Expert Hygiene Services"
      breadcrumb="Commercial Cleaning Sydney"
      intro="A clean workplace directly impacts productivity, staff morale, and the impression you make on clients and customers. Expert Hygiene Services delivers consistent, high-standard commercial cleaning across Sydney businesses of all sizes."
      introParagraph2="We offer flexible scheduling to minimise disruption — early morning, evening, and weekend cleans are all available. Our commercial cleaning teams are fully trained, background-checked, and covered by comprehensive insurance."
      features={[
        "Flexible scheduling — before/after hours & weekends",
        "Dedicated account manager",
        "Fully trained & insured cleaning teams",
        "Regular or one-off commercial cleans",
        "Specialised equipment for large spaces",
        "Eco-safe, workplace-approved products",
      ]}
      galleryImages={[
        { src: "/images/commercial-cleaning/commercial-cleaning-01.jpg", alt: "Office cleaning Sydney" },
        { src: "/images/commercial-cleaning/commercial-cleaning-02.jpg", alt: "Commercial cleaning service" },
        { src: "/images/sydney/sydney-cbd-03.jpg", alt: "Sydney CBD commercial district" },
        { src: "/images/hero/hero-professional-cleaner-01.jpg", alt: "Professional commercial cleaner" },
      ]}
      services={[
        { title: "Office Cleaning", desc: "Regular office cleaning including workstations, kitchens, bathrooms, reception areas and meeting rooms." },
        { title: "Retail Cleaning", desc: "Store cleaning, display case maintenance, and customer-facing area presentation for retail environments." },
        { title: "Medical Centre Cleaning", desc: "Clinical-grade cleaning for medical, dental and allied health practices meeting Australian infection control standards." },
        { title: "Restaurant & Hospitality", desc: "Kitchen deep cleans, dining area maintenance, and hygiene compliance cleaning for food service businesses." },
        { title: "School & Childcare Cleaning", desc: "Safe, child-friendly cleaning for educational facilities using non-toxic, certified products." },
        { title: "Industrial & Warehouse Cleaning", desc: "Heavy-duty cleaning for factories, warehouses and industrial facilities including pressure washing and floor scrubbing." },
      ]}
      pageSlug="commercial-cleaning"
      ctaTitle="Get a Commercial Cleaning Quote"
      ctaSubtitle="Flexible scheduling, competitive pricing, consistent quality. Sydney wide."
    />
  );
}
