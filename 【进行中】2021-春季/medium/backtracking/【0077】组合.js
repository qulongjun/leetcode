/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (76.61%)
 * Likes:    530
 * Dislikes: 0
 * Total Accepted:    144.5K
 * Total Submissions: 188.6K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 示例:
 *
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 */

// @lc code=start

// 回溯算法
var backTracking = function (results, dataSource, tracks, arrCount, index) {
  // 定义结束条件：当前 tracks 结果的长度 === arrCount
  if (tracks.length === arrCount) {
    results.push([...tracks]);
    return;
  }
  // 遍历 dataSource，查找下一个符合条件的元素进入 tracks
  // 因为不能重复，所以需要在参数中保存一个 index，表示下次查找开始的位置
  for (let i = index; i < dataSource.length; i++) {
    // 进入 tracks
    tracks.push(dataSource[i]);
    // 回溯算法
    backTracking(results, dataSource, tracks, arrCount, i + 1);
    // 回头
    tracks.pop();
  }
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 定义回溯算法需要使用的数据源 dataSource
  let dataSource = [];
  // 生成 n 个数组元素的数据源
  for (let i = 0; i < n; i++) {
    dataSource.push(i + 1);
  }
  // 定义结果集
  let results = [];
  // 回溯
  backTracking(results, dataSource, [], k, 0);
  // 返回结果集
  return results;
};
// @lc code=end
