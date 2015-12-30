var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var connect = require('gulp-connect');

var less_source = './less/**/*.less';
var less_out = './css'

gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
})

gulp.task('less', function () {
    try {

    return gulp.src(less_source)
        .pipe(
            less({
                paths: [ path.join(__dirname, 'less', 'includes') ],
                // sourceMap: { sourceMapRootPath: less_out }
            })
            .on('error', function(err){
                // gutil.log(err);
                console.error(err);
                this.emit('end');
            })

        )
        .pipe(gulp.dest(less_out))
        .pipe(connect.reload());
    } catch( e) {
        console.log ('has error');
    }
});

// Rerun the task when a file changes 
gulp.task('watch', function() {
    gulp.watch(less_source, ['less']);
});

 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['connect', 'watch']);

