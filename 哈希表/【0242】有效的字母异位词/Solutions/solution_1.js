/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (63.59%)
 * Likes:    347
 * Dislikes: 0
 * Total Accepted:    205.6K
 * Total Submissions: 323.3K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 示例 1:
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 * 说明:
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 定义一个 HashMap 存放 s 中每一个字符的个数，
  // 然后遍历 t 中的每一个字符，如果遇到了相同的，就减1，如果只剩1个，就删除该字符，如果不存在，则返回 false
  const hashMap = {};
  // 将 s 每个字符塞入 hashMap
  for (let i = 0; i < s.length; i++) {
    // 遇到重复的，就增加个数
    if (hashMap[s[i]]) hashMap[s[i]]++;
    else hashMap[s[i]] = 1;
  }

  // 遍历 t 中的每一个字符，三种情况：
  // 1. 该字符没出现在 hashMap 中，返回 false
  // 2. 该字符出现在 hashMap 中，且只出现一次，则直接删除 hashMap 中该字符
  // 3. 如果出现多次，就减少 1 次
  // 最终判断依据： hashMap 中字符应该正好全部用完，即 hashMap 的 key 为空 
  for (let i = 0; i < t.length; i++) {
    if (!hashMap[t[i]]) return false;
    if (hashMap[t[i]] === 1) delete hashMap[t[i]];
    else hashMap[t[i]]--;
  }

  return Object.keys(hashMap).length === 0;
};
// @lc code=end
