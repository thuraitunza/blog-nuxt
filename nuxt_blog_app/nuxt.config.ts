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

  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  
  devtools: { enabled: true },
   modules: ['@nuxtjs/tailwindcss']

})
