const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('dist', () =>
  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'css/styles.css',
  ])
    .pipe(concat('mobius.css'))
    .pipe(gulp.dest('./')));

