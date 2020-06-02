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
    'codemirror/lib/codemirror.css',
    // 'codemirror/theme/base16-light.css',
    'codemirror/theme/idea.css',

  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  plugins: [
    '@/plugins/vuex-orm-axios',
    {src: '~plugins/nuxt-code-mirror-plugin', ssr: false}
  ],
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
        access_type: 'offline',
        access_token_endpoint: 'https://zoom.us/oauth/token',
        scope: 'user:read',
        response_type: 'code',
        token_type: 'Bearer',
        redirect_uri: 'http://89c268524dda.ngrok.io',
        client_id: '9VOpD0zSSS2CoDAsbZxFTA',
        token_key: 'access_token',
        state: 'UNIQUE_AND_NON_GUESSABLE'
      }
    }
  }
}
