const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Compile SCSS to CSS
gulp.task('scss', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./src/dist/css'));
});

// Watch for changes and recompile
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
});

// Default task
gulp.task('default', gulp.series('scss', 'watch'));