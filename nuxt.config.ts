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
  app: {
    head: {
      title: 'Магазин Shoppe',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'manifest',
          crossorigin: 'anonymous',
          href: '/manifest.webmanifest'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
        }
      ]
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
  modules: [
    // '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
})
