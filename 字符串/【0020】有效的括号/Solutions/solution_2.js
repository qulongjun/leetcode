/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.04%)
 * Likes:    1869
 * Dislikes: 0
 * Total Accepted:    418.7K
 * Total Submissions: 972.7K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 括号匹配映射关系
  const matchMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // 用一个 Stack 存放满足要求的左括号。
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // 如果命中左边括号，就把括号放入 Stack
    if (["(", "[", "{"].includes(s[i])) {
      stack.push(s[i]);
      // 如果当前字符不是左括号，就通过匹配映射关系查找当前对应的左括号和上次最后插入到 Stack 里的左括号
    } else if (matchMap[s[i]] === stack[stack.length - 1]) {
      // 如果一致，说明两个括号匹配，则当前括号校验完成
      stack.pop();
    } else {
      // 如果不一致，则直接返回 false
      return false;
    }
  }
  // 如果 Stack 为空，则证明全部比较完成，全部匹配成功
  return stack.length === 0;
};
// @lc code=end
