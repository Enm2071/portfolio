import type { APIRoute } from "astro";
import { supportedLangs } from "../i18n/ui";
import { projects } from "../data/projects";

// Hand-written rather than @astrojs/sitemap: this site runs in `server`
// output with a dynamic [slug] route for project detail pages, which
// sitemap auto-discovery (built around prerendered/static routes) won't
// reliably pick up. src/data/projects.ts is already the single source of
// truth for every real slug, so listing routes explicitly here is both
// simpler and guaranteed-complete instead of hoping a scanner finds them.
const SITE = "https://ernestonunez.dev";

// priority/changefreq are relative signals, not requests -- home is the
// most-linked, most-frequently-updated page, project details are the least
// (each one is written once and rarely touched again after publishing).
const STATIC_PATHS: { path: string; priority: string; changefreq: string }[] = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
];

export const GET: APIRoute = () => {
  const urls: { loc: string; priority: string; changefreq: string }[] = [];
  const lastmod = new Date().toISOString().slice(0, 10);

  for (const lang of supportedLangs) {
    for (const { path, priority, changefreq } of STATIC_PATHS) {
      urls.push({ loc: `/${lang}${path}`, priority, changefreq });
    }
    for (const project of projects) {
      urls.push({ loc: `/${lang}/projects/${project.slug}`, priority: "0.6", changefreq: "monthly" });
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(({ loc, priority, changefreq }) => {
    // Every page has an es/ and en/ twin at the same trailing path --
    // surface that to crawlers directly on each <url> entry so they
    // don't index the two locales as duplicate content.
    const rest = loc.replace(/^\/(es|en)/, "");
    return `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${supportedLangs.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}/${lang}${rest}" />`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/es${rest}" />
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
