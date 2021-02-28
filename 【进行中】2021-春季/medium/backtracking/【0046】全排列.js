/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (77.64%)
 * Likes:    1156
 * Dislikes: 0
 * Total Accepted:    260.6K
 * Total Submissions: 335.7K
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

// 参考【2020-秋季】全排列
var backTracking = function (nums, tracks, results) {
  // 终止条件是 track 的长度 === 原数组 nums 的长度
  if (tracks.length === nums.length) {
    results.push([...tracks]);
    return;
  }

  // 回溯
  for (let i = 0; i < nums.length; i++) {
    // 排除不合理的选择
    if (tracks.includes(nums[i])) continue;
    // 做选择
    tracks.push(nums[i]);
    // 回溯
    backTracking(nums, tracks, results, i + 1);
    // 撤销
    tracks.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let results = [];
  let tracks = [];
  backTracking(nums, tracks, results);
  return results;
};
// @lc code=end
