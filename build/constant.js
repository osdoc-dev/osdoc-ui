/*
 * 常量文件
 * @Author: ahwgs
 * @Date: 2020-06-29 23:46:41
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-07-22 21:48:14
 */

const { join, resolve } = require('path');

const CWD = process.cwd();
const SCRIPT_EXTS = ['.js', '.jsx', '.ts', '.tsx'];
const STYLE_EXTS = ['.css', '.less'];

const ROOT = resolve(__dirname, '..');

const CACHE_DIR = join(ROOT, 'node_modules/.cache');

const WEBSITE_TITLE = 'OSDOC-UI | OSDOC-UI';

const WEBSITE_LOGO = '';

const WEBSITE_DESC = 'React H5 Components Lib';

const PRIMARY_COLOR = '#1989fa';

const PUBLIC_PATH = '/';

const OUTPUT_DIR = join(ROOT, 'docsAssets');

module.exports = {
  CWD,
  SCRIPT_EXTS,
  STYLE_EXTS,
  CACHE_DIR,
  WEBSITE_TITLE,
  WEBSITE_LOGO,
  WEBSITE_DESC,
  PRIMARY_COLOR,
  ROOT,
  PUBLIC_PATH,
  OUTPUT_DIR,
};
