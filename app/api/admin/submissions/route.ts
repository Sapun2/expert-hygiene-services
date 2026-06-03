import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getSubmissions } from "@/lib/db";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(getSubmissions());
}
