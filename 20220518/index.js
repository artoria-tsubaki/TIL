// 2022/5/18 

/**
 * @description: 字符串通过分隔符分割成数组
 * @param str {string} 被操作的字符串
 * @param str {string} 用于分割的字符串
 * @return {array}
 */
String.prototype.mySplit = function (str, delimiters) {
  const res = [];
  (function split (str, delimiters) {
    const index = str.indexOf(delimiters)
    if (index > -1) {
      res.push(str.substring(0, index))
      split(str.substring(index + 1, str.length), delimiters)
    } else {
      res.push(str)
    }
  })(str, delimiters)
  return res
}


/**
 * @description: 数组通过分隔符组成字符串
 * @param arr {array} 被操作的字符串
 * @param delimiters {string} 用于分割的字符串
 * @return {string}
 */
Array.prototype.myJoin = function (arr, delimiters) {
  return arr.reduce((acc, cur, index, array) => acc += cur + ( index !== array.length -1 ? delimiters : ''), '')
}