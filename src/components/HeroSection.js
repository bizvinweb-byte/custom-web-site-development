"use client";

import Link from "next/link";
import {
  HiOutlineDesktopComputer,
  HiOutlineCog,
  HiOutlineArrowRight,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";
import { FiLayers } from "react-icons/fi";
import LeadForm from "./LeadForm";
import { openConsultationModal } from "./ConsultationModal";

export default function HeroSection() {
  return (
    <section className="bm-hero-section" id="hero">
      <div className="bm-hero-container">
        <div className="bm-hero-grid">
          {/* =========================================================
              LEFT COLUMN: SEO Headings, Badges, CTAs & Local Trust
             ========================================================= */}
          <div className="bm-hero-left">
            {/* Primary SEO H1 Heading */}
            <h1 className="bm-hero-title">
              Custom Website<br />
              Development in <span className="bm-highlight-orange">Noida</span><br />
              That Helps Your<br />
              Business <span className="bm-highlight-orange">Grow Online</span>
            </h1>

            {/* Divider Line under H1 */}
            <div className="bm-hero-divider" aria-hidden="true" />

            {/* Subheadline / Value Description */}
            <p className="bm-hero-description">
              We design and develop SEO-friendly custom websites, LMS platforms, CRM
              systems, and full-stack web solutions for businesses in Noida, Delhi,
              Gurugram, and Greater Noida.
            </p>

            {/* 3 Core Highlight Badges (Exact 1:1 with Screenshot) */}
            <div className="bm-hero-features">
              {/* Feature 1 */}
              <div className="bm-feature-badge">
                <div className="bm-badge-icon-box">
                  <HiOutlineDesktopComputer className="bm-badge-icon" />
                </div>
                <div className="bm-badge-text">
                  <h3 className="bm-badge-title">Custom Websites</h3>
                  <p className="bm-badge-desc">SEO-ready & high-performing</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bm-feature-badge">
                <div className="bm-badge-icon-box">
                  <FiLayers className="bm-badge-icon" />
                </div>
                <div className="bm-badge-text">
                  <h3 className="bm-badge-title">LMS & CRM Solutions</h3>
                  <p className="bm-badge-desc">Scalable for your business</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bm-feature-badge">
                <div className="bm-badge-icon-box">
                  <HiOutlineCog className="bm-badge-icon" />
                </div>
                <div className="bm-badge-text">
                  <h3 className="bm-badge-title">Full-Stack Development</h3>
                  <p className="bm-badge-desc">Tailored to your goals</p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="bm-hero-actions">
              <button
                type="button"
                onClick={openConsultationModal}
                className="bm-hero-btn-primary"
                id="hero-book-consultation-btn"
              >
                <span>Book Free Consultation</span>
                <HiOutlineArrowRight className="bm-action-arrow" />
              </button>

              <Link href="#portfolio" className="bm-hero-btn-secondary">
                <span>View Portfolio</span>
              </Link>
            </div>

            {/* Bottom Local Authority & Response Trustline */}
            <div className="bm-hero-trustline">
              <div className="bm-trust-item">
                <HiOutlineLocationMarker className="bm-trust-icon" />
                <span>Serving Noida, Delhi, Gurugram & Greater Noida</span>
              </div>
              <span className="bm-trust-divider" aria-hidden="true">|</span>
              <div className="bm-trust-item">
                <HiOutlineClock className="bm-trust-icon" />
                <span>Response within 24 hours &bull; No pushy sales calls</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Reusable Lead Form Component
             ========================================================= */}
          <div className="bm-hero-right" id="lead-form">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
