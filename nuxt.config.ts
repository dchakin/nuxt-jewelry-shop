// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: "",
      imageUrl: "",
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'app-icon',
        dir: './app/assets/icons'
      }
    ]
  },
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' }
      ]
    }
  },
  modules: ['@nuxt/fonts', '@nuxt/eslint', '@nuxt/icon'],
})
