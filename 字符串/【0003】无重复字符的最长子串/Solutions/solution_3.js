/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.88%)
 * Likes:    7798
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 4.7M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 边界条件：如果 s 的长度为 0，则没法进行初始化 str 操作
  if (s.length == 0) return 0;

  // maxLength: 存放最大的字符串子串长度
  // j: 指针，用于指向当前比较的位置
  // str: 暂存子串信息
  let maxLength = 0,
    j = 1,
    str = s[0];

  while (s[j]) {
    // 查找子串中是否存在和 s[j] 重复的元素
    const repeatIndex = str.indexOf(s[j]);
    if (repeatIndex === -1) {
      // 如果不存在重复，则 str 子串加上 s[j]
      str += s[j];
      // j 往前走一步
      j++;
    } else {
      // 如果存在重复，则需要裁剪子串，剔除掉重复字符之前的子串
      // 例如 str = 'abcdef', 当前字符为 'c'，则剔除掉 'abc'，只保留 'def'
      // 保存最长子串长度
      maxLength = Math.max(maxLength, str.length);
      // 裁剪字符
      str = str.slice(repeatIndex + 1);
    }
  }

  // 隐藏比较：当 s[j] 为 null 时，结束循环，则最后一次子串 str 需要再比较一次
  return str.length > maxLength ? str.length : maxLength;
};
// @lc code=end
