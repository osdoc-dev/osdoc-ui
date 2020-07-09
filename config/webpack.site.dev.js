/*
 * 开发配置
 * @Author: ahwgs
 * @Date: 2020-06-29 23:47:43
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-07-09 23:36:41
 */

const getBaseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WEBSITE_TITLE, WEBSITE_LOGO, WEBSITE_DESC } = require('../build/constant');

/**
 * 站点开发配置
 */
function getSiteDevConfig() {
  return merge(getBaseConfig(), {
    entry: {
      'site-desktop': join(__dirname, '../docs/desktop/main.js'),
      // 'site-mobile': `${siteRoot}/mobile/main.js`,
    },
    resolve: {
      alias: {
        'osdoc-ui': resolve(__dirname, '../components'),
        markdown: resolve(__dirname, '../docs/desktop/markdown/'),
      },
    },
    devServer: {
      port: 8080,
      quiet: true,
      host: '0.0.0.0',
      stats: 'errors-only',
      publicPath: '/',
      disableHostCheck: true,
      hot: true,
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
    plugins: [
      new HtmlWebpackPlugin({
        title: WEBSITE_TITLE,
        logo: WEBSITE_LOGO,
        description: WEBSITE_DESC,
        chunks: ['chunks', 'site-desktop'],
        template: join(__dirname, '../docs/desktop/index.html'),
        filename: 'index.html',
      }),
    ],
  });
}

module.exports = getSiteDevConfig;
