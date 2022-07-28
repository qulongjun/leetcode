/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode.cn/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (65.50%)
 * Likes:    624
 * Dislikes: 0
 * Total Accepted:    460.6K
 * Total Submissions: 702.5K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 *
 *
 * 提示:
 *
 *
 * 1
 * s 和 t 仅包含小写字母
 *
 *
 *
 *
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};

  /**
   * 使用一个哈希表存放所有在s中出现过的字符，key为出现的字符，value 为出现的次数
   * 遍历 j 中每个字符，三种情况：
   * 1. 如果map中不存在该字符，则直接返回false
   * 2. 如果map中存在该字符，且value大于1，则自减1
   * 3. 如果map中存在该字符，且value 为1，则删除该字段
   *
   * 最后只需判断map是否为空即可。
   */

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else map[s[i]]++;
  }

  for (let j = 0; j < t.length; j++) {
    if (map[t[j]] === undefined) return false;
    if (map[t[j]] > 1) map[t[j]]--;
    else delete map[t[j]];
  }

  return Object.keys(map).length === 0;
};
// @lc code=end
