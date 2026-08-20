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

const STATIC_PATHS = ["", "/about"];

export const GET: APIRoute = () => {
  const urls: string[] = [];

  for (const lang of supportedLangs) {
    for (const path of STATIC_PATHS) {
      urls.push(`/${lang}${path}`);
    }
    for (const project of projects) {
      urls.push(`/${lang}/projects/${project.slug}`);
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((url) => {
    // Every page has an es/ and en/ twin at the same trailing path --
    // surface that to crawlers directly on each <url> entry so they
    // don't index the two locales as duplicate content.
    const rest = url.replace(/^\/(es|en)/, "");
    return `  <url>
    <loc>${SITE}${url}</loc>
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
