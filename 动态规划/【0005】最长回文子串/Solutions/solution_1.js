/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.98%)
 * Likes:    2777
 * Dislikes: 0
 * Total Accepted:    394.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  /*
        思路：
        DP解法，如果一个子串是回文串，那么在这个子串两侧追加一个相同的字符之后，也会是回文串
        定义： dp[i][j]： 表示 s 中从 i 到 j（包括 i 和 j）是否可以形成回文
        状态转移方程：s[i] === s[j] && dp[i + 1][j - 1] => dp[i][j] = true
        Base Case：如果只有一个字符，则为回文，如果有两个相同元素，则为回文，否则不是回文
    */

  // 这是一个边界条件
  if (!s || s.length === 0) {
    return "";
  }

  let result = s[0];

  const dp = [];

  // 为什么要从末尾开始，因为 dp[i][..]依赖于dp[i + 1][..]
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      // 第一种 Base Case：只有一个字符
      if (j === i) dp[i][j] = true;
      // 第二种 Base Case：只有两个字符，如果两个字符相同，则为回文，否则不是回文
      else if (j === i + 1 && s[j] === s[i]) dp[i][j] = true;
      // 通用情况：需要判断第 i 个字符和第 j 个字符是否一致 && 子串是否为回文
      else if (s[j] === s[i] && dp[i + 1][j - 1]) dp[i][j] = true;

      // 更新结果集，如果当前是最大回文子串，则将结果保存到 results 中
      if (dp[i][j] && result.length < j - i + 1) {
        // 分割字符串s为子串，保存到 result 里
        result = s.slice(i, j + 1);
      }
    }
  }

  return result;
};
// @lc code=end
