/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (76.99%)
 * Likes:    1119
 * Dislikes: 0
 * Total Accepted:    252.2K
 * Total Submissions: 325.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯方法，第一个参数为全集可选的数据源，第二个参数为临时的回溯路径，比如[1] / [1, 3]
var backtrack = function (nums, track, results) {
  // 结束当前回溯条件：回溯路径的长度等于数据源的长度
  if (nums.length === track.length) {
    // 将回溯的路径追加到结果数组中，需要注意 JS 由于 track 是引用类型，因此需要进行一个拷贝，否则为空数组
    results.push([...track]);
    // 结束当前回溯
    return;
  }

  // 这个循环用于找出还没加入到回溯路径中的数据源
  for (let i = 0; i < nums.length; i++) {
    // 如果当前节点已经加入到了回溯路径了，说明是已经走过了的，就忽略掉，只需要找没走过的
    if (track.includes(nums[i])) continue;
    // 将没走过的节点加入到回溯路径中，组成新的路径：[xxx, 新加入的节点]
    track.push(nums[i]);
    // 调用回溯方法查找后续的节点
    backtrack(nums, track, results);
    // 回溯结束之后，需要撤销最后一个加入的节点，才能继续往下走
    track.pop();
  }
};

var permute = function (nums) {
  // 定义一个临时存放回溯结果的数组
  // [] => [[1, 2, 3]] => [[1, 2, 3], [1, 3, 2]]
  let results = [];
  // 定义一个临时存放回溯路径的数组
  // [] => [1] => [1, 2] => [1,2,3]
  let track = [];
  // 调用回溯方法计算路径
  backtrack(nums, track, results);
  // 返回结果
  return results;
};
// @lc code=end
