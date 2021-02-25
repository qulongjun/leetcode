/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (69.85%)
 * Likes:    451
 * Dislikes: 0
 * Total Accepted:    149.5K
 * Total Submissions: 214K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // 定义一个结果集
  const results = [];
  // 需要创建 numRows 层，肯定要遍历这么多遍
  for (let i = 0; i < numRows; i++) {
    // 先将准备遍历的这一层所有位置都填充为 1，后续再依次覆盖
    // 其中第一个位置和最后一个位置始终是 1 不再覆盖
    // 第 n 行共有 n + 1 个位置需要填充
    let currentArr = new Array(i + 1).fill(1);
    // 对当前行进行依次遍历计算实际的值，其中第 1 个和最后 1 个不参与计算
    for (let j = 1; j < currentArr.length - 1; j++) {
      // 找规律，每个数是它左上方和右上方的数的和。
      currentArr[j] = results[i - 1][j - 1] + results[i - 1][j];
    }
    // 将当前行推到整个结果集中
    results.push(currentArr);
  }
  // 返回结果集
  return results;
};
// @lc code=end
