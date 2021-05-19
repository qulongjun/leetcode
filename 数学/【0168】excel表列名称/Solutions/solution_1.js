/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (38.34%)
 * Likes:    280
 * Dislikes: 0
 * Total Accepted:    37.6K
 * Total Submissions: 97.6K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 *
 * 例如，
 *
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB
 * ⁠   ...
 *
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: "A"
 *
 *
 * 示例 2:
 *
 * 输入: 28
 * 输出: "AB"
 *
 *
 * 示例 3:
 *
 * 输入: 701
 * 输出: "ZY"
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  // 用于存放临时的结果，PS：由于是先计算尾部的，因此默认是倒序的字符串
  let strs = "";
  while (n > 0) {
    // 重点
    n -= 1;
    // 整除计算余数， 65 + 余数即为字母的位置
    strs += String.fromCharCode(65 + (n % 26));
    // 末尾计算完成，需要往前走
    n = parseInt(n / 26);
  }

  return strs.split("").reverse().join("");
};
// @lc code=end
