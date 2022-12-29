import gulp from "gulp";
import * as packs from "./packs.mjs";

export const cleanPacks = gulp.series(packs.clean);
export const compilePacks = gulp.series(packs.compile);
export const extractPacks = gulp.series(packs.extract);
