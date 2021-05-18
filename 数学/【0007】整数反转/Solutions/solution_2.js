/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.67%)
 * Likes:    2207
 * Dislikes: 0
 * Total Accepted:    471.6K
 * Total Submissions: 1.4M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 用于计算最终输出值
  let num = 0;

  // x % 10 -> 获取当前 x 的最后一位数字
  // parseInt(x / 10) -> 获取当前 x 前面的数字（非最后一位）
  while (x) {
    num = num * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return num <= Math.pow(2, 31) - 1 && num >= Math.pow(2, 31) * -1 ? num : 0;
};
// @lc code=end
