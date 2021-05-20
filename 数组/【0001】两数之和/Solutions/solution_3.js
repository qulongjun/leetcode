/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (51.16%)
 * Likes:    11128
 * Dislikes: 0
 * Total Accepted:    2.1M
 * Total Submissions: 4M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *
 * 你可以按任意顺序返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * -10^9
 * -10^9
 * 只会存在一个有效答案
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // numMap类似格式：{[nums[i]的值： i(索引)]}
  const numMap = new Map();

  // 遍历 nums 中的每一个元素，计算 target - 当前元素 = 剩余的值，并将剩余的值去 Map 中寻找
  // 如果找到了，则取出其索引
  // 如果没找到，则记录一下，方便后续使用

  for (let i = 0; i < nums.length; i++) {
    // 计算 剩余的值
    const diff = target - nums[i];
    // 如果找到了，就返回，没找到，就记录
    if (numMap.get(diff) !== undefined) {
      return [numMap.get(diff), i];
    } else numMap.set(nums[i], i);
  }
};
// @lc code=end
