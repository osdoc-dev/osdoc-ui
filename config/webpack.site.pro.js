/*
 * 正式配置
 * @Author: ahwgs
 * @Date: 2020-06-29 23:47:16
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-07-22 21:42:10
 */

const getSiteDevConfig = require('./webpack.site.dev');
const merge = require('webpack-merge');
const { PUBLIC_PATH, OUTPUT_DIR } = require('../build/constant');
function getSitePrdConfig() {
  return merge(getSiteDevConfig(), {
    mode: 'production',
    stats: 'none',
    performance: {
      maxAssetSize: 5 * 1024 * 1024,
      maxEntrypointSize: 5 * 1024 * 1024,
    },
    output: {
      publicPath: PUBLIC_PATH,
      path: OUTPUT_DIR,
      filename: '[name].[hash:8].js',
      chunkFilename: 'async_[name].[chunkhash:8].js',
    },
  });
}

module.exports = getSitePrdConfig;
