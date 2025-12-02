import { defineMiddleware } from "astro:middleware";
import { defaultLang, supportedLangs } from "./i18n/ui";

export const onRequest = defineMiddleware((context, next) => {
  const { request, url } = context;
  const pathname = url.pathname;

  // Skip assets and API
  if (pathname.startsWith("/favicon") || pathname.includes(".")) {
    return next();
  }

  // Extract /lang
  const currentLang = pathname.split("/")[1];

  // If URL already starts with supported lang → continue normally
  if (supportedLangs.includes(currentLang)) {
    return next();
  }

  // Detect browser language
  const browserLang = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.slice(0, 2) ?? defaultLang;

  const lang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;

  // Redirect ONLY root or invalid routes
  return context.redirect(`/${lang}${pathname}`);
});
