/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode-cn.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (70.29%)
 * Likes:    479
 * Dislikes: 0
 * Total Accepted:    62.6K
 * Total Submissions: 89K
 * Testcase Example:  '"aab"'
 *
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 *
 * 返回 s 所有可能的分割方案。
 *
 * 示例:
 *
 * 输入: "aab"
 * 输出:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 *
 */

// @lc code=start
// 判断是否为回文字符串
var isPalindromic = function (str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};

// 回溯算法
var backTracking = function (s, tracks, results, index) {
  // 结束条件：当前索引已经到最后一位了，后面没有字符给分割了
  if (index >= s.length) {
    results.push([...tracks]);
    return;
  }
  // 回溯算法实现
  for (let i = index; i < s.length; i++) {
    // 分割一个子串，如果这个子串是一个回文，则将它加入到 tracks 结果集中，如果不是，则继续往下找
    let subStr = s.substring(index, i + 1);
    if (isPalindromic(subStr)) {
      tracks.push(subStr);
    } else continue;
    // 回溯
    backTracking(s, tracks, results, i + 1);
    // 回退
    tracks.pop();
  }
};
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let results = [];
  backTracking(s, [], results, 0);
  return results;
};
// @lc code=end
