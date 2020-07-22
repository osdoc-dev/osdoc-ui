/*
 * 常量文件
 * @Author: ahwgs
 * @Date: 2020-06-29 23:46:41
 * @Last Modified by:   ahwgs
 * @Last Modified time: 2020-06-29 23:46:41
 */

const { join, resolve } = require('path');

const CWD = process.cwd();
const SCRIPT_EXTS = ['.js', '.jsx', '.ts', '.tsx'];
const STYLE_EXTS = ['.css', '.less'];

const ROOT = resolve(__dirname, '..');

const CACHE_DIR = join(ROOT, 'node_modules/.cache');

const WEBSITE_TITLE = 'OSDOC-UI | OSDOC-DEV';

const WEBSITE_LOGO = 'https://www.ahwgs.cn/wp-content/uploads/2017/09/favicon.ico';

const WEBSITE_DESC = 'React H5 Components Lib';

const PRIMARY_COLOR = '#1989fa';

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
};
