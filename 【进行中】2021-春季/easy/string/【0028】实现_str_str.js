/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (39.71%)
 * Likes:    579
 * Dislikes: 0
 * Total Accepted:    237.7K
 * Total Submissions: 598.6K
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
  // 边界条件，因为如果 needle 为空，则没有下方的 j 从 1 开始
  if (needle === "") return 0;
  // 依次遍历haystack的每一项，从0开始，到 最后第（needle）的长度项为止
  let i = 0;
  for (i; i < haystack.length - needle.length + 1; i++) {
    // 如果当前位置的值和needle 相同，则进入比较
    if (haystack[i] === needle[0]) {
      // j 从 1开始，因为0已经比较过了
      let j = 1;
      // 比较 needle里每一项是否和 haystack 一样
      for (j; j < needle.length; j++) {
        // 不一样就不比较下去了
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      // 如果 j 的长度大于等于 needle 的长度，证明比较完成了，全都符合要求，返回 i 的索引
      if (j >= needle.length) return i;
    }
  }
  // 否则就是没找到
  return -1;
};
// @lc code=end
