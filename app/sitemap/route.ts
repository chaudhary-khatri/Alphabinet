import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://alphabinet.com";

  // Define routes with optional custom priorities and changefreqs
  const staticRoutes = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "/about", priority: "0.8", changefreq: "monthly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
    { path: "/services", priority: "0.8", changefreq: "monthly" },
    { path: "/portfolio", priority: "0.7", changefreq: "monthly" },
    { path: "/blog", priority: "0.7", changefreq: "weekly" },
    { path: "/services/web-development", priority: "0.6", changefreq: "monthly" },
    { path: "/services/ui-ux-design", priority: "0.6", changefreq: "monthly" },
    { path: "/services/ecommerce", priority: "0.6", changefreq: "monthly" },
    { path: "/services/mobile-apps", priority: "0.6", changefreq: "monthly" },
    { path: "/services/digital-marketing", priority: "0.6", changefreq: "monthly" },
    { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
    { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
  ];

  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
