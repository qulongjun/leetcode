/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (72.39%)
 * Likes:    801
 * Dislikes: 0
 * Total Accepted:    147K
 * Total Submissions: 203.1K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 *
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：matrix = [[1]]
 * 输出：[[1]]
 *
 *
 * 示例 4：
 *
 *
 * 输入：matrix = [[1,2],[3,4]]
 * 输出：[[3,1],[4,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * matrix.length == n
 * matrix[i].length == n
 * 1
 * -1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const matrixLength = matrix.length;
  const childLength = matrix[0].length;
  /*
        先上下翻转，再主对角线翻转即可
        [1, 2, 3]       [7, 8, 9]       [7, 4, 1]
        [4, 5, 6]  =>   [4, 5, 6]   =>  [8, 5, 2]
        [7, 8, 9]       [1, 2, 3]       [9, 6, 3]
    */

  for (let i = 0; i < matrixLength / 2; i++) {
    // [i, j] 与 [n - i - 1][j] 互换
    for (let j = 0; j < childLength; j++) {
      [matrix[i][j], matrix[matrixLength - i - 1][j]] = [
        matrix[matrixLength - i - 1][j],
        matrix[i][j],
      ];
    }
  }

  for (let i = 0; i < matrixLength; i++) {
    // [i, j] 与 [j, i]
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
// @lc code=end
