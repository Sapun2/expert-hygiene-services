import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Curtain Cleaning Sydney | Professional On-Site Steam Cleaning",
  description: "Expert curtain cleaning Sydney — on-site steam injection, all curtain types. Free quotes. 20% off first clean.",
  alternates: { canonical: "https://experthygiene.com.au/curtain-cleaning" },
};

export default function CurtainCleaningPage() {
  return (
    <ServicePageTemplate
      title="Curtain Cleaning Sydney"
      heroHeading={"Curtain Cleaning\nSydney Specialists"}
      subtitle="Professional on-site steam cleaning for all curtain types. No removal required — fast, effective, and fabric-safe."
      heroImage="/images/curtain-cleaning/curtain-cleaning-luxury-room-03.jpg"
      heroAlt="Professional curtain cleaning Sydney"
      breadcrumb="Curtain Cleaning Sydney"
      intro="Your curtains trap dust, allergens, mould spores, and odours. Our steam injection technology cleans them in place — no removal, no disruption."
      features={["No removal required","All fabric types","Sheer, blockout, eyelet & pleated","Removes dust & allergens","Dry within 2–4 hours","Fully insured"]}
      galleryImages={[
        { src: "/images/curtain-cleaning/curtain-cleaning-blockout-01.jpg", alt: "Blockout curtain cleaning" },
        { src: "/images/curtain-cleaning/curtain-cleaning-sheer-02.jpg", alt: "Sheer curtain cleaning" },
        { src: "/images/curtain-cleaning/curtain-cleaning-steam-04.jpg", alt: "Curtain steam cleaning" },
        { src: "/images/curtain-cleaning/curtain-natural-light-06.jpg", alt: "Clean curtains" },
      ]}
      services={[
        { title: "Residential Curtain Cleaning", desc: "On-site steam cleaning for all home curtains without removing them." },
        { title: "Sheer & Voile Cleaning", desc: "Gentle steam for delicate sheer fabrics that restores clarity." },
        { title: "Blockout Curtain Cleaning", desc: "Deep cleaning removing mould, dust and allergens safely." },
        { title: "Commercial Curtain Cleaning", desc: "Office, hotel, restaurant curtains. After-hours available." },
        { title: "Hospital & Medical Curtains", desc: "Anti-bacterial cleaning meeting healthcare hygiene standards." },
        { title: "Curtain Odour Treatment", desc: "Deodorising for smoke, cooking smells or mould odour." },
      ]}
      ctaTitle="Book Your Curtain Clean Today"
      ctaSubtitle="Sydney-wide. Same-day available. 20% off first clean."
    />
  );
}
