/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.98%)
 * Likes:    2556
 * Dislikes: 0
 * Total Accepted:    592.4K
 * Total Submissions: 1.7M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 *
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 123
 * 输出：321
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = -123
 * 输出：-321
 *
 *
 * 示例 3：
 *
 *
 * 输入：x = 120
 * 输出：21
 *
 *
 * 示例 4：
 *
 *
 * 输入：x = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 用于存放最终的结果集
  let n = 0;
  // x % 10 -> 获取最后一位数字 x / 10 -> 去掉最后一位数字后的数字
  while (x !== 0) {
    // 123 % 10 -> 3 ， n * 10 -> 往前进一位
    n = n * 10 + (x % 10);
    // 123 / 10 -> 12.3 -> 12
    x = parseInt(x / 10);
  }

  // 判断边界条件
  if (n < Math.pow(2, 31) * -1 || n > Math.pow(2, 31) - 1) {
    return 0;
  }

  return n;
};
// @lc code=end
