//Need to include gulp
var gulp = require('gulp');

//Need to include plugins
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var minifyhtml = require('gulp-minify-html');
var minifycss = require('gulp-minify-css');
var imageopt = require('gulp-image-optimization');
var del = require('del');

//lint the JS
gulp.task('lint', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(notify({ message: 'finished with lint task'}));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(rename({dirname: 'js', suffix: '.min'}))
		.pipe(uglify().on('error', gutil.log))
		.pipe(gulp.dest('build'))
		.pipe(notify({ message: 'finished with scripts task'}));
});

//Minify the html
gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(replace(/css\/([a-zA-Z0-9\-]+).css/g,'css/$1.min.css'))
		.pipe(replace(/styles\/([a-zA-Z0-9\-]+).css/g,'styles/$1.min.css'))
		.pipe(replace(/js\/([a-zA-Z0-9\-]+).js/g,'js/$1.min.js'))
		.pipe(replace(/js\/([a-zA-Z0-9\-\/]+)\/([a-zA-Z0-9\-]+).js/g,'js/$2.min.js'))
		.pipe(minifyhtml())
		.pipe(gulp.dest('build'))
		.pipe(notify({ message: 'finished with html task'}));
});

//Minify the css
gulp.task('styles', function() {
	return gulp.src('src/styles/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('build/styles'))
		.pipe(notify({ message: 'finished with styles task'}));
});

//Compress the images
gulp.task('images', function() {
	return gulp.src(['src/images/*.jpg','src/images/*.png'])
		.pipe(imageopt({optimizationLevel: 5, progressive: true, interlaced: true}).on('error', gutil.log))
		.pipe(gulp.dest('build/images'))
		.pipe(notify({ message: 'Finished with images task'}));
});

//Clean out build folder in preparation for a new build
gulp.task('clean', function(cb) {
	del(['build'], cb);
});

gulp.task('default', ['clean'], function() {
	console.log("Gulp!!!");
	gulp.start('lint','html','styles','scripts','images');
});

