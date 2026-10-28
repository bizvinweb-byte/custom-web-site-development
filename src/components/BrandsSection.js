"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const allBrandLogos = [
  {
    id: 1,
    src: "/brands/brand_1.png",
    alt: "Custom Website Development Client - Brandmingo Noida",
  },
  {
    id: 2,
    src: "/brands/brand_2.png",
    alt: "Full-Stack Web Application Client - Custom LMS Platform",
  },
  {
    id: 3,
    src: "/brands/brand_3.png",
    alt: "Scalable E-Commerce Web Development Client Noida NCR",
  },
  {
    id: 4,
    src: "/brands/brand_4.png",
    alt: "Custom CRM Portal Development Client Brandmingo",
  },
  {
    id: 5,
    src: "/brands/brand_5.png",
    alt: "Enterprise Web Solution Client - Brandmingo Web Agency",
  },
  {
    id: 6,
    src: "/brands/brand_6.png",
    alt: "B2B Custom Web Architecture Client Noida Delhi",
  },
  {
    id: 7,
    src: "/brands/brand_7.png",
    alt: "High-Performance Next.js Web Development Client",
  },
  {
    id: 8,
    src: "/brands/brand_8.png",
    alt: "Custom Web Platform Client - Modern UI/UX Development",
  },
  {
    id: 9,
    src: "/brands/brand_9.png",
    alt: "SaaS Web Application Client - Brandmingo Technology",
  },
  {
    id: 10,
    src: "/brands/brand_10.png",
    alt: "Responsive Business Website Development Client",
  },
  {
    id: 11,
    src: "/brands/brand_11.png",
    alt: "Scalable LMS Architecture Client - Brandmingo",
  },
  {
    id: 12,
    src: "/brands/brand_12.png",
    alt: "Custom API Integration & Web Portal Client",
  },
  {
    id: 13,
    src: "/brands/brand_13.png",
    alt: "E-Commerce Growth Website Client Noida",
  },
  {
    id: 14,
    src: "/brands/brand_14.png",
    alt: "Digital Transformation & Web Development Client",
  },
  {
    id: 15,
    src: "/brands/brand_15.png",
    alt: "Custom WordPress & Full-Stack Web Development Client",
  },
  {
    id: 16,
    src: "/brands/brand_16.png",
    alt: "Leading Brand Custom Website Development Client",
  },
  {
    id: 17,
    src: "/brands/brand_17.png",
    alt: "Modern Web Design & LMS System Client Noida",
  },
  {
    id: 18,
    src: "/brands/brand_18.png",
    alt: "Enterprise CRM Solution & Web Architecture Client",
  },
  {
    id: 19,
    src: "/brands/brand_19.png",
    alt: "Fast Custom Website Development Client Brandmingo",
  },
  {
    id: 20,
    src: "/brands/brand_20.png",
    alt: "Top Business Portal Development Client Noida Delhi",
  },
  {
    id: 21,
    src: "/brands/brand_21.png",
    alt: "Bespoke Web Application & UI/UX Client",
  },
  {
    id: 22,
    src: "/brands/brand_22.png",
    alt: "Custom E-Commerce & Full-Stack Portal Client",
  },
  {
    id: 23,
    src: "/brands/brand_23.png",
    alt: "High-Converting Custom Website Client Brandmingo",
  },
  {
    id: 24,
    src: "/brands/brand_24.png",
    alt: "Full-Stack Custom Web Architecture Client - Brandmingo",
  },
];

export default function BrandsSection() {
  const [showAll, setShowAll] = useState(false);

  // Initial view shows first 12 logos (2 rows x 6 columns)
  // Clicking "See More" reveals all 24 logos (4 rows x 6 columns, perfectly balanced with no empty card)
  const displayedLogos = showAll ? allBrandLogos : allBrandLogos.slice(0, 12);

  return (
    <section className="bm-brands-section" id="brands" aria-label="Brands We've Worked With">
      <div className="bm-container">
        {/* =========================================================
            HEADER: Eyebrow + Heading + Subtitle (Matching Website Typography)
           ========================================================= */}
        <div className="bm-brands-header">
          <span className="bm-brands-eyebrow">TRUSTED BRANDS</span>
          <h2 className="bm-brands-title">Brands We&apos;ve Worked With</h2>
          <p className="bm-brands-subtitle">
            A selection of businesses we&apos;ve supported with custom websites,
            LMS platforms, CRM systems, and full-stack digital solutions.
          </p>
        </div>

        {/* =========================================================
            BRAND LOGOS GRID BOX (Matching Reference Screenshot)
           ========================================================= */}
        <div className="bm-brands-box-wrapper">
          {/* Centered Top Pill Tag ("ALL CLIENTS") */}
          <div className="bm-brands-pill-badge" aria-hidden="true">
            ALL CLIENTS
          </div>

          <div className="bm-brands-grid">
            {displayedLogos.map((brand, idx) => (
              <div key={brand.id} className="bm-brand-cell">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={160}
                  height={72}
                  className="bm-brand-img"
                  unoptimized={true}
                  priority={idx < 12}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            "SEE MORE" / "SHOW LESS" TOGGLE BUTTON
           ========================================================= */}
        <div className="bm-brands-actions">
          <button
            type="button"
            className="bm-brands-toggle-btn"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
          >
            <span>
              {showAll
                ? "Show Less Brands"
                : `See More (${allBrandLogos.length - 12} More Brands)`}
            </span>
            {showAll ? (
              <HiChevronUp className="bm-toggle-icon" />
            ) : (
              <HiChevronDown className="bm-toggle-icon" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
