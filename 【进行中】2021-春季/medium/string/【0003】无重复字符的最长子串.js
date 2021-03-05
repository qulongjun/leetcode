/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (35.68%)
 * Likes:    4377
 * Dislikes: 0
 * Total Accepted:    674.7K
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
  // 因为有双层for循环，第二层使用了 i+1，需要特殊处理i === 1的场景
  if (s.length === 0 || s.length === 1) return s.length;
  // 暂时记录最大的子串长度
  let maxLength = 0;
  // 第一层遍历，从头遍历到尾部
  for (let i = 0; i < s.length; i++) {
    // 剪枝操作，如果从 i 到 结尾的总长度都没有最大长度长了，则直接返回了
    if (s.length - i < maxLength) break;
    // 定义一个 Set 用来判断是否重复了, set.add / set.has
    let set = new Set();
    // 将第一个插入进入，因为 j 是从 i+1 开始的，会遗漏 i
    set.add(s[i]);
    // 滑动窗口，找第一个出现重复的字符
    for (let j = i + 1; j <= s.length; j++) {
      // 两种情况需要结束当前查找：1. 找到重复了，2.找到结束了
      if (set.has(s[j]) || j === s.length) {
        // 比较当前暂存的最大值和新的最大值
        maxLength = Math.max(maxLength, j - i);
        break;
      } else set.add(s[j]);
    }
    // 每次滑动窗口结束后，都要清空 set
    set.clear();
  }
  return maxLength;
};
// @lc code=end
