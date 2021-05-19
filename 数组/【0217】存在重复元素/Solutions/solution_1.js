/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *
 * https://leetcode-cn.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (55.12%)
 * Likes:    365
 * Dislikes: 0
 * Total Accepted:    236.4K
 * Total Submissions: 428.8K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给定一个整数数组，判断是否存在重复元素。
 *
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: [1,2,3,1]
 * 输出: true
 *
 * 示例 2:
 *
 *
 * 输入: [1,2,3,4]
 * 输出: false
 *
 * 示例 3:
 *
 *
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 如果 hashTable 中已经存在了某个值，就表示重复了
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      return true;
    } else hashTable[nums[i]] = 1;
  }
  return false;
};
// @lc code=end
