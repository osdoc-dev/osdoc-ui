/*
 * 启动窗口
 * @Author: copy from taro/ui
 * @Date: 2020-06-29 23:45:08
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-06-29 23:45:38
 */

const exec = require('child_process').exec;

module.exports = function open(target, appName, callback) {
  let opener;

  if (typeof appName === 'function') {
    callback = appName;
    appName = null;
  }

  switch (process.platform) {
    case 'darwin':
      if (appName) {
        opener = `open -a "${escape(appName)}"`;
      } else {
        opener = 'open';
      }
      break;
    case 'win32':
      if (appName) {
        opener = `start "" "${escape(appName)}"`;
      } else {
        opener = 'start ""';
      }
      break;
    default:
      if (appName) {
        opener = `xdg-open "" "${escape(appName)}"`;
      } else {
        opener = 'xdg-open ""';
      }
      break;
  }

  if (process.env.SUDO_USER) {
    opener = `sudo -u ${process.env.SUDO_USER} ${opener}`;
  }
  return exec(`${opener} "${escape(target)}"`, callback);
};

function escape(s) {
  return s.replace(/"/g, '\\"');
}
