/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode.cn/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.91%)
 * Likes:    554
 * Dislikes: 0
 * Total Accepted:    385.7K
 * Total Submissions: 822.3K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 解释："amanaplanacanalpanama" 是回文串
 *
 *
 * 示例 2:
 *
 *
 * 输入: "race a car"
 * 输出: false
 * 解释："raceacar" 不是回文串
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 字符串 s 由 ASCII 字符组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;

  /**
   * 双指针做法
   * 1. 定义i，j 分别从字符串头部和尾部相向而行
   * 2. 特殊情况：
   *    1. 如果 s[i] 不是字母和数字，则 i++
   *    2. 如果 s[j] 不是字母和数字，则 j--
   *    3. 如果 s[i] 和 s[j] 不一样，则直接返回 false
   *    4. 跳出循环，返回 true
   */
  while (i <= j) {
    const str_i = s[i].toLowerCase();
    const str_j = s[j].toLowerCase();

    if (!((str_i <= "z" && str_i >= "a") || (str_i <= "9" && str_i >= "0"))) {
      i++;
      continue;
    }
    if (!((str_j <= "z" && str_j >= "a") || (str_j <= "9" && str_j >= "0"))) {
      j--;
      continue;
    }
    if (str_i !== str_j) return false;
    i++;
    j--;
  }

  return true;
};
// @lc code=end
