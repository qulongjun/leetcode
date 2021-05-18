/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (41.42%)
 * Likes:    845
 * Dislikes: 0
 * Total Accepted:    139.3K
 * Total Submissions: 336.3K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 *
 * 示例 2：
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 *
 * 示例 3：
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 * 示例 4：
 *
 * 输入：coins = [1], amount = 1
 * 输出：1
 *
 *
 * 示例 5：
 *
 * 输入：coins = [1], amount = 2
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 2^31 - 1
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
  // 初始化 amount+1 个元素的数组，用于存放前 amount 个数量，自底向上
  // 凑成 amount 金额的硬币数最多只可能等于 amount（全用 1 元面值的硬币），
  // 所以初始化为 amount + 1 就相当于初始化为正无穷，便于后续取最小值
  const caches = new Array(amount + 1).fill(amount + 1);
  // base case
  caches[0] = 0;
  // 从凑 0 元硬币开始，直到凑 amount 元硬币截止
  for (let i = 0; i < caches.length; i++) {
    // 求所有选择的最小值，遍历所有可能的硬币种类
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      // 如果当前需要凑的金额已经小于当前硬币的值，则直接跳过，不可能凑到
      if (i - coin < 0) continue;
      // 否则就比较当前现在的值，和 之前的钱 + 1，哪个值比较小
      caches[i] = Math.min(caches[i], 1 + caches[i - coin]);
    }
  }

  // 如果所求的 amount 对应的数量为初始化时候的值，则表示没有找到合适的数量
  if (caches[amount] === amount + 1) {
    return -1;
  }
  return caches[amount];
};
// @lc code=end
