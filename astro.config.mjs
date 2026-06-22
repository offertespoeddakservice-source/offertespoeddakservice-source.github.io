// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/site.config.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap({ serialize: (item) => ({ ...item, lastmod: new Date().toISOString(), changefreq: "monthly", priority: item.url === SITE.url + "/" || item.url === SITE.url ? 1.0 : 0.7 }) })],
  build: { inlineStylesheets: "auto" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
