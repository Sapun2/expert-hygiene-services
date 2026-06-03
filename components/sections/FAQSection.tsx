"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  faqs?: typeof FAQS;
  title?: string;
}

export default function FAQSection({ faqs = FAQS, title = "Common Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
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
      </div>
    </section>
  );
}
