import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
 
export default defineConfig({
  output: 'static',
  adapter: vercelServerless({
    edgeMiddleware: true,
  }),
});