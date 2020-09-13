const gulp = require('gulp');

module.exports = function html() {
  return gulp.src('source/static/styles/**/*.css')
    .pipe(gulp.dest('build/static/css'))
};