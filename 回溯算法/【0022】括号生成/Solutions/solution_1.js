/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (76.31%)
 * Likes:    1359
 * Dislikes: 0
 * Total Accepted:    187.1K
 * Total Submissions: 244.9K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例：
 *
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 *
 *
 */

// @lc code=start

// 用来校验当前 str 是否满足括号规范
var isValidate = function (str) {
  // 用一个 stack 临时变量存放左括号个数，遇到左括号 +1，遇到右括号 -1，当左括号为 0，且此时为右括号时，返回 false
  let stack = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack++;
    } else {
      if (stack === 0) return false;
      stack--;
    }
  }

  return stack === 0;
};

// 回溯算法
var backTracking = function (n, tracks, results) {
  // Tips 判断条件是 tracks 的长度为 2n，因为要生成 n对，一对2个字符
  if (tracks.length === 2 * n) {
    // 如果校验通过，则将结果压入结果集
    isValidate(tracks) && results.push(tracks);
    return;
  }
  // dataSource 是候选集
  let dataSource = ["(", ")"];
  
  for (let i = 0; i < dataSource.length; i++) {
    tracks += dataSource[i];
    backTracking(n, tracks, results);
    tracks = tracks.slice(0, tracks.length - 1);
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let results = [];
  backTracking(n, "", results);
  return results;
};
// @lc code=end
