import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "zh"],
  i18nextServer: {
    debug: true,
  },
};

export default config;
