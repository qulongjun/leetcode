/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (55.82%)
 * Likes:    1125
 * Dislikes: 0
 * Total Accepted:    219.4K
 * Total Submissions: 393K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = ""
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 *
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

const dictionary = [
  [],
  [],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

// 回溯方法
var backTracking = function (digits, tracks, results, index) {
  // 结束条件： 路径的长度 === 目标的长度
  if (tracks.length === digits.length) {
    // 将路径放入结果集中
    results.push(tracks);
    // 结束
    return;
  }

  // 获取当前期望的所有枚举值
  let enums = dictionary[digits[index]];

  // "abc" => 先进入 a => 然后回溯 "def" => ad / ae / af => 进入 b => ...
  for (let i = 0; i < enums.length; i++) {
    // 把当前选择加入 tracks，然后回溯 index + 1。
    backTracking(digits, tracks + enums[i], results, index + 1);
  }
};

var letterCombinations = function (digits) {
  if (digits === "") return [];
  // 定义结果集
  let results = [];
  // 临时路径
  let tracks = "";
  // 回溯
  backTracking(digits, tracks, results, 0);
  // 返回结果集
  return results;
};
// @lc code=end
