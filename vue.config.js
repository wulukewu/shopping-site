const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  publicPath: './',

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
    ],
  },

  // Transpile dependencies is needed for modern syntax in dependencies to work in older browsers
  transpileDependencies: true,
  // These options configure the vue-i18n plugin to use locale files.
  pluginOptions: {
    i18n: {
      locale: 'en', // or your default locale
      fallbackLocale: 'en', // or your fallback locale
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  // devServer configuration for local development.  This will not affect production.
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 8080,
  },
};
