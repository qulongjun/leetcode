/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 *
 * https://leetcode-cn.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (62.46%)
 * Likes:    1215
 * Dislikes: 0
 * Total Accepted:    325K
 * Total Submissions: 520.3K
 * Testcase Example:  '"III"'
 *
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 *
 *
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V +
 * II 。
 *
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数
 * 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 *
 *
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 *
 *
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: "III"
 * 输出: 3
 *
 * 示例 2:
 *
 *
 * 输入: "IV"
 * 输出: 4
 *
 * 示例 3:
 *
 *
 * 输入: "IX"
 * 输出: 9
 *
 * 示例 4:
 *
 *
 * 输入: "LVIII"
 * 输出: 58
 * 解释: L = 50, V= 5, III = 3.
 *
 *
 * 示例 5:
 *
 *
 * 输入: "MCMXCIV"
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
 * 题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内
 * 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
 * IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。
 * 关于罗马数字的详尽书写规则，可以参考 罗马数字 - Mathematics 。
 *
 *
 */

// @lc code=start
let HashMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 自左向右遍历 s，如果当前位置的值 大于等于 后一个位置的值，则 count 加上当前位置的值，否则 count 减去当前位置的值
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    // 存放当前位置和下一个位置的值
    let cur = HashMap[s[i]],
      next = HashMap[s[i + 1]];
    // 如果当前位置的值 >= 下一个位置的值，count 就加上当前位置的值
    if (cur >= next) {
      count += cur;
      // 否则就减掉
    } else count -= cur;
  }
  // 因为上面的循环只比较到s.length - 2 的位置，因此最后一个元素需要追加到 count 上
  count += HashMap[s[s.length - 1]];
  // 返回结果集
  return count;
};
// @lc code=end
