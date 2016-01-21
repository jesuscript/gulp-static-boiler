var gulp = require("gulp"),
    rimraf = require("rimraf"),
    plugins = require("gulp-load-plugins")();

gulp.task("clean",function(cb){
  return gulp.src("./dist/*",{read: false})
    .pipe(plugins.rimraf());
});


gulp.task("build-css", ["clean"], function(){
  return gulp.src("./css/*.css")
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task("build-html",["build-css"], function(){
  return gulp.src(['./views/*.jade', "!/views/layouts/*"])
    .pipe(plugins.jade())
    .pipe(gulp.dest('./dist/'));
});


gulp.task("production", function(){
  
});

gulp.task("default", ["clean","build-css","build-html"] ,function(){
  
});
