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
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],
  plugins: ['@/plugins/vuex-orm-axios'],
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

  ],
  auth: {
    strategies: {
      social: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://zoom.us/oauth/authorize',
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: ['openid', 'profile', 'email'],
        access_type: undefined,
        access_token_endpoint: undefined,
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: undefined,
        client_id: 'l3Z72uLFSgu6qM2dZbmsHg',
        token_key: 'XFihIkVNtyjBOauY2BZR4m8VktswyHQq',
        state: 'UNIQUE_AND_NON_GUESSABLE'
      },
      google: {
        client_id:
          '396523054692-rir1711ti5ev95spurdru2buahnqq532.apps.googleusercontent.com'
      },
    }
  }
}
