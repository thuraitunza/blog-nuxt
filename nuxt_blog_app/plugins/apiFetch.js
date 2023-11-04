import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(nuxtApp => {

    // const config = useRuntimeConfig()
    nuxtApp.provide('apiFetch', $fetch.create({baseURL: 'http://nuxt-3-blog-laravel.test'}));
})
  