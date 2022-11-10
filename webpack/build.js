const webpack = require("webpack");
const path = require("path");

function f1() {
  return webpack({
    entry: "./index.js",
    mode: "none",
    output: {
      iife: false,
      pathinfo: "verbose",
    },
  });
}

f1().run((err, stat) => {});
