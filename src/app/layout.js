import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://customwebsitedevelopment.in"),
  title: "Brandmingo | Best Custom Website Development Company in Noida | Sector 62",
  description:
    "Leading custom website development company in Noida Sector 62. We engineer high-speed Next.js web applications, enterprise CRM & LMS portals, and full-stack software. 1000+ satisfied clients. Get a free proposal!",
  keywords: [
    "custom website development in noida",
    "custom website development company in noida",
    "custom web development noida",
    "website development company in noida sector 62",
    "best website developers in noida",
    "next js developers noida",
    "react js web development noida",
    "crm portal development company noida",
    "lms development company noida",
    "full stack development company delhi ncr",
    "node express developer noida",
    "custom software development sector 62 noida",
    "ecommerce website development noida",
    "b2b custom web applications noida",
    "brandmingo custom website development",
    "brandmingo noida",
  ],
  authors: [{ name: "Brandmingo", url: "https://brandmingo.com" }],
  creator: "Brandmingo",
  publisher: "Brandmingo Media Pvt. Ltd.",
  alternates: {
    canonical: "https://customwebsitedevelopment.in/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Brandmingo | Best Custom Website Development Company in Noida",
    description:
      "Enterprise custom websites, CRM platforms, and LMS portals built with Next.js, React & Node.js by Noida's top engineering team. 1000+ happy clients.",
    url: "https://customwebsitedevelopment.in/",
    siteName: "Brandmingo Custom Web",
    images: [
      {
        url: "/brandmingologo.png",
        width: 1000,
        height: 200,
        alt: "Brandmingo - Best Custom Website Development Company in Noida Sector 62",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandmingo | Custom Website Development in Noida Sector 62",
    description:
      "Custom web applications, CRM, LMS, and full-stack engineering tailored for businesses in Noida & Delhi NCR.",
    images: ["/brandmingologo.png"],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Sector 62",
    "geo.position": "28.6280;77.3670",
    ICBM: "28.6280, 77.3670",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization Schema (Parent Brand Brandmingo)
      {
        "@type": "Organization",
        "@id": "https://brandmingo.com/#organization",
        name: "Brandmingo",
        url: "https://brandmingo.com",
        logo: "https://customwebsitedevelopment.in/brandmingologo.png",
        sameAs: [
          "https://www.linkedin.com/company/brandmingo",
          "https://www.instagram.com/brandmingo",
          "https://www.facebook.com/brandmingo",
          "https://x.com/brandmingo",
        ],
      },

      // 2. Local Business / Professional Service Schema
      {
        "@type": "ProfessionalService",
        "@id": "https://customwebsitedevelopment.in/#localbusiness",
        name: "Brandmingo - Custom Website Development Company in Noida",
        url: "https://customwebsitedevelopment.in",
        logo: "https://customwebsitedevelopment.in/brandmingologo.png",
        image: "https://customwebsitedevelopment.in/brandmingologo.png",
        description:
          "Top custom website development company in Noida Sector 62 specializing in pure-code web applications, enterprise CRM & LMS portals, Next.js, React, Node.js, and Express.",
        telephone: "+91-9990613140",
        email: "hello@brandmingo.com",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
        address: {
          "@type": "PostalAddress",
          streetAddress: "B-806, 8th Floor, ITHUM Tower, Block A, Industrial Area, Sector 62",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201309",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.628,
          longitude: 77.367,
        },
        areaServed: [
          { "@type": "City", name: "Noida" },
          { "@type": "AdministrativeArea", name: "Greater Noida" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "City", name: "Gurugram" },
          { "@type": "City", name: "Ghaziabad" },
          { "@type": "City", name: "Faridabad" },
          { "@type": "Country", name: "India" },
          { "@type": "AdministrativeArea", name: "Worldwide" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "128",
          reviewCount: "128",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Custom Web Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Website Development in Noida",
                description:
                  "Pure-code Next.js & React web development built for high conversion, sub-second speed, and top Google SEO ranking.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise CRM Portal Development",
                description:
                  "Scalable CRM dashboards, lead management funnels, and automated sales reporting for growing businesses.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "LMS & eLearning Portal Development",
                description:
                  "Comprehensive learning management systems with course streaming, quiz engines, student portals, and certifications.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-Commerce Website Development",
                description:
                  "High-converting custom and Shopify storefronts with optimized checkout flows and fast mobile UX.",
              },
            },
          ],
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "18:30",
        },
      },

      // 3. WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://customwebsitedevelopment.in/#website",
        url: "https://customwebsitedevelopment.in",
        name: "Brandmingo Custom Website Development Noida",
        publisher: {
          "@id": "https://brandmingo.com/#organization",
        },
        inLanguage: "en-IN",
      },

      // 4. BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://customwebsitedevelopment.in/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://customwebsitedevelopment.in/",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
