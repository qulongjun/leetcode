/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (79.49%)
 * Likes:    989
 * Dislikes: 0
 * Total Accepted:    194.5K
 * Total Submissions: 244.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 *
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0]
 * 输出：[[],[0]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10
 * nums 中的所有元素 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯算法
// [] => [1] => [1, 2] => [1, 2, 3]（不能重复，所以不能将[2, 3]同时作为备选节点）
var backTracking = function (nums, tracks, results, index) {
  // 结束条件，当查找路径 index 索引超过 nums 的长度的时候，就结束了
  // 为什么不是 index >= nums.length：因为回溯的上次传入的 index 是 (i+1)，因此当 index === nums.length 的时候，是最后一个全集。
  // 当 index === nums.length：tracks === [1, 2, 3]
  if (index > nums.length) return;

  // 回溯，因为不能重复追加备选节点，因此需要增加一个 index，用来存放当前走到哪一个节点了，只能添加该节点往后的节点
  for (let i = index; i < nums.length; i++) {
    // 将当前结果加入路径中
    tracks.push(nums[i]);
    // 回溯
    backTracking(nums, tracks, results, i + 1);
    // 回头
    tracks.pop();
  }
  // 将当前路径加入结果集
  results.push([...tracks]);
};

var subsets = function (nums) {
  // 定义结果集
  let results = [];
  // 定义临时存放回溯路径
  let tracks = [];
  // 调用回溯
  backTracking(nums, tracks, results, 0);
  // 返回结果集
  return results;
};
// @lc code=end
