/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Medium (48.20%)
 * Likes:    1348
 * Dislikes: 0
 * Total Accepted:    262.2K
 * Total Submissions: 543.9K
 * Testcase Example:  '[1,2,3,1]'
 *
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 *
 * 示例 2：
 *
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 以下为边界条件：
  // 当 nums 为空，则偷不到金额 = 0
  if (nums.length === 0) return 0;
  // 当 nums 长度为 1，即只有 1 家，只能偷该家
  if (nums.length === 1) return nums[0];
  // 当 nums 长度为 2，即只有 2 家，由于不能偷相邻的，因此只能在这两家中选一家偷
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // 定义一个 DP Table， dpTable[i] 表示偷到第 i 家时候偷到的最大金额
  let dpTable = new Array();
  // 最小单位
  // 第 1 家时偷到的最大金额就是这家
  dpTable[0] = nums[0];
  // 第 2 家时偷到的最大金额要么是第 1 家，要么是第 2 家
  dpTable[1] = Math.max(nums[0], nums[1]);
  // 重叠子问题
  for (let i = 2; i < nums.length; i++) {
    // 偷第 i 家的最大金额，要么是第前 i - 2 家的最大金额 + 当前这家的金额，或者不偷这家，即 i - 1 家的金额
    dpTable[i] = Math.max(dpTable[i - 2] + nums[i], dpTable[i - 1]);
  }

  // 返回最后一家的时候的金额
  return dpTable[nums.length - 1];
};
// @lc code=end
