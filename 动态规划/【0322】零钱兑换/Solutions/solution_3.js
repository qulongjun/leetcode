/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode.cn/problems/coin-change/description/
 *
 * algorithms
 * Medium (45.76%)
 * Likes:    2071
 * Dislikes: 0
 * Total Accepted:    489.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 *
 * 示例 2：
 *
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  // 初始值
  dp[0] = 0;

  for (let i = 0; i < dp.length; i++) {
    // 此处要计算 dp[i]， 即要凑到 i 的金额，需要的零钱数量
    for (let coin of coins) {
      // 如果当前要凑到的零钱都小于预备的零钱，则直接返回
      if (i < coin) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  // 因为初始化的时候将所有值都设置了 amount + 1，所以要判断当前是否为初始值，如果是，则返回 -1
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
// @lc code=end
