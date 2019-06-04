const gulp = require('gulp')
const beautify = require('gulp-jsbeautifier')
const merge = require('merge-stream')

gulp.task('assets', () => {
	return merge(
		gulp.src('images/**/*.(svg|png|jpg|jpeg)')
			.pipe(gulp.dest('dist/images')),
		gulp.src('src/js/**/*.js')
			.pipe(beautify({
				indent_with_tabs: true,
				indent_size: 4
			}))
			.pipe(gulp.dest('dist/js'))
	)
})

