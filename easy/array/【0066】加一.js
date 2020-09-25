/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.43%)
 * Likes:    547
 * Dislikes: 0
 * Total Accepted:    205.7K
 * Total Submissions: 452.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * @description 题干的意思是，数组中只允许出现 0~9 这几个数字，且首位必非 0，如果 +1 后变成了 10，需要向前进一位，例如 [9, 9] -> [1, 0, 0]
 */
var plusOne = function (digits) {
  // 从末尾往前遍历，查找需要 +1 的元素
  for (let i = digits.length - 1; i >= 0; i--) {
    // 如果当前位数不为9，直接 +1 并且退出，完成查找，前序元素不需要改动
    if (digits[i] !== 9) {
      digits[i]++;
      break;
      // 否则，当前元素为 9， 则将当前元素变成 0 ，前面一位元素需要 +1
    } else {
      digits[i] = 0;
    }
  }
  // 特殊情况：如果首位为0，则表示首位元素之前为 9 ，且第二位元素为 10，首位需要向前 +1
  if (digits[0] === 0) digits.unshift(1);

  return digits;
};
// @lc code=end
