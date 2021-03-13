/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (64.44%)
 * Likes:    917
 * Dislikes: 0
 * Total Accepted:    218.9K
 * Total Submissions: 339.6K
 * Testcase Example:  '3\n7'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：m = 3, n = 7
 * 输出：28
 *
 * 示例 2：
 *
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 *
 *
 * 示例 3：
 *
 *
 * 输入：m = 7, n = 3
 * 输出：28
 *
 *
 * 示例 4：
 *
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 题目数据保证答案小于等于 2 * 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  /*
        分析： 时间复杂度：O(mn)O(mn)，空间复杂度：O(mn)，
        优化：注意到 dpTable[i][j] 仅与第 i 行和第 i-1 行的状态有关，因此我们可以使用滚动数组代替代码中的二维数组，使空间复杂度降低为 O(n)O(n)
    */

  // 用 dpTable[i][j] 表示从左上角走到 (i, j) 的路径数量，其中 i 和 j 的范围分别是 [0, m) 和 [0, n)
  let dpTable = [];

  // 状态转移方程：dpTable[i][j] = dpTable[i - 1][j] + dpTable[i][j - 1]

  // base case：最左侧都是 1，需要提前处理 i - 1 问题
  for (let i = 0; i < m; i++) {
    dpTable[i] = [1];
  }

  // base case: j = 1 时， j -1 不满足状态转移方程
  for (let j = 0; j < n; j++) {
    dpTable[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dpTable[i][j] = dpTable[i - 1][j] + dpTable[i][j - 1];
    }
  }

  return dpTable[m - 1][n - 1];
};
// @lc code=end
