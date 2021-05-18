/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (45.20%)
 * Likes:    1041
 * Dislikes: 0
 * Total Accepted:    152.8K
 * Total Submissions: 338.2K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 *
 * 示例:
 *
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 *
 * 说明:
 *
 *
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n^2) 。
 *
 *
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 *
 */

// @lc code=start

const dp = (nums) => {
  // 定义一个长度正好等于 nums 的数组，由于最长上升子序列最少为自己，因此至少为 1，故填充 1
  const dpTable = new Array(nums.length).fill(1);
  // 需要将 dpTable 每一个都计算出来，自底向上计算，先计算 dpTable[0] -> dpTable[1] -> ... -> dpTable[i]
  // dpTable[i] 如何计算？dpTable[n] 表示以 nums[n] 结尾的最长上升子序列个数为 x，如果 nums[i] > nums[n],只需要把 nums[n] + 1 即可表示当前的最长个数
  for (let i = 0; i < dpTable.length; i++) {
    // 比较从 0 ~ j 的前面全部元素，表示以 nums[j] 为结尾的最长上升子序列的个数
    for (let j = 0; j < i; j++) {
      // 如果当前的元素比之前的大，只需要比较当前元素个数和（之前个数 + 1）哪个大即可
      if (nums[i] > nums[j]) {
        dpTable[i] = Math.max(dpTable[i], dpTable[j] + 1);
      }
    }
  }

  // 以下为找出 dpTable 的最大值
  let maxCount = 0;

  for (let i = 0; i < dpTable.length; i++) {
    if (maxCount < dpTable[i]) maxCount = dpTable[i];
  }

  return maxCount;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  return dp(nums);
};
// @lc code=end
