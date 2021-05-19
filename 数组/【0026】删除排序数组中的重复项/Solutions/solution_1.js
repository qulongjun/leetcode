/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (52.90%)
 * Likes:    1859
 * Dislikes: 0
 * Total Accepted:    541.8K
 * Total Submissions: 1M
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 *
 *
 * 示例 1:
 *
 * 给定数组 nums = [1,1,2],
 *
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例 2:
 *
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 *
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 *
 *
 *
 * 说明:
 *
 * 为什么返回数值是整数，但输出的答案是数组呢?
 *
 * 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 *
 * 你可以想象内部操作如下:
 *
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 *
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // i 用来标识当前需要插入的位置的索引
  // j 用来寻找下一个非重复的元素的索引
  let i = 0,
    j = 1;
  // 当 j 没找到末尾，就继续往下找
  while (j < nums.length) {
    // 如果 i 索引位置和 j 索引位置相同，则 j 继续往前寻找非重复的元素的索引
    if (nums[i] !== nums[j]) {
      // 如果 j 此时不同，则将 j 的值给 i+1，i 表示的是当前已经比较之后的最后一个位置
      nums[i + 1] = nums[j];
      // 当交换完成后，i 需要增加一位
      i++;
    }
    // j 无论如何都需要往前走一步
    j++;
  }
  // 因为返回的是长度，i是从0开始的，因此需要+1
  return i + 1;
};
// @lc code=end
