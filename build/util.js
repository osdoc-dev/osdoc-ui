/*
 * 工具函数
 * @Author: ahwgs
 * @Date: 2020-06-29 23:46:08
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-06-30 00:00:09
 */
exports.zeroPad = function (num, places) {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
};
exports.formatTime = function (date) {
  if (!date) {
    date = new Date();
  } else if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}-${exports.zeroPad(month, 2)}-${exports.zeroPad(day, 2)} ${exports.zeroPad(
    hour,
    2,
  )}:${exports.zeroPad(minute, 2)}`;
};
