/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (58.48%)
 * Likes:    1244
 * Dislikes: 0
 * Total Accepted:    456.3K
 * Total Submissions: 780.3K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */

// @lc code=start

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   // 负数始终为 false
//   if (x < 0) return false;
//   // 123 -> '123' -> ['1','2','3'] -> ['3', '2', '1'] -> '321' -> 321
//   return parseInt(x.toString().split("").reverse().join("")) === x;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 暂存一份 x ，防止丢失后无法比较
  const y = x;
  // 负数始终为 false
  if (x < 0) return false;

  // 下面即为常规的求回文数方法，与【0007】整数反转 类似
  let num = 0;

  while (x) {
    num = num * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return y === num;
};

// @lc code=end
