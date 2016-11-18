exports.config = {
  hot: true,

  conventions: {
    ignored: [
      /[\\/]_/,
      /\.spec\.js$/
    ]
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  overrides: {
    production: {
      files: {
        javascripts: {
          joinTo: {
            'vendor.js': /^vendor/
          },
          entryPoints: {
            'app/index.js': 'app.js'
          }
        }
      }
    }
  },

  plugins: {
    postcss: {
      processors: [
        require('postcss-import')(),
        require('postcss-cssnext')()
      ]
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              production () {
                return process.env.NODE_ENV === 'production'
              },
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
