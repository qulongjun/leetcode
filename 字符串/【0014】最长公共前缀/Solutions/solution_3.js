/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (42.64%)
 * Likes:    2361
 * Dislikes: 0
 * Total Accepted:    890.7K
 * Total Submissions: 2.1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longest = "";
  const minLength = Math.min(...strs.map((str) => str.length));

  /**
   * 纵向比较
   * 1. 找到所有字符串中长度最短的一个，作为循环的次数
   * 2. 依次比较每一个位置的字符是否和字符串中所有相同位置的字符一致
   * 3. 如果一致，就累加到 longest 上，否则直接返回 longest
   */

  for (let i = 0; i < minLength; i++) {
    let subStr = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== subStr) {
        return longest;
      }
    }

    longest += subStr;
  }

  return longest;
};
// @lc code=end
