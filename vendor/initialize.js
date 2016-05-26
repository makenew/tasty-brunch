'use strict'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.className = 'js'
    require('index.js').default()
  })
}
