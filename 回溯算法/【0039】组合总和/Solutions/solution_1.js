/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (71.42%)
 * Likes:    986
 * Dislikes: 0
 * Total Accepted:    170.7K
 * Total Submissions: 238.8K
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

// 回溯这边注意点：需要有一个 index，用来标示当前走到数组的哪一个了，因为可以允许重复，因此每次回溯不需要 i + 1，只需要 i 即可。
let backTracking = function (
  candidates,
  target,
  total,
  tracks,
  results,
  index
) {
  if (total >= target || index >= candidates.length) {
    total === target && results.push([...tracks]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    // 剪枝操作
    if (total + candidates[i] > target) continue;
    tracks.push(candidates[i]);
    // 因为可以重复，所以回溯只需要传一个 i， 而非 i + 1
    backTracking(candidates, target, total + candidates[i], tracks, results, i);
    tracks.pop();
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let results = [];
  backTracking(candidates, target, 0, [], results, 0);
  return results;
};
// @lc code=end
