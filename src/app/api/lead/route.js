import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name = "",
      email = "",
      phone = "",
      service = "",
      otherService = "",
      details = "",
      source = "Hero Section",
      submittedAt = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      pageUrl = "https://customwebsitedevelopment.in",
    } = body;

    const resolvedService =
      service === "Other" && otherService
        ? `Other: ${otherService}`
        : service || "Custom Website Development";

    // Basic production validation: at least contact info must be provided
    if (!name?.trim() && !email?.trim() && !phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and contact info are required" },
        { status: 400 }
      );
    }

    // Google Sheets Webhook URL loaded from .env
    const googleSheetWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbz6kPgNw555NUGM33b2_rfP6pV5p8BO_CVy0cVTBThiCZPcHawhIx7r9Pv6MACju-lD/exec";

    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            type: "CUSTOM_WEB",
            site: "customwebsitedevelopment",
            pageUrl,
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            service: resolvedService,
            details: details || "",
            requirements: details || "",
            message: details || "",
            source: source || "Website Lead Form",
            submittedAt,
          }),
        });
      } catch (sheetError) {
        console.error("Google Sheets forward error:", sheetError);
        // Continue gracefully
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
    });
  } catch (error) {
    console.error("API /api/lead error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
