/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (47.00%)
 * Likes:    340
 * Dislikes: 0
 * Total Accepted:    203.4K
 * Total Submissions: 432.8K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *d
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */

// @lc code=start
let isValid = function (s) {
  return ("a" <= s && s <= "z") || ("0" <= s && s <= "9");
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 因为大小写比较会错误，因此全部转成小写处理
  s = s.toLowerCase();

  // 前后双指针进行比较，当前指针指向的非数字非字母，则往前/往后进一位
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    // 暂存一下当前的结果
    let first = s[i],
      last = s[j];

    // 如果 first 和 last 都是标准字符
    if (isValid(first) && isValid(last)) {
      // 则比较值是否一样，不一样直接返回 false
      if (first !== last) return false;
      // 如果一样，则比较下一位
      i++;
      j--;
      // 如果 first 不是标准字符，则往后走一步
    } else if (!isValid(first)) {
      i++;
      // 如果 last 不是标准字符，则往前走一步
    } else if (!isValid(last)) {
      j--;
    }
  }

  // 如果 i >= j，表示比较结束，返回 true
  return true;
};
// @lc code=end
