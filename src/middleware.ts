// src/middleware.ts
import type { MiddlewareHandler } from "astro";
import { defaultLang, supportedLangs } from "./i18n/ui";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, request, redirect } = context;

  const pathname = url.pathname;

  // Ignore assets or special routes
  if (
    pathname.startsWith("/assets") ||
    pathname.startsWith("/public") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return next();
  }

  // Extract current language prefix
  const currentLang = pathname.split("/")[1];

  // If the language is already in the URL → continue normally
  if (supportedLangs.includes(currentLang)) {
    return next();
  }

  // Detect browser language
  const browserLang =
    request.headers.get("accept-language")?.split(",")[0]?.slice(0, 2) ??
    defaultLang;

  const lang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;

  // Redirect to proper language path
  return redirect(`/${lang}${pathname}`);
};
