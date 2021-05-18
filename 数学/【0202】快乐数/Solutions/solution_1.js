/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (61.25%)
 * Likes:    541
 * Dislikes: 0
 * Total Accepted:    121.9K
 * Total Submissions: 199.1K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 *
 * 「快乐数」定义为：
 *
 *
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果 可以变为  1，那么这个数就是快乐数。
 *
 *
 * 如果 n 是快乐数就返回 true ；不是，则返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 2
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
// 计算当前 num 值的每项平方和
var getNumber = function (num) {
  let sum = 0;
  // num / 10 -> 会将数每次都缩小 10 倍，直到0
  while (num !== 0) {
    // num % 10 -> 取出最后一位数值
    sum += (num % 10) * (num % 10);
    num = parseInt(num / 10);
  }
  
  return sum;
};
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 用一个快慢指针依次遍历，快指针每次计算2遍，慢指针每次计算1遍，
  // 如果最后 fast === slow === 1 则表示是快乐数，如果最后两个等于其他值，则表示不是快乐数
  let fast = getNumber(n),
    slow = n;
  while (fast !== slow) {
    // fast 走两次
    fast = getNumber(fast);
    fast = getNumber(fast);
    // slow 走一次
    slow = getNumber(slow);
  }
  // 判断 fast 是否为 1
  return fast === 1;
};
// @lc code=end
