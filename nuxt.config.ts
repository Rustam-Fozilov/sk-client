// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      baseApiUrl: process.env.NUXT_BASE_API_URL,
    },
  },

  modules: ["vue3-carousel-nuxt", '@nuxt/ui'],
  devServer: {
    host: '0.0.0.0'
  },

  colorMode: {
    preference: 'light'
  },
});