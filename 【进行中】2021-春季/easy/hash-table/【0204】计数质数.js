/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (38.38%)
 * Likes:    636
 * Dislikes: 0
 * Total Accepted:    131.8K
 * Total Submissions: 343.3K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 * 示例 2：
 *
 * 输入：n = 0
 * 输出：0
 *
 *
 * 示例 3：
 *
 * 输入：n = 1
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 5 * 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    // 定义一个 HashTable 存放 0 ～ n 所有的数，因为 Array 内传入的是数组长度 n，生成 0 ～ n-1 下标的数组，因此需要 n+1。
  const hashTable = new Array(n + 1).fill(1);
  // 用于存放所有质数的和
  let sum = 0;
  // 0 和 1 不是质数，因此从 2 开始计算
  for (let i = 2; i < n; i++) {
      // 如果当前是质数，则加上 sum
    if (hashTable[i] === 1) {
      sum += hashTable[i];
      // 因为 i 是质数，因此 2i，3i，4i肯定不是质数了，因此只要小于n的 m*i 都不是质数，标记为 0
      for (let j = i + i; j < n; j += i) {
        hashTable[j] = 0;
      }
    }
  }
  
  return sum;
};
// @lc code=end
