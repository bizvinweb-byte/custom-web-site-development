"use client";

import { HiArrowRight } from "react-icons/hi";
import { openConsultationModal } from "./ConsultationModal";

const servicesData = [
  {
    id: 1,
    serviceNumber: "SERVICE 01",
    category: "CUSTOM",
    title: "Custom Website Development",
    description:
      "Tailor-made websites built from scratch for brands that need speed, flexibility, and a unique user experience.",
    features: [
      "Custom UI/UX design",
      "SEO-friendly structure",
      "Responsive across devices",
      "Scalable full-stack development",
    ],
    isFeatured: false,
  },
  {
    id: 2,
    serviceNumber: "SERVICE 02",
    category: "SHOPIFY",
    title: "Shopify Website Development",
    description:
      "High-converting Shopify storefronts for product brands that need a smooth shopping experience and easier store management.",
    features: [
      "Custom Shopify storefront design",
      "Collection & product page setup",
      "Conversion-focused layout",
      "App integrations & optimization",
    ],
    isFeatured: true, // Inverted Dark Card (Exact match with reference screenshot)
  },
  {
    id: 3,
    serviceNumber: "SERVICE 03",
    category: "WORDPRESS",
    title: "WordPress Website Development",
    description:
      "Flexible WordPress websites for service businesses, blogs, and companies that want easy content management with premium design.",
    features: [
      "Custom WordPress theme design",
      "Fast-loading page structure",
      "SEO-ready content setup",
      "Easy backend management",
    ],
    isFeatured: false,
  },
  {
    id: 4,
    serviceNumber: "SERVICE 04",
    category: "AUDIT",
    title: "Free Website Audit",
    description:
      "Get a practical review of your current website with improvement suggestions for speed, design, usability, and conversions.",
    priceTag: "Free",
    priceAmount: "₹0",
    features: [
      "Website performance review",
      "UX & design feedback",
      "SEO basics checklist",
      "Actionable improvement points",
    ],
    isFeatured: false,
  },
];

export default function ServicesSection() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Structured Data (Schema.org) for Google Rank #1 Rich Snippets
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Custom Website Development & Digital Services - Brandmingo",
    "description":
      "Explore custom-coded website development, Shopify storefronts, WordPress solutions, and free website performance audits by Brandmingo Noida.",
    "itemListElement": servicesData.map((svc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": svc.title,
        "description": svc.description,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Brandmingo",
          "url": "https://customwebsitedevelopment.in/",
        },
      },
    })),
  };

  return (
    <section className="bm-services-section" id="services" aria-label="Our Web Development Services">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="bm-container">
        {/* =========================================================
            HEADER: 2-Column Split (Left: Eyebrow + Heading, Right: Subtitle)
           ========================================================= */}
        <div className="bm-services-header">
          <div className="bm-services-header-left">
            <div className="bm-services-eyebrow-wrapper">
              <span className="bm-services-eyebrow">OUR SERVICES</span>
              <span className="bm-services-eyebrow-line" aria-hidden="true" />
            </div>
            <h2 className="bm-services-title">
              Solutions Built for <span className="bm-highlight-orange">Your Business</span>
            </h2>
          </div>

          <div className="bm-services-header-right">
            <p className="bm-services-subtitle">
              Choose the website solution that fits your goals. From custom-coded
              websites to Shopify and WordPress development, we create fast,
              SEO-ready digital experiences designed for performance, usability,
              and growth.
            </p>
          </div>
        </div>

        {/* =========================================================
            SERVICES GRID CONTAINER (4-Column Box with Inverted Dark Card)
           ========================================================= */}
        <div className="bm-services-grid-box">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className={`bm-service-card ${
                service.isFeatured ? "is-featured-dark" : ""
              }`}
            >
              {/* Card Header: Service Tag & Title */}
              <div className="bm-service-card-head">
                <span className="bm-service-tag">
                  {service.serviceNumber} &bull; {service.category}
                </span>
                <h3 className="bm-service-card-title">{service.title}</h3>
                <div className="bm-service-divider" aria-hidden="true" />
              </div>

              {/* Card Body: Description */}
              <p className="bm-service-desc">{service.description}</p>

              {/* Optional Price Row for Free Audit Card */}
              {service.priceTag && (
                <div className="bm-service-pricing-row">
                  <span className="bm-pricing-tag">{service.priceTag}</span>
                  <span className="bm-pricing-amount">{service.priceAmount}</span>
                </div>
              )}

              {/* Card Features List with Orange Arrows */}
              <ul className="bm-service-features-list">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="bm-service-feature-item">
                    <span className="bm-feature-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                    <span className="bm-feature-label">{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* =========================================================
            BOTTOM ACTION BUTTON (Book a Free Consultation)
           ========================================================= */}
        <div className="bm-services-footer-action">
          <button
            type="button"
            onClick={openConsultationModal}
            className="bm-services-cta-btn"
            id="services-consultation-btn"
          >
            <span>Book a Free Consultation</span>
            <HiArrowRight className="bm-cta-btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
