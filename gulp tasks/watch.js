var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function() {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	})
	
	watch('./docs/index.html', function() {
		browserSync.reload();
	});
	
	watch('./docs/CSS/**/*.css', function() {
		return gulp.src('./docs/CSS/Main.css')
			.pipe(browserSync.stream());
	});
	
	watch('./docs/JS/script.js', function() {
		browserSync.reload();
	});
});

