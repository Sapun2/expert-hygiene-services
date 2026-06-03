import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubmission } from "@/lib/db";
import TrackingClient from "./TrackingClient";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return { title: "Track Your Booking | Expert Hygiene Services", robots: { index: false } };
}

export default async function TrackPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sub = getSubmission(id);
  if (!sub) notFound();

  return (
    <TrackingClient
      submission={{
        id: sub.id,
        name: sub.name,
        service: sub.service,
        status: sub.status,
        createdAt: sub.createdAt,
        updatedAt: sub.updatedAt,
      }}
    />
  );
}
