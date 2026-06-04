"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimal: true },
  { value: 100, suffix: "%", label: "Bond Back Rate" },
];

function Counter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1600;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
        }, duration / steps);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimal]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-14 bg-navy border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map(({ value, suffix, label, decimal }) => (
            <div key={label} className="text-center lg:px-10">
              <div className="font-display font-900 text-4xl lg:text-5xl text-white mb-2 tracking-tight">
                <Counter target={value} suffix={suffix} decimal={decimal} />
              </div>
              <div className="text-white/40 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
