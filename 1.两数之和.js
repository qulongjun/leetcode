/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用两个 for 循环，实现不重复计算数组中两个元素之和。
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用一个 for 循环，然后直接去数组中找剩下的数是否存在。
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     const anotherIndex = nums.lastIndexOf(target - nums[i]);
//     // anotherIndex === -1 表示未找到，anotherIndex === 1 表示重复元素使用
//     if (anotherIndex !== -1 && anotherIndex !== i) {
//       return [i, anotherIndex];
//     }
//     continue;
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用一个数组存储补 diff 值，减少一次遍历。
 */
// var twoSum = function (nums, target) {
//   // 使用 tempArr[diff] 来判断当前 nums 数组是否存在这个元素。
//   const tempArr = [];

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     // 如果此时 tempArr[diff] 存在，则证明之前的 `i` 的值为 diff。
//     if (tempArr[diff] !== undefined) {
//       return [tempArr[diff], i];
//     }
//     // 第 i 个元素即为 diff 值
//     tempArr[nums[i]] = i;
//   }
// };

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
