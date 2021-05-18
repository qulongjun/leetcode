/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (73.23%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    100K
 * Total Submissions: 136.6K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 10^4
 * -10^4
 * nums 已按 非递减顺序 排序
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 请你设计时间复杂度为 O(n) 的算法解决本问题
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 定义结果集
  let results = [];

  // 双指针，i 从头往后找， j 从后往前找
  // 因为是升序排列的数组，因此最大元素要么是在第一个，要么是在最后一个，所以要么 i 往后移，要么 j 往前移，再比较 i 和 j 此时的大小
  let i = 0,
    j = nums.length - 1;

  // 结束条件： i 和 j 已经相遇
  while (i <= j) {
    // i 位置的元素平方 < j 位置的元素平方，需要 j 往前走一步
    if (nums[i] * nums[i] < nums[j] * nums[j]) {
      results.unshift(nums[j] * nums[j]);
      j--;
      // 否则 i 往后走一步
    } else {
      results.unshift(nums[i] * nums[i]);
      i++;
    }
  }

  // 返回结果集
  return results;
};
// @lc code=end
