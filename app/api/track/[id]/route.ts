import { NextRequest, NextResponse } from "next/server";
import { getSubmission } from "@/lib/db";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sub = getSubmission(id);
  if (!sub) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Return only public-safe fields
  return NextResponse.json({
    id: sub.id,
    name: sub.name,
    service: sub.service,
    status: sub.status,
    createdAt: sub.createdAt,
    updatedAt: sub.updatedAt,
  });
}
