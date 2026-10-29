"use client";

import { useState } from "react";
import { HiChevronDown, HiChevronUp, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { openConsultationModal } from "./ConsultationModal";

export const defaultFaqs = [
  {
    question: "Why is Brandmingo the best custom website development company in Noida?",
    answer:
      "Brandmingo is headquartered at B-806, 8th Floor, ITHUM Tower, Sector 62, Noida. Unlike agencies that rely on heavy WordPress templates or pre-made themes, we write 100% pure code in Next.js, React, Node.js, and Express. This guarantees 95+ Core Web Vitals on Google, lightning-fast load times (<1s), enterprise-grade security, and top-tier SEO rankings for Noida and Delhi NCR businesses.",
  },
  {
    question: "What is the difference between custom website development and template-based websites?",
    answer:
      "Template-based websites (like generic WordPress or Wix) come with bloated code, slow server response times, vulnerability to plugin exploits, and restricted flexibility. In contrast, our custom-coded Next.js websites are tailored 1:1 to your business workflow, optimized specifically for Google's latest ranking algorithms, fully responsive, and built to scale seamlessly as your business grows.",
  },
  {
    question: "What is the typical cost and timeline of custom web development in Noida?",
    answer:
      "A standard high-converting business website typically takes 2 to 3 weeks, while complex full-stack web applications, CRM platforms, or LMS portals take 4 to 6 weeks. Our pricing is 100% transparent with milestone-based payments and no hidden charges. We also offer a 100% free initial project consultation and technical scope review.",
  },
  {
    question: "Do you specialize in LMS portals, custom CRM software, and full-stack web applications?",
    answer:
      "Yes! Beyond corporate websites, Brandmingo is a recognized full-stack engineering hub in Noida Sector 62. We build custom Learning Management Systems (LMS), lead & sales CRM portals, SaaS admin dashboards, student portals, and automated ERP workflows with custom API integrations.",
  },
  {
    question: "How does Brandmingo ensure my website ranks on Google Page 1 in Noida & Delhi NCR?",
    answer:
      "Every website we engineer includes 100% Technical SEO from day one: semantic HTML5 tags, JSON-LD Schema markup (LocalBusiness, Organization, Service, Review, FAQPage), automated XML sitemaps, robots.txt, canonical URLs, optimized OpenGraph tags, mobile-first responsive architecture, and local geo-tagging targeting Noida, Greater Noida, Gurugram, and Delhi NCR.",
  },
  {
    question: "Can I visit Brandmingo's office in Noida Sector 62 for an in-person meeting?",
    answer:
      "Yes, absolutely! We welcome our clients to visit our engineering office at B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309. You can meet our senior tech leads, review design prototypes, and discuss your project in detail. Call us directly at +91 99906 13140 to schedule your appointment.",
  },
];

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about custom website development in Noida & Delhi NCR",
  faqs = defaultFaqs,
  locationName = "Noida",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Google FAQPage Schema Markup for Rank #1 Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bm-faq-section" id="faq" aria-labelledby="faq-main-heading">
      {/* FAQ Schema for Google Search Console & SERP Dropdowns */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bm-container">
        {/* Header */}
        <div className="bm-faq-header">
          <div className="bm-faq-eyebrow-wrapper">
            <HiOutlineQuestionMarkCircle className="bm-faq-eyebrow-icon" />
            <span className="bm-faq-eyebrow">COMMON QUESTIONS &amp; ANSWERS</span>
          </div>
          <h2 id="faq-main-heading" className="bm-faq-title">
            {title} <span className="bm-highlight-orange">in {locationName}</span>
          </h2>
          <p className="bm-faq-subtitle">{subtitle}</p>
        </div>

        {/* Accordion List */}
        <div className="bm-faq-list" role="region" aria-label="FAQ Accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bm-faq-item ${isOpen ? "is-faq-open" : ""}`}
              >
                <button
                  type="button"
                  className="bm-faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="bm-faq-number">0{idx + 1}.</span>
                  <span className="bm-faq-question-text">{faq.question}</span>
                  <span className="bm-faq-toggle-icon-wrap" aria-hidden="true">
                    {isOpen ? (
                      <HiChevronUp className="bm-faq-chevron" />
                    ) : (
                      <HiChevronDown className="bm-faq-chevron" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`bm-faq-answer-panel ${isOpen ? "is-visible" : ""}`}
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <p className="bm-faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="bm-faq-cta-box">
          <div className="bm-faq-cta-text">
            <h4>Have a specific website question or custom requirements?</h4>
            <p>Our senior web architect in Noida Sector 62 is ready to guide you.</p>
          </div>
          <button
            type="button"
            onClick={openConsultationModal}
            className="bm-faq-cta-btn"
            id="faq-ask-expert-btn"
          >
            <span>Talk to Tech Lead</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
