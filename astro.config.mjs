// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/site.config.ts";
import { DIENSTEN } from "./src/data/diensten.ts";
import { ARTIKELEN } from "./src/data/artikelen.ts";

// Verborgen diensten en artikelen (dingen die Rens niet doet) zijn noindex: dan ook niet in de sitemap.
const VERBORGEN = [
  ...DIENSTEN.filter((d) => d.verborgen).map((d) => `/diensten/${d.slug}/`),
  ...ARTIKELEN.filter((a) => a.verborgen).map((a) => `/kennisbank/${a.slug}/`),
];

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap({
    // Advertentiepagina's (/ads/...) zijn alleen voor betaalde advertenties: noindex en niet in de sitemap.
    filter: (page) => !page.includes("/ads/") && !VERBORGEN.some((v) => page.endsWith(v)),
    serialize: (item) => ({ ...item, lastmod: new Date().toISOString(), changefreq: "monthly", priority: item.url === SITE.url + "/" || item.url === SITE.url ? 1.0 : 0.7 }),
  })],
  build: { inlineStylesheets: "auto" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
