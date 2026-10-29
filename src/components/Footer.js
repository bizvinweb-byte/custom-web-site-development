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
  { name: "Full-Stack Web Engineering", href: "#services" },
  { name: "Website Redesign & CRO", href: "#why-cro" },
];

const locationLinks = [
  { name: "Noida Sector 62 (HQ)", href: "/custom-website-development-in-noida" },
  { name: "Greater Noida Hub", href: "/custom-website-development-in-greater-noida" },
  { name: "Delhi NCR Region", href: "/custom-website-development-in-delhi-ncr" },
  { name: "Gurugram Cyber City", href: "/custom-website-development-in-gurugram" },
  { name: "Ghaziabad & Indirapuram", href: "/custom-website-development-in-ghaziabad" },
  { name: "Faridabad Industrial Hub", href: "/custom-website-development-in-faridabad" },
];

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Client Reviews", href: "#reviews" },
  { name: "Our Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Frequently Asked Questions", href: "#faq" },
  { name: "Book Consultation", href: "#lead-form" },
];

const popularSearches = [
  "Custom Website Development in Noida",
  "Custom Web Development Company Noida Sector 62",
  "Website Developers in Noida Sector 63",
  "Best Website Development Company in Noida",
  "Next.js Developers Noida",
  "React.js Web Development Agency Noida",
  "Enterprise CRM Development Noida",
  "LMS Portal Development Company Noida",
  "Full Stack Development Company Delhi NCR",
  "Custom Software Development Sector 62 Noida",
  "E-Commerce Website Development Noida",
  "B2B Web Applications Noida Expressway",
  "Brandmingo Noida Web Engineering",
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
  const [openAccordion, setOpenAccordion] = useState({
    solutions: false,
    locations: false,
    quickLinks: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleScrollTo = (e, targetId) => {
    // If it's an internal hash link
    if (targetId.startsWith("#")) {
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
    }
  };

  return (
    <footer className="bm-orange-footer" aria-label="Brandmingo Footer">
      {/* Decorative Top Ambient Line */}
      <div className="bm-footer-glow-accent" aria-hidden="true" />

      <div className="bm-container">
        {/* Main Columns Grid */}
        <div className="bm-footer-grid">
          {/* =========================================================
              COLUMN 1: Brand Logo, Description, Company Link & Socials
             ========================================================= */}
          <div className="bm-footer-col bm-footer-col-brand">
            <Link
              href="#hero"
              onClick={(e) => handleScrollTo(e, "#hero")}
              className="bm-footer-logo-badge"
              aria-label="Brandmingo Home"
            >
              <Image
                src="/brandmingologo.png"
                alt="Brandmingo - Custom Website Development Company in Noida Sector 62"
                width={175}
                height={36}
                className="bm-footer-logo-img"
              />
            </Link>

            <p className="bm-footer-brand-desc">
              Premier custom website development company in Noida Sector 62. A specialized digital engineering division of{" "}
              <a
                href="https://brandmingo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bm-footer-parent-link"
              >
                Brandmingo Media
              </a>
              . We engineer pure-code Next.js web applications, enterprise CRM &amp; LMS portals, and high-performance digital experiences built for scalable business growth.
            </p>

            {/* Social Media Links */}
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
              COLUMN 2: Web Solutions
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

            <div id="footer-web-solutions-list" className="bm-footer-collapse-panel">
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
              COLUMN 3: Regional Hubs / City Landing Pages
             ========================================================= */}
          <div className={`bm-footer-col bm-footer-accordion-col ${openAccordion.locations ? "bm-accordion-open" : ""}`}>
            <button
              type="button"
              className="bm-footer-col-header-btn"
              onClick={() => toggleAccordion("locations")}
              aria-expanded={openAccordion.locations}
              aria-controls="footer-locations-list"
            >
              <div className="bm-footer-title-wrap">
                <h3 className="bm-footer-col-title">Areas We Serve</h3>
                <div className="bm-footer-title-line" aria-hidden="true" />
              </div>
              <HiChevronDown className="bm-footer-chevron-icon" aria-hidden="true" />
            </button>

            <div id="footer-locations-list" className="bm-footer-collapse-panel">
              <ul className="bm-footer-links-list">
                {locationLinks.map((loc, idx) => (
                  <li key={idx}>
                    <Link href={loc.href} className="bm-footer-link">
                      <HiArrowRight className="bm-footer-arrow-icon" aria-hidden="true" />
                      <span>{loc.name}</span>
                    </Link>
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
                  <span className="bm-footer-contact-label">Noida Headquarters</span>
                  <span className="bm-footer-contact-value">
                    8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, UP 201309
                  </span>
                </div>
              </a>

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
            POPULAR LOCAL SEARCHES KEYWORD SILO (For Google Rank #1)
           ========================================================= */}
        <div className="bm-footer-seo-strip" aria-label="Popular Web Development Searches in Noida">
          <div className="bm-footer-seo-title">
            <span>POPULAR SEARCHES &bull; NOIDA &amp; DELHI NCR:</span>
          </div>
          <div className="bm-footer-keywords-cloud">
            {popularSearches.map((term, index) => (
              <span key={index} className="bm-seo-tag-item">
                {term}
                {index < popularSearches.length - 1 && (
                  <span className="bm-seo-tag-dot" aria-hidden="true">&bull;</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR
           ========================================================= */}
        <div className="bm-footer-bottom-bar">
          <div className="bm-footer-copyright">
            © 2026 Brandmingo Media Pvt. Ltd. (
            <a
              href="https://brandmingo.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              brandmingo.com
            </a>
            ). All rights reserved.
          </div>

          <div className="bm-footer-bottom-badge">
            <span>Engineering High-Performance Custom Web Applications in Noida Sector 62</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
