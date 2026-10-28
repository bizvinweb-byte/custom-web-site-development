"use client";

import { HiOutlineSearch, HiOutlinePencilAlt, HiOutlineCode } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";

const processSteps = [
  {
    step: "01",
    tag: "DISCOVERY",
    title: "Understand the Project",
    description:
      "We learn about your goals, audience, business model, and requirements to define a clear direction for the website.",
    icon: HiOutlineSearch,
    isFeatured: false,
  },
  {
    step: "02",
    tag: "UI/UX & STRATEGY",
    title: "Design the Experience",
    description:
      "We create clean, conversion-focused layouts, content structure, and user journeys tailored to your brand and offer.",
    icon: HiOutlinePencilAlt,
    isFeatured: true, // Active Highlight Card (Exact match with reference screenshot)
  },
  {
    step: "03",
    tag: "DEVELOPMENT",
    title: "Build & Optimize",
    description:
      "We develop fast, responsive websites with clean code, strong performance, and an SEO-ready foundation.",
    icon: HiOutlineCode,
    isFeatured: false,
  },
  {
    step: "04",
    tag: "LAUNCH & SUPPORT",
    title: "Go Live with Confidence",
    description:
      "After testing and refinement, we launch your website and support its growth with updates, guidance, and improvements.",
    icon: IoRocketOutline,
    isFeatured: false,
  },
];

export default function OurProcess() {
  return (
    <section className="bm-process-section" id="process" aria-label="Our Web Development Process">
      <div className="bm-container">
        {/* =========================================================
            HEADER: Eyebrow + Split 2-Column (Title & Description)
           ========================================================= */}
        <div className="bm-process-header">
          <div className="bm-process-header-left">
            {/* Eyebrow with Orange Accent Dot + Line */}
            <div className="bm-process-eyebrow-wrapper">
              <span className="bm-process-eyebrow-dot" aria-hidden="true" />
              <span className="bm-process-eyebrow-line" aria-hidden="true" />
              <span className="bm-process-eyebrow">OUR PROCESS</span>
            </div>

            {/* Main Section Heading: 2 Lines on Desktop */}
            <h2 className="bm-process-title">
              <span className="bm-process-line1">How We Build Websites</span>
              <span className="bm-process-line2">That Perform</span>
            </h2>
          </div>

          <div className="bm-process-header-right">
            <p className="bm-process-subtitle">
              From planning and design to development and launch, our process is
              built to create fast, user-focused, SEO-ready digital experiences
              for growing businesses.
            </p>
          </div>
        </div>

        {/* =========================================================
            4-COLUMN PROCESS CARDS GRID
           ========================================================= */}
        <div className="bm-process-grid">
          {processSteps.map((stepItem) => {
            const IconComponent = stepItem.icon;
            return (
              <article
                key={stepItem.step}
                className={`bm-process-card ${
                  stepItem.isFeatured ? "is-featured-process" : ""
                }`}
              >
                {/* Top Row: Big Number & Soft Icon Box */}
                <div className="bm-process-card-top">
                  <span className="bm-process-number">{stepItem.step}</span>
                  <div className="bm-process-icon-box" aria-hidden="true">
                    <IconComponent className="bm-process-icon" />
                  </div>
                </div>

                {/* Orange Dash Accent */}
                <div className="bm-process-dash" aria-hidden="true" />

                {/* Category Tag */}
                <span className="bm-process-tag">{stepItem.tag}</span>

                {/* Card Title */}
                <h3 className="bm-process-card-title">{stepItem.title}</h3>

                {/* Card Description */}
                <p className="bm-process-desc">{stepItem.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
