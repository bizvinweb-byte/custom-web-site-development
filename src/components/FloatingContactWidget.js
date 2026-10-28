"use client";

import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";

export default function FloatingContactWidget() {
  const phoneNumber = "+91 99906 13140";
  const rawPhone = "919990613140";
  const whatsappUrl = `https://wa.me/${rawPhone}?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20discuss%20my%20website%20development%20project.`;

  return (
    <aside className="bm-floating-widget" aria-label="Quick Contact Options">
      {/* 1. Phone Call Button (Orange) */}
      <a
        href={`tel:+${rawPhone}`}
        className="bm-floating-btn bm-floating-call"
        aria-label={`Direct Call: ${phoneNumber}`}
        title={`Call ${phoneNumber}`}
      >
        <span className="bm-floating-pulse call-pulse" aria-hidden="true" />
        <HiOutlinePhone className="bm-floating-icon" aria-hidden="true" />
        <span className="bm-floating-tooltip">Call: {phoneNumber}</span>
      </a>

      {/* 2. WhatsApp Button (Green with Online Indicator) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bm-floating-btn bm-floating-whatsapp"
        aria-label="Chat with Brandmingo on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="bm-floating-pulse wa-pulse" aria-hidden="true" />
        <FaWhatsapp className="bm-floating-icon" aria-hidden="true" />

        {/* Online Indicator Badge matching reference screenshot */}
        <span className="bm-wa-online-badge" aria-hidden="true">
          <span className="bm-wa-badge-dot" />
          <span className="bm-wa-badge-ring" />
        </span>

        <span className="bm-floating-tooltip">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
