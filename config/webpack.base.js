/**
 * 基础webpack配置
 */
const { CACHE_DIR, SCRIPT_EXTS, STYLE_EXTS } = require('../build/constant');

const CACHE_LOADER = {
  loader: 'cache-loader',
  options: {
    cacheDirectory: CACHE_DIR,
  },
};

const getFileLoader = (limit = 2000, prefix) => {
  return {
    loader: 'file-loader',
    options: {
      limit,
      name: `${prefix}/[name].[ext]`,
    },
  };
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

const MARKDOWN_LOADER = {};

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
          test: /\.html$/,
          loader: 'html-withimg-loader',
        },
        {
          test: /\.md$/,
          use: [CACHE_LOADER, MARKDOWN_LOADER, 'babel-loader'],
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
          test: /\.(png|jpe?g|gif|bpm|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 3000,
            name: 'img/[name].[ext]',
          },
        },
        {
          exclude: /\.js|\.css|\.scss|\.less|\.sass|\.html|\.json|\.ejs$/,
          loader: 'url-loader',
          options: {
            limit: 2000,
            name: 'ext/[name].[ext]',
          },
        },
      ],
    },
    plugins: [],
  };
}

module.exports = getBaseConfig;
