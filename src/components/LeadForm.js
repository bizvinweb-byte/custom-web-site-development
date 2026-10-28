"use client";

import { useState, useRef, useEffect } from "react";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineViewGrid,
  HiOutlineChevronDown,
  HiOutlinePencilAlt,
  HiOutlineDocumentText,
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiCheck,
} from "react-icons/hi";

const serviceOptions = [
  "Custom Website Development",
  "E-Commerce Website Development",
  "LMS & CRM Solutions",
  "Full-Stack Web Development",
  "Website Redesign & SEO",
  "Other",
];

export default function LeadForm({
  title = "Let's Build Your Website",
  subtitle = "Tell us about your project and our team will get in touch.",
  buttonText = "Get My Free Proposal",
  className = "",
  source = "Hero Section Form",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    otherService: "",
    details: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dropdownRef = useRef(null);
  const otherInputRef = useRef(null);

  // Close custom dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (service) => {
    setFormData((prev) => ({ ...prev, service }));
    setDropdownOpen(false);

    if (service === "Other") {
      setTimeout(() => {
        otherInputRef.current?.focus();
      }, 100);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.service) {
      setDropdownOpen(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const pageUrl =
        typeof window !== "undefined"
          ? window.location.href
          : "https://customwebsitedevelopment.in";
      const submittedAt = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          pageUrl,
          submittedAt,
        }),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        otherService: "",
        details: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className={`bm-lead-card ${className}`}>
      <div className="bm-form-header">
        <h3 className="bm-form-title">{title}</h3>
        <p className="bm-form-subtitle">{subtitle}</p>
      </div>

      {isSuccess ? (
        <div className="bm-form-success">
          <HiOutlineCheckCircle className="bm-success-icon" />
          <h4 className="bm-success-title">Proposal Request Received!</h4>
          <p className="bm-success-desc">
            Thank you! Our technical lead in Noida will review your requirements and reach out within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bm-lead-form">
          {/* 1. Name */}
          <div className="bm-input-group">
            <span className="bm-input-icon">
              <HiOutlineUser />
            </span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bm-form-input"
            />
          </div>

          {/* 2. Email */}
          <div className="bm-input-group">
            <span className="bm-input-icon">
              <HiOutlineMail />
            </span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Work Email"
              className="bm-form-input"
            />
          </div>

          {/* 3. Phone */}
          <div className="bm-input-group">
            <span className="bm-input-icon">
              <HiOutlinePhone />
            </span>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bm-form-input"
            />
          </div>

          {/* 4. Brandmingo Themed Custom Dropdown (Select Service) */}
          <div
            ref={dropdownRef}
            className={`bm-dropdown-wrapper ${dropdownOpen ? "is-open" : ""}`}
          >
            <span className="bm-input-icon">
              <HiOutlineViewGrid />
            </span>

            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              className={`bm-dropdown-trigger ${
                !formData.service ? "is-placeholder" : ""
              } ${dropdownOpen ? "is-open" : ""}`}
            >
              <span>{formData.service || "Select Service"}</span>
            </button>

            <span className="bm-dropdown-chevron" aria-hidden="true">
              <HiOutlineChevronDown />
            </span>

            {/* Custom Styled Menu matching Brandmingo Palette */}
            {dropdownOpen && (
              <ul className="bm-dropdown-menu" role="listbox">
                {serviceOptions.map((option) => {
                  const isSelected = formData.service === option;
                  return (
                    <li key={option}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelectService(option)}
                        className={`bm-dropdown-item ${
                          isSelected ? "is-active" : ""
                        }`}
                      >
                        <span>{option}</span>
                        {isSelected && (
                          <HiCheck className="bm-dropdown-check" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* 5. Conditional 'Other' Service Input */}
          {formData.service === "Other" && (
            <div className="bm-input-group">
              <span className="bm-input-icon">
                <HiOutlinePencilAlt />
              </span>
              <input
                ref={otherInputRef}
                type="text"
                name="otherService"
                required
                value={formData.otherService}
                onChange={handleChange}
                placeholder="Please specify other service..."
                className="bm-form-input"
              />
            </div>
          )}

          {/* 6. Project Details */}
          <div className="bm-input-group bm-input-group-textarea">
            <span className="bm-input-icon bm-textarea-icon">
              <HiOutlineDocumentText />
            </span>
            <textarea
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              placeholder="Project Details"
              className="bm-form-textarea"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bm-form-submit-btn"
          >
            <span>{isSubmitting ? "Submitting..." : buttonText}</span>
            <HiOutlineArrowRight className="bm-submit-arrow" />
          </button>

          {/* Trust Footnote */}
          <div className="bm-form-trust">
            <HiOutlineShieldCheck className="bm-shield-icon" />
            <span>No spam. Just practical advice for your business.</span>
          </div>
        </form>
      )}
    </div>
  );
}
