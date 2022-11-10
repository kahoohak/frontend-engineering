const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle_[contenthash:8].js",
  },
  devServer: {
    static: {
      directory: "./",
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};
