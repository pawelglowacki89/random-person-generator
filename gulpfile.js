var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("style/sass/*.sass", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    });

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("style/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("style/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);