import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "End of Lease Cleaning Sydney | Bond Cleaning | Bond Back Guaranteed",
  description: "Professional end of lease cleaning Sydney. Bond back guaranteed or we return free. 4.9★ rated.",
  alternates: { canonical: "https://experthygiene.com.au/end-of-lease-cleaning" },
};

export default function EndOfLeaseCleaningPage() {
  return (
    <ServicePageTemplate
      title="End Of Lease Cleaning"
      heroHeading={"End of Lease Cleaning\nBond Back Guaranteed"}
      subtitle="Sydney's most trusted bond cleaning. We meet every real estate inspection checklist — or we return free of charge."
      heroImage="/images/end-of-lease/end-of-lease-bathroom-01.jpg"
      heroAlt="Professional end of lease cleaning Sydney"
      breadcrumb="End of Lease Cleaning Sydney"
      intro="Don't risk your bond on a substandard clean. We deliver thorough, systematic bond cleaning that meets Sydney property managers' standards — with a written guarantee."
      features={["Bond Back Guarantee","Full inspection checklist","Oven & appliance cleaning","Bathroom & grout deep clean","Window tracks & skirting","Photo documentation"]}
      galleryImages={[
        { src: "/images/end-of-lease/end-of-lease-bathroom-01.jpg", alt: "Clean bathroom bond clean" },
        { src: "/images/end-of-lease/end-of-lease-mopping-02.jpg", alt: "Professional mopping" },
        { src: "/images/end-of-lease/end-of-lease-interior-03.jpg", alt: "Clean apartment" },
        { src: "/images/hero/hero-residential-05.jpg", alt: "Property ready for inspection" },
      ]}
      services={[
        { title: "Full Bond Clean", desc: "Comprehensive clean covering every item on the real estate inspection checklist." },
        { title: "Kitchen Deep Clean", desc: "Oven, stovetop, rangehood, benchtops, cupboards inside and out." },
        { title: "Bathroom & Toilet Cleaning", desc: "Tiles, grout, shower screens, basin, toilet and tapware." },
        { title: "Carpet Steam Cleaning", desc: "Optional add-on — often required by lease agreements." },
        { title: "Window Cleaning (Interior)", desc: "All glass, frames, sills and tracks cleaned to standard." },
        { title: "Wall Spot Cleaning", desc: "Marks, scuffs and fingerprints removed from walls." },
      ]}
      pageSlug="end-of-lease-cleaning"
      ctaTitle="Don't Risk Your Bond"
      ctaSubtitle="Book Sydney's most trusted bond cleaners. Guaranteed or we return free."
    />
  );
}
