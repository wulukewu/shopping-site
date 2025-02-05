const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/shopping-site/" : "/",
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: "public", to: "." }, // Copies the entire 'public' directory to the build output.
        ],
      }),
    ],
  },
};
