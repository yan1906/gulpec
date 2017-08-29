var gulp = require('gulp');
var cssmin = require('gulp-cssmin');

 
gulp.task('min', function () {
    gulp.src('dev/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});