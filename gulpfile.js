import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev:!process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otf2ttf, ttf2woff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgsprite.js";
import { zip } from "./gulp/tasks/zip.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otf2ttf, ttf2woff, fontStyle);
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images)
);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task("default", dev);
const build = gulp.series(reset,  mainTasks);
const deployZip = gulp.series(reset,  mainTasks, zip)

export { svgSprite };
export { dev };
export { build };
export { deployZip };