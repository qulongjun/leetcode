/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode-cn.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (71.39%)
 * Likes:    718
 * Dislikes: 0
 * Total Accepted:    96.4K
 * Total Submissions: 135K
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
  /*
    主要思路是错位相乘，该元素前面所有元素的乘积 * 该元素后面所有元素的乘积 = 答案
    1. 该元素前面的乘积 = 上一个元素结果（上一个元素的前面的乘积） * 上一个元素的值
    2. 改元素后面的乘积 = 后一个元素结果（后一个元素的后面的乘积） * 后一个元素的值
    例如 nums = [1, 2, 3, 4, 5, 6, 7]，若target = 4，
    该元素前面的乘积 results[3] = 第 3 个元素的结果 * nums[3]
    该元素后面的乘积 results[5] = 第 5 个元素的结果 * nums[5]
    最终 target = 4 的结果为 results[3] * results[5]
  */

  // 定义一个空数组存放最终结果集
  let results = [];
  // 遍历每一个元素的前一个元素之前的乘积 * 前一个元素的值
  for (let i = 0; i < nums.length; i++) {
    // 比如当前是第 i 个元素，则先算出 1*2*3*...* i-1 个的乘积，再乘以 i 的值
    // 特殊情况，i = 0 的时候前一个不存在，所以设置为 1 （1 乘以任何数都不变）
    if (i === 0) {
      results[0] = 1;
      continue;
    }
    // results[i] 表示第i个元素的乘积，results[i - 1]表示前 i - 1 个乘积的值
    results[i] = results[i - 1] * nums[i - 1];
  }

  // 定义一个临时变量用来存放后面的计算乘积值
  let temp;
  // 同前面的，这波从后面开始计算
  for (let j = nums.length - 1; j >= 0; j--) {
    // 最后一个单独处理，和前面一样，设置为 1
    if (j !== nums.length - 1) {
      // 此时 temp 表示后面一位的乘积之值 * 当前的值
      temp *= nums[j + 1];
    } else {
      temp = 1;
    }
    // 最终将前后两个乘积相乘就是结果
    results[j] *= temp;
  }
  
  // 返回结果集
  return results;
};
// @lc code=end
