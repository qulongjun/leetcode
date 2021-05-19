/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (39.22%)
 * Likes:    1474
 * Dislikes: 0
 * Total Accepted:    453.3K
 * Total Submissions: 1.2M
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
 * 0
 * 0
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
  if (strs.length === 0) return "";
  let index = 0;
  // 纵向比较，每个数组元素的 index 位置的值是否一样，如果不一样，直接return 0 ～ index - 1的子串
  while (true) {
    // 基准比较第一个元素的第 index 位置
    let flags = strs[0][index];
    // 特殊case：如果当前 index 为 undefined，那么直接返回第一个元素就行了
    if (flags === undefined) return strs[0];
    // 依次遍历数组中的每个元素的 index 位置
    for (let i = 1; i < strs.length; i++) {
      // 如果不一样，直接获取前面的字串就行了
      if (strs[i][index] !== flags) {
        return strs[i].slice(0, index);
      }
    }
    // 如果一样，就比较后一位
    index++;
  }
};
// @lc code=end
