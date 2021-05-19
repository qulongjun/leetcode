/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 *
 * https://leetcode-cn.com/problems/transpose-matrix/description/
 *
 * algorithms
 * Easy (67.51%)
 * Likes:    190
 * Dislikes: 0
 * Total Accepted:    76.4K
 * Total Submissions: 113.2K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 *
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6]]
 * 输出：[[1,4],[2,5],[3,6]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * 1
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  // 需要考虑边界条件，如果 matrix 不存在，就取不到 itemLength 的长度
  if (matrix.length === 0) return [];

  // 获取每个数组子元素的长度
  const itemLength = matrix[0].length;

  // 坑点：
  // var temp = new Array(3).fill(new Array());
  // temp[0][0] = 1;
  // console.log(temp[1][0]) // 1
  // 当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。因此不能通过这种方式传递一个 new Array 进去
  let results = new Array(itemLength)
    .fill(0)
    .map(() => new Array(matrix.length).fill(0));

  // [i, j]和 [j ,i] 坐标互换位置
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < itemLength; j++) {
      results[j][i] = matrix[i][j];
    }
  }

  // 返回结果集
  return results;
};
// @lc code=end
