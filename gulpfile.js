const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

gulp.task('dist', () => {
  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'css/styles.css',
  ])
    .pipe(concat('mobius.css'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('dev', () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('./css/*.css', ['dist']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['dev']);
