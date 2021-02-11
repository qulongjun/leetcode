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
/**
 * @param {string} s
 * @return {string[][]}
 */

// 判断字符串 str 是否为回文
// 双指针，一个从头开始，一个从结尾开始，到中间相遇，期间值一样就是回文
var isPalindromic = function (str) {
  let first = 0,
    last = str.length - 1;

  while (first < last) {
    if (str[first] !== str[last]) return false;
    first++;
    last--;
  }

  return true;
};

// 回溯方法
var backTracking = function (s, tracks, results, index) {
  // 结束回溯条件：当前索引已经超过了 s 的长度
  if (index >= s.length) {
    results.push([...tracks]);
    return;
  }

  // 这里分割条件是
  for (let i = index; i < s.length; i++) {
    // 生成从上次结束后到当前索引的子字符串
    let str = s.substring(index, i + 1);
    // 判断是否为回文，如果是回文，则追加到路径中，继续往下找，如果不是，则重新生成字符串
    if (isPalindromic(str)) {
      tracks.push(str);
    } else continue;
    // 回溯，从第 i+1 位置作为新的 index 往后找
    backTracking(s, tracks, results, i + 1);
    // 弹出
    tracks.pop();
  }
};

var partition = function (s) {
  // 结果集
  let results = [];
  // 关键路径
  let tracks = [];
  // 回溯
  backTracking(s, tracks, results, 0);
  // 返回结果集
  return results;
};
// @lc code=end
