import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import BookingForm from "@/components/forms/BookingForm";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact | Free Quote | Expert Hygiene Services Sydney",
  description: "Get a free cleaning quote from Expert Hygiene Services. Call 0468 070 392 or book online. We respond within 2 hours. All Sydney suburbs.",
  alternates: { canonical: "https://experthygiene.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-lg">
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">Book Now</p>
            <h1 className="font-display font-900 text-5xl md:text-6xl text-white mb-4 leading-tight">
              Get Your<br />Free Quote
            </h1>
            <p className="text-white/50 text-lg">Reply within 2 hours. No obligation.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div className="space-y-6">
              <div className="space-y-5">
                {[
                  { icon: <Phone size={16} className="text-teal-500" />, label: "Phone", value: SITE_CONFIG.phone, href: SITE_CONFIG.phoneHref },
                  { icon: <Mail size={16} className="text-teal-500" />, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                  { icon: <MapPin size={16} className="text-teal-500" />, label: "Service Area", value: "All Sydney suburbs", href: null },
                  { icon: <Clock size={16} className="text-teal-500" />, label: "Hours", value: "Mon–Sun, 7am–8pm", href: null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-navy font-semibold text-sm hover:text-teal-600 transition-colors">{item.value}</a>
                        : <p className="text-navy font-semibold text-sm">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy rounded-2xl p-6 text-white">
                <p className="font-bold text-sm mb-3">After submitting you&apos;ll get:</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {["A confirmation email","A unique tracking link","A quote within 2 hours","20% off your first service"].map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-teal-400 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
