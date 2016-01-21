var gulp = require("gulp"),
    rimraf = require("rimraf"),
    plugins = require("gulp-load-plugins")();

gulp.task("clean",function(cb){
  rimraf("./dist", cb);
});

gulp.task("build-html", function(){
  gulp.src(['./views/*.jade', "!/views/layouts/*"])
    .pipe(plugins.jade())
    .pipe(gulp.dest('./dist/'));
});

gulp.task("production", function(){
  
});

gulp.task("default", ["clean","build-html"] ,function(){
  
});
