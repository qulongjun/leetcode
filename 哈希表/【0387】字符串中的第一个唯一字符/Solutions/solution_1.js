/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (51.38%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    161.3K
 * Total Submissions: 313.9K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 *
 *
 * 示例：
 *
 * s = "leetcode"
 * 返回 0
 *
 * s = "loveleetcode"
 * 返回 2
 *
 *
 *
 *
 * 提示：你可以假定该字符串只包含小写字母。
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 使用 hashMap 存放每个字符出现的次数，最后返回的时候找到 value 为 1 的 key 就是只出现一次的字符，然后再根据字符 indexOf 找到对应的 index
  let hashMap = {};
  // 遍历字符串每一个字符，将其加到 hashMap 中
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      hashMap[s[i]]++;
    } else {
      hashMap[s[i]] = 1;
    }
  }

  // 找到 hashMap 中只出现 1 次的 key，然后根据 key 找到对应的 index
  return s.indexOf(Object.keys(hashMap).find((key) => hashMap[key] === 1));
};
// @lc code=end
