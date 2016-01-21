var gulp = require("gulp"),
    rimraf = require("rimraf"),
    plugins = require("gulp-load-plugins")();

gulp.task("clean",function(cb){
  return gulp.src("./dist/*",{read: false})
    .pipe(plugins.rimraf());
});

gulp.task("build-js", ["clean"], function(){
  return gulp.src("./js/*.js")
    .pipe(gulp.dest("./dist/js/"));
});

gulp.task("build-css", ["clean"], function(){
  return gulp.src("./css/*.css")
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task("build-views",["build-css", "build-js"], function(){
  return gulp.src(['./views/*.jade', "!/views/layouts/*"])
    .pipe(plugins.jade())
    .pipe(gulp.dest('./dist/'));
});


gulp.task("production");//TODO

gulp.task("default", ["build-views"]);
