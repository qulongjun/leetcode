/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 *
 * https://leetcode.cn/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (71.63%)
 * Likes:    341
 * Dislikes: 0
 * Total Accepted:    138.4K
 * Total Submissions: 193.3K
 * Testcase Example:  '"A"'
 *
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
 *
 * 例如：
 *
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: columnTitle = "A"
 * 输出: 1
 *
 *
 * 示例 2:
 *
 *
 * 输入: columnTitle = "AB"
 * 输出: 28
 *
 *
 * 示例 3:
 *
 *
 * 输入: columnTitle = "ZY"
 * 输出: 701
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= columnTitle.length <= 7
 * columnTitle 仅由大写英文组成
 * columnTitle 在范围 ["A", "FXSHRXW"] 内
 *
 *
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let num = 0;
  let multiple = 1;
  const columnList = columnTitle.split("");
  /**
   * 核心公式
   * (1 * 26 * 26 ... * 26) * codeAt + ... + (1) * codeAt
   * 以 ZY 为例：[(1 * 26) * 26] + [(1) * 25]
   */
  for (let i = columnList.length - 1; i >= 0; i--) {
    const count = columnList[i].charCodeAt() - "A".charCodeAt() + 1;
    num = num + multiple * count;
    multiple = multiple * 26;
  }
  
  return num;
};
// @lc code=end
