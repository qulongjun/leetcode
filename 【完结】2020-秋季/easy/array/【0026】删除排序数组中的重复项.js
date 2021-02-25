/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (51.77%)
 * Likes:    1646
 * Dislikes: 0
 * Total Accepted:    430.3K
 * Total Submissions: 831.2K
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
  // 定义两个指针，分别指向 nums 的第一个位置和第二个位置
  let i = 0;
  let j = 1;

  /*
            1 1 1 2 2 2 3 3 3
    第一步   i j->               nums[i] >= nums[j]，j 负责去找第一个比 nums[i] 大的值
    第二步   i     j             此时找到了第一个 nums[i] < nums[j]
    第三步   i x   j             此时 nums[i+1]（记作nums[x]），与 nums[j] 互换位置
    第四步     i   j             i 往前走一步，继续比较下去
    此时     1 2 1 1 2 2 2 2 2   nums[i] >= nums[j]，j 负责去找第一个比 nums[i] 大的值
  */

  // 当 j 走到 nums 尾部时，意味着整个数组都替换完了
  while (j < nums.length) {
    if (nums[i] >= nums[j]) {
      // j 负责去找第一个比 nums[i] 大的值
      j++;
    } else {
      // 互换位置
      const temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;
      // i 往前走一步
      i++;
    }
  }
  // 因为返回的是长度，而 i 为索引，因此需要 +1 后返回。
  return ++i;
};
// @lc code=end
