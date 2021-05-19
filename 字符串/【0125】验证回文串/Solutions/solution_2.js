/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.41%)
 * Likes:    278
 * Dislikes: 0
 * Total Accepted:    165.3K
 * Total Submissions: 356.2K
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
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  j = s.length - 1;

  while (i < j) {
    // 排除掉不是 a～z A~Z 0~9 的字符
    if (
      !(
        (s[i] <= "z" && s[i] >= "a") ||
        (s[i] <= "Z" && s[i] >= "A") ||
        (s[i] <= "9" && s[i] >= "0")
      )
    ) {
      i++;
      continue;
    }
    // 排除掉不是 a～z A~Z 0~9 的字符
    if (
      !(
        (s[j] <= "z" && s[j] >= "a") ||
        (s[j] <= "Z" && s[j] >= "A") ||
        (s[j] <= "9" && s[j] >= "0")
      )
    ) {
      j--;
      continue;
    }
    // 直接比较是否相等，如果相等，继续比较
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++;
      j--;
    } else {
      // 如果不相等，直接返回
      break;
    }
  }

  // 判断是比较完成的，还是提前结束的
  return i >= j;
};
// @lc code=end
