const fs = require('fs')

const gitRevSync = require('git-rev-sync')
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

gulp.task('test', () => {
  return gulp.src('app/**/*.spec.js', {read: false})
    .pipe($.mocha({
      compilers: require('babel-core/register'),
      reporter: 'nyan'
    }))
})

gulp.task('autotest', () => {
  return gulp.watch('app/**/*.js', ['test'])
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

gulp.task('deploy', () => {
  fs.openSync('public/.nojekyll', 'w')

  return gulp.src(['public/.nojekyll', 'public/**/*'])
    .pipe($.ghPages({
      remoteUrl: `git@github.com:${pkg.repository}.git`,
      message: `Deploy ${gitRevSync.short()} from v${pkg.version}`
    }))
})
