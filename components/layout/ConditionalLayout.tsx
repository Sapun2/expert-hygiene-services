"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function ConditionalLayout({
  navbar,
  footer,
  floatingCta,
  mobileNav,
  children,
}: {
  navbar: ReactNode;
  footer: ReactNode;
  floatingCta: ReactNode;
  mobileNav: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
      {floatingCta}
      {mobileNav}
    </>
  );
}
