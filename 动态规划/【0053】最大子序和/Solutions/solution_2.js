/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (52.44%)
 * Likes:    2486
 * Dislikes: 0
 * Total Accepted:    337.1K
 * Total Submissions: 642.7K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @description dpTable 里每个元素表示以 nums[i] 结尾的最大连续子序列的和的值
 */
var maxSubArray = function (nums) {
  // 定义一个长度为 nums 的数组，且每个元素值初始为 -Infinity，没有值比它更小，因此在 Math.max 的时候可以更精准比较
  const dpTable = new Array(nums.length).fill(-Infinity);
  // base case
  dpTable[0] = nums[0];
  // 变化条件，需要计算每一个 dpTable 的元素的值，即 nums 里每一个元素的最大连续子数组的和
  for (let i = 1; i < dpTable.length; i++) {
    // 只会有两种情况：要么当前元素比前一个元素大，直接 前一个元素的值 + 当前元素的值，要么当前元素小，直接用当前元素作为最大和的连续子数组
    dpTable[i] = Math.max(nums[i], dpTable[i - 1] + nums[i]);
  }

  // 以下为找出最大值
  let maxCount = -Infinity;
  for (let i = 0; i < dpTable.length; i++) {
    if (dpTable[i] > maxCount) maxCount = dpTable[i];
  }
  
  return maxCount;
};
// @lc code=end
