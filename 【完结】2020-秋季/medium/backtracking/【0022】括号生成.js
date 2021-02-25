/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (76.78%)
 * Likes:    1554
 * Dislikes: 0
 * Total Accepted:    226K
 * Total Submissions: 294.4K
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
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 这里是括号的合法性校验，在最终 push 到 result 之前阶段完成校验逻辑
var isValidate = function (tracks) {
  // 设定一个临时变量，用于存放 ( 的个数
  let stack = 0;
  // 依次遍历字符串，遇到 ( 则计数器 +1， 遇到 ) 则计数器 -1
  for (let i = 0; i < tracks.length; i++) {
    // 遇到 (, 计数器 +1
    if (tracks[i] === "(") {
      stack++;
    } else {
      // 判断当前计数器是否为空了，如果为空了，则表示 ) 没法与 ( 配对，因此报错
      if (stack === 0) return false;
      // 如果非空，则计数器 -1
      stack--;
    }
  }
  // 最终需要计数器为空才能完美匹配
  return stack === 0;
};

// 回溯算法
var backTracking = function (n, tracks, results) {
  // 如果本次回溯的字符串值长度已经是 2n 了，则表示已经回溯结束了
  if (tracks.length === 2 * n) {
    // 校验通过则放入结果集中 result
    isValidate(tracks) && results.push(tracks);
    return;
  }
  // 这是全量的数据集
  var sourceList = ["(", ")"];
  // 遍历全部数据集元素，依次进行回溯
  for (let choice in sourceList) {
    // 选中一个元素，将其追加到路径的最后一位，然后再进行回溯
    tracks += sourceList[choice];
    // 再次对子元素进行回溯
    backTracking(n, tracks, results);
    // 回溯结束后需要回退到上一步
    tracks = tracks.slice(0, tracks.length - 1);
  }
};

var generateParenthesis = function (n) {
  // 这道题可以转换思路：求 2n 个位置，每个位置可以放置字符 （ 或者 ） ， 组成的所有括号组合中，有多少个是合法的。
  // 定义结果集
  let results = [];
  // 这次回溯变量使用字符串保存，节省空间
  let tracks = "";
  // 调用回溯
  backTracking(n, tracks, results);
  // 返回结果集
  return results;
};
// @lc code=end
