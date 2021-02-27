/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (73.82%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    111.7K
 * Total Submissions: 151.3K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 *
 *
 * 示例：
 *
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 将字符串按空格拆分，返回时需要 join
  let strArr = s.split(" ");

  // 遍历数组中每一个子字符串，并将其反转
  for (let i = 0; i < strArr.length; i++) {
    let str = strArr[i];
    let temp = "";
    // 从字符串最后一位往前获取字符，加到 temp 上
    for (let j = str.length - 1; j >= 0; j--) {
      temp += str[j];
    }
    // 给数组传递新的值
    strArr[i] = temp;
  }

  return strArr.join(" ");
};
// @lc code=end
