const gulp = require('gulp');
const gutil = require('gulp-util');
const mocha = require('gulp-mocha');
const babel = require('babel-core/register');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const exec = require('child_process').exec;
const cssBeautify = require('gulp-cssbeautify');
const cssComb = require('gulp-csscomb');
const imagemin = require('gulp-imagemin');
const zip = require('gulp-zip');

/* Tasks */

gulp.task('default', () => {
  gutil.log('Gulp is working fine');
});

gulp.task('advice:server', () => {
  gutil.log('Run', gutil.colors.red('npm run server'), 'to start the application');
});

// Bundle

gulp.task('bundle:js', () => {
  gutil.log('Starting bundle js files task');
  return exec('npm run bundle:js');
});

gulp.task('bundle:scss', () => {
  gutil.log('Starting bundle scss files task');
  return gulp.src('./assets/stylesheets/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssBeautify({
    indent: '  ',
    openbrace: 'separate-line',
    autosemicolon: true
  }))
  .pipe(autoprefixer({
    browsers: [
      '> 5%',
      'IE 7',
      'last 5 versions'
    ],
    cascade: false
  }))
  .pipe(cssComb())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./build/'));
});

// Watchers

gulp.task('watch:scss', () => {
  gutil.log('Starting gulp scss bundle watcher');
  gulp.watch('assets/stylesheets/**/*.scss', ['bundle:scss']);
});

gulp.task('bdd', () => {
  gutil.log('Starting gulp bdd watcher');
  gulp.watch(['app/**/*.*', 'specs/**/*.*'], ['run:test']);
});

// Build

gulp.task('run:build', ['build:js', 'build:scss'], () => {
  gutil.log('Build assets complete');
});

gulp.task('build:js', () => {
  return exec('npm run build:js');
});

gulp.task('build:scss', () => {
  return gulp.src('./assets/stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      compatibility: 'ie8',
      debug: true
    }, function(details) {
      gutil.log(gutil.colors.red(`${details.name}: ${details.stats.originalSize}`));
      gutil.log(gutil.colors.green(`${details.name}: ${details.stats.minifiedSize}`));
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('build/'));
});

// Test

gulp.task('run:test', () => {
  gutil.log('Running your specs files');
  return gulp
    .src('./specs/**/*.spec.*')
    .pipe(mocha({
  		reporter: 'spec',
  		compilers: {
  			js: babel
  		}
  	}));
});

// Deploy tasks

gulp.task('deploy:scss', () => {
  return gulp.src('./assets/stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      compatibility: 'ie8',
      debug: true
    }, function() {}))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('deploy/build'));
});

gulp.task('deploy:js', () => {
  return exec('npm run deploy:js');
});

gulp.task('deploy:img', () => {
    gulp.src('assets/images/**/*.*')
        .pipe(imagemin({
            optimizationLevel: 9
        }))
        .pipe(gulp.dest('deploy/assets/images'));
});

gulp.task('deploy:index', () => {
    let fs = require('fs-extra');

    return fs.copySync('index.html', 'deploy/index.html');
});

gulp.task('deploy:clean', () => {
    let fs = require('fs-extra');

    return fs.removeSync('deploy');
});

gulp.task('deploy:zip', () => {
    gulp.src('deploy/**/*')
      .pipe(zip('deploy.tar'))
      .pipe(gulp.dest('deploy'));
});

gulp.task('pre:deploy', ['deploy:clean', 'deploy:scss', 'deploy:img', 'deploy:index'], () => {
});