/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.98%)
 * Likes:    2777
 * Dislikes: 0
 * Total Accepted:    394.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start

/**
 * 标准解法：判断当前字符串是否为回文字符串
 * @param {string}} str
 */
const isPalindrome = function (str) {
  // 遍历一遍当前字符串，判断是否为回文字符串
  for (let i = 0; i < str.length; i++) {
    // 注意：此处其实用了两个指针，一个为从头到尾部的 i ，一个为从尾部到头的 length - i -1
    // 如果 i 不大于字符串长度的一半，则比较，否则结束比较，返回 true
    if (i > str.length / 2) {
      return true;
    }
    // 如果第 i 个和第 length - i - 1 个的字符不一致，则不是回文
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  // 遍历完成，没有提前结束，证明是回文
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 用于存放临时的最大回文内容
  let longestStr = "";
  // 用于存放临时的最大回文的字符长度
  let max = 0;
  // 获取字符串长度
  const length = s.length;

  // 暴力算法，从第一个开始，直到最后，判断第 i 个到第 j 个元素组成的字符串是否为回文
  for (let i = 0; i < length; i++) {
    // <= 是因为 substring，必须指定长度
    for (let j = i + 1; j <= length; j++) {
      // 获取第 i 个到第 j 个元素组成的字符串
      const subStr = s.substring(i, j);
      // 判断如果是回文，并且如果当前回文的字符串长度比之前最大的回文字符串更大，则替换掉之前的记录
      if (isPalindrome(subStr) && subStr.length > max) {
        // 记录最新的回文字符串
        longestStr = subStr;
        // 记录最大回文字符串长度
        max = subStr.length;
      }
    }
  }
  // 返回最大回文字符串
  return longestStr;
};
// @lc code=end
