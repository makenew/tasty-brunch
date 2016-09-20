exports.config = {
  npm: {
    styles: {
      'sanitize.css': ['sanitize.css']
    }
  },

  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^vendor/
      },
      entryPoints: {
        'app/index.js': 'app.js'
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')
      ]
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              urlprefix () {
                const url = process.env.DOMAIN || 'makenew.github.io'
                const baseurl = typeof process.env.BASEURL === 'string'
                  ? process.env.BASEURL
                  : '/tasty-brunch'
                return `https://${url}${baseurl}`
              },
              join (context, block) {
                return context.join(block.hash.delimiter)
              },
              updated_time () {
                return new Date().toISOString()
              }
            }
          }
        })
      ]
    }
  }
}
