/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (47.04%)
 * Likes:    844
 * Dislikes: 0
 * Total Accepted:    334K
 * Total Submissions: 709.9K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 *
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 如果 nums 为空或者 nums 第一个元素就比 target 小，直接返回 0
  if (nums.length === 0 || nums[0] > target) return 0;

  // 遍历 nums， 找到 nums[i] === target 或者 > target 的索引
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }

  // 如果 nums 最后一个元素都比 target 小，就是要插入到末尾的位置
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
};
// @lc code=end
