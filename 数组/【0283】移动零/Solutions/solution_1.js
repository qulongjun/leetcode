/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.70%)
 * Likes:    961
 * Dislikes: 0
 * Total Accepted:    315.2K
 * Total Submissions: 494.8K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // index 表示当前非空元素的索引，原始数组是散列的（包含了0）， index 是将 0 剔除后的索引位置
  // zeroCount 表示当前需要在数组尾部补 0 的个数
  let index = 0,
    zeroCount = 0;

  // 遍历整个数组，找出为 0 的个数，记录到 zeroCount 中，方便后续追加 0，如果遇到非 0 的元素，则 index 位置往后移一格，将当前元素赋值到 index 位置
  for (let i = 0; i < nums.length; i++) {
    // 如果不是 0
    if (nums[i] !== 0) {
      // index 为该元素合适的位置， i 之前可能含有 0
      nums[index] = nums[i];
      // index 往前走一格
      index++;
    } else {
      // 否则当前元素为 0，则增加一个
      zeroCount++;
    }
  }

  // 遍历填充 0 ，注意在上述遍历中，index 已经+1了，此处不再+1
  for (let i = 0; i < zeroCount; i++) {
    nums[i + index] = 0;
  }

  return nums;
};
// @lc code=end
