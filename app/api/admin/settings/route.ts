import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getMailSettings, updateMailSettings } from "@/lib/db";

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const settings = getMailSettings();
  // Mask the API key
  return NextResponse.json({ ...settings, apiKey: settings.apiKey ? "••••••••" + settings.apiKey.slice(-4) : "" });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  // Only update apiKey if it's not masked
  if (body.apiKey && body.apiKey.startsWith("••••")) delete body.apiKey;
  const updated = updateMailSettings(body);
  return NextResponse.json({ success: true, settings: { ...updated, apiKey: updated.apiKey ? "••••••••" + updated.apiKey.slice(-4) : "" } });
}
