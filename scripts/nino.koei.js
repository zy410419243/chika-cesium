const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const webpack = require('webpack');

module.exports = {
  externals: {
    cesium: 'Cesium',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/cesium/Build/Cesium',
        to: 'cesium',
      },
      {
        from: './.circleci/config.yml',
        to: '.circleci/config.yml',
      },
    ]),
    new HtmlWebpackIncludeAssetsPlugin({
      append: false,
      assets: ['cesium/Widgets/widgets.css', 'cesium/Cesium.js'],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify('cesium'),
    }),
  ],
};