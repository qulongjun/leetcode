/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (49.41%)
 * Likes:    780
 * Dislikes: 0
 * Total Accepted:    273.5K
 * Total Submissions: 553.5K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自
 * nums2 的元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m + n
 * nums2.length == n
 * 0
 * 1
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 尾插法，nums1 和 nums2 中比较最后一位，比较小的那个插入到 nums1 中的最后位置，m 表示 nums1 中有数据的最后一位
  // i 表示当前需要被插入的位置的索引
  let i = m + n - 1;
  // 当 nums1 的数据和 nums2 的数据都没插入完，则需要依次插入
  // 如果 nums2 数据已经插完了，就结束掉了
  // 如果 nums1 数据已经插完 ，就把 nums2 剩下的数据放到 nums1 的前面
  while (m !== 0 && n !== 0) {
    // nums2 数据更小一些
    if (nums1[m - 1] > nums2[n - 1]) {
      // 就把 nums2 的最后一位插入到 i 的位置
      nums1[i] = nums1[m - 1];
      m--;
    } else {
      // 否则把 nums1 的最后一位插入到 i 的位置
      nums1[i] = nums2[n - 1];
      n--;
    }
    // 无论哪个插入了，i始终往前走一步
    i--;
  }

  // 当 nums1 全部走完后，需要把 nums2 剩下的部分插入到 nums1 中剩下的位置
  if (m === 0) {
    while (n !== 0) {
      nums1[i] = nums2[n - 1];
      n--;
      // 无论哪个插入了，i始终往前走一步
      i--;
    }
  }
};
// @lc code=end
