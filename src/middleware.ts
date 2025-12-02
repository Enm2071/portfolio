import type { MiddlewareHandler } from "astro";
import { defaultLang, supportedLangs } from "./i18n/ui";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request, redirect, url } = context;

  const pathname = url.pathname;
  const currentLang = pathname.split("/")[1];

  if (supportedLangs.includes(currentLang)) {
    return next();
  }

  const browserLang =
    request.headers.get("accept-language")?.split(",")[0]?.slice(0, 2) ??
    defaultLang;

  const lang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;

  return redirect(`/${lang}${pathname}`, 301);
};
