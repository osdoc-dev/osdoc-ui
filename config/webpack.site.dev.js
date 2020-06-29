const getBaseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const { join } = require('path');
/**
 * 站点开发配置
 */
function getSiteDevConfig() {
  return merge(getBaseConfig(), {
    entry: {
      'site-desktop': [join(__dirname, '../docs/desktop/main.jsx')],
      'site-mobile': [join(__dirname, '../docs/mobile/main.jsx')],
    },
    devServer: {
      port: 8080,
      quiet: true,
      host: '0.0.0.0',
      stats: 'errors-only',
      publicPath: '/',
      disableHostCheck: true,
    },
    output: {
      chunkFilename: '[name].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          chunks: {
            chunks: 'all',
            minChunks: 2,
            minSize: 0,
            name: 'chunks',
          },
        },
      },
    },
  });
}

module.exports = getSiteDevConfig;
