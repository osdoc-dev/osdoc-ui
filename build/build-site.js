/*
 * @Author: ahwgs
 * @Date: 2020-07-22 21:24:20
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-07-22 21:51:48
 */

const compileSite = require('./compile-site');

// yarn dev
(async () => {
  const isPro = true;
  await compileSite(isPro);
})();
