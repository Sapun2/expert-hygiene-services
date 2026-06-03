import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://experthygiene.com.au";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/curtain-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/end-of-lease-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/carpet-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/upholstery-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mattress-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/commercial-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pressure-washing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tile-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
