// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString();

export async function GET() {
  const baseUrl = process.env.SITE_URL || "https://www.alphabinet.com";

  // Static routes with prioritized sections
  const routes = [
    {
      path: "",
      priority: "1.0",
      changefreq: "daily" as const,
      lastmod: buildDate
    },
    {
      path: "/privacy-policy",
      priority: "0.3",
      changefreq: "yearly" as const,
      lastmod: "2024-01-01" // Set to your actual last modified date
    },
    {
      path: "/terms-of-service",
      priority: "0.3",
      changefreq: "yearly" as const,
      lastmod: "2024-01-01"
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(({ path, priority, changefreq, lastmod }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}