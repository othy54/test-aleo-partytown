import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), partytown({
    config: {
      debug: true,
      forward: ["dataLayer.push"]
    }
  })],
  output: "server",
  adapter: netlify()
});