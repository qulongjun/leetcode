/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 *
 * https://leetcode.cn/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (51.62%)
 * Likes:    1082
 * Dislikes: 0
 * Total Accepted:    297.4K
 * Total Submissions: 574.4K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n' +
  '5'
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 
 * 
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 5
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 20
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= n, m <= 300
 * -10^9 <= matrix[i][j] <= 10^9
 * 每行的所有元素从左到右升序排列
 * 每列的所有元素从上到下升序排列
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  let i = matrix.length - 1,
    j = 0;

  /**
   * 思路：定义一个[i, j] 表示第i个子数组的第j个元素
   * 从左下角开始比较起：
   * 1. 如果当前元素 === target， 则直接返回 true
   * 2. 如果当前元素 < target， 则 j 需要往后走一列
   * 3. 如果当前元素 > target， 则 i 需要往上走一行
   */

  while (matrix[i] && matrix[i][j] !== undefined) {
    // 直接相等，返回 true
    if (matrix[i][j] === target) return true;
    // 当前元素 < target，则第 j 列就不需要比较了
    if (matrix[i][j] < target) {
      j++;
      continue;
    }
    // 当前元素 > target， 则第 i 行就不需要比较了
    if (matrix[i][j] > target) {
      i--;
      continue;
    }
  }

  // 跳出循环，返回 false
  return false;
};
// @lc code=end
