const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');



// compile sass

gulp.task('sass',function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss' ,'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
})


// move js file to source folder

gulp.task('js',function(){
     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js' , 'node_modules/jquery/dist/jquery.min.js' , 'node_modules/popper.js/dist/umd/popper.min.js'])
     .pipe(gulp.dest('src/js'))
     .pipe(browserSync.stream());
})

gulp.task('scripts', function() {   
      return gulp.src(['node_modules/babel-polyfill/dist/polyfill.js','first.js'])
      .pipe(babel({presets: ['es2015']}))       
      .pipe(gulp.dest('compiled')) });

//watch sass and serve

gulp.task('serve' , ['sass'] , function(){
    browserSync.init({
        server:"./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss' , 'src/scss/*.scss'],['sass']);
    gulp.watch('src/*.html').on('change',browserSync.reload);
})

// move font awesome-font folder to src

gulp.task('fonts',function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
})


//move font-awesome css file

gulp.task('fa' , function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'));
})

gulp.task('default',['js','serve' , 'fa' , 'fonts',]);


