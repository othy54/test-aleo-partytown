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
    resolveUrl: function (url, type) {
      if (type === 'script') {
        var proxyUrl = new URL('https://statuesque-duckanoo-44443f.netlify.app/proxytown/');
        proxyUrl.searchParams.append('url', url.href);
        return proxyUrl;
      }
      return url;
    },
  })],
  output: "server",
  adapter: netlify()
});