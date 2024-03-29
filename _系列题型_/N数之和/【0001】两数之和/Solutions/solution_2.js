/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.42%)
 * Likes:    9195
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.8M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 和上一个方案类似，采用 Map 提高查找效率。
 */
var twoSum = function (nums, target) {
    // 使用 tempArr[diff] 来判断当前 nums 数组是否存在这个元素。
    const tempMap = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      // 如果此时 tempArr[diff] 存在，则证明之前的 `i` 的值为 diff。
      if (tempMap.get(diff) !== undefined) {
        return [tempMap.get(diff), i];
      }
      // 第 i 个元素即为 diff 值
      tempMap.set(nums[i], i);
    }
  };
  
  // @lc code=end
  
