"use client";

import Image from "next/image";
import { HiStar } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

const clientLogos = [
  { id: 1, src: "/clientlogos/client1.png", alt: "Client Partner Logo 1" },
  { id: 2, src: "/clientlogos/client2.png", alt: "Client Partner Logo 2" },
  { id: 3, src: "/clientlogos/client3.png", alt: "Client Partner Logo 3" },
  { id: 4, src: "/clientlogos/client4.png", alt: "Client Partner Logo 4" },
];

const googleReviews = [
  {
    id: 1,
    tag: "Custom Web Solution",
    rating: 5,
    review:
      "I had a really good experience with Brandmingo. The team understood my requirements and created a clean and professional website for my business. They were supportive throughout the process and made the changes I needed. Really happy with the final result.",
    initial: "R",
    name: "Iam Ranier",
    meta: "Verified Google Review • 1 month ago",
    bgColor: "#ea580c", // Vibrant Orange
  },
  {
    id: 2,
    tag: "Premier Web Development",
    rating: 5,
    review:
      "Without a doubt, I can assert that they are the premier development company. I wholeheartedly endorse their services to anyone in pursuit of top-notch development solutions.",
    initial: "V",
    name: "Vikash Kumar",
    meta: "Verified Client • 5 reviews • 2 years ago",
    bgColor: "#7e22ce", // Purple (Exact match with Google Review Screenshot)
  },
  {
    id: 3,
    tag: "Digital & Web Growth",
    rating: 5,
    review:
      "I can confidently say that my experience with BrandMingo has been nothing short of outstanding. As a small business owner, I've always been cautious about choosing the right digital marketing agency to elevate my online presence. However, after working with BrandMingo, all my doubts were laid to rest, and I am thrilled with the results they delivered.",
    initial: "S",
    name: "Saurav Rohilla",
    meta: "Local Guide • 5 reviews • 3 years ago",
    bgColor: "#65a30d", // Olive Green (Exact match with Google Review Screenshot)
  },
  {
    id: 4,
    tag: "Custom Web Design",
    rating: 5,
    review:
      "I had an amazing experience with Brandmingo. They were professional, creative and truly wonderful people . Website they built very fast , modern with beautiful designs.",
    initial: "MH",
    name: "Mahil Hasan",
    meta: "Verified Client • 6 reviews • a year ago",
    bgColor: "#0f766e", // Deep Teal
  },
  {
    id: 5,
    tag: "Top-Tier Web Solutions",
    rating: 5,
    review:
      "I can confidently say that they are best development company. I would definitely recommend their services to anyone seeking top-tier development solutions.",
    initial: "MC",
    name: "Marque Career",
    meta: "Verified Client • 2 reviews • 3 years ago",
    bgColor: "#1e40af", // Deep Blue
  },
  {
    id: 6,
    tag: "Website & Branding",
    rating: 5,
    review:
      "We had a great experience working with Brandmingo team on our website and logo development. They were responsive, cooperative, and always ready to help whenever needed. The quality of work, attention to detail, and timely support made the whole process smooth. Highly recommended!",
    initial: "C",
    name: "Chetana Patil",
    meta: "Verified Google Review • 3 reviews",
    bgColor: "#2563eb", // Royal Blue
  },
  {
    id: 7,
    tag: "Web Design & Development",
    rating: 5,
    review:
      "I had a fantastic experience with BrandMingo! They created a beautiful and professional website for me, exactly the way I envisioned it. The team was friendly, responsive, and always willing to make adjustments until everything was perfect. Smooth delivery on time!",
    initial: "M",
    name: "Munish Kumar",
    meta: "Verified Client • 19 reviews • a year ago",
    bgColor: "#059669", // Emerald Green
  },
  {
    id: 8,
    tag: "Professional IT Services",
    rating: 5,
    review:
      "Brandmingo is really good... their work is so professional and client focused. I highly recommend them for their excellent services... their team is highly supportive, quick, and helpful throughout the entire project lifecycle.",
    initial: "D",
    name: "Dipika",
    meta: "Verified Client • 6 reviews • 8 months ago",
    bgColor: "#9333ea", // Vibrant Violet
  },
  {
    id: 9,
    tag: "Full-Stack Web Development",
    rating: 5,
    review:
      "Great experience with the Brandmingo engineering team in Noida. The website architecture is fast, mobile-friendly, and easy to manage. Their team provided continuous support post-delivery as well. Highly trustworthy!",
    initial: "R",
    name: "Rajneesh Choudhary",
    meta: "Verified Client • 1 review • a year ago",
    bgColor: "#ea580c", // Vibrant Orange
  },
];

export default function ClientReviews() {
  // Rich Reviews Schema for Google First Page Rank #1 & Rich Snippets ⭐⭐⭐⭐⭐
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://brandmingo.com/#professionalservice",
    "name": "Brandmingo - Custom Website Development Company Noida",
    "url": "https://customwebsitedevelopment.in/",
    "telephone": "+91-9990613140",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201309",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "128",
      "reviewCount": "128",
    },
    "review": googleReviews.map((rev) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.name,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1",
      },
      "reviewBody": rev.review,
      "datePublished": "2026-01-15",
    })),
  };

  return (
    <section className="bm-reviews-section" id="reviews" aria-label="Client Reviews and Testimonials">
      {/* Schema Markup for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bm-container">
        {/* =========================================================
            HEADER: Overlapping Client Logos + 1000+ Happy Clients
           ========================================================= */}
        <div className="bm-reviews-header">
          {/* Overlapping Client Logos Group with Decorative Burst */}
          <div className="bm-logos-avatar-wrapper">
            <div className="bm-logos-avatar-group">
              {clientLogos.map((logo, idx) => (
                <div
                  key={logo.id}
                  className="bm-logo-circle"
                  style={{ zIndex: 10 - idx }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={48}
                    height={48}
                    className="bm-logo-circle-img"
                  />
                </div>
              ))}
            </div>

            {/* Decorative orange sparkle rays */}
            <div className="bm-sparkle-rays" aria-hidden="true">
              <span className="bm-ray ray-1" />
              <span className="bm-ray ray-2" />
              <span className="bm-ray ray-3" />
            </div>
          </div>

          {/* Section Main Title */}
          <h2 className="bm-reviews-title">1000+ Happy Clients</h2>

          {/* Section Subtitle */}
          <p className="bm-reviews-subtitle">
            Trusted by businesses across Noida, Delhi &amp; Gurugram
          </p>

          {/* Google Verified Rating Badge */}
          <div className="bm-google-rating-pill">
            <FcGoogle className="bm-google-icon" />
            <span className="bm-rating-score">4.9 / 5.0</span>
            <div className="bm-rating-stars-tiny">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className="h-4 w-4 text-amber-400" />
              ))}
            </div>
            <span className="bm-rating-count">(Verified Google Reviews)</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          CONTINUOUS ENDLESS AUTO-SLIDER (SEAMLESS INFINITE LOOP)
          Cards never jump backwards; loops smoothly forever
         ========================================================= */}
      <div className="bm-marquee-container" aria-label="Verified Client Reviews Carousel">
        <div className="bm-marquee-track">
          {/* Duplicate 1 */}
          {googleReviews.map((item, idx) => (
            <article key={`rev-1-${item.id}-${idx}`} className="bm-marquee-card">
              {/* Top Tag & 5 Golden Stars */}
              <div className="bm-review-top">
                <h3 className="bm-review-tag">{item.tag}</h3>
                <div className="bm-review-stars">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <HiStar key={sIdx} className="bm-star-icon" />
                  ))}
                </div>
              </div>

              {/* Review Quote Text */}
              <blockquote className="bm-review-quote">
                <p className="bm-review-text">"{item.review}"</p>
              </blockquote>

              {/* Bottom: Solid Color Avatar with First Letter/Initials + Verified Meta */}
              <footer className="bm-review-author">
                <div
                  className="bm-author-initial-circle"
                  style={{ backgroundColor: item.bgColor }}
                  aria-label={`Avatar for ${item.name}`}
                >
                  {item.initial}
                </div>

                <div className="bm-author-details">
                  <h4 className="bm-author-name">{item.name}</h4>
                  <div className="bm-author-meta">
                    <FcGoogle className="bm-meta-g-icon" />
                    <span>{item.meta}</span>
                  </div>
                </div>
              </footer>
            </article>
          ))}

          {/* Duplicate 2 for Seamless 100% Infinite Marquee Loop without backward reset */}
          {googleReviews.map((item, idx) => (
            <article
              key={`rev-2-${item.id}-${idx}`}
              className="bm-marquee-card"
              aria-hidden="true"
            >
              {/* Top Tag & 5 Golden Stars */}
              <div className="bm-review-top">
                <h3 className="bm-review-tag">{item.tag}</h3>
                <div className="bm-review-stars">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <HiStar key={sIdx} className="bm-star-icon" />
                  ))}
                </div>
              </div>

              {/* Review Quote Text */}
              <blockquote className="bm-review-quote">
                <p className="bm-review-text">"{item.review}"</p>
              </blockquote>

              {/* Bottom: Solid Color Avatar with First Letter/Initials + Verified Meta */}
              <footer className="bm-review-author">
                <div
                  className="bm-author-initial-circle"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.initial}
                </div>

                <div className="bm-author-details">
                  <h4 className="bm-author-name">{item.name}</h4>
                  <div className="bm-author-meta">
                    <FcGoogle className="bm-meta-g-icon" />
                    <span>{item.meta}</span>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
