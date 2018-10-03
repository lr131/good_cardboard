//команда npm i установит все зависимости из package.json
//проект держать в папке src

'use strict';

var gulp = require('gulp'),
 autoprefixer = require('gulp-autoprefixer'),
 concat = require('gulp-concat'),
 concatCss = require('gulp-concat-css'),
 ftp = require( 'vinyl-ftp' ),
 gutil = require( 'gulp-util' ),
 minify = require('gulp-clean-css'),
 bs = require('browser-sync').create(),
 htmlclean = require('gulp-htmlclean'),
 sass = require('gulp-sass'),
 config = {
  path: {
   sass: '.src/sass/**/*.sass',
   html: '.src/index.html'
  },
  output: {}
 }

var folder = '/www/lr131.ru/lesson_12/'


//Таски наблюдающие и компилирующие sass файлы
gulp.task('sass', function() {
 return gulp.src('src/sass/*.sass')
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('src/css'))
  .pipe(bs.stream());
});

gulp.task('sass:watch', function() {
 gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('server', ['sass'], function() {
 bs.init({
  server: {
   baseDir: "./src/"
  },
  notify: false
 });
 gulp.watch('src/sass/*.sass', ['sass']);
 gulp.watch("src/*.html").on('change', bs.reload);
})

gulp.task('default', ['server']);

//передача по фтп
gulp.task( 'deploy', function () {
 
    var conn = ftp.create( {
        host:     '88.99.94.73',
        user:     'lr131107',
        password: 'jUmW35qaDL',
        log:      gutil.log
    } );
 
    var globs = [
        'src/css/**',
        'src/img/**',
        'src/index.html',
        'robots.txt'
    ];
 
    return gulp.src( globs, { base: './src/', buffer: false } )
        .pipe( conn.newer( folder ) ) // only upload newer files
        .pipe( conn.dest( folder ) );
 
} );