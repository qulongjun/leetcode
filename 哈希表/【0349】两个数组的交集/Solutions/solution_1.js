/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (73.56%)
 * Likes:    330
 * Dislikes: 0
 * Total Accepted:    159.5K
 * Total Submissions: 216.8K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 定义一个 hashTable 存放 nums1 里访问过的数据，然后在 nums2 里又被访问到了，说明是交集
  let nums = [];

  // 第一次遍历，将 nums1 数据塞到 hashTable 里
  for (let i = 0; i < nums1.length; i++) {
    if (!nums[nums1[i]]) {
      nums[nums1[i]] = 1;
    }
  }
  // 这里其实是第二次遍历，在遍历之前，先去重，然后再过滤掉 hashTable 里不存在到元素
  return [...new Set(nums2)].filter((item) => nums[item]);
};
// @lc code=end
