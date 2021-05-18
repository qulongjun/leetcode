/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 *
 * https://leetcode-cn.com/problems/three-consecutive-odds/description/
 *
 * algorithms
 * Easy (69.71%)
 * Likes:    5
 * Dislikes: 0
 * Total Accepted:    11.1K
 * Total Submissions: 16.2K
 * Testcase Example:  '[2,6,4,1]'
 *
 * 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：arr = [2,6,4,1]
 * 输出：false
 * 解释：不存在连续三个元素都是奇数的情况。
 *
 *
 * 示例 2：
 *
 * 输入：arr = [1,2,34,3,4,5,7,23,12]
 * 输出：true
 * 解释：存在连续三个元素都是奇数的情况，即 [5,7,23] 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  // 定义存放当前奇数个数
  let count = 0;
  // 依次计算每一个元素是否为奇数，如果是偶数，则清空计数器，否则计数器 + 1。
  for (let i = 0; i < arr.length; i++) {
    // 如果当前计数器已经满了 3 个，就不再往后找，已经判断出来了
    if (count >= 3) break;
    // 偶数
    if (arr[i] % 2 === 0) {
      count = 0;
    } else count++; // 奇数
  }

  return count >= 3;
};
// @lc code=end
