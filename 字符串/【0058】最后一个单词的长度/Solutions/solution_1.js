/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (34.24%)
 * Likes:    286
 * Dislikes: 0
 * Total Accepted:    162.5K
 * Total Submissions: 474.5K
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
 *
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Hello World"
 * 输出：5
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = " "
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅有英文字母和空格 ' ' 组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 从尾部开始往前找，会遇到如下几种情况：
  // 1. 尾部为 n 个空格，通过 isEnter 标识当前是否进入单词，如果未进入，则不计算成 start
  // 2. 如果当前遇到了空格，且 isEnter 为 true 了，标识这里是单词的开头了，结束往前找
  // 3. 如果当前不是空格，且当前 isEnter 为false，标识当前是单词的结尾了，保存一下 start
  let i = s.length - 1;
  let isEnter = false;
  let start = i;

  while (i >= 0) {
    //  当前不是空格的情况
    if (s[i] !== " ") {
      // 如果没标记过，则标记一下，并且记为开始的索引
      if (!isEnter) {
        isEnter = true;
        start = i;
      }
    } else {
      // 否则是空格，且isEnter不为 false 的话，意味着当前是单词的开头了
      if (isEnter) break;
    }
    // 不管是不是空格，i 都要往前走一步
    i--;
  }

  // 特殊Case： " " => 0，这种处理方式是循环结束后都没有进入单词，说明整个字符串都没单词
  if (!isEnter) return 0;

  // 返回从单词结尾到单词头的长度
  return start - i;
};
// @lc code=end
