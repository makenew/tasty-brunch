'use strict'

const fs = require('fs')
const path = require('path')

const gitRevSync = require('git-rev-sync')
const ghpages = require('gh-pages')
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

const pkg = require('./package.json')

gulp.task('default', ['lint', 'watch'])
gulp.task('lint', ['standard', 'sass-lint'])

gulp.task('htmlhint', () => {
  return gulp.src('public/**/*.html')
    .pipe($.htmlhint())
    .pipe($.htmlhint.failReporter())
})

gulp.task('standard', () => {
  return gulp.src('app/**/*.js')
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('sass-lint', () => {
  return gulp.src('app/**/*.scss')
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
})

gulp.task('watch', () => {
  gulp.src('public/**/*.html')
    .pipe($.watch('public/**/*.html'))
    .pipe($.plumber())
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())

  gulp.src('app/**/*.js')
    .pipe($.watch('app/**/*.js'))
    .pipe($.plumber())
    .pipe($.standard())
    .pipe($.standard.reporter('default'))

  return gulp.src('app/*/**/.scss')
    .pipe($.watch('app/**/*.scss'))
    .pipe($.plumber())
    .pipe($.sassLint())
    .pipe($.sassLint.format())
})

gulp.task('minify', () => {
  return gulp.src('public/**/*.html')
    .pipe($.htmlmin({
      collapseWhitespace: true,
      preserveLineBreaks: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('deploy', (done) => {
  fs.openSync(path.join('public', '.nojekyll'), 'w')

  return ghpages.publish(path.join(__dirname, 'public'), {
    clone: '.deploy',
    depth: 2,
    dotfiles: true,
    message: `Deploy ${gitRevSync.short()} from v${pkg.version} [ci skip]`,
    repo: process.env.DEPLOY_REPO || `git@github.com:${pkg.repository}.git`,
    branch: process.env.DEPLOY_BRANCH || 'gh-pages',
    logger: (message) => { console.log(`[ deploy ] ${message}`) },
    user: {
      name: process.env.DEPLOY_NAME || pkg.author.name,
      email: process.env.DEPLOY_EMAIL || pkg.author.email
    }
  }, done)
})
