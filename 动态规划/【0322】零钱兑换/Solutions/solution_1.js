/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (43.18%)
 * Likes:    1233
 * Dislikes: 0
 * Total Accepted:    219.1K
 * Total Submissions: 506.9K
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
 * 示例 4：
 *
 *
 * 输入：coins = [1], amount = 1
 * 输出：1
 *
 *
 * 示例 5：
 *
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
 * 1
 * 1
 * 0
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
  // dpTable[i]定义：当目标金额为 i 时，至少需要 dpTable[i] 个硬币才能兑换出
  let dpTable = new Array(amount + 1).fill(amount + 1);

  // base case：目标金额为 0 时， 需要的硬币数也是 0
  dpTable[0] = 0;

  // 当目标金额从 0 开始，依次变大到 amount
  for (let i = 0; i < dpTable.length; i++) {
    // 做选择，每次都要选一个硬币出来，然后比较当前已有的最少硬币个数和 i - coin 位置的硬币个数 + 1 的数量
    // dpTable[i - coin]：因为 i 表示目标金额， coin 表示当前做的选择， i - coin 表示已经比较完成的数量
    for (let coin of coins) {
      if (i < coin) continue;
      // 比较最小值的话，一般会初始化一个最大值，此处为 amount + 1
      dpTable[i] = Math.min(dpTable[i], 1 + dpTable[i - coin]);
    }
  }

  // 处理一些边界条件
  return dpTable[amount] === amount + 1 ? -1 : dpTable[amount];
};
// @lc code=end
