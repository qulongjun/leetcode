/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (40.35%)
 * Likes:    856
 * Dislikes: 0
 * Total Accepted:    181.4K
 * Total Submissions: 449.5K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：答案中不可以包含重复的四元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [], target = 0
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 * -10^9
 *
 *
 */

// @lc code=start

/**
 * 下述是一个 N数之和 的通用函数（N >= 2）
 * @param {*} nums 待查找数组，已排过序
 * @param {*} target 目标值
 * @param {*} offset 当前 m 个元素之和的起始偏移量
 * @param {*} m 当前需要查找的 m 数之和
 * @returns m 数之和所有可能的解
 */
const nTarget = function (nums, target, offset, m) {
  // 定义一个结果集，存放当前 m 数之和的所有解法
  const results = [];
  // 边界条件，当 m < 2 或者 nums 数组的长度都不够分的时候，直接返回空
  if (m < 2 || nums.length < m) return [];
  // 如果当前求的两数之和，则直接最简单用相对双指针完成求解过程
  if (m === 2) {
    // 定义一个起始的指针和结束的指针
    // 起始指针指向偏移量开始的位置
    // 结束指针指向数组长度
    let start = offset,
      end = nums.length - 1;
    // 前后两个指针一起挪动
    while (start < end) {
      // 当前两个指针指向的元素之和
      const current = nums[start] + nums[end];
      // 如果 当前元素之和 小于 target， 则 start 往后走一步
      if (current < target) start++;
      // 如果 当前元素之和 大于 target， 则 end 往前走一步
      if (current > target) end--;
      // 如果两者相等，则记录下当次的元素值，并将指针各自挪动一个位置（防止重复）
      if (current === target) {
        results.push([nums[start], nums[end]]);
        start++;
        end--;
      }
      // 下面两行是为了避免找到重复的二元组
      // start 需要和 offset 比较，防止 start 出现小于 offset 的情况
      while (nums[start] === nums[start - 1] && start !== offset) start++;
      while (nums[end] === nums[end + 1]) end--;
    }
  } else {
    // 如果当前求 m数之和（m>2），则需要进行一个递归求解
    // 主要思路为：
    // n 数之和 = 第一个元素 + n-1 数之和 = 第一个元素 + (第一个元素 + n-2 数之和) ... = 第一个元素 + (第一个元素 + (第一个元素 + ... + ( 第一个元素 + 2 数之和)))
    for (let i = offset; i < nums.length - (m - 1); i++) {
      // 获取当前值
      let count = nums[i];
      // 此处递归求解 n-1数之和
      const totalResult = nTarget(nums, target - count, i + 1, m - 1);
      // 遍历 n-1数之和 的结果，将第一个元素塞进去，并将结果存到结果集中，即 m数之和
      for (let r = 0; r < totalResult.length; r++) {
        results.push([count, ...totalResult[r]]);
      }
      // 防止第一个元素的重复
      while (nums[i] === nums[i + 1]) i++;
    }
  }
  // 返回最终结果集
  return results;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // 数据需要先排序
  const sortedNums = nums.sort((a, b) => a - b);
  return nTarget(sortedNums, target, 0, 4);
};
// @lc code=end
