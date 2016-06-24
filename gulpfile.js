var gulp = require('gulp'),
  inject = require('gulp-inject');

var paths = {
  webroot: './',
  src: './app/',
  dist: './dist/',
  images: ['app/img/*'],
  configs: ['Web.config'],
  // appCss: ['app/styles/**/*.css'],  
  libJs: [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'systemjs.config.js',
   
  ],
  vendorCss: [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'app/css/AdminLTE.min.css',
    'app/css/skins/_all-skins.min.css'
  ],
  vendorJs: [
    'node_modules/jquery/dist/jquery.min.js',
    // 'node_modules/jquery-ui/jquery-ui.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'app/js/app.js'
  ]
};
// --Inject:Dev
gulp.task('inject', function () {
  return gulp.src(paths.webroot + 'index.html')
    // .pipe(inject(gulp.src(paths.appJs, { read: false }), { ignorePath: '', addRootSlash: false, starttag: '<!-- inject:app:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.vendorJs, { read: false }), { ignorePath: '', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.vendorCss, { read: false }), { ignorePath: '', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.libJs, { read: false }), { ignorePath: '', addRootSlash: false, starttag: '<!-- inject:lib:{{ext}} -->' }))
    .pipe(gulp.dest(paths.webroot));
});