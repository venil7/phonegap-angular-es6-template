var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  less = require('gulp-less'),
  connect = require('gulp-connect'),
  concat_css = require('gulp-concat-css');

var js_path = './www/js/**/*.js',
    js_dest = './www/dist/',
    js_name = 'app.min.js',
    css_path = './www/less/**/*.less',
    css_dest = './www/css',
    css_name = 'app.css';

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    livereload: true
  });
});

gulp.task('javascript', function () {
  return gulp.src(js_path)
    .pipe(babel())
    .on('error', swallowError)
    .pipe(concat(js_name))
    .pipe(uglify())
    .pipe(gulp.dest(js_dest))
    .pipe(connect.reload());
});

gulp.task('less', function () {
  return gulp.src(css_path)
    .pipe(less())
    .on('error', swallowError)
    .pipe(concat_css(css_name))
    .pipe(gulp.dest(css_dest))
    .pipe(connect.reload());
});

gulp.task('default', ['javascript', 'less']);

gulp.task('watch', function () {
  gulp.watch(js_path, ['javascript']);
  gulp.watch(css_path, ['less']);
});

gulp.task('dev', ['connect', 'default', 'watch']);
