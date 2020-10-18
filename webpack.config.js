const path = require("path");
module.exports = {
  entry: [
    "./js/game.js",
    "./js/utils.js",
    "./js/elements.js",
    "./js/debounce.js",
    "./js/backend.js",
    "./js/wizard.js",
    "./js/dialog.js",
    "./js/render.js",
    "./js/validate.js",
    "./js/shift.js",
    "./js/popup.js",
    "./js/stat.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
