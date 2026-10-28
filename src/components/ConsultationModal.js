"use client";

import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import LeadForm from "./LeadForm";

// Helper function that can be imported and called anywhere
export const openConsultationModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  }
};

export const closeConsultationModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("close-consultation-modal"));
  }
};

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-consultation-modal", handleOpen);
    window.addEventListener("close-consultation-modal", handleClose);

    return () => {
      window.removeEventListener("open-consultation-modal", handleOpen);
      window.removeEventListener("close-consultation-modal", handleClose);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="bm-modal-backdrop"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Book Free Consultation"
    >
      <div
        className="bm-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          className="bm-modal-card-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close consultation modal"
        >
          <HiX className="bm-modal-x-icon" aria-hidden="true" />
        </button>

        {/* Lead Form inside modal */}
        <LeadForm
          title="Book a Free Consultation"
          subtitle="Tell us about your project requirements. Our Noida web engineering team will connect within 24 hours."
          buttonText="Get My Free Proposal & Consultation"
          className="bm-modal-lead-form-inner"
          source="Popup Consultation Modal"
        />
      </div>
    </div>
  );
}
