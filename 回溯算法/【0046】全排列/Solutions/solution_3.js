/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (78.62%)
 * Likes:    2105
 * Dislikes: 0
 * Total Accepted:    662.9K
 * Total Submissions: 843.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 *
 *
 */

// @lc code=start

// 回溯方法
// nums - 所有可选的数组元素
// tracks - 当前的路径
// results - 已经符合要求的所有路径
var backTracks = function (nums, tracks, results) {
  // 先判断是否满足结束条件
  // 当前 case 是长度 === nums 的长度，即所有备选元素都插入了
  if (tracks.length === nums.length) {
    // 保存结果
    results.push([...tracks]);
    // 结束回溯
    return;
  }

  // 循环开始
  // 依次遍历每一个可选的数组元素，并将其加入到当前路径中
  // 然后进行递归调用
  // 将该元素回溯出来（pop）
  for (let i = 0; i < nums.length; i++) {
    // 特殊Case：如果路径已经存在了该元素，则直接跳过
    if (tracks.includes(nums[i])) continue;
    // 加入到路径中
    tracks.push(nums[i]);
    // 递归调用
    backTracks(nums, tracks, results);
    // 完成回溯，返回上一层
    tracks.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 定义一个用来存放路径的数组
  const tracks = [];
  // 定义一个用来存放结果的数组
  const results = [];
  // 回溯
  backTracks(nums, tracks, results);
  // 返回所有的结果
  return results;
};
// @lc code=end
