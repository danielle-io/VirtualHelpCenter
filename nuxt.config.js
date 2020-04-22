module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'VirtualHelp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/stylesheet.css',
    '~/assets/css/background.css',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Add axios globally
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000/api'
  },
  build: {
    // vendor: ['axios'],
    // vendor: ['@nuxtjs/dotenv'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/server.js'

  ]
}
