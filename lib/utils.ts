import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_CONFIG = {
  name: "Expert Hygiene Services",
  tagline: "Sydney's Premium Cleaning Specialists",
  domain: "experthygiene.com.au",
  url: "https://experthygiene.com.au",
  phone: "0468 070 392",
  phoneHref: "tel:0468070392",
  email: "accounts@experthygieneservices.com",
  address: "Sydney, NSW, Australia",
  abn: "",
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
  stats: {
    experience: "5+",
    customers: "120+",
    rating: "4.9",
    reviews: "98",
  },
  offers: {
    firstService: "20% Off First Service",
    bondGuarantee: "Bond Back Guarantee",
    satisfaction: "Satisfaction Guarantee",
    sameDay: "Same Day Service",
    freeQuote: "Free Quotes",
  },
};

export const SERVICES = [
  {
    id: "curtain-cleaning",
    name: "Curtain Cleaning",
    shortName: "Curtains",
    slug: "/curtain-cleaning",
    description:
      "Professional on-site and off-site curtain cleaning using steam injection technology. We clean all types including sheers, blockout, eyelet, and pleated curtains.",
    image: "/images/curtain-cleaning/curtain-cleaning-blockout-01.jpg",
    icon: "curtain",
    featured: true,
    keywords: ["curtain cleaning Sydney", "drape cleaning", "blind cleaning"],
  },
  {
    id: "end-of-lease",
    name: "End Of Lease Cleaning",
    shortName: "End of Lease",
    slug: "/end-of-lease-cleaning",
    description:
      "Comprehensive bond cleaning service designed to meet every real estate agent's checklist. We guarantee your bond back or we return free of charge.",
    image: "/images/end-of-lease/end-of-lease-bathroom-01.jpg",
    icon: "home",
    featured: true,
    keywords: [
      "end of lease cleaning Sydney",
      "bond cleaning",
      "vacate cleaning",
    ],
  },
  {
    id: "carpet-cleaning",
    name: "Carpet Cleaning",
    shortName: "Carpets",
    slug: "/carpet-cleaning",
    description:
      "Hot water extraction and dry cleaning methods to deep clean carpets, remove stains, and eliminate allergens. Safe for children and pets.",
    image: "/images/carpet-cleaning/carpet-cleaning-steam-01.jpg",
    icon: "layers",
    featured: false,
    keywords: ["carpet cleaning Sydney", "steam cleaning", "stain removal"],
  },
  {
    id: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    shortName: "Upholstery",
    slug: "/upholstery-cleaning",
    description:
      "Restore your sofas, couches, and furniture to like-new condition with our professional upholstery steam cleaning service.",
    image: "/images/upholstery-cleaning/sofa-cleaning-01.jpg",
    icon: "sofa",
    featured: false,
    keywords: [
      "upholstery cleaning Sydney",
      "sofa cleaning",
      "couch cleaning",
    ],
  },
  {
    id: "mattress-cleaning",
    name: "Mattress Cleaning",
    shortName: "Mattress",
    slug: "/mattress-cleaning",
    description:
      "Sanitise and deep clean your mattress to remove dust mites, allergens, bacteria, and stains. Promotes better sleep and health.",
    image: "/images/mattress-cleaning/mattress-cleaning-01.jpg",
    icon: "bed",
    featured: false,
    keywords: [
      "mattress cleaning Sydney",
      "mattress sanitisation",
      "dust mite treatment",
    ],
  },
  {
    id: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortName: "Commercial",
    slug: "/commercial-cleaning",
    description:
      "Tailored commercial cleaning solutions for offices, retail spaces, medical centres, and industrial facilities across Sydney.",
    image: "/images/commercial-cleaning/commercial-cleaning-01.jpg",
    icon: "building",
    featured: false,
    keywords: [
      "commercial cleaning Sydney",
      "office cleaning",
      "business cleaning",
    ],
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    shortName: "Pressure Wash",
    slug: "/pressure-washing",
    description:
      "High-pressure cleaning for driveways, paths, decks, fences, and building exteriors. Remove grime, mould, and years of buildup.",
    image: "/images/pressure-washing/pressure-washing-01.jpg",
    icon: "droplets",
    featured: false,
    keywords: [
      "pressure washing Sydney",
      "pressure cleaning",
      "driveway cleaning",
    ],
  },
  {
    id: "tile-cleaning",
    name: "Tile Cleaning",
    shortName: "Tiles",
    slug: "/tile-cleaning",
    description:
      "Deep clean and restore grout lines, tiles, and natural stone surfaces using professional-grade equipment and eco-safe solutions.",
    image: "/images/end-of-lease/end-of-lease-bathroom-01.jpg",
    icon: "grid",
    featured: false,
    keywords: [
      "tile cleaning Sydney",
      "grout cleaning",
      "floor tile cleaning",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    suburb: "Mosman",
    service: "Curtain Cleaning",
    rating: 5,
    text: "Absolutely incredible service! My curtains look brand new. The team was punctual, professional and took great care of my delicate silk curtains. Highly recommend Expert Hygiene Services to anyone in Sydney.",
    date: "March 2026",
  },
  {
    name: "James T.",
    suburb: "Bondi",
    service: "End of Lease Cleaning",
    rating: 5,
    text: "Used them for my end-of-lease clean and got my full bond back! The property manager was impressed with how spotless everything was. Worth every cent — don't risk your bond with anyone else.",
    date: "February 2026",
  },
  {
    name: "Priya K.",
    suburb: "Parramatta",
    service: "Carpet Cleaning",
    rating: 5,
    text: "I had a massive wine stain on my cream carpet that I thought was permanent. These guys removed it completely! Fast, efficient, and very reasonably priced. Will definitely use again.",
    date: "January 2026",
  },
  {
    name: "Michael R.",
    suburb: "Chatswood",
    service: "Commercial Cleaning",
    rating: 5,
    text: "We've been using Expert Hygiene for our office monthly clean. Always reliable, thorough, and professional. Our staff love coming into a clean workspace every Monday morning.",
    date: "April 2026",
  },
  {
    name: "Lisa W.",
    suburb: "Manly",
    service: "Upholstery Cleaning",
    rating: 5,
    text: "My three-seater sofa had years of wear and pet hair embedded in it. After Expert Hygiene's treatment, it looks and smells amazing. Highly professional team — 10/10!",
    date: "March 2026",
  },
  {
    name: "David C.",
    suburb: "Strathfield",
    service: "Mattress Cleaning",
    rating: 5,
    text: "Finally got my mattress professionally cleaned. The difference in my sleep quality is remarkable. They were on time, quick, and very thorough. Great value for money.",
    date: "February 2026",
  },
];

export const FAQS = [
  {
    question: "Do you offer same-day cleaning services in Sydney?",
    answer:
      "Yes! We offer same-day cleaning services across most Sydney suburbs, subject to availability. Call us on 0468 070 392 and we'll do our best to accommodate your schedule.",
  },
  {
    question: "How long does curtain cleaning take?",
    answer:
      "On-site curtain cleaning typically takes 1–3 hours depending on the number of curtains and their condition. We clean them in place so you don't need to take them down.",
  },
  {
    question: "Is your bond back guarantee real?",
    answer:
      "Absolutely. If your property manager or real estate agent is not satisfied with our end-of-lease clean, we will return within 72 hours to re-clean at no extra charge. Your bond is protected.",
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer:
      "Yes. We use Australian Standards compliant, eco-friendly cleaning solutions that are safe for families, children, and pets. We always prioritise your family's health.",
  },
  {
    question: "What areas of Sydney do you service?",
    answer:
      "We service all of Sydney including the CBD, Inner West, Eastern Suburbs, North Shore, Northern Beaches, Western Sydney, South Sydney, and the Hills District.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Not necessarily. Many of our clients provide access and we complete the job while they're at work. We are fully insured and our technicians are background-checked for your peace of mind.",
  },
  {
    question: "How do I get a free quote?",
    answer:
      "Simply fill out our quick quote form on this page, call us on 0468 070 392, or email us at accounts@experthygieneservices.com. We respond to all enquiries within 2 hours.",
  },
  {
    question: "Do you offer the 20% first service discount on all services?",
    answer:
      "Yes! New customers receive 20% off their first service across all our cleaning offerings. Mention this when booking to ensure the discount is applied.",
  },
];

export const SYDNEY_SUBURBS = [
  "CBD",
  "Bondi",
  "Manly",
  "Chatswood",
  "Parramatta",
  "Strathfield",
  "Mosman",
  "Newtown",
  "Surry Hills",
  "Hornsby",
  "Penrith",
  "Liverpool",
  "Bankstown",
  "Cronulla",
  "Castle Hill",
  "Ryde",
  "Hurstville",
  "Campbelltown",
  "Blacktown",
  "Dee Why",
  "Randwick",
  "Kogarah",
  "Rhodes",
  "Olympic Park",
  "North Sydney",
  "Pymble",
  "Lane Cove",
  "Leichhardt",
  "Marrickville",
  "Ashfield",
];
