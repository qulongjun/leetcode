/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (41.94%)
 * Likes:    1140
 * Dislikes: 0
 * Total Accepted:    220.5K
 * Total Submissions: 525.6K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 判断你是否能够到达最后一个下标。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // b
  if (nums.length === 0) return false;

  // 本题核心思想为：不断更新能跳到的最远距离，如果能跳到的最远距离的值超过 nums 的长度，则表示能跳到结尾
  // 每走到一个位置 n，都需要更新当前能跳到的最远距离
  // 其中 farthest 用来表示能跳到的最远距离，这个值总是在不停的更新，每走到一个位置 n，
  // 都会比较 前 n - 1 个位置时的最远距离 和 当前位置+当前位置能跳的最远距离（即 i + nums[i]） 的最大值
  let farthest = 0;

  // 遍历更新最远距离
  for (let i = 0; i <= farthest; i++) {
    // 比较 前 n - 1 个位置时的最远距离 和 当前位置+当前位置能跳的最远距离（即 i + nums[i]） 的最大值
    farthest = Math.max(farthest, i + nums[i]);
    // 提前中止条件：如果当前的最远距离已经超过了 nums 索引的最大长度，则证明能跳的到
    if (farthest >= nums.length - 1) return true;
  }
  // 否则跳不到
  return false;
};
// @lc code=end
