// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  components: {
    "dirs": [
      {
        "path": "~/components", 
        "global": true,
        pathPrefix: false,
        preload: true,
      }
      
    ]
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-swiper',
    "shadcn-nuxt",
    'nuxt-highcharts',
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'vue',
      ]
    },
    navigation: {
      fields: ['author', 'subject', 'position']
    }
  },
  runtimeConfig: {
    private: {
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      db: process.env.DATABASE_URL,
    },
    public: {
      GHL_API_KEY: process.env.GHL_API_KEY,
      appDomain: process.env.APP_DOMAIN,
      gitHash: process.env.GITHUB_SHA,
      releaseVersion: process.env.RELEASE_VERSION,
    }
  },
  experimental: {
    writeEarlyHints: false,
  },
  nitro: {
    routeRules: {
      '/api/**': {
        middleware: 'auth-server',
      },
    },
  },
  image: {
    // IPX options
    ipx: {
      // Specify IPX options here
      // For example:
      // domains: ['example.com'],
      // dir: '/path/to/cache',
      // sharp: {},
      // headers: {}
    },
  },
  site: {
    url: 'https://goodtimetravelsc.com',
    name: 'Amerus Financial',
    description: 'Welcome to Amerus Financial!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    // indexable: false
  },
  robots: {
    enabled: true,
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Good Times Travel ',
      url: 'https://goodtimetravelsc.com',
      logo: 'https://goodtimetravelsc.com/_vercel/image?url=%2Fimg%2Flogo_white.png&w=320&q=80'
    }
  },
  generate: {
    // Specify the routes to generate statically
    // routes: ['/about-us', '/get-started'],
    // Optionally, you can define a function to dynamically generate routes
    // routes: async () => {
    //   // Fetch routes from an API or database
    //   const routes = await fetchRoutes();
    //   return routes;
    // },
  },
  nitro: {
    compressPublicAssets: true,
  },
})