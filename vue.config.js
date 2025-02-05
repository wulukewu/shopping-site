const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/shopping-site/" : "/",
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "public"),
            to: path.resolve(__dirname, "dist"),
            globOptions: {
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
    ],
  },
};
