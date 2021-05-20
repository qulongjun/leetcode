/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (57.93%)
 * Likes:    519
 * Dislikes: 0
 * Total Accepted:    219.9K
 * Total Submissions: 379.6K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 *
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1  。
 *
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 *
 *
 * 示例 1：
 *
 *
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 *
 *
 * 示例 3：
 *
 *
 * 输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * -1000
 * numbers 按 递增顺序 排列
 * -1000
 * 仅存在一个有效答案
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 双指针策略，start 指针从头部往后找，end 指针从尾部往前找
  // 因为是有序数组，当前指针元素和 > target 时，end 往前移动一格，当前指针元素和 < target 时，start 往后移动一格，否则直接返回
  // 中止循环条件：要么直接找到并 return，要么 start 指针大于 end 指针，表示没找到
  let start = 0,
    end = numbers.length - 1;
  while (start <= end) {
    // 获取当前指针元素和
    const current = numbers[start] + numbers[end];
    // 小于 target，则 start 往后
    if (current < target) start++;
    // 大于 target，则 end 往前
    if (current > target) end--;
    // 如果相等，直接返回，此处返回位置，而非索引值，因此需要+1
    if (current === target) return [start + 1, end + 1];
  }
  // 没找到
  return [];
};
// @lc code=end
