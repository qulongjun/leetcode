/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.61%)
 * Likes:    637
 * Dislikes: 0
 * Total Accepted:    254.8K
 * Total Submissions: 558.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = [0]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 从数组最后一位 +1，逢 10 进 1 位，使用 isPlusOne 表示前一位是否需要 +1
  let isPlusOne = 0;
  // 先给最后一位 + 1
  digits[digits.length - 1]++;
  // 从末尾起遍历数组中每一项
  for (let i = digits.length - 1; i >= 0; i--) {
    // 当前位的值 = 已有的值 + 进位的值
    let count = digits[i] + isPlusOne;
    // 如果 count > 9，说明还要再往前进位， isPlusOne 标记为 1
    if (count > 9) {
      isPlusOne = 1;
      // 当前位只保留个位数字
      digits[i] = count - 10;
    } else {
      // 如果 count <= 9，则不再往前进位了，循环结束了
      digits[i] = count;
      // 清空一下 isPlusOne，表示不用进位了
      isPlusOne = 0;
      break;
    }
  }

  // 如果整个数组循环结束后，进位标志还为 1 ，说明首位大于 10，需要再往前走一位 [9] => [1, 0]
  if (isPlusOne) digits.unshift(1);

  return digits;
};
// @lc code=end
