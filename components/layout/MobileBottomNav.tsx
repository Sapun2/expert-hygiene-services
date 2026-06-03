"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid2x2, Phone, FileText, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#services", label: "Services", icon: Grid2x2 },
  { href: "/contact", label: "Quote", icon: FileText, highlight: true },
  { href: "/gallery", label: "Gallery", icon: Star },
  { href: SITE_CONFIG.phoneHref, label: "Call", icon: Phone, external: true },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = !link.external && (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href));
          if (link.highlight) {
            return (
              <Link key={link.href} href={link.href} className="flex flex-col items-center -mt-6">
                <div className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30 border-4 border-white">
                  <Icon size={22} className="text-navy" />
                </div>
                <span className="text-[10px] font-bold text-navy mt-1">{link.label}</span>
              </Link>
            );
          }
          if (link.external) {
            return (
              <a key={link.href} href={link.href} className="flex flex-col items-center gap-1 py-1 px-3 min-w-[56px]">
                <Icon size={22} className="text-teal-500" />
                <span className="text-[10px] font-semibold text-teal-500">{link.label}</span>
              </a>
            );
          }
          return (
            <Link key={link.href} href={link.href} className={cn("flex flex-col items-center gap-1 py-1 px-3 min-w-[56px] transition-colors", isActive ? "text-navy" : "text-slate-400")}>
              <Icon size={22} className={isActive ? "text-navy" : "text-slate-400"} />
              <span className={cn("text-[10px] font-semibold", isActive ? "text-navy" : "text-slate-400")}>{link.label}</span>
              {isActive && <div className="w-1 h-1 rounded-full bg-teal-500 -mt-0.5" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
