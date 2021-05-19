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
  // 定义一个 nums 数组，用于存放从 1 到 n 的时候的爬楼方式，nums[x] 表示第 x 台阶共有 nums[x] 种方式
  let nums = [1, 2];

  for (let i = 2; i < n; i++) {
    // 第 i 个台阶有 nums[i - 1] + nums[i - 2] 种爬楼方式
    nums[i] = nums[i - 1] + nums[i - 2];
  }

  // 返回第 n 阶的方式，因为从 0 开始计算的，因此为 n-1
  return nums[n - 1];
};
// @lc code=end
