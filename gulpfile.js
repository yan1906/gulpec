var gulp = require('gulp'),
    includer = require('gulp-htmlincluder'),
    connect = require('gulp-connect');
var cssmin = require('gulp-cssmin');
var includeSources = require('gulp-include-source');

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});
 
gulp.task('min', function () {
    gulp.src('dev/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());
});



gulp.task('htmlIncluder', function() {
    gulp.src('dev/**/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('move', function() {
    gulp.src('dev/img/*.*')
        .pipe(includer())
        .pipe(gulp.dest('build/img'))
        .pipe(connect.reload());
});
 

gulp.task('watch', function () {
  gulp.watch(['dev/css/*.css'], ['min']);
  gulp.watch(['dev/**/*.html'], ['htmlIncluder']);
  gulp.watch(['dev/img/*.*'], ['move']);
  gulp.watch(['dev/js/*.*'], ['move']);
});

gulp.task('default',['connect','watch','min','htmlIncluder','move']);