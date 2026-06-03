import { Star, Shield, Clock, Award, ThumbsUp, Leaf } from "lucide-react";

const badges = [
  { icon: <Star size={18} className="text-gold-500 fill-gold-500" />, label: "4.9 Star Rated" },
  { icon: <Shield size={18} className="text-teal-500" />, label: "Bond Back Guarantee" },
  { icon: <Clock size={18} className="text-navy" />, label: "Same Day Service" },
  { icon: <Award size={18} className="text-gold-500" />, label: "5+ Years Experience" },
  { icon: <ThumbsUp size={18} className="text-teal-500" />, label: "Satisfaction Guaranteed" },
  { icon: <Leaf size={18} className="text-emerald-500" />, label: "Eco-Safe Products" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-100 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between gap-x-8 gap-y-4">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5">
              {b.icon}
              <span className="text-sm font-semibold text-slate-700">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
