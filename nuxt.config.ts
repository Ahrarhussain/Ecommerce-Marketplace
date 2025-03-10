// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,

  modules: [
      'nuxt-icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/supabase'
  ],

  supabase:{
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
  },

  runtimeConfig: {
      public: {
        stripePk: process.env.STRIPE_PK_KEY
      }
  },

  app: {
      head: {
        script: [
          { src: 'https://js.stripe.com/v3/', defer: true }
        ],
      }
    },

  compatibilityDate: '2025-03-10'
})