import { citiesData } from "../data/citiesData.js";

export default function sitemap() {
  const baseUrl = "https://customwebsitedevelopment.in";
  const currentDate = new Date().toISOString().split("T")[0];

  // 1. Core Homepage
  const mainRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // 2. City-Targeted Landing Pages (Full keyword slugs & short slugs for Google Search Console)
  const cityRoutes = [];

  citiesData.forEach((city) => {
    // Primary SEO Keyword URL (e.g., /custom-website-development-in-noida)
    cityRoutes.push({
      url: `${baseUrl}/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Short Friendly URL (e.g., /noida)
    cityRoutes.push({
      url: `${baseUrl}/${city.shortSlug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  return [...mainRoutes, ...cityRoutes];
}
