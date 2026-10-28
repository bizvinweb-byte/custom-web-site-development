"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiArrowRight,
  HiChevronDown,
} from "react-icons/hi";
import { openConsultationModal } from "./ConsultationModal";

const serviceLinks = [
  { name: "Custom Website Development", href: "#services" },
  { name: "Next.js & React Web Apps", href: "#services" },
  { name: "Enterprise CRM Portals", href: "#services" },
  { name: "LMS Portal Development", href: "#services" },
  { name: "Full-Stack Development", href: "#services" },
  { name: "Website Redesign & CRO", href: "#why-cro" },
];

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Client Reviews", href: "#reviews" },
  { name: "Our Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why CRO Architecture", href: "#why-cro" },
  { name: "Book Consultation", href: "#lead-form" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/brandmingo",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/brandmingo",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/brandmingo",
    icon: FaFacebookF,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/brandmingo",
    icon: FaXTwitter,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20discuss%20my%20website%20development%20project.",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  // Mobile accordion tabs state: both start collapsed or toggled by user
  const [openAccordion, setOpenAccordion] = useState({
    solutions: false,
    quickLinks: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (targetId === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (targetId === "#lead-form" || targetId === "#quote-form") {
      openConsultationModal();
      return;
    }
    const id = targetId.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bm-orange-footer" aria-label="Brandmingo Footer">
      {/* Decorative Top Wave / Ambient Line */}
      <div className="bm-footer-glow-accent" aria-hidden="true" />

      <div className="bm-container">
        {/* Main 4-Column Grid */}
        <div className="bm-footer-grid">
          {/* =========================================================
              COLUMN 1: Brand Logo, Custom Description & Social Badges
             ========================================================= */}
          <div className="bm-footer-col bm-footer-col-brand">
            {/* Logo wrapped in sleek white pill badge */}
            <Link
              href="#hero"
              onClick={(e) => handleScrollTo(e, "#hero")}
              className="bm-footer-logo-badge"
              aria-label="Brandmingo Home"
            >
              <Image
                src="/brandmingologo.png"
                alt="Brandmingo"
                width={175}
                height={36}
                className="bm-footer-logo-img"
              />
            </Link>

            {/* Tailored content for custom website development */}
            <p className="bm-footer-brand-desc">
              Premier custom website development company in Noida Sector 62. We
              engineer pure-code Next.js web applications, enterprise CRM & LMS
              portals, and high-performance digital experiences built for scalable
              business growth.
            </p>

            {/* Social Media Links with circular glassmorphism icons */}
            <div className="bm-footer-social-row">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bm-footer-social-btn"
                    aria-label={`Follow Brandmingo on ${social.name}`}
                  >
                    <IconComponent aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              COLUMN 2: Services / Web Solutions (Accordion on Mobile)
             ========================================================= */}
          <div className={`bm-footer-col bm-footer-accordion-col ${openAccordion.solutions ? "bm-accordion-open" : ""}`}>
            <button
              type="button"
              className="bm-footer-col-header-btn"
              onClick={() => toggleAccordion("solutions")}
              aria-expanded={openAccordion.solutions}
              aria-controls="footer-web-solutions-list"
            >
              <div className="bm-footer-title-wrap">
                <h3 className="bm-footer-col-title">Web Solutions</h3>
                <div className="bm-footer-title-line" aria-hidden="true" />
              </div>
              <HiChevronDown className="bm-footer-chevron-icon" aria-hidden="true" />
            </button>

            <div
              id="footer-web-solutions-list"
              className="bm-footer-collapse-panel"
            >
              <ul className="bm-footer-links-list">
                {serviceLinks.map((service, idx) => (
                  <li key={idx}>
                    <a
                      href={service.href}
                      onClick={(e) => handleScrollTo(e, service.href)}
                      className="bm-footer-link"
                    >
                      <HiArrowRight className="bm-footer-arrow-icon" aria-hidden="true" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =========================================================
              COLUMN 3: Quick Navigation (Accordion on Mobile)
             ========================================================= */}
          <div className={`bm-footer-col bm-footer-accordion-col ${openAccordion.quickLinks ? "bm-accordion-open" : ""}`}>
            <button
              type="button"
              className="bm-footer-col-header-btn"
              onClick={() => toggleAccordion("quickLinks")}
              aria-expanded={openAccordion.quickLinks}
              aria-controls="footer-quick-links-list"
            >
              <div className="bm-footer-title-wrap">
                <h3 className="bm-footer-col-title">Quick Links</h3>
                <div className="bm-footer-title-line" aria-hidden="true" />
              </div>
              <HiChevronDown className="bm-footer-chevron-icon" aria-hidden="true" />
            </button>

            <div
              id="footer-quick-links-list"
              className="bm-footer-collapse-panel"
            >
              <ul className="bm-footer-links-list">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="bm-footer-link"
                    >
                      <HiArrowRight className="bm-footer-arrow-icon" aria-hidden="true" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =========================================================
              COLUMN 4: Noida Headquarters & Contact Details
             ========================================================= */}
          <div className="bm-footer-col bm-footer-col-contact">
            <div className="bm-footer-title-wrap">
              <h3 className="bm-footer-col-title">Get in Touch</h3>
              <div className="bm-footer-title-line" aria-hidden="true" />
            </div>

            <div className="bm-footer-contact-items">
              {/* Address with Google Maps redirection */}
              <a
                href="https://maps.google.com/?q=8th+Floor,+ITHUM+Tower,+B-806,+Block+A,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309"
                target="_blank"
                rel="noopener noreferrer"
                className="bm-footer-contact-item"
                aria-label="View Brandmingo Noida Office on Google Maps"
              >
                <div className="bm-footer-contact-icon-box">
                  <HiOutlineLocationMarker aria-hidden="true" />
                </div>
                <div className="bm-footer-contact-text">
                  <span className="bm-footer-contact-label">Noida Office</span>
                  <span className="bm-footer-contact-value">
                    8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919990613140"
                className="bm-footer-contact-item"
                aria-label="Call Brandmingo at +91 99906 13140"
              >
                <div className="bm-footer-contact-icon-box">
                  <HiOutlinePhone aria-hidden="true" />
                </div>
                <div className="bm-footer-contact-text">
                  <span className="bm-footer-contact-label">Direct Phone</span>
                  <span className="bm-footer-contact-value">+91 99906 13140</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@brandmingo.com"
                className="bm-footer-contact-item"
                aria-label="Email Brandmingo at hello@brandmingo.com"
              >
                <div className="bm-footer-contact-icon-box">
                  <HiOutlineMail aria-hidden="true" />
                </div>
                <div className="bm-footer-contact-text">
                  <span className="bm-footer-contact-label">Official Email</span>
                  <span className="bm-footer-contact-value">hello@brandmingo.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR
           ========================================================= */}
        <div className="bm-footer-bottom-bar">
          <div className="bm-footer-copyright">
            © 2026 Brandmingo Media Pvt. Ltd. All rights reserved.
          </div>

          <div className="bm-footer-bottom-badge">
            <span>Engineering High-Performance Web Applications in Noida</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
