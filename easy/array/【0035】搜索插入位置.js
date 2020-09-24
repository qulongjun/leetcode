/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (46.69%)
 * Likes:    692
 * Dislikes: 0
 * Total Accepted:    252.6K
 * Total Submissions: 541K
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
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 标准的二分查找法，需要记忆
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let max = nums.length - 1;
  while (low <= max) {
    // parseInt 用来防止出现小数
    let mid = low + parseInt((max - low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) max = mid - 1;
    if (nums[mid] < target) low = mid + 1;
  }

  return low;
};
// @lc code=end
