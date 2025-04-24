// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.alphabinet.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/portfolio",
    "/blog",
    "/services/web-development",
    "/services/ui-ux-design",
    "/services/ecommerce",
    "/services/mobile-apps",
    "/services/digital-marketing",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
