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
<<<<<<< HEAD
  buildModules: [
  	'@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/auth',
  ],
=======
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],
  plugins: ['@/plugins/vuex-orm-axios'],
>>>>>>> master
  /*
  ** Add axios globally
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000/api'
  },
  render: {
    // working:
    injectScripts: process.env.NODE_ENV === 'development'

    // HMR not working:
    // injectScripts: false,
  },
  build: {
<<<<<<< HEAD
    vendor: ['axios', '@nuxtjs/dotenv'],
=======
    // vendor: ['axios'],
    // vendor: ['@nuxtjs/dotenv'],
>>>>>>> master
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && process.isClient) {
        config.module.rules.push({
          fs: 'empty',
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
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/sessions', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/api/sessions/user', method: 'get', propertyName: 'data.attributes' }
        },
        // tokenRequired: true,
        tokenType: '',
      },
    },
    redirect: {
      home: false,
      callback: false,
      logout: false
    }
  },
}
