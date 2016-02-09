const fs = require('fs')

const gitRevSync = require('git-rev-sync')
const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')
const htmlhint = require('gulp-htmlhint')
const htmlmin = require('gulp-htmlmin')
const plumber = require('gulp-plumber')
const sassLint = require('gulp-sass-lint')
const standard = require('gulp-standard')
const watch = require('gulp-watch')

const pkg = require('./package.json')

gulp.task('default', ['lint', 'watch'])
gulp.task('lint', ['standard', 'sass-lint'])

gulp.task('htmlhint', () => {
  return gulp.src('public/**/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter())
})

gulp.task('standard', () => {
  return gulp.src('app/**/*.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {
        breakOnError: true
    }));
})

gulp.task('sass-lint', () => {
  return gulp.src('app/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
})

gulp.task('watch', () => {
  gulp.src('public')
    .pipe(watch('public/**/*.html'))
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())

  gulp.src('app')
    .pipe(watch('app/**/*.js'))
    .pipe(plumber())
    .pipe(standard())
    .pipe(standard.reporter('default'))

  return gulp.src('app')
    .pipe(watch('app/**/*.scss'))
    .pipe(plumber())
    .pipe(sassLint())
    .pipe(sassLint.format());
})

gulp.task('minify', () => {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      preserveLineBreaks: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('deploy', () => {
  fs.openSync('public/.nojekyll', 'w')

  return gulp.src(['public/.nojekyll', 'public/**/*'])
    .pipe(ghPages({
      remoteUrl: `git@github.com:${pkg.repository}.git`,
      message: `Deploy ${gitRevSync.short()} from v${pkg.version}`
    }));
})
