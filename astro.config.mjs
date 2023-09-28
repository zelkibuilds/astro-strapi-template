import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: nodejs({
    mode: "standalone" // or 'standalone'
  }),
  integrations: [tailwind()]
});