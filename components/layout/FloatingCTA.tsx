"use client";

import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function FloatingCTA() {
  return (
    <a
      href={SITE_CONFIG.phoneHref}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-teal-500 text-white rounded-full shadow-2xl hover:bg-teal-600 transition-all hover:scale-110 pulse-ring"
      aria-label="Call Expert Hygiene Services"
    >
      <Phone size={24} />
    </a>
  );
}
