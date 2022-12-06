export default defineNuxtConfig({
  public: "/public",
  modules: ['nuxt-graphql-client'],
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: process.env.CRYTALLIZE_CATALOGUE_DOMAIN,
            headers: {
              'X-Crystallize-Static-Auth-Token': process.env.CRYTALLIZE_STOREFRONT_TOKEN,
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers":
                  "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            corsOptions: {
              mode: "same-origin",
              credentials: "same-origin",
              'Access-Control-Allow-Origin': '*'
            },
            retainToken: true
          },
          orders: {
            host: process.env.CRYTALLIZE_ORDER_DOMAIN,
            headers: {
              'X-Crystallize-Access-Token-Id': process.env.CRYSTALLIZE_ACCESS_TOKEN_ID,
              'X-Crystallize-Access-Token-Secret': process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET,
              'X-Crystallize-Static-Auth-Token': process.env.CRYTALLIZE_STOREFRONT_TOKEN,
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers":
               "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            corsOptions: {
              mode: "same-origin",
              credentials: "same-origin",
              'Access-Control-Allow-Origin': '*'
            },
            credentials: "same-origin",
            retainToken: true
          }
        }
      }
    }
  },
  app: {
    head: {
      script: [
        {type: 'text/javascript', src: '/js/jquery-3.2.1.min.js'},
        {type: 'text/javascript', src: '/js/jquery-migrate-3.0.0.js'},
        {type: 'text/javascript', src: '/js/popper.min.js'},
        {type: 'text/javascript', src: '/js/bootstrap.min.js'},
        {type: 'text/javascript', src: '/js/owl.carousel.min.js'},
        {type: 'text/javascript', src: '/js/jquery.waypoints.min.js'},
        {type: 'text/javascript', src: '/js/jquery.stellar.min.js'},
        {type: 'text/javascript', src: '/js/main.js'},
      ],
      link: [
        { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap.css' },
        { rel: 'stylesheet', href: '/fonts/ionicons/css/ionicons.min.css' },
        { rel: 'stylesheet', href: '/fonts/fontawesome/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: '/fonts/flaticon/font/flaticon.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' }
      ]
    }
  }


})
