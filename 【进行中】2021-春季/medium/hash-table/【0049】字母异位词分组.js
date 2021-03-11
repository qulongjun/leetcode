/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (65.55%)
 * Likes:    673
 * Dislikes: 0
 * Total Accepted:    168.7K
 * Total Submissions: 257.3K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 示例:
 *
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * 说明：
 *
 *
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 虽然字符串字符顺序不同，但经过 sort() 后会保持一样，使用一个 hashMap 存放所有相同的字符串，key 为经过 sort 之后的字符串，value 为数组
  // {[sorted Str]: [str1, str2, str3]}
  let map = new Map();

  // 遍历每一个 str
  for (let str of strs) {
    // 先给它排序，字符串 -> 数组(split) -> 排序(sort) -> 字符串(join)
    let sortedStr = str.split("").sort().join("");
    // 如果当前排序后字符串在 hashMap 中存在，说明前面已经有相同的了，则追加列表
    if (map.get(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr), str]);
      // 否则新增一个 entry
    } else {
      map.set(sortedStr, [str]);
    }
  }

  // map.values 获取全部属性值
  return [...map.values()];
};
// @lc code=end
