import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | Expert Hygiene Services Sydney",
  description: "Privacy policy for Expert Hygiene Services. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://experthygiene.com.au/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-display font-800 text-4xl text-navy mb-4">Privacy Policy</h1>
      <p className="text-slate-500 mb-10">Last updated: 1 June 2026</p>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="font-display font-700 text-2xl text-navy mb-3">1. Introduction</h2>
          <p className="text-slate-600 leading-relaxed">
            Expert Hygiene Services (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website {SITE_CONFIG.domain} or contact us for services.
          </p>
        </section>

        <section>
          <h2 className="font-display font-700 text-2xl text-navy mb-3">2. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed mb-3">We may collect the following information:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Name, email address, and phone number</li>
            <li>Property address for service delivery</li>
            <li>Service preferences and booking details</li>
            <li>Website usage data (analytics)</li>
            <li>Communications with our team</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display font-700 text-2xl text-navy mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>To provide and manage our cleaning services</li>
            <li>To respond to enquiries and provide quotes</li>
            <li>To send booking confirmations and service updates</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display font-700 text-2xl text-navy mb-3">4. Data Security</h2>
          <p className="text-slate-600 leading-relaxed">
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction.
            All data transmissions are encrypted using SSL/TLS technology.
          </p>
        </section>

        <section>
          <h2 className="font-display font-700 text-2xl text-navy mb-3">5. Third Parties</h2>
          <p className="text-slate-600 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties.
            We may share information with trusted service providers (such as email delivery
            services) who assist us in operating our business, subject to confidentiality agreements.
          </p>
        </section>

        <section>
          <h2 className="font-display font-700 text-2xl text-navy mb-3">6. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed">
            Under the Australian Privacy Act 1988, you have the right to access, correct, or
            request deletion of your personal information. Contact us at {SITE_CONFIG.email}
            to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="font-display font-700 text-2xl text-navy mb-3">7. Contact</h2>
          <p className="text-slate-600 leading-relaxed">
            For privacy-related enquiries: <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-600">{SITE_CONFIG.email}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
