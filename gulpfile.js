const { src, dest, watch, parallel, series }= require('gulp');


const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const autoPrefixer = require('gulp-autoprefixer');
const uglify       = require('gulp-uglify');
const browserSync  = require('browser-sync').create();
const imagemin     = require('gulp-imagemin');


function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
}

function styles() {
  return src('app/scss/style.scss')
  .pipe(scss({outputStyle:'expanded'}))
  .pipe(concat('style.css'))
  .pipe(autoPrefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/libs.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload)
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
  ])
  .pipe(concat('libs.js'))
  // .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}


exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync; 
exports.watching = watching;
exports.build = series(build);

exports.default = parallel(styles,scripts,browsersync,watching)
