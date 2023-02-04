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
    // resolveUrl: (url) => {
    //   if (url.hostname.includes("google-analytics")) {
    //     const proxyUrl = new URL(Astro.url + "/partytown");
    //     proxyUrl.searchParams.append("url", url.href);
    //     return proxyUrl;
    //   }
    //   return url;
    // },
    forward: ["dataLayer.push"]
  })],
  output: "server",
  adapter: netlify()
});