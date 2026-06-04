import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { addSubmission, getMailSettings } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, service, notes } = body;

    if (!name || !email || !phone || !address || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to database
    const submission = addSubmission({ name, email, phone, address, service, notes });

    // Push to NTS CRM (fire-and-forget — never blocks the response)
    const nameParts = name.trim().split(/\s+/);
    fetch("https://nepalitechsupport.tech/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "crm_906acbb78f18df92c0358e69bee9c82368290fbd",
      },
      body: JSON.stringify({
        first_name:    nameParts[0] ?? name,
        last_name:     nameParts.slice(1).join(" "),
        email,
        phone,
        address,
        service_name:  service,
        notes:         notes ?? "",
        source:        "website",
        source_domain: "experthygiene.com.au",
      }),
    }).catch((err) => console.error("NTS CRM push error:", err));

    // Send emails
    const settings = getMailSettings();
    if (settings.enabled && settings.apiKey) {
      try {
        const resend = new Resend(settings.apiKey);

        await resend.emails.send({
          from: `${settings.fromName} <${settings.fromEmail}>`,
          to: [settings.notifyEmail],
          subject: `🔔 New Lead: ${service} — ${name}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
              <div style="background:#002B5B;padding:24px;border-radius:12px 12px 0 0;text-align:center">
                <h1 style="color:#D4AF37;margin:0;font-size:22px">New Quote Request</h1>
              </div>
              <div style="background:#f8fafc;padding:28px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
                <table style="width:100%;border-collapse:collapse">
                  ${[
                    ["Name", name],
                    ["Email", `<a href="mailto:${email}">${email}</a>`],
                    ["Phone", `<a href="tel:${phone}">${phone}</a>`],
                    ["Address", address],
                    ["Service", `<strong>${service}</strong>`],
                    ...(notes ? [["Notes", notes]] : []),
                  ].map(([k, v]) => `<tr style="border-bottom:1px solid #e2e8f0"><td style="padding:10px 0;color:#64748b;font-size:13px;width:100px">${k}</td><td style="padding:10px 0;color:#0f172a">${v}</td></tr>`).join("")}
                </table>
                <div style="margin-top:20px;background:#002B5B;padding:14px;border-radius:8px;text-align:center">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://experthygiene.com.au"}/admin" style="color:#D4AF37;font-weight:bold;text-decoration:none">View in Admin Panel →</a>
                </div>
              </div>
            </div>`,
        });

        await resend.emails.send({
          from: `${settings.fromName} <${settings.fromEmail}>`,
          to: [email],
          subject: "We've received your request — Expert Hygiene Services",
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
              <div style="background:#002B5B;padding:32px;border-radius:12px 12px 0 0;text-align:center">
                <h1 style="color:#D4AF37;margin:0;font-size:26px">Thank You, ${name}!</h1>
                <p style="color:#ffffff;margin:10px 0 0;opacity:0.7">We'll be in touch within 2 hours.</p>
              </div>
              <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
                <p style="color:#334155;font-size:15px;line-height:1.7">Hi ${name}, your enquiry for <strong>${service}</strong> has been received. Our team will contact you shortly with a detailed quote.</p>
                <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:16px;margin:20px 0">
                  <p style="margin:0;color:#166534;font-size:13px">✅ Service: <strong>${service}</strong><br>📍 Address: ${address}</p>
                </div>
                <div style="background:#fefce8;border:1px solid #fde68a;border-radius:8px;padding:14px;margin:16px 0;text-align:center">
                  <p style="margin:0;color:#92400e;font-size:13px;font-weight:bold">🎉 You qualify for 20% off your first service!</p>
                </div>
                <p style="text-align:center;margin-top:24px"><a href="tel:0468070392" style="background:#002B5B;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:14px">Call Us: 0468 070 392</a></p>
              </div>
            </div>`,
        });
      } catch (mailErr) {
        console.error("Email error:", mailErr);
      }
    }

    return NextResponse.json({ success: true, id: submission.id });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
