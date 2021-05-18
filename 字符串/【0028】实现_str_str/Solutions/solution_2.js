/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (39.72%)
 * Likes:    577
 * Dislikes: 0
 * Total Accepted:    236.6K
 * Total Submissions: 595.6K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 边界问题特殊处理
  if (needle === "") return 0;

  /*
    最差情况：
      haystack:  a b c d e f g h i
      needle:                g h i
      i比较区间   |           |
      j比较区间               |   |
  */

  // 只需要比较从 0 到 needle 字符串长度之前的字符是否符合要求。
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // 判断是否需要开始逐个比较 needle 每一个字符的前提是第一个字符必须相同
    if (haystack[i] === needle[0]) {
      let j = 0;
      for (; j < needle.length; j++) {
        // 如果 needle 里某个字符不相同，直接退出比较
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      // j === needle 长度，表示比较到最后一位了，是匹配的，否则表示未匹配成功，j 重置。
      if (j === needle.length) return i;
      else j = 0;
    }
  }

  // i 走到最后都没匹配上
  return -1;
};
// @lc code=end
