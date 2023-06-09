import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://aidbodev.com',
  integrations: [astroI18next(), sitemap({
    i18n: {
      defaultLocale: 'en',   // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        en: 'en-US',         // The `defaultLocale` value must present in `locales` keys
        zh: 'zh-CN',
      },
    },
  })]
});
