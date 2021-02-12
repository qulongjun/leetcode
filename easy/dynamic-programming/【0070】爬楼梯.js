/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (51.40%)
 * Likes:    1463
 * Dislikes: 0
 * Total Accepted:    363.5K
 * Total Submissions: 707.2K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  // 边界条件
  if (n === 0 || n === 1) return n;
  // 爬1级台阶有一种方法，爬2级台阶有两种方法（1+1 , 2）
  let steps = [1, 2];
  // 爬到第n级台阶的方法是F(n-1) + F(n-2) 的数量总和
  for (let i = 2; i < n; i++) {
    // 计算第n级台阶方法数量
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  // 因为是从0开始定义的，因此这里为 n-1 ，而不是 n
  return steps[n - 1];
};
// @lc code=end
