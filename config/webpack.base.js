/*
 * 基础配置
 * @Author: ahwgs
 * @Date: 2020-06-29 23:47:32
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-07-12 22:38:59
 */

const { CACHE_DIR, SCRIPT_EXTS, STYLE_EXTS, PRIMARY_COLOR } = require('../build/constant');
const autoprefixer = require('autoprefixer');
const WebpackBar = require('webpackbar');
const CACHE_LOADER = {
  loader: 'cache-loader',
  options: {
    cacheDirectory: CACHE_DIR,
  },
};

const CSS_LOADERS = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        autoprefixer({
          overrideBrowserslist: [
            'ie >= 9',
            'Chrome >= 21',
            'Firefox >= 1',
            'Edge >= 13',
            'last 3 versions',
          ],
          flexbox: 'no-2009',
        }),
      ],
    },
  },
];

function getBaseConfig() {
  return {
    mode: 'development',
    resolve: {
      extensions: [...SCRIPT_EXTS, ...STYLE_EXTS],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|jsx|tsx)$/,
          exclude: /node_modules/,
          use: [CACHE_LOADER, 'babel-loader'],
        },
        {
          test: /\.css$/,
          sideEffects: true,
          use: CSS_LOADERS,
        },
        {
          test: /\.less$/,
          sideEffects: true,
          use: [...CSS_LOADERS, 'less-loader'],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            limit: 2000,
            name: 'fonts/[name].[ext]',
          },
        },
        {
          test: /\.(png|jpe?g|gif|bpm)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 3000,
            name: 'img/[name].[ext]',
          },
        },
        {
          test: /\.md$/,
          use: require.resolve('raw-loader'),
        },
      ],
    },
    plugins: [
      new WebpackBar({
        name: 'OSDOC UI',
        color: PRIMARY_COLOR,
      }),
    ],
  };
}

module.exports = getBaseConfig;
