/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode.cn/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (64.04%)
 * Likes:    1671
 * Dislikes: 0
 * Total Accepted:    818K
 * Total Submissions: 1.3M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [0]
 * 输出: [0]
 *
 *
 *
 * 提示:
 *
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你能尽量减少完成的操作次数吗？
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;

  /**
   * 双指针操作，定义 i，j 指针， i：实际比较位置， j： 后续寻找非零位置
   * 1. 从头到尾依次比较过去，判断 nums[i] 是否为0，不为 0 则往前走
   * 2. 如果 nums[i] 为 0，则需要互换位置，将 j 定位到 i 后面一个位置
   * 3. j 从 i+1 位置开始找，找到第一个非零的元素
   * 4. 如果没找到，则说明已经互换到头了，直接返回即可
   * 5. 如果找到了，则直接执行互换流程。
   */

  while (i < nums.length) {
    if (nums[i] === 0) {
      j = i + 1;

      while (j < nums.length) {
        if (nums[j] !== 0) break;
        j++;
      }

      if (j >= nums.length) return nums;
      else {
        const temp = nums[j];
        nums[j] = 0;
        nums[i] = temp;
      }
    }
    i++;
  }

  return nums;
};
// @lc code=end
