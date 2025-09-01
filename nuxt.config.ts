// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: "cs",
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-viewport",
    "nuxt-jsonld"
  ],
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },

    defaultBreakpoints: {
      desktop: "lg",
      mobile: "xs",
      tablet: "md",
    },

    fallbackBreakpoint: "lg",
  },
});
