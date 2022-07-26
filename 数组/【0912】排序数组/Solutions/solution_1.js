/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 *
 * https://leetcode.cn/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (55.68%)
 * Likes:    622
 * Dislikes: 0
 * Total Accepted:    412.3K
 * Total Submissions: 740.5K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const middleIndex = Math.floor(nums.length / 2);
  const middle = nums.splice(middleIndex, 1)[0];
  let left = [],
    right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < middle) left.push(nums[i]);
    else right.push(nums[i]);
  }
  return sortArray(left).concat([middle], sortArray(right));
};
// @lc code=end
