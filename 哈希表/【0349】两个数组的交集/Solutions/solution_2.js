/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode.cn/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (74.33%)
 * Likes:    584
 * Dislikes: 0
 * Total Accepted:    328.2K
 * Total Submissions: 441.6K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
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
  const map = {};
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] === undefined) {
      map[nums1[i]] = 1;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]] === undefined || map[nums2[j]] === 0) continue;
    result.push(nums2[j]);
    map[nums2[j]] = 0;
  }

  return result;
};
// @lc code=end
