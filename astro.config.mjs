import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: nodejs({
    mode: "standalone", // or 'standalone'
  }),
  //TODO: swap for our own domain
  // Sitemap is generated on build time. See https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
  site: "https://marisavieira.yoga",

  trailingSlash: "always",
  integrations: [tailwind(), react(), sitemap()],
});
