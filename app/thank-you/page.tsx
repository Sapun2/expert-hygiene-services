import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thank You | Expert Hygiene Services Sydney",
  description: "Thank you for contacting Expert Hygiene Services. We will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-100">
          <CheckCircle2 size={72} className="text-teal-500 mx-auto mb-6" />
          <h1 className="font-display font-900 text-4xl text-navy mb-4">
            Thank You! We&apos;ll Be in Touch.
          </h1>
          <p className="text-slate-600 text-lg mb-4 leading-relaxed">
            Your enquiry has been received by our team. We will contact you within
            <strong> 2 hours</strong> with a detailed, no-obligation quote.
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8 text-left">
            <h2 className="font-bold text-navy mb-3">What Happens Next:</h2>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                <p>Our team reviews your enquiry and prepares a detailed quote</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                <p>We contact you by phone or email within 2 hours</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                <p>We confirm your booking and provide all service details</p>
              </div>
            </div>
          </div>
          <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 mb-8">
            <p className="text-navy font-bold">🎉 Remember: You qualify for 20% off your first service!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE_CONFIG.phoneHref} className="btn-primary">
              <Phone size={18} /> {SITE_CONFIG.phone}
            </a>
            <Link href="/" className="btn-outline">
              Back to Home <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
