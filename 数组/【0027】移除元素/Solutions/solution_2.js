/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode-cn.com/problems/remove-element/description/
 *
 * algorithms
 * Easy (58.78%)
 * Likes:    659
 * Dislikes: 0
 * Total Accepted:    237.4K
 * Total Submissions: 403.8K
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 *
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 *
 *
 *
 * 示例 1:
 *
 * 给定 nums = [3,2,2,3], val = 3,
 *
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 *
 * 示例 2:
 *
 * 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 *
 * 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 *
 * 注意这五个元素可为任意顺序。
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
 * // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 * int len = removeElement(nums, val);
 *
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 定义双指针，一个指向 nums 第一个元素，一个指向 nums 最后一个元素
  let i = 0;
  let j = nums.length - 1;

  /*
    val: 2
               0 1 2 2 3 0 4 2
    第一步      i ->          j  i 往后找，找到第一个 nums[i] === val 的索引
    第二步          i    <-   j  此时需要互换，首先要找到尾部允许交换的 j 的索引（不能把尾部 val 的值换回去）
    第三步          i       j    此时找到了尾部第一个非 val 值的索引，进行互换
               0 1 4 2 3 0 2 2
    第四步          i ->    j    i 往后找，找到下一个 nums[i] === val 的索引

    最后        0 1 4 3 0 2 2 2
                      j i       i > j 的时候退出循环
  */

  // 只要 i 不比 j 大，就可以继续找下去
  while (i <= j) {
    // 从前往后找，没找到就一直找
    if (nums[i] !== val) {
      i++;
    } else {
      // i 找到值为 val 的索引了，该 j 找了
      // 此时 j 有两种可能：1. 找到了 nums[j] !== val；2.没找到 j<=i
      while (nums[j] === val && j > i) {
        j--;
      }
      // 排除第二种情况
      if (j <= i) break;
      // 互换位置
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
    }
  }
  return i;
};
// @lc code=end
