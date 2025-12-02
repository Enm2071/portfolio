// // src/middleware.ts
// import { defineMiddleware } from "astro:middleware";
// import { defaultLang, supportedLangs } from "./i18n/ui";

// export const onRequest = defineMiddleware(({ request, redirect, url }, next) => {
//   const { pathname } = url;

//   // Detect current language from URL
//   const currentLang = pathname.split("/")[1];

//   // If the URL already includes a supported lang (/es, /en), continue normally
//   if (supportedLangs.includes(currentLang)) {
//     return next();
//   }

//   // Detect browser language
//   const browserLang =
//     request.headers.get("accept-language")?.split(",")[0]?.slice(0, 2) ??
//     defaultLang;

//   // Choose valid language
//   const lang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;

//   // Redirect user to /lang if missing
//   return redirect(`/${lang}${pathname}`);
// });

export const config = {
  runtime: 'nodejs', // optional: use 'nodejs' or omit for 'edge' (default)
};
 
export default function middleware(request: Request) {
  const url = new URL(request.url);
 
  // Redirect old blog path to new one
  return new Response(null, {
    status: 301,
    headers: {
      Location: `${url.origin}/es`,
    },
  });
}