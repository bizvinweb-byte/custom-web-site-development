"use client";

import Image from "next/image";
import {
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineExternalLink,
  HiOutlineArrowsExpand,
} from "react-icons/hi";

const projectScreenshots = [
  {
    id: 1,
    title: "Product Showcase & Features",
    subtitle: "Custom product grid, instant search & 'Why Choose Us' highlights",
    badge: "Product Page • Catalog",
    image: "/projectsimg/leela-1.jpg",
    alt: "Leela Custom Website Product Showcase and Catalog by Brandmingo",
  },
  {
    id: 2,
    title: "Product Benefits & Expertise",
    subtitle: "In-depth technical advantages & interactive industry solutions",
    badge: "Product Page • Benefits",
    image: "/projectsimg/leela-2.jpg",
    alt: "Leela Key Product Benefits and Industry Expertise Section",
  },
  {
    id: 3,
    title: "Our Journey & Milestones",
    subtitle: "Interactive storytelling timeline showcasing company growth & legacy",
    badge: "Our Journey • Milestones",
    image: "/projectsimg/leela-3.jpg",
    alt: "Leela Our Journey Milestones and Company Timeline",
  },
];

export default function FeaturedCaseStudy() {
  return (
    <section className="bm-case-study-section" id="case-studies">
      <div className="bm-container">
        {/* =========================================================
            SECTION HEADER (Eyebrow + Title + Description)
           ========================================================= */}
        <div className="bm-case-study-header">
          {/* Eyebrow Badge with Orange Accent Dot */}
          <div className="bm-case-study-eyebrow">
            <span className="bm-eyebrow-dot" aria-hidden="true" />
            <span>FEATURED CASE STUDY</span>
          </div>

          {/* Main Title */}
          <h2 className="bm-case-study-title">
            Custom Solutions, Real Results
          </h2>

          {/* Description */}
          <p className="bm-case-study-desc">
            Explore our custom websites, LMS platforms, CRM systems, and full-stack development projects built for performance, scalability, and business growth.
          </p>
        </div>

        {/* =========================================================
            GRID: Metric Card (Left) + 3 E-Commerce Showcases (Right)
           ========================================================= */}
        <div className="bm-case-study-grid">
          {/* Left Column: Metric Card */}
          <div className="bm-stat-card">
            {/* Stat 1 */}
            <div className="bm-stat-block">
              <div className="bm-stat-icon-wrapper">
                <HiOutlineChartBar className="bm-stat-icon" />
              </div>
              <div className="bm-stat-number">+42%</div>
              <h3 className="bm-stat-title">Qualified Leads</h3>
              <p className="bm-stat-caption">
                Average increase in business inquiries
              </p>
            </div>

            {/* Divider line */}
            <div className="bm-stat-divider" aria-hidden="true" />

            {/* Stat 2 */}
            <div className="bm-stat-block">
              <div className="bm-stat-icon-wrapper">
                <HiOutlineTrendingUp className="bm-stat-icon" />
              </div>
              <div className="bm-stat-number">+31%</div>
              <h3 className="bm-stat-title">Organic Traffic</h3>
              <p className="bm-stat-caption">
                Higher visibility on Google for key services
              </p>
            </div>

            {/* Action Button: Themed Orange Pill Button (Visit Website) */}
            <a
              href="https://leela-gulf.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bm-stat-btn-orange"
            >
              <span>Visit Website</span>
              <HiOutlineExternalLink className="bm-stat-btn-arrow" />
            </a>
          </div>

          {/* Right Columns: 3 E-Commerce Project Cards */}
          <div className="bm-project-cards-container">
            {projectScreenshots.map((project) => (
              <div key={project.id} className="bm-project-card group">
                {/* Browser Mockup Window */}
                <div className="bm-project-mockup">
                  {/* Mockup top browser bar */}
                  <div className="bm-mockup-header">
                    <div className="bm-mockup-controls">
                      <span className="bm-mockup-dot red" />
                      <span className="bm-mockup-dot yellow" />
                      <span className="bm-mockup-dot green" />
                    </div>
                    <span className="bm-mockup-url">leela-gulf.vercel.app</span>
                    <span className="bm-mockup-scroll-hint" title="Scrollable mockup">
                      <HiOutlineArrowsExpand className="h-3 w-3" />
                      <span>Scroll</span>
                    </span>
                  </div>

                  {/* Image Display with Smooth Top-to-Bottom Hover Auto-Scroll & Manual Scroll */}
                  <div className="bm-project-image-box">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={800}
                      height={1516}
                      priority
                      quality={92}
                      className="bm-project-img"
                    />
                  </div>
                </div>

                {/* Card Information - 100% E-Commerce */}
                <div className="bm-project-info">
                  <h3 className="bm-project-title">{project.title}</h3>
                  <p className="bm-project-subtitle">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
