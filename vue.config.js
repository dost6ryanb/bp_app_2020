const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  pwa: {
    themeColor: '#FFFFFF'
  },
  configureWebpack: config => {
    config.optimization = {
       minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: { drop_console: true },
            output: { comments: false, beautify: false }
          }
        })
      ]
    }
  }
}