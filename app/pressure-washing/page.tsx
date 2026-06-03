import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pressure Washing Sydney | Driveway, Deck & Exterior Cleaning",
  description: "Professional pressure washing Sydney — driveways, paths, decks, fences & building exteriors. Remove mould, grime & years of buildup. Free quotes. All suburbs.",
  alternates: { canonical: "https://experthygiene.com.au/pressure-washing" },
};

export default function PressureWashingPage() {
  return (
    <ServicePageTemplate
      title="Pressure Washing Sydney" heroHeading="Pressure Washing Sydney Specialists"
      subtitle="High-pressure cleaning that transforms your outdoor surfaces. Remove years of grime, mould, and stains from driveways, decks, paths, and building exteriors."
      heroImage="/images/pressure-washing/pressure-washing-01.jpg"
      heroAlt="Professional pressure washing Sydney — Expert Hygiene Services"
      breadcrumb="Pressure Washing Sydney"
      intro="Sydney's climate — with its combination of humidity, rain, and intense sun — causes rapid build-up of mould, algae, and grime on outdoor surfaces. Pressure washing restores your property's appearance and prevents long-term damage caused by biological growth."
      introParagraph2="Our technicians use commercial-grade pressure washing equipment combined with professional-grade eco-safe detergents to safely and effectively clean all outdoor surfaces without causing damage."
      features={[
        "Commercial-grade pressure washing equipment",
        "Eco-safe detergents — safe for gardens",
        "Driveways, paths, decks & patios",
        "Fences, walls & building exteriors",
        "Mould & algae removal",
        "Residential & commercial pressure cleaning",
      ]}
      galleryImages={[
        { src: "/images/pressure-washing/pressure-washing-01.jpg", alt: "Pressure washing outdoor Sydney" },
        { src: "/images/pressure-washing/pressure-washing-02.jpg", alt: "Water pressure cleaning" },
        { src: "/images/sydney/sydney-suburbs-01.jpg", alt: "Sydney residential property" },
        { src: "/images/commercial-cleaning/commercial-cleaning-02.jpg", alt: "Commercial pressure cleaning" },
      ]}
      services={[
        { title: "Driveway Cleaning", desc: "Remove oil stains, tyre marks, mould, and embedded grime from concrete and paved driveways." },
        { title: "Deck & Patio Cleaning", desc: "Restore timber and composite decks and outdoor entertaining areas to their original appearance." },
        { title: "Pathway & Footpath Cleaning", desc: "Clean concrete, pavers, and stone paths removing algae, mould, and surface grime." },
        { title: "Fence Cleaning", desc: "Pressure cleaning for Colorbond, timber, and rendered fence panels and walls." },
        { title: "Building Exterior Washing", desc: "Wash render, brick, cladding and external walls to remove grime, pollution, and biological growth." },
        { title: "Commercial Pressure Cleaning", desc: "Car parks, warehouse floors, shopping centre exteriors, and large-scale commercial pressure cleaning." },
      ]}
      ctaTitle="Book Pressure Washing Today"
      ctaSubtitle="Transform your property's exterior. Sydney wide service. Free quotes."
    />
  );
}
