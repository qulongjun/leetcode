/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode-cn.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (71.43%)
 * Likes:    735
 * Dislikes: 0
 * Total Accepted:    98.8K
 * Total Submissions: 138.4K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i]
 * 之外其余各元素的乘积。
 *
 *
 *
 * 示例:
 *
 * 输入: [1,2,3,4]
 * 输出: [24,12,8,6]
 *
 *
 *
 * 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
 *
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 *
 * 进阶：
 * 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 思路就是当前 index 左侧所有数字的乘积 * 右侧所有数字的乘积
  // 左侧所有数字的乘积 = 前 index - 2 个所有数字的乘积 * 第 index - 1 位数字
  // 右侧所有数字的乘积 = 后 index + 2 个所有数字的乘积 * 第 index + 1 位数字
  let leftResults = [];
  let rightResults = [];
  let results = [];

  // 第 0 位起始是 1
  leftResults[0] = 1;
  // 从第1位开始，计算前 index 个数字的乘积
  for (let i = 1; i < nums.length; i++) {
    leftResults[i] = leftResults[i - 1] * nums[i - 1];
  }

  rightResults[nums.length - 1] = 1;
  // 从最后1位开始，计算后 index 个数字的乘积
  for (let i = nums.length - 2; i >= 0; i--) {
    rightResults[i] = rightResults[i + 1] * nums[i + 1];
  }

  // 最后左右相乘
  for (let i = 0; i < nums.length; i++) {
    results[i] = leftResults[i] * rightResults[i];
  }

  return results;
};
// @lc code=end
