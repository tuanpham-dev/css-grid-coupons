const gulp = require('gulp')
const del = require('del')

require('./gulp-tasks/assets')
require('./gulp-tasks/pug')
require('./gulp-tasks/sass')
require('./gulp-tasks/server')

gulp.task('clean', () => {
	return del('dist/**/*.*')
})

gulp.task('build', gulp.series('clean', gulp.parallel('assets', 'pug', 'sass')))

gulp.task('dev', gulp.series(
	gulp.parallel('pug:dev', 'sass:dev'),
	gulp.parallel('pug:watch', 'sass:watch', 'server:init')
))

gulp.task('default', gulp.series('dev'))
