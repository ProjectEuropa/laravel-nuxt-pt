const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
   server: {
      // nuxt.js server options ( can be overrided by environment variables )
      port: 8000,
      host: '0.0.0.0',
    },
    modules: [],
    plugins: [],
    // nuxt.js server options ( can be overrided by environment variables )

});