const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function dist() {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'css/styles.css',
  ])
    .pipe(concat('mobius.css'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
}

function dev() {
  browserSync.init({
    server: './',
  });

  gulp.watch('./css/*.css', gulp.series('dist'));
  gulp.watch('*.html').on('change', browserSync.reload);
}

exports.dist = dist
exports.dev = dev
