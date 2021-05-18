/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (53.92%)
 * Likes:    456
 * Dislikes: 0
 * Total Accepted:    174.3K
 * Total Submissions: 323.2K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 *
 *
 * 示例 2:
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 * 进阶：
 *
 *
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 本题和 349 的区别是本题不涉及去重，如果 nums1 和 nums2 里分别有俩个相同的值，则交集中包含了这俩相同的值
// 整体思路类似，区别是最后 nums2 遍历时，如果当前 hashTable 保存的值 > 1,则 将值 -1 后，方便后续的比较
var intersect = function (nums1, nums2) {
  let hashTable = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!hashTable[nums1[i]]) {
      hashTable[nums1[i]] = 1;
    } else hashTable[nums1[i]]++;
  }

  return nums2.filter((item) => {
    if (hashTable[item]) {
      hashTable[item]--;
      return true;
    }
    return false;
  });
};
// @lc code=end
