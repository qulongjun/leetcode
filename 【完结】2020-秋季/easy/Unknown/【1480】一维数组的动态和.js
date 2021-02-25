/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 *
 * https://leetcode-cn.com/problems/running-sum-of-1d-array/description/
 *
 * algorithms
 * Easy (86.82%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    42.4K
 * Total Submissions: 48.8K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 *
 * 请返回 nums 的动态和。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,6,10]
 * 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
 *
 * 示例 2：
 *
 * 输入：nums = [1,1,1,1,1]
 * 输出：[1,2,3,4,5]
 * 解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
 *
 * 示例 3：
 *
 * 输入：nums = [3,1,2,10,1]
 * 输出：[3,4,6,16,17]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // 唯一注意点，如果当前 i === 0，则拿不到 result[-1]的值，默认为 0
    result[i] = (result[i - 1] || 0) + nums[i];
  }
  return result;
};
// @lc code=end
