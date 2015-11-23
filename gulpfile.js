'use strict';

var gulp = require('gulp'),
    config = require('./gulp.config'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concatJs = require('gulp-concat'),
    uglifyJs = require('gulp-uglify'),
    connect = require('gulp-connect');

//server connect
gulp.task('connect', function() {
    connect.server({
        root: config.paths.dist.serverRoot,
        livereload: true
    });
});

// css
gulp.task('libsCss', function () {
    return gulp.src(config.paths.src.styles.libs)
        .pipe(concatCss(config.paths.dist.styles.libs.file))
        .pipe(autoprefixer('last 100 versions', '> 1%', 'ie 9'))
        .pipe(minifyCss())
        .pipe(gulp.dest(config.paths.dist.styles.libs.dir))
        .pipe(notify('Done!'))
        .pipe(connect.reload());
});

gulp.task('appScss', function () {
    return gulp.src(config.paths.src.styles.app)
        //.pipe(concatCss(config.paths.dist.styles.app.file))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 100 versions', '> 1%', 'ie 9'))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.dist.styles.app.dir))
        .pipe(notify('Done!'))
        .pipe(connect.reload());
});

//img
gulp.task('appImg', function () {
    gulp.src(config.paths.src.img)
        .pipe(gulp.dest(config.paths.dist.img));
});

gulp.task('appFonts', function () {
    gulp.src(config.paths.src.fonts)
        .pipe(gulp.dest(config.paths.dist.fonts));
});

// js
gulp.task('libsJs', function() {
    return gulp.src(config.paths.src.scripts.libs)
        .pipe(concatJs(config.paths.dist.scripts.libs.file))
        .pipe(uglifyJs())
        .pipe(gulp.dest(config.paths.dist.scripts.libs.dir))
        .pipe(notify('Done!'))
        .pipe(connect.reload());
});

gulp.task('appJs', function() {
    return gulp.src(config.paths.src.scripts.app)
        .pipe(concatJs(config.paths.dist.scripts.app.file))
        .pipe(uglifyJs())
        .pipe(gulp.dest(config.paths.dist.scripts.app.dir))
        .pipe(notify('Done!'))
        .pipe(connect.reload());
});



// html
gulp.task('html', function () {
    gulp.src(config.paths.src.templates)
    .pipe(gulp.dest(config.paths.dist.templates.dir))
    .pipe(connect.reload());
});



// watch
gulp.task('watch', function () {
    gulp.watch([ config.paths.src.styles.appAll ],  ['appScss'] );
    gulp.watch([ config.paths.src.img ],  ['appImg'] );
    gulp.watch([ config.paths.src.fonts ],  ['appFonts'] );
    gulp.watch([ config.paths.src.scripts.app ], ['appJs']  );
    gulp.watch([ config.paths.src.templates  ],  ['html']   );
});



// default
gulp.task('default', ['connect', 'html', 'libsCss', 'appScss', 'libsJs', 'appJs', 'appImg', 'appFonts', 'watch']);