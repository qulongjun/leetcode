/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (68.17%)
 * Likes:    180
 * Dislikes: 0
 * Total Accepted:    54.1K
 * Total Submissions: 79.2K
 * Testcase Example:  '"A"'
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 *
 * 例如，
 *
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28
 * ⁠   ...
 *
 *
 * 示例 1:
 *
 * 输入: "A"
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入: "AB"
 * 输出: 28
 *
 *
 * 示例 3:
 *
 * 输入: "ZY"
 * 输出: 701
 *
 * 致谢：
 * 特别感谢 @ts 添加此问题并创建所有测试用例。
 *
 */

// @lc code=start

// A:1 ,B:2 =>  计算 X 到 A 之间的差值 + 1 即为当前的值
var getCharCode = function (char) {
  return char.charCodeAt() - "A".charCodeAt() + 1;
};

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  // 定义十进制结果集
  let sum = 0;
  // 从后往前遍历26进制字符串，计算方式为： x * 进制的(n-1)次方
  for (let i = s.length - 1; i >= 0; i--) {
    // 获取当前位置
    let char = s[i];
    // 计算当前第几位
    let num = s.length - i - 1;
    // 计算当前位置的十进制结果
    sum += getCharCode(char) * Math.pow(26, num);
  }
  // 返回结果集
  return sum;
};
// @lc code=end
