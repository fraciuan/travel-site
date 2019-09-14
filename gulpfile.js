var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  console.log("Imagine Sass or PostCSS tasks running here.");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});

// gulp.task('watch', function(done) {
//     // initBrowser();
//     gulp.watch("./app/index.html", gulp.parallel('gulp-watch'));
//     // gulp.watch("**/*", {cwd: './dist/'}, gulp.parallel('live-server'));
//     // gulp.watch("scss/**/*.scss", gulp.parallel('css-compile'));
//     // gulp.watch(["dist/css/*.css", "!dist/css/*.min.css"], gulp.parallel('css-minify'));
//     // gulp.watch("js/**/*.js", gulp.parallel('js-build'));
//     // gulp.watch(["dist/js/*.js", "!dist/js/*.min.js"], gulp.parallel('js-minify'));
//     // gulp.watch("**/*", {cwd: './img/'}, gulp.parallel('img-compression'));
//   });

  