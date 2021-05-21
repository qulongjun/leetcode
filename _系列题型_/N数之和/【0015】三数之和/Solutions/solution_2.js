/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (32.14%)
 * Likes:    3359
 * Dislikes: 0
 * Total Accepted:    515.3K
 * Total Submissions: 1.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start

// 将三数之和简化为两数之和
// 从 nums 数组的 offset 到 结尾之间，找到全部不重复的可能性，使得 a + b = target
// 本算法可参考：【0167】两数之和_ii_输入有序数组
const twoSum = function (nums, target, offset) {
  // 采用双指针策略，一个从开头找起，一个从末尾找起
  let start = offset + 0,
    end = nums.length - 1;
  // 定义一个结果集，存放全部不重复的二元组
  const result = [];
  // 依次遍历循环查找
  while (start < end) {
    // 计算当前的值
    const current = nums[start] + nums[end];
    // 如果当前值 小于 目标值，则 start 往后走
    if (current < target) start++;
    // 如果当前值 大于 目标值，则 end 往前走
    if (current > target) end--;
    // 如果当前值 等于 目标值，则找到了一个二元组，将其添加到结果集中，start 和 end 分别往前往后走
    if (current === target) {
      result.push([nums[start], nums[end]]);
      start++;
      end--;
    }
    // 下面两行是为了避免找到重复的二元组
    // start 需要和 offset 比较，防止 start 出现小于 offset 的情况
    while (nums[start] === nums[start - 1] && start !== offset) start++;
    while (nums[end] === nums[end + 1]) end--;
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 将数组排序，这样方便找到
  const sortedNum = nums.sort((a, b) => a - b);
  // 定义一个结果集
  const results = [];
  // 首先先确定第一个数，即 nums[i]， 然后再去查找剩下可能性。
  //  注意这里只需要循环到 nums.length - 2,需要留两个位置给后两个元素
  for (let i = 0; i < sortedNum.length - 2; i++) {
    // 因为 nums[i] + X = 0，因此本题简化为查找两数之和为 X 的所有非重复可能性
    // X = -nums[i]
    // 因为不能重复，所以要从当前元素 i 的后面去找
    const twoSumResult = twoSum(sortedNum, -sortedNum[i], i + 1);
    // 将找到的二元组和当前第一个元素合并成一个三元组
    for (let j = 0; j < twoSumResult.length; j++) {
      results.push([sortedNum[i], ...twoSumResult[j]]);
    }
    // 下面一行是为了避免找到重复的三元组，只要第一个数不一样，后面两个数也肯定不一样
    while (sortedNum[i] === sortedNum[i + 1]) i++;
  }
  return results;
};
// @lc code=end
