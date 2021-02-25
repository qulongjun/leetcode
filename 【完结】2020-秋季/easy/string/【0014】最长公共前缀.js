/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (38.79%)
 * Likes:    1281
 * Dislikes: 0
 * Total Accepted:    366.3K
 * Total Submissions: 944.2K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * @description 这个解法效率不高，不建议参考
 * @deprecated
 */
// var longestCommonPrefix = function (strs) {
//   // 边界问题，当 strs 为空时，会取不到 strs[0] 的值
//   if (strs.length === 0) return "";
//   // 用来定位当前比较到哪一个位置的索引
//   let index = 0;

//   // 终止条件：第一个元素全部走完，就表示最长子串就是第一个元素
//   while (index !== strs[0].length) {
//     for (let i = 0; i < strs.length; i++) {
//       // 依次遍历每一个字符串的当前 index 位置的值是否和第一个元素相同位置一样，不一样就返回了
//       if (strs[0][index] !== strs[i][index]) {
//         return strs[0].substring(0, index);
//       }
//     }

//     index++;
//   }
//   return strs[0];
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 边界问题，当 strs 为空时，会取不到 strs[0] 的值
  if (strs.length === 0) return "";
  // 优化点：可以获取长度最短的字符串，减少后续遍历次数
  const minLength = Math.min(...strs.map((item) => item.length));
  // 用来存放临时公共前缀
  let str = "";

  // 第一层循环用来遍历定位公共前缀
  for (let i = 0; i < minLength; i++) {
    // 第二层循环用来查看每个字符串是否符合当前的公共前缀
    for (let j = 1; j < strs.length; j++) {
      // 如果不符合，就直接返回了
      if (strs[j][i] !== strs[0][i]) {
        return str;
      }
    }
    // 如果符合，就更新公共前缀
    str += strs[0][i];
  }
  return str;
};

// @lc code=end
