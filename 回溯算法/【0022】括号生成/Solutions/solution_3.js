/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.48%)
 * Likes:    2788
 * Dislikes: 0
 * Total Accepted:    557.4K
 * Total Submissions: 719.2K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start

// 判断是否为有效的括号字符串
const isValid = function (str) {
  let leftSide = [];
  let i = 0;

  while (i < str.length) {
    if (str[i] === "(") {
      leftSide.push("(");
    } else if (str[i] === ")" && leftSide.length > 0) {
      leftSide.pop();
    } else if (str[i] === ")" && leftSide <= 0) {
      return false;
    }
    i++;
  }

  return leftSide.length === 0;
};

// 回溯算法
const backTrack = function (n, results, current) {
  // 判断当前数组长度是否达到了 2*n， 因为是要 n 对括号
  if (current.length === 2 * n) {
    // 生成字符串
    const str = current.join("");
    // 判断是否为有效的括号
    if (isValid(str)) {
      // 如果有效，则加入到结果集中
      results.push(str);
    }
    return;
  }

  // 定义遍历数据源，在本题中，是固定的
  const source = ["(", ")"];
  // 依次遍历数据源
  for (let i = 0; i < source.length; i++) {
    // 将新的数据项加入当前队伍中
    current.push(source[i]);
    // 开始回溯
    backTrack(n, results, current);
    // 弹出结果
    current.pop();
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = [];

  /**
   * 包含两部分：
   * 1. 回溯算法
   * 2. 判断是否为有效括号字符串
   */

  backTrack(n, results, []);

  return results;
};
// @lc code=end
