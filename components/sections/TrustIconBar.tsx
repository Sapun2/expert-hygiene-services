const items = [
  { icon: "🏆", label: "4.9 Star Rated" },
  { icon: "✅", label: "Bond Back Guarantee" },
  { icon: "⚡", label: "Same Day Service" },
  { icon: "🛡️", label: "Certified & Insured" },
  { icon: "🌿", label: "Eco-Safe Products" },
  { icon: "💬", label: "Free Written Quotes" },
];

export default function TrustIconBar() {
  return (
    <section className="py-5 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-2">
          {items.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-slate-600">
              <span className="text-base">{icon}</span>
              <span className="text-xs font-semibold whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
