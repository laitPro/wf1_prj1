var gulp = require('gulp'),
	t = require('browser-sync').create();


gulp.task('browser-sync', function() {
    t.init({
    	proxy: "wf1"
    });
});

gulp.task('watch', function () {
	gulp.watch(['app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
		]).on('change', t.reload);
})
gulp.task('default', ['browser-sync','watch'], function () {
    
});
