/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 *
 * https://leetcode-cn.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (59.64%)
 * Likes:    370
 * Dislikes: 0
 * Total Accepted:    111K
 * Total Submissions: 186.1K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 *
 *
 *
 * 进阶：
 *
 *
 * 你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,0,1]
 * 输出：2
 * 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：2
 * 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 *
 * 示例 3：
 *
 *
 * 输入：nums = [9,6,4,2,3,5,7,0,1]
 * 输出：8
 * 解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
 *
 * 示例 4：
 *
 *
 * 输入：nums = [0]
 * 输出：1
 * 解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1
 * 0
 * nums 中的所有数字都 独一无二
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 定义一个定长的hashTable，并填充 -1，遍历 nums 中每一项，将数组项作为 hashTable 的索引，并将结果更新为1
  // 最终遍历后结果还是 -1 的就是没被使用的值
  let hashTable = new Array(nums.length + 1).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = 1;
  }
  return hashTable.findIndex((item) => item === -1);
};
// @lc code=end
