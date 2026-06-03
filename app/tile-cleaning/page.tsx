import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Tile Cleaning Sydney | Grout Cleaning & Restoration | Floor Tiles",
  description: "Professional tile and grout cleaning Sydney. Deep clean bathroom tiles, kitchen tiles, floor tiles and natural stone. Grout whitening & sealing. Free quotes.",
  alternates: { canonical: "https://experthygiene.com.au/tile-cleaning" },
};

export default function TileCleaningPage() {
  return (
    <ServicePageTemplate
      title="Tile Cleaning Sydney" heroHeading="Tile and Grout Cleaning Sydney Specialists"
      subtitle="Deep clean and restore your tiles and grout lines using professional-grade equipment. Bathroom, kitchen, floor and outdoor tiles across all Sydney suburbs."
      heroImage="/images/end-of-lease/end-of-lease-bathroom-01.jpg"
      heroAlt="Professional tile and grout cleaning Sydney"
      breadcrumb="Tile Cleaning Sydney"
      intro="Grout is porous by nature, absorbing dirt, bacteria, and mould over time. Even with regular mopping, grout lines accumulate grime that domestic cleaning products cannot remove. Professional tile and grout cleaning restores your surfaces to their original appearance."
      introParagraph2="We use rotary scrubbing machines, high-pressure steam, and professional chemical treatments to clean deep into tile and grout surfaces — safely removing mould, staining, and discolouration from bathroom tiles, kitchen tiles, and floor tiles."
      features={[
        "Deep rotary tile scrubbing",
        "High-pressure grout cleaning",
        "Mould & mildew removal",
        "Grout whitening treatment",
        "Natural stone safe methods",
        "Grout sealing available",
      ]}
      galleryImages={[
        { src: "/images/end-of-lease/end-of-lease-bathroom-01.jpg", alt: "Clean bathroom tiles Sydney" },
        { src: "/images/curtain-cleaning/curtain-cleaning-technician-05.jpg", alt: "Cleaning technician" },
        { src: "/images/hero/hero-floor-cleaning-03.jpg", alt: "Floor cleaning professional" },
        { src: "/images/commercial-cleaning/commercial-cleaning-01.jpg", alt: "Commercial tile cleaning" },
      ]}
      services={[
        { title: "Bathroom Tile Cleaning", desc: "Deep clean shower tiles, bathroom floor tiles, and wall tiles. Remove soap scum, mould, and water staining." },
        { title: "Kitchen Tile Cleaning", desc: "Degrease and deep clean kitchen splashback tiles, floor tiles, and grout lines." },
        { title: "Floor Tile Cleaning", desc: "Restore all types of floor tiles — porcelain, ceramic, slate, travertine, and terracotta." },
        { title: "Grout Cleaning & Whitening", desc: "Professional grout cleaning that restores original colour. Optional grout whitening and colour sealing available." },
        { title: "Natural Stone Cleaning", desc: "Specialist cleaning for marble, limestone, travertine, slate and other natural stone surfaces." },
        { title: "Grout Sealing", desc: "Protect freshly cleaned grout with professional sealing to resist future staining and moisture ingress." },
      ]}
      ctaTitle="Book Tile Cleaning Today"
      ctaSubtitle="Restore your tiles and grout. Sydney wide service. Free quotes."
    />
  );
}
