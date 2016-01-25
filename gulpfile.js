var gulp = require('gulp'),
	t = require('browser-sync');


gulp.task('browser-sync', function() {
    t({
    	port: 9000,
        server: {
            baseDir: "app"
        }
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
