import gulpSvgSprite from "gulp-svg-sprite";

export const svgSprite = () => {
  return app.gulp
    .src(app.path.src.svgIcons)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          stack: { gulpSvgSprite: `../icons/icons.svg`, examples: true },
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.images}`));
};