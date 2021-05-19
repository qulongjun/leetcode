/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (33.70%)
 * Likes:    243
 * Dislikes: 0
 * Total Accepted:    127.1K
 * Total Submissions: 377K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
 *
 * 如果不存在最后一个单词，请返回 0 。
 *
 * 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。
 *
 *
 *
 * 示例:
 *
 * 输入: "Hello World"
 * 输出: 5
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 存放当前的最后一个的长度
  let lastCount = 0;
  for (let i = 0; i < s.length; i++) {
    // 如果当前的字符是空白，则往下找出第一个非空白的字符
    if (s[i] !== " ") {
      // 清空初始值
      lastCount = 0;
      // 两种情况结束字符长度计算：1.已经到达了字符串的末尾（因为末尾没有空格），2.已经到达了空格处。
      while (s[i + lastCount] && s[i + lastCount] !== " ") {
        lastCount++;
      }
      // i 不再重复判定，直接跳过这个单词
      i = i + lastCount;
    }
  }
  
  return lastCount;
};
// @lc code=end
