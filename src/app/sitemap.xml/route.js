export const runtime = "edge"; // fast edge runtime

const SITE_URL = "https://signature.punjabland.ca";

// List of static pages
const staticPages = ["", "about", "menu", "contact"];

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
            .map((page) => {
                return `
          <url>
            <loc>${`${SITE_URL}/${page}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
            })
            .join("")}
  </urlset>
  `;
}

export async function GET() {
    const sitemap = generateSiteMap();
    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
