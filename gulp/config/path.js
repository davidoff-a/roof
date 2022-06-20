import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/assets/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/assets/img/`,
    fonts: `${buildFolder}/assets/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/assets/**/*.*`,
    scss: `${srcFolder}/scss/**/style.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/assets/img/**/*.{png,jpg,jpeg,gif,webp}`,
    svg: `${srcFolder}/assets/img/**/*.svg`,
    svgIcons: `${srcFolder}/assets/svgicons/*.svg`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/assets/**/*.*`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: "",
};