"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  HiArrowRight,
  HiChevronDown,
  HiChevronUp,
  HiX,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineArrowsExpand,
} from "react-icons/hi";
import {
  portfolioSectionHeader,
  portfolioProjects,
} from "@/data/portfolioData";

export default function PortfolioSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const initialCount = 6;

  // Show first 6 by default, or all when expanded
  const displayedProjects = isExpanded
    ? portfolioProjects
    : portfolioProjects.slice(0, initialCount);

  const toggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smooth scroll back to section top when collapsing
      const section = document.getElementById("portfolio");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  // Open Image Popup Modal
  const openModal = (idx) => {
    setModalIndex(idx);
  };

  // Close Image Popup Modal
  const closeModal = () => {
    setModalIndex(null);
  };

  // Previous & Next navigation inside Modal
  const modalPrev = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((prev) =>
      prev === 0 ? portfolioProjects.length - 1 : prev - 1
    );
  }, [modalIndex]);

  const modalNext = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((prev) =>
      prev === portfolioProjects.length - 1 ? 0 : prev + 1
    );
  }, [modalIndex]);

  // Keyboard navigation (ESC to close, Left/Right arrows to navigate)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIndex === null) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        modalPrev();
      } else if (e.key === "ArrowRight") {
        modalNext();
      }
    };

    if (modalIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalIndex, modalPrev, modalNext]);



  const activeModalItem =
    modalIndex !== null ? portfolioProjects[modalIndex] : null;

  return (
    <section
      className="bm-portfolio-section"
      id="portfolio"
      aria-label="Our Web Development Portfolio and Project Showcase"
    >
      <div className="bm-container">
        {/* =========================================================
            HEADER: Eyebrow + Title & Subtitle (Clean Layout)
           ========================================================= */}
        <div className="bm-portfolio-header">
          {/* Eyebrow with Orange Accent Dot */}
          <div className="bm-portfolio-eyebrow-wrapper">
            <span className="bm-portfolio-eyebrow-dot" aria-hidden="true" />
            <span className="bm-portfolio-eyebrow">
              {portfolioSectionHeader.eyebrow}
            </span>
          </div>

          {/* Main Section Title */}
          <h2 className="bm-portfolio-title">
            {portfolioSectionHeader.titleLine1}{" "}
            <span className="bm-portfolio-title-accent">
              {portfolioSectionHeader.titleLine2}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="bm-portfolio-subtitle">
            {portfolioSectionHeader.subtitle}
          </p>
        </div>

        {/* =========================================================
            PORTFOLIO CARDS GRID (3x2 by Default = 6 Projects)
           ========================================================= */}
        <div className="bm-portfolio-grid">
          {displayedProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`bm-portfolio-card ${
                idx >= initialCount ? "bm-card-animated-in" : ""
              }`}
            >
              {/* Visual Mockup Showcase Container (Clickable for Popup) */}
              <div
                className="bm-portfolio-mockup-frame"
                onClick={() => openModal(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Open full preview for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal(idx);
                  }
                }}
              >
                <div className="bm-mockup-img-wrapper">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={688}
                    height={384}
                    className="bm-portfolio-img"
                    priority={idx < 3}
                  />

                  {/* Subtle Hover Zoom Hint */}
                  <div className="bm-mockup-overlay-hint" aria-hidden="true">
                    <span className="bm-hint-badge">
                      <HiOutlineArrowsExpand className="bm-hint-icon" />
                      <span>Click to View Full UI</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Category/Name + Circular Arrow Action */}
              <div className="bm-portfolio-card-footer">
                <div
                  className="bm-portfolio-info"
                  onClick={() => openModal(idx)}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="bm-portfolio-card-title">{project.title}</h3>
                </div>

                <button
                  type="button"
                  onClick={() => openModal(idx)}
                  className="bm-portfolio-arrow-btn"
                  aria-label={`Open preview modal for ${project.title}`}
                >
                  <HiArrowRight className="bm-portfolio-card-arrow" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            "SEE MORE" / "SHOW LESS" TOGGLE ACTION
           ========================================================= */}
        <div className="bm-portfolio-action-row">
          <button
            onClick={toggleExpand}
            className="bm-portfolio-see-more-btn"
            type="button"
            aria-expanded={isExpanded}
            id="portfolio-see-more-btn"
          >
            <span>
              {isExpanded
                ? "Show Less"
                : `See More Projects (${portfolioProjects.length - initialCount} More)`}
            </span>
            {isExpanded ? (
              <HiChevronUp className="bm-btn-chevron-icon" />
            ) : (
              <HiChevronDown className="bm-btn-chevron-icon" />
            )}
          </button>
        </div>
      </div>

      {/* =========================================================
          LIGHTBOX POPUP MODAL (When User Clicks Any Card)
         ========================================================= */}
      {modalIndex !== null && activeModalItem && (
        <div
          className="bm-portfolio-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${activeModalItem.title}`}
        >
          {/* Modal Image-Only Container */}
          <div
            className="bm-portfolio-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Top-Right Corner) */}
            <button
              type="button"
              className="bm-modal-close-btn bm-modal-close-floating"
              onClick={closeModal}
              aria-label="Close project preview"
            >
              <HiX className="bm-modal-close-icon" />
            </button>

            {/* Modal Image Showcase */}
            <div className="bm-modal-image-container">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                width={1376}
                height={768}
                className="bm-modal-img"
                priority
              />

              {/* In-Modal Left/Right Nav Arrows */}
              <button
                type="button"
                className="bm-modal-nav-arrow bm-modal-prev"
                onClick={modalPrev}
                aria-label="View previous project"
              >
                <HiChevronLeft />
              </button>
              <button
                type="button"
                className="bm-modal-nav-arrow bm-modal-next"
                onClick={modalNext}
                aria-label="View next project"
              >
                <HiChevronRight />
              </button>
            </div>

            {/* Minimal Bottom Bar: Counter Only */}
            <div className="bm-modal-footer bm-modal-footer-minimal">
              <span className="bm-modal-counter">
                {modalIndex + 1} / {portfolioProjects.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
