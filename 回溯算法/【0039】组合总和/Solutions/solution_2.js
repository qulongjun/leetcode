/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (71.96%)
 * Likes:    1154
 * Dislikes: 0
 * Total Accepted:    206K
 * Total Submissions: 286.3K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的数字可以无限制重复被选取。
 *
 * 说明：
 *
 *
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例 1：
 *
 * 输入：candidates = [2,3,6,7], target = 7,
 * 所求解集为：
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * 示例 2：
 *
 * 输入：candidates = [2,3,5], target = 8,
 * 所求解集为：
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= candidates.length <= 30
 * 1 <= candidates[i] <= 200
 * candidate 中的每个元素都是独一无二的。
 * 1 <= target <= 500
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 回溯函数
var backTracking = function (
  candidates,
  target,
  addCount, // 当前路径总和，该值总是 <= target
  tracks, // 当前路径数组
  results,
  index // 当前 candidates 的索引位置
) {
  // 如果 index 索引到 candidates 最后都没能算出这个 target，则直接结束
  if (index >= candidates.length) return;
  // 如果当前路径总和 === 目标target，则将当前路径保存到结果集中
  if (addCount === target) {
    // 保存结果集
    results.push([...tracks]);
    // 结束回溯
    return;
  }

  // 遍历侯选值，由于可以重复使用元素，但不能往回找，否则会出现 [2,2,3], [3,2,2] 这样的情况
  for (let i = index; i < candidates.length; i++) {
    // 如果当前路径的值 + 候选值 > target，则不再回溯了，直接找下一个值了
    if (addCount + candidates[i] > target) continue;
    // 将当前值加入路径中
    tracks.push(candidates[i]);
    // 回溯
    backTracking(
      candidates,
      target,
      addCount + candidates[i], // 获取最新的路径之和
      tracks,
      results,
      i // index 传递当前的索引，为什么不传递 i+1，是因为当前元素可以被重复使用
    );
    // 回退
    tracks.pop();
  }
};

var combinationSum = function (candidates, target) {
  // 定义一个结果集
  let results = [];
  // 存放临时的路径
  let tracks = [];
  // 回溯
  backTracking(candidates, target, 0, tracks, results, 0);
  // 返回结果集
  return results;
};
// @lc code=end
