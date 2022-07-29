/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode.cn/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (45.21%)
 * Likes:    1641
 * Dislikes: 0
 * Total Accepted:    881.5K
 * Total Submissions: 2M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 *
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 为 无重复元素 的 升序 排列数组
 * -10^4 <= target <= 10^4
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
  let left = 0,
    right = nums.length - 1;

  /**
   * 双指针模式
   * left - nums 从 0 开始往后
   * right - nums 从 最后一个 往前
   *
   * 当 left 不大于 right 的时候，执行循环
   * 1. 找到中间位置（二分法） left + Math.floor((right - left) / 2)（防止溢出）
   * 2. 如果中间位置 middle > target， 则将 right 放在 middle 前面一位
   * 3. 反之将 left 放在 middle 后面一位
   */

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else return middle;
  }
  return right + 1;
};
// @lc code=end
