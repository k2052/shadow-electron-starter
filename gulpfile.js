const gulp = require('gulp');

// Create an electron-connect server to enable reloading
const electron = require('electron-connect').server.create();

gulp.task('start', ()=>{
  electron.start();
  gulp.watch(['./resources/main.js'], electron.restart);
});
