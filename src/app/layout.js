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
  title: "Brandmingo | Custom Website Development Company in Noida | CRM, LMS & Full-Stack",
  description:
    "Premier custom website development company in Noida Sector 62. We build scalable custom web applications, enterprise CRM & LMS portals, and full-stack software using Next.js, React, Node.js, and Express.",
  keywords: [
    "custom website development company in noida",
    "custom web development noida",
    "crm development company noida",
    "lms portal development noida",
    "next js developers noida",
    "react js web development noida",
    "full stack development company delhi ncr",
    "node express developer noida",
    "custom software development sector 62 noida",
    "brandmingo custom development",
  ],
  authors: [{ name: "Brandmingo", url: "https://brandmingo.com" }],
  creator: "Brandmingo",
  publisher: "Brandmingo",
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
    title: "Brandmingo | Custom Website Development Company in Noida",
    description:
      "Enterprise custom websites, CRM platforms, and LMS portals built with Next.js, React & Node.js by Noida's top engineering team.",
    url: "https://customwebsitedevelopment.in/",
    siteName: "Brandmingo Custom Web",
    images: [
      {
        url: "/brandmingologo.png",
        width: 1000,
        height: 200,
        alt: "Brandmingo Custom Website Development Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandmingo | Custom Website Development in Noida",
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
        priceRange: "$$",
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
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "Country", name: "India" },
          { "@type": "AdministrativeArea", name: "Worldwide" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "18:30",
        },
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
