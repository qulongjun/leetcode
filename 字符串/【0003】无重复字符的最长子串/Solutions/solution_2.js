/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (35.67%)
 * Likes:    4374
 * Dislikes: 0
 * Total Accepted:    673.9K
 * Total Submissions: 1.9M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 如果是空字符串，直接返回 0
  if (s.length == 0) return 0;

  // start： 基准的指针，指向字符子串起始位置
  let start = 0,
    // end：滑动指针，指向从 start 往后的字符
    end = 0,
    // maxCount：记录曾经找到的子串的最大值
    maxCount = 0;

  /**
   * 使用双指针 start 和 end 进行滑动窗口查找
   *         p  w  w  k  e  w
   * 第一次： s                初始位置 start 指向字符串开头位置，end 为动态指针，默认为 0 位置，代表 start + end 位置
   * 第二次： s  e             将 start 的位置作为基准， end 往后查找，每移动一位，都进行校验
   *                          如果 start + end 位置的字符位于 subStrings 字符子串内，则表示从 start 位置往后，有至少一个元素是和 start + end 位置元素相同了。
   *                          如果不在 subStrings 字符子串内，则说明从 start 往后没有出现过该字符，则追加到 subStrings 末尾
   * 第三次：    s             把 start 往前走一步，end 重置，重新执行流程。
   * 结束：                  s 结束条件就是 start 已经到达字符串末尾了，end 结束条件是 start + end 已经到字符串末尾了。
   */

  while (start < s.length) {
    // 初始化子串，每次基准指针改变均需要初始化
    let subStrings = "";

    while (start + end < s.length) {
      if (subStrings.indexOf(s[start + end]) === -1) {
        subStrings += s[start + end];
        end++;
      } else {
        break;
      }
    }
    if (maxCount < subStrings.length) maxCount = subStrings.length;
    start += 1;
    end = 0;
  }
  return maxCount;
};
// @lc code=end
