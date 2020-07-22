/*
 * yarn dev 命令
 * @Author: ahwgs
 * @Date: 2020-06-29 23:46:55
 * @Last Modified by:   ahwgs
 * @Last Modified time: 2020-06-29 23:46:55
 */

const compileSite = require('./compile-site');

// yarn dev
(async () => {
  await compileSite();
})();
