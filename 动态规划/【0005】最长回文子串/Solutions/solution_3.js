/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (36.85%)
 * Likes:    5494
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 3M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start

// 找到最大回文字符串
function palindrome(s, l, r) {
  // 左右指针，从 s[l] 和 s[r] 向两边扩散，找到最长回文串
  /**
   * 定义两个指针，l 和 r，分别表示当前正在对比的左指针和右指针
   * 如果 s[l] === s[r]，则证明当前第一个元素和最后一个元素相等，为回文，继续往下比较
   * 否则，返回回文子串
   */
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }

  return s.substr(l + 1, r - l - 1);
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";

  /**
   * 依次将 s 中每个元素作为中心元素，进行回文的查找
   * 有两种可能：
   * 1. 如果回文为基数，如 aba，则 当前元素为中心位置，双指针是同一个
   * 2. 如果回文为偶数，如 abba，则 当前元素为中心位置，双指针为当前和后一个
   */

  for (let i = 0; i < s.length; i++) {
    // 寻找长度为奇数的回文子串(以当前元素向两边扩散)
    const s1 = palindrome(s, i, i);
    // 寻找长度为偶数的回文子串(以s[i],s[i + 1])向两边扩散
    const s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;
};

// @lc code=end
