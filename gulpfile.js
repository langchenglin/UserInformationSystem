/**
 * Created by 郎程林 on 2017/3/10.
 */

//引入模块
var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    rename=require('gulp-rename'),
    server=require('gulp-webserver'),
    concat=require('gulp-concat'),
    minifyCss=require('gulp-minify-css');


//合并js文件
gulp.task('mergeJs',function(){
    gulp.src('./js/myjs.js')
        .pipe(concat('concat.js')) //压缩后的js文件名
        .pipe(uglify()) // 执行压缩
        .pipe(gulp.dest('./dist')) //输出到dist这个文件夹下
})

//压缩css
gulp.task('sass',function(){
    gulp.src('./css/style.css')
        .pipe(minifyCss())  //压缩
        .pipe(gulp.dest('./css')) //输出
})
//建一个server服务
   //意思是 再启动服务之前 监听下边start的变化
gulp.task('server',['start'],function(){
    gulp.src('./')
        .pipe(server({
            open:true,
            livereload:true, //是否自动刷新
            directoryListing:true
        }))
})

//监听 当样式和js 和 页面结构发生变化 自动刷新

gulp.task('start',function(){
    gulp.watch('./css/*.css',['sass'])
    gulp.watch('./js/*.js',['mergeJs'])
    gulp.watch('index.html')
})

