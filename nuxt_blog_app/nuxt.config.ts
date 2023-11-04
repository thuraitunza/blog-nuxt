// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // publicRuntimeConfig: {
  //   BASE_URL: process.env.BASE_URL
  // },

  // runtimeConfig: {
  //   // Public keys that are exposed to the client
  //   public: {
  //     apiBase: process.env.BASE_URL
  //   }
  // },
  devtools: { enabled: true },
   modules: ['@nuxtjs/tailwindcss']

})
