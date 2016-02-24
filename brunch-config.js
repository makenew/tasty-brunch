exports.config = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app\/styles/
      }
    }
  },

  overrides: {
    production: {
      plugins: {
        postcss: {
          processors: [
            require('autoprefixer'),
            require('cssnano')
          ]
        }
      }
    }
  },

  plugins: {
    digest: {
      prependHost: {
        production: '/tasty-brunch'
      },
      referenceFiles: /\.(css|html|js)$/
    },

    postcss: {
      processors: [
        require('autoprefixer')
      ]
    },

    sass: {
      options: {
        includePaths: ['node_modules']
      }
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
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
