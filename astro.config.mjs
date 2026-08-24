import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
 
export default defineConfig({
  site: 'https://ernestonunez.dev',
  output: 'server',
  // edgeMiddleware bundled the whole SSR app (including sharp, used by
  // Astro's image endpoint) into a single Vercel Edge Function. Edge
  // Runtime disallows dynamic WebAssembly.compile(), which sharp's WASM
  // fallback path triggers -- confirmed via production runtime error logs
  // (CompileError at middleware.mjs, route /_middleware, recurring since
  // 2026-06-16, well before this repo's git history starts). That crashed
  // the shared edge function outright for any request touching that path,
  // which is why /api/contact 404'd even though its own route/handler
  // code was correct. Running on the adapter's normal Node serverless
  // function instead avoids the WASM restriction entirely.
  adapter: vercel(),
});