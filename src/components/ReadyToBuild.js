"use client";

import Link from "next/link";
import {
  HiOutlineComputerDesktop,
  HiOutlineShoppingBag,
  HiOutlineSquare3Stack3D,
  HiOutlineCheckCircle,
  HiArrowRight,
} from "react-icons/hi2";
import { openConsultationModal } from "./ConsultationModal";

const serviceHighlights = [
  {
    id: 1,
    title: "Custom Website Development",
    desc: "Tailored, high-performance websites built around your business goals.",
    icon: HiOutlineComputerDesktop,
  },
  {
    id: 2,
    title: "Shopify & WordPress Solutions",
    desc: "Scalable eCommerce stores and flexible WordPress websites.",
    icon: HiOutlineShoppingBag,
  },
  {
    id: 3,
    title: "LMS, CRM & Full-Stack Development",
    desc: "Feature-rich platforms, integrations and custom web applications.",
    icon: HiOutlineSquare3Stack3D,
  },
];

const trustPoints = [
  { id: 1, text: "Fast response" },
  { id: 2, text: "Clear process" },
  { id: 3, text: "Practical advice" },
];

export default function ReadyToBuild() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="ready-to-build"
      className="bm-ready-section"
      aria-labelledby="ready-to-build-title"
    >
      <div className="bm-ready-container">
        {/* Master Card Box */}
        <div className="bm-ready-card">
          {/* =========================================================
              LEFT COLUMN: Eyebrow, Heading, Description & CTAs
             ========================================================= */}
          <div className="bm-ready-left">
            {/* Eyebrow with orange dot */}
            <div className="bm-ready-eyebrow">
              <span className="bm-ready-eyebrow-dot" aria-hidden="true" />
              <span>LET&apos;S BUILD SOMETHING GREAT</span>
            </div>

            {/* Main Section Heading */}
            <h2 id="ready-to-build-title" className="bm-ready-title">
              Ready to Build Your
              <br />
              Next Website?<span className="bm-orange-dot">.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="bm-ready-desc">
              From custom websites and Shopify stores to WordPress builds, LMS
              platforms, CRM systems, and full-stack web applications — we
              create digital experiences designed to perform.
            </p>

            {/* CTA Buttons */}
            <div className="bm-ready-actions">
              <button
                type="button"
                onClick={openConsultationModal}
                className="bm-ready-btn-primary"
                aria-label="Book a Free Consultation with Brandmingo"
              >
                <span>Book a Free Consultation</span>
                <HiArrowRight className="bm-btn-arrow" aria-hidden="true" />
              </button>

              <Link
                href="#portfolio"
                onClick={(e) => handleScroll(e, "portfolio")}
                className="bm-ready-btn-secondary"
                aria-label="View Our Work and Recent Projects"
              >
                <span>View Our Work</span>
                <HiArrowRight className="bm-btn-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Service Items Card & Trust Checkmarks
             ========================================================= */}
          <div className="bm-ready-right">
            <div className="bm-ready-services-panel">
              {/* 3 Service Rows */}
              <div className="bm-ready-services-list">
                {serviceHighlights.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={service.id} className="bm-ready-service-item">
                      <div className="bm-ready-service-icon-box">
                        <IconComponent
                          className="bm-ready-service-icon"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="bm-ready-service-content">
                        <h3 className="bm-ready-service-title">
                          {service.title}
                        </h3>
                        <p className="bm-ready-service-desc">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Trust / Benefit Checkmarks */}
              <div className="bm-ready-trust-row">
                {trustPoints.map((point) => (
                  <div key={point.id} className="bm-ready-trust-item">
                    <HiOutlineCheckCircle
                      className="bm-ready-check-icon"
                      aria-hidden="true"
                    />
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
