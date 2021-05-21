/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.95%)
 * Likes:    779
 * Dislikes: 0
 * Total Accepted:    217.1K
 * Total Submissions: 472.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 *
 *
 * 示例：
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start

/**
 * 求最接近 target 的两数之和
 * @param {*} nums 排序后的数组
 * @param {*} target 目标值
 * @param {*} offset 偏移量
 * @returns 返回两数之和
 */
const twoSumClosest = function (nums, target, offset) {
  // 两数之和采用首位指针相向而行的方法，依次比较当前两个指针之和与 target 的值是否更接近，如果更接近，则记录下来，最后返回或者由更接近的替换
  let start = offset,
    end = nums.length - 1;
  // 用来记录当前最接近的值
  let prev = nums[start] + nums[end];

  // 两个指针一起移动
  while (start < end) {
    // 计算当前指针对应的元素值
    const current = nums[start] + nums[end];
    // 比较两者之间哪个与 target 更接近：1. 上个值 prev 之和 和 当前值之和。
    // 如果当前两个元素之和更接近，则更新 prev
    if (Math.abs(prev - target) >= Math.abs(current - target)) {
      prev = current;
    }
    // 更新 start 和 end，方便找下一个
    if (current < target) start++;
    if (current > target) end--;
    // 如果值直接相等了，则不用找了，没有比它更接近的了
    if (current === target) break;
  }

  return prev;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 先排序
  const sortedNum = nums.sort((a, b) => a - b);
  // 初始化一个比较值，第一个元素 + 后 N个元素中找出两数之和等于 target - 第一个元素 的值
  let closest =
    sortedNum[0] + twoSumClosest(sortedNum, target - sortedNum[0], 1);

  // 依次遍历，看看能否更新 cloest 变量
  for (let i = 1; i < sortedNum.length - 2; i++) {
    // 计算当前的值
    const current =
      sortedNum[i] + twoSumClosest(sortedNum, target - sortedNum[i], i + 1);
    // 如果当前的值更接近，则更新 closest
    if (Math.abs(target - closest) > Math.abs(target - current)) {
      closest =
        sortedNum[i] + twoSumClosest(sortedNum, target - sortedNum[i], i + 1);
    }
  }
  // 返回最接近的值
  return closest;
};
// @lc code=end
