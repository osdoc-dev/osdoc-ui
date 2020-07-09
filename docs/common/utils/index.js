/*
 * @Author: ahwgs
 * @Date: 2020-07-04 01:54:43
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-07-04 01:55:23
 */

export const getPageName = (props) => {
  const { location } = props;
  const { pathname = '' } = location;
  return pathname ? pathname.replace('/', '') : '';
};
