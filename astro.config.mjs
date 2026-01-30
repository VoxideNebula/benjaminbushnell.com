// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap(), react()],
  site: "https://www.benjaminbushnell.com",
  base: '/',
  redirects: {
    '/blog': '/blog/1',
    '/tags/:tag': '/tags/:tag/1',
  }
});
