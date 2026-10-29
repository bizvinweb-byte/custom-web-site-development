import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import ClientReviews from "@/components/ClientReviews";
import OrangeMarqueeBanner from "@/components/OrangeMarqueeBanner";
import BrandsSection from "@/components/BrandsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import WhyCRO from "@/components/WhyCRO";
import OurProcess from "@/components/OurProcess";
import ReadyToBuild from "@/components/ReadyToBuild";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import ConsultationModal from "@/components/ConsultationModal";
import FAQSection from "@/components/FAQSection";
import { citiesData, getCityBySlug, getAllCitySlugs } from "@/data/citiesData";

// Pre-render all city pages as static HTML at build time for instant Google crawling
export function generateStaticParams() {
  return getAllCitySlugs();
}

// Generate unique localized SEO Metadata for Google Rank #1
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: "Custom Website Development Company in Noida | Brandmingo",
    };
  }

  const canonicalUrl = `https://customwebsitedevelopment.in/${city.slug}`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonicalUrl,
      siteName: "Brandmingo Custom Web",
      images: [
        {
          url: "/brandmingologo.png",
          width: 1000,
          height: 200,
          alt: `${city.heroTitle} - Brandmingo`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
      images: ["/brandmingologo.png"],
    },
  };
}

export default async function CityLandingPage({ params }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  // Localized City Schema for Google Local Pack & SERP Rich Results
  const localCitySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://customwebsitedevelopment.in/${city.slug}#service`,
    name: `Brandmingo - ${city.heroTitle}`,
    url: `https://customwebsitedevelopment.in/${city.slug}`,
    logo: "https://customwebsitedevelopment.in/brandmingologo.png",
    image: "https://customwebsitedevelopment.in/brandmingologo.png",
    description: city.subheading,
    telephone: "+91-9990613140",
    email: "hello@brandmingo.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201309",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Web Development Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Custom Website Development in ${city.name}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Enterprise CRM Portal Development in ${city.name}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `LMS Portal & EdTech Solutions in ${city.name}`,
          },
        },
      ],
    },
  };

  return (
    <div className="page-wrapper">
      {/* City-Specific Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localCitySchema) }}
      />

      {/* Header */}
      <Navbar />

      {/* City Announcement Banner (Local Authority Callout) */}
      <aside className="bm-city-banner" aria-label={`Service Coverage for ${city.name}`}>
        <div className="bm-container">
          <div className="bm-city-banner-inner">
            <span className="bm-city-banner-tag">📍 {city.name} REGIONAL HUB</span>
            <span className="bm-city-banner-text">
              Specialized Web Engineering for businesses in <strong>{city.fullName}</strong>. Local support, 24-hour response &amp; in-person consultations.
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main id="main-content" className="main-content">
        <HeroSection />
        <FeaturedCaseStudy />
        <ClientReviews />
        <OrangeMarqueeBanner />
        <ServicesSection />
        <WhyCRO />
        <OurProcess />
        <PortfolioSection />
        <BrandsSection />
        <FAQSection
          title={`Frequently Asked Questions`}
          subtitle={`Everything you need to know about custom website development in ${city.name}`}
          faqs={city.faqs}
          locationName={city.name}
        />
        <ReadyToBuild />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Widget */}
      <FloatingContactWidget />

      {/* Lead Form Popup Modal */}
      <ConsultationModal />
    </div>
  );
}
