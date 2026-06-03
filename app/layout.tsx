import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://experthygiene.com.au"),
  title: {
    default: "Expert Hygiene Services | Premium Cleaning Sydney | Curtain & Bond Cleaning",
    template: "%s | Expert Hygiene Services Sydney",
  },
  description:
    "Sydney's trusted cleaning specialists. Professional curtain cleaning, end-of-lease bond cleaning, carpet, upholstery & commercial cleaning. 4.9★ rated. Bond back guaranteed. 20% off first service.",
  keywords: [
    "curtain cleaning Sydney",
    "end of lease cleaning Sydney",
    "bond cleaning Sydney",
    "carpet cleaning Sydney",
    "professional cleaning Sydney",
    "Expert Hygiene Services",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://experthygiene.com.au",
    siteName: "Expert Hygiene Services",
    title: "Expert Hygiene Services | Sydney's Premium Cleaning Specialists",
    description:
      "Professional curtain, bond, carpet & upholstery cleaning across all Sydney suburbs. 4.9★ rated. Bond back guaranteed. 20% off first service.",
    images: [
      {
        url: "/images/hero/hero-floor-cleaning-03.jpg",
        width: 1200,
        height: 630,
        alt: "Expert Hygiene Services Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Hygiene Services | Premium Cleaning Sydney",
    description: "Sydney's trusted cleaning specialists. Curtain, bond, carpet & more. 4.9★ rated.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://experthygiene.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://experthygiene.com.au",
              name: "Expert Hygiene Services",
              description: "Sydney's premium cleaning specialists offering curtain cleaning, end-of-lease cleaning, carpet cleaning, upholstery cleaning and more.",
              url: "https://experthygiene.com.au",
              telephone: "+61468070392",
              email: "accounts@experthygieneservices.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sydney",
                addressRegion: "NSW",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.8688,
                longitude: 151.2093,
              },
              areaServed: {
                "@type": "City",
                name: "Sydney",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "120",
                bestRating: "5",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "07:00",
                  closes: "20:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cleaning Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curtain Cleaning Sydney" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "End of Lease Cleaning Sydney" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Cleaning Sydney" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`min-h-full flex flex-col text-slate-900 ${inter.variable} ${montserrat.variable} pb-[64px] lg:pb-0`}>
        <ConditionalLayout
          navbar={<Navbar />}
          footer={<Footer />}
          floatingCta={<FloatingCTA />}
          mobileNav={<MobileBottomNav />}
        >
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
