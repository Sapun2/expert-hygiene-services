"use client";

import { useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";
import Link from "next/link";
import { FAQS, SITE_CONFIG } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  faqs?: typeof FAQS;
  title?: string;
}

export default function FAQSection({ faqs = FAQS, title = "Common Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-navy">{title}</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full flex items-start justify-between gap-6 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={cn(
                  "font-semibold text-base transition-colors",
                  openIndex === i ? "text-navy" : "text-slate-700 group-hover:text-navy"
                )}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 mt-0.5">
                  {openIndex === i
                    ? <Minus size={18} className="text-teal-500" />
                    : <Plus size={18} className="text-slate-400" />
                  }
                </span>
              </button>
              {openIndex === i && (
                <p className="mt-4 text-slate-500 text-sm leading-relaxed pr-10">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA below FAQs */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
          <p className="font-semibold text-navy text-base mb-1">Still have questions?</p>
          <p className="text-slate-500 text-sm mb-5">Our team replies within 2 hours — or call us now for an instant answer.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors text-sm"
            >
              <Phone size={15} /> Call {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-navy text-navy font-bold px-6 py-3 rounded-xl hover:bg-navy hover:text-white transition-colors text-sm"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
