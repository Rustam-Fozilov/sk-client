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
      baseApiUrl: process.env.NUXT_BASE_API_URL ? process.env.NUXT_BASE_API_URL : 'https://api.surish-kerak.uz',
    },
  },

  modules: ["vue3-carousel-nuxt", '@nuxt/ui'],

  colorMode: {
    preference: 'light'
  },
});