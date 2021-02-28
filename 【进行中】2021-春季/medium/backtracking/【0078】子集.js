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

// 回溯算法参考 [【2020-秋季】子集
var backTracking = function (nums, tracks, results, index) {
  // 触发结束条件
  if (index > nums.length) return;

  // 回溯算法
  for (let i = index; i < nums.length; i++) {
    // 做选择
    tracks.push(nums[i]);
    // 回溯
    backTracking(nums, tracks, results, i + 1);
    // 撤销选择
    tracks.pop();
  }

  // 保存结果集
  results.push([...tracks]);
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let results = [];
  let tracks = [];
  backTracking(nums, tracks, results, 0);
  return results;
};
// @lc code=end
