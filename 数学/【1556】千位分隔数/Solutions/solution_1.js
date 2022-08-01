/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 *
 * https://leetcode.cn/problems/thousand-separator/description/
 *
 * algorithms
 * Easy (56.82%)
 * Likes:    22
 * Dislikes: 0
 * Total Accepted:    15.6K
 * Total Submissions: 27.4K
 * Testcase Example:  '987'
 *
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 987
 * 输出："987"
 *
 *
 * 示例 2：
 *
 * 输入：n = 1234
 * 输出："1.234"
 *
 *
 * 示例 3：
 *
 * 输入：n = 123456789
 * 输出："123.456.789"
 *
 *
 * 示例 4：
 *
 * 输入：n = 0
 * 输出："0"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n < 2^31
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  // 特殊 Case
  if (n === 0) return "0";
  let str = "";
  let index = 0;

  // 循环拆解 n
  while (n !== 0) {
    index++;
    // str 往前追加位数
    str = (n % 10) + str;
    n = Math.floor(n / 10);
    // 判断当前的位置，如果已经是三位了，并且 n 还不等于 0，则需要加个千位符
    if (n !== 0 && index === 3) {
      str = "." + str;
      index = 0;
    }
  }
  return str;
};
// @lc code=end
