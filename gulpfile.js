var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');
var SourceMap = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var clean = require('gulp-clean');
var htmlmin = require('gulp-html-minifier');
var cache = require('gulp-cache');
var gulpsync = require('gulp-sync')(gulp);
var zip = require('gulp-zip');
var concat = require('gulp-concat');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');

gulp.task('stylus', function() {
  return gulp.src('src/stylus/*.styl') 
    .pipe(SourceMap.init())
    .pipe(stylus().on('error', notify.onError({
      message: "<%= error.message %>",
      title: "Stylus Error!"
    }))) 
    .pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    })) 
    .pipe(rename('style.css'))
    .pipe(SourceMap.write('.')) 
    .pipe(gulp.dest('src/css')) 

    .pipe(notify('Stylus compiled')); 
});


gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug') 
    .pipe(pug({
      pretty: true
    })) 
    .pipe(gulp.dest('src'))
});

gulp.task('jss', function() {
  return gulp.src('src/js/**/*.js') 
    .pipe(js({
      pretty: true
    })) 
    .pipe(gulp.dest('src'))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    },
    notify: false
  })
});

gulp.task('clean', function() {
  return gulp.src('dist', {
      read: false
    })
    .pipe(clean());
});



//copy images to dist/img
gulp.task('copyimages', function() {
  return gulp.src('src/img/**/*.*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/img'));
});

// copy fonts to dist/fonts
gulp.task('copyfonts', function() {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
});

// copy css to dist/fonts
gulp.task('copycss', function() {
  return gulp.src('src/css/**/*.*')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

// copy js to dist/fonts
gulp.task('copyjs', function() {
  return gulp.src('src/js/**/*.*')
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copyhtml', function() {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(htmlmin({
      collapseWhitespace: true,
      // preserveLineBreaks: true,
      removeComments: true
    }))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});


// create archive for build (map "dist")
gulp.task('zip', () =>
  gulp.src('dist/**/*')
  .pipe(zip('build.zip'))
  .pipe(size({
    showFiles: true
  }))
  .pipe(gulp.dest('./'))
);


gulp.task('default', ['stylus', 'pug', 'browser-sync',],
  function() {
    gulp.watch('src/stylus/**/*.styl', ['stylus-watch']); 
    gulp.watch('src/pug/**/*.pug', ['pug-watch']); 
    gulp.watch('src/js/**/*.js', ['js-watch']); 
  });

//tasks for relaod page after compile pug and stylus
gulp.task('pug-watch', ['pug'], function(done) {
  browserSync.reload();
  done();
});
gulp.task('stylus-watch', ['stylus'], function(done) {
  browserSync.reload();
  done();
});
gulp.task('js-watch', ['copyjs'], function(done) {
  browserSync.reload();
  done();
});



//comppile stylus and pug
gulp.task('compile', gulpsync.sync(['stylus', 'pug']));


// build project in "dist map"
gulp.task('build', gulpsync.sync(['compile', 'clean','copycss', 'copyjs', 'copyhtml', 'copyimages',
  'copyfonts', 'zip'
]));
