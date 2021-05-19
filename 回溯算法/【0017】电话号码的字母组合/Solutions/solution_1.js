/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (55.49%)
 * Likes:    977
 * Dislikes: 0
 * Total Accepted:    189.1K
 * Total Submissions: 340.8K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */

// @lc code=start

const backTracking = function (sourceMap, keys, results, tracks, index) {
  // 回溯算法的结束条件，当 tracks 收集到足够多的元素后
  if (tracks.length === keys.length) {
    // 输出字符串
    results.push(tracks.join(""));
    return;
  }

  // 定义需要遍历的集合，keys[index] => 当前遍历到的第几个位置
  const dataSource = sourceMap[keys[index]];

  // 回溯的遍历操作
  for (let i = 0; i < dataSource.length; i++) {
    tracks.push(dataSource[i]);
    backTracking(sourceMap, keys, results, tracks, index + 1);
    tracks.pop();
  }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 边界条件，防止出现 ['']的情况
  if (digits === "") return [];

  // 定义一个数据源
  const sourceMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // "23" => ["2", "3"]
  const keys = digits.split("");

  // 定义结果集
  const results = [];
  // 回溯
  backTracking(sourceMap, keys, results, [], 0);
  // 返回结果集
  return results;
};
// @lc code=end
