/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.79%)
 * Likes:    914
 * Dislikes: 0
 * Total Accepted:    266.5K
 * Total Submissions: 411.4K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 示例 1:
 *
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 * 说明:
 *
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 *
 */

// @lc code=start

// 一个标准的快排方案（二分），时间复杂度 O(NlogN)，最好 O(NlogN)，最差(O(N^2))
var fastSort = function (arr) {
  // 结束条件，不能再往下拆分了
  if (arr.length <= 1) {
    return arr;
  } else {
    // 找到中间一位的索引
    let middleIndex = Math.floor(arr.length / 2);
    // 找到中间的元素值，arr 中每一个都和中间的相比，比中间大的，放在 left 中，比中间小的，放在 right 中
    let middle = arr.splice(middleIndex, 1);
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
      // 下面的 left 和 right 互换就是从小到大排序，目前从大到小
      if (arr[i] > middle) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // 递归调用 fastSort 进行二分，最后合并成一个数组
    return fastSort(left).concat(middle, fastSort(right));
  }
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return fastSort(nums)[k - 1];
};
// @lc code=end
