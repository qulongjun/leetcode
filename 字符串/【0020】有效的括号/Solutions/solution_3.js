/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.62%)
 * Likes:    3383
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.6M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "()"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "()[]{}"
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "(]"
 * 输出：false
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "([)]"
 * 输出：false
 *
 *
 * 示例 5：
 *
 *
 * 输入：s = "{[]}"
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅由括号 '()[]{}' 组成
 *
 *
 */

// @lc code=start

const validMap = {
  "]": "[",
  "}": "{",
  ")": "(",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 定义变量
  // stack： 栈，存放左半边括号
  const stack = [];
  // 定义指针，指向当前比较的位置
  let i = 0;

  // 当前未比较到末尾时，则需要循环比较下去
  while (s[i]) {
    // 如果当前字符是( / [ / {， 则将它推入栈
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    } else if (validMap[s[i]] !== stack.pop()) {
      // 如果当前字符为 ) ] }，则需要将栈中第一个元素取出来，看看是否是左半边
      // 如果不是，则匹配不成功，返回 false
      return false;
    }
    // 指针往前走一步
    i++;
  }

  // 最后需要判断一下栈是否空了
  return stack.length === 0;
};
// @lc code=end
