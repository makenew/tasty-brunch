'use strict'

const fs = require('fs')
const path = require('path')

const del = require('del')
const gitRevSync = require('git-rev-sync')
const ghpages = require('gh-pages')
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

const pkg = require('./package.json')

let paths = {
  src: 'app',
  dist: 'public',
  build: 'build'
}

paths = Object.assign(paths, {
  html: `${paths.dist}/**/*.html`,
  images: `${paths.dist}/**/*.{gif,jpg,png}`,
  scripts: `${paths.src}/**/*.js`,
  styles: `${paths.src}/**/*.scss`
})

const builds = {
  client: `${paths.build}/client`
}

gulp.task('default', [
  'lint',
  'watch'
])

gulp.task('lint', [
  'sass-lint',
  'standard'
])

gulp.task('minify', [
  'htmlmin',
  'imagemin'
])

gulp.task('watch', [
  'watch:html',
  'watch:scripts',
  'watch:styles'
])

gulp.task('clean', () => (
  del([
    paths.build,
    paths.dist
  ])
))

gulp.task('htmlhint', () => (
  gulp.src(paths.html)
    .pipe($.htmlhint())
    .pipe($.htmlhint.failReporter())
))

gulp.task('standard', () => (
  gulp.src(paths.scripts)
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
))

gulp.task('sass-lint', () => (
  gulp.src(paths.styles)
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
))

gulp.task('watch:html', () => (
  gulp.src(paths.html)
    .pipe($.watch(paths.html))
    .pipe($.plumber())
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())
))

gulp.task('watch:scripts', () => (
  gulp.src(paths.scripts)
    .pipe($.watch(paths.scripts))
    .pipe($.plumber())
    .pipe($.standard())
    .pipe($.standard.reporter('default'))
))

gulp.task('watch:styles', () => (
  gulp.src(paths.styles)
    .pipe($.watch(paths.styles))
    .pipe($.plumber())
    .pipe($.sassLint())
    .pipe($.sassLint.format())
))

gulp.task('imagemin', () => (
  gulp.src(paths.images)
    .pipe($.imagemin())
    .pipe(gulp.dest(paths.dist))
))

gulp.task('htmlmin', () => (
  gulp.src(paths.html)
    .pipe($.htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      preserveLineBreaks: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(paths.dist))
))

gulp.task('rev', () => {
  const dontRev = [
    '404.html',
    'index.html',
    'humans.txt',
    'robots.txt',
    'crossdomain.xml',
    'image.png'
  ]

  const revAll = new $.revAll({ // eslint-disable-line new-cap
    prefix: '/tasty-brunch',
    dontRenameFile: dontRev,
    dontUpdateReference: dontRev
  })

  return gulp.src(`${paths.dist}/**`)
    .pipe(revAll.revision())
    .pipe(gulp.dest(builds.client))
})

gulp.task('deploy', ['rev'], (done) => {
  fs.openSync(path.join(builds.client, '.nojekyll'), 'w')

  return ghpages.publish(builds.client, {
    clone: '.deploy',
    depth: 2,
    dotfiles: true,
    message: `Deploy ${gitRevSync.short()} from v${pkg.version} [ci skip]`,
    repo: process.env.DEPLOY_REPO || `git@github.com:${pkg.repository}.git`,
    branch: process.env.DEPLOY_BRANCH || 'gh-pages',
    logger: (message) => {
      console.log(`[ deploy ] ${message}`)
    },
    user: {
      name: process.env.DEPLOY_NAME || pkg.author.name,
      email: process.env.DEPLOY_EMAIL || pkg.author.email
    }
  }, done)
})
