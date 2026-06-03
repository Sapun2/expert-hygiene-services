import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions | Expert Hygiene Services Sydney",
  description: "Terms and conditions for Expert Hygiene Services cleaning services in Sydney.",
  alternates: { canonical: "https://experthygiene.com.au/terms-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-display font-800 text-4xl text-navy mb-4">Terms & Conditions</h1>
      <p className="text-slate-500 mb-10">Last updated: 1 June 2026</p>

      <div className="space-y-8">
        {[
          {
            title: "1. Acceptance of Terms",
            content: "By engaging Expert Hygiene Services for cleaning services, you agree to be bound by these Terms and Conditions. These terms govern the relationship between Expert Hygiene Services ('we', 'us', 'our') and the customer ('you').",
          },
          {
            title: "2. Services",
            content: "We provide professional cleaning services including but not limited to curtain cleaning, end-of-lease cleaning, carpet cleaning, upholstery cleaning, mattress cleaning, commercial cleaning, and pressure washing. All services are subject to availability and are provided to the standard described on our website.",
          },
          {
            title: "3. Quotes and Pricing",
            content: "All quotes are provided in writing and are valid for 30 days. Final pricing may vary from the quote if the scope of work differs materially from what was described at the time of quoting. Any variations will be discussed and agreed upon before work commences.",
          },
          {
            title: "4. Payment",
            content: "Payment is due upon completion of services unless otherwise agreed in writing. We accept bank transfer, credit card, and cash. Late payments may attract a fee of 2% per month on the outstanding balance.",
          },
          {
            title: "5. Bond Back Guarantee",
            content: "Our Bond Back Guarantee applies to end-of-lease cleaning services. If a property manager identifies a cleaning deficiency at the inspection that is within the scope of our agreed service, we will return to re-clean the relevant area within 72 hours at no additional charge. The guarantee does not cover damage to the property, items not included in the original scope, or inspections more than 72 hours after our service.",
          },
          {
            title: "6. Customer Obligations",
            content: "You must provide accurate information about the property and its condition at the time of booking. You must ensure safe access to the property at the agreed time. You must disclose any hazards or special requirements relevant to the service.",
          },
          {
            title: "7. Cancellation",
            content: "Cancellations made more than 24 hours before the scheduled service will incur no charge. Cancellations within 24 hours may incur a cancellation fee of up to $75 to cover technician costs. No-shows will be charged at 50% of the quoted service price.",
          },
          {
            title: "8. Liability",
            content: "Expert Hygiene Services carries comprehensive public liability insurance. Our liability for any claim is limited to the value of the service provided. We are not liable for pre-existing damage, normal wear and tear, or issues arising from customer-supplied materials or products.",
          },
          {
            title: "9. Governing Law",
            content: "These Terms are governed by the laws of New South Wales, Australia. Any disputes shall be subject to the jurisdiction of New South Wales courts.",
          },
          {
            title: "10. Contact",
            content: `For any questions regarding these Terms: ${SITE_CONFIG.email} | ${SITE_CONFIG.phone}`,
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="font-display font-700 text-2xl text-navy mb-3">{section.title}</h2>
            <p className="text-slate-600 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
