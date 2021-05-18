/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (48.69%)
 * Likes:    633
 * Dislikes: 0
 * Total Accepted:    212.3K
 * Total Submissions: 436K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *
 *
 *
 * 说明:
 *
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *
 *
 *
 * 示例:
 *
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出: [1,2,2,3,5,6]
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
  /**
   * 定义两个指针 i, j，分别指向 num1 和 num2 的当前索引，如果 num1 < num2，则 i++
   * 如果 num1 >= num2，则需要把 num1 从 i 到 m+j 之间所有的为止均往后挪一个位置
   * 把 num2[j] 的元素塞到空出来的 num1[i] 的位置
   *
   * 如果 num1 跑到底都没能把 num2 全部插完，就把 num2 剩下的全部插到后面
   *
   */
  let i = 0,
    j = 0;

  // 结束条件：nums2 全部被插完了
  while (j < n && i < m + j) {
    // 如果 nums1 当前位置的元素 小于 nums2 当前位置的元素，就往后继续找合适的插入位置
    if (nums1[i] < nums2[j]) {
      i++;
      // 否则表示当前位置的元素已经 大于 nums2 当前位置的元素，需要往后挪一下了
    } else {
      // 往后挪
      for (let x = m + j; x > i; x--) {
        nums1[x] = nums1[x - 1];
      }
      // 挪完后，直接插入
      nums1[i] = nums2[j];
      j++;
      i++;
    }
  }

  // 如果插入一遍后发现 nums2 还有元素，就直接把他们插入 nums1 的尾部
  for (; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
};
// @lc code=end
