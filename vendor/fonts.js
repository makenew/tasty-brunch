'use strict'

window.WebFontConfig = {
  google: {
    families: [
      'Raleway',
      'Source Code Pro'
    ]
  }
};

;(function (d) {
  var version = '1.6.26'
  var el = d.createElement('script')
  var s = d.scripts[0]
  el.async = 1
  el.src = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/' + version +
           '/webfontloader.js'
  s.parentNode.insertBefore(el, s)
})(document)
