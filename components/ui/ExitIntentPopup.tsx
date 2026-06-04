"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("exit_intent_shown");
    if (shown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setVisible(true);
        sessionStorage.setItem("exit_intent_shown", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    // Only trigger on desktop (mouse users)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setVisible(false)} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="text-4xl mb-4">🎁</div>
        <h2 className="font-display font-900 text-2xl text-navy mb-2 leading-tight">
          Wait — 20% Off Your First Service!
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          Get your free quote before you go. No obligation. We reply within 2 hours.
          Bond back guaranteed.
        </p>

        <Link
          href="/contact"
          onClick={() => setVisible(false)}
          className="block w-full bg-gold-500 text-navy font-bold py-4 rounded-xl hover:bg-gold-400 transition-colors text-sm mb-3"
        >
          Get My Free Quote — 20% Off →
        </Link>
        <a
          href={SITE_CONFIG.phoneHref}
          className="block w-full border border-navy text-navy font-bold py-3.5 rounded-xl hover:bg-navy hover:text-white transition-colors text-sm mb-4"
        >
          📞 Call {SITE_CONFIG.phone}
        </a>

        <button onClick={() => setVisible(false)} className="text-slate-400 text-xs hover:text-slate-600 transition-colors">
          No thanks, I don&apos;t want 20% off
        </button>
      </div>
    </div>
  );
}
