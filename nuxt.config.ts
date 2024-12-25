// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  router: {
    options: {
      hashMode: true,
    },
  },
  components: [
    {
      path: '~/components', // auto-imports components nested in /components/*
      pathPrefix: false,
    },
  ],
  modules: ['@pinia/nuxt'],
})

