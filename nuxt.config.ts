// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      baseApi: process.env.NUXT_BASE_API_URL,
    },
  },

  // devServer: {
  //   host: '0.0.0.0'
  // },

  modules: ["vue3-carousel-nuxt", '@nuxt/ui'],

  colorMode: {
    preference: 'light'
  }
})