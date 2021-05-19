/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (63.70%)
 * Likes:    657
 * Dislikes: 0
 * Total Accepted:    95.5K
 * Total Submissions: 149.9K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 *
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 *
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 *
 * 示例:
 *
 *
 * 输入:
 * [4,3,2,7,8,2,3,1]
 *
 * 输出:
 * [5,6]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // 核心思路：因为数组长度为 n，且数组内每个元素的值都在 1 ~ n 之内，因此可以同时增加一个固定的值，比如 n，
  // 则每个元素就是在 n ~ 2n 之间，将数组元素值作为数组的index 索引，依次加上数组的长度 n
  // 然后再次遍历，< n 的索引就是不存在的值，因为没有一个索引指向这个位置
  for (let i = 0; i < nums.length; i++) {
    nums[nums[i] - 1] += nums.length;
  }

  let results = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] < nums.length) {
      results.push(i + 1);
    }
  }

  return results;
};
// @lc code=end
