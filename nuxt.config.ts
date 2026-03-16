// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: 'app-icon',
        dir: './app/assets/icons'
      }
    ]
  },
  modules: ['@nuxt/fonts', '@nuxt/eslint', '@nuxt/icon'],
})