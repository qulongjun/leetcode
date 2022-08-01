/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (53.74%)
 * Likes:    2666
 * Dislikes: 0
 * Total Accepted:    576.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 *
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp[i]： 表示 i 之前最长上升子序列长度
  let dp = new Array(nums.length).fill(1);
  // 当前最长上升子序列长度
  let max = 1;

  // 遍历每一个元素
  for (let i = 1; i < nums.length; i++) {
    // 从头往后找，看看哪个 nums 元素对应的 dp 值最大
    // 因为 dp[j] 表示第 nums[j] 个位置时的最大
    // 所以这个循环的意思是，找到 第 i 个元素之前，看看哪个满足小于 nums[i] 的最长上升子序列
    for (let j = 0; j < i; j++) {
      // 如果满足条件，则计算 dp[i]
      if (nums[j] < nums[i]) {
        // 比较 dp[i] 和 dp[j] + 1 哪个更大
        dp[i] = Math.max(dp[i], dp[j] + 1);
        // 更新 max 值
        max = Math.max(dp[i], max);
      }
    }
  }

  return max;
};
// @lc code=end
