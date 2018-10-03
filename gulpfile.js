//команда npm i установит все зависимости из package.json
//проект держать в папке src

var gulp = require('gulp');
var bs = require('browser-sync');
var concatCSS = require('gulp-concat-css');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var clean = require('gulp-clean');
var folder = '/www/lr131.ru/lesson_12/'

//Запуск стат.сервара -bs, предварительно скомпилировав sass
gulp.task('bs', ['sass'], function() {
    bs.init({
        server: "./src"
        });

 gulp.watch('src/sass/*.sass', ['sass']);
 gulp.watch("src/*.html").on('change', bs.reload);
    });

//компилируем sass в css
gulp.task('sass', function() {
    return gulp.src('src/sass/*.sass')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'))
        .pipe(bs.stream());
    });

//компилируем sass в css
gulp.task('mincss', function() {
    return gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'))
        .pipe(bs.stream());
    });


gulp.task('default', ['bs'])


gulp.task('clean-scripts', function () {
  return gulp.src('src/css/*.css', {read: false})
    .pipe(clean());
});

//передача по фтп
gulp.task( 'deploy', function () {
 
    var conn = ftp.create( {
        host:     '88.99.94.73',
        user:     'lr131107',
        password: 'jUmW35qaDL',
       // parallel: 10, //порты
        log:      gutil.log
    } );
 
    //var globs = [
    //   'src/**',
    //    'css/**',
    //    'js/**',
    //    'fonts/**',
    //    'index.html'
    //];
    var globs = [
        'src/css/**',
        'src/img/**',
        'src/index.html'
    ];
 
    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    //cwd

    return gulp.src( globs, { base: './src/', buffer: false } )
        .pipe( conn.newer( folder ) ) // only upload newer files
        .pipe( conn.dest( folder ) );
 
} );