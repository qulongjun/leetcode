/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (38.44%)
 * Likes:    574
 * Dislikes: 0
 * Total Accepted:    109.6K
 * Total Submissions: 285.1K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * @description 与三数之和类似，增加了一些剪枝操作
 */
var fourSum = function (nums, target) {
  // 边界条件
  if (nums.length < 4) return [];
  // 先给数组排个序，JS排序的坑：默认 sort 是按照字符先后顺序排列
  const sortedNums = nums.sort((a, b) => a - b);
  // 第一个剪枝操作，如果4倍最后一个位置的和都比 target 小，就不比了
  if (
    4 * sortedNums[0] > target ||
    4 * sortedNums[sortedNums.length - 1] < target
  ) {
    return [];
  }

  // 定义一个结果集
  const results = [];
  // 定义 first 从 0 到 长度前3位（给 second 和 third 和 four 留三个坑，因为不允许重复）
  for (let first = 0; first < sortedNums.length - 3; first++) {
    // 如果当前元素和上一个元素相同，则往下找
    if (first > 0 && sortedNums[first] === sortedNums[first - 1]) continue;
    // 第二个剪枝操作，第一个元素 + 3倍第二个元素都比 target 大，则这个元素不比了
    if (sortedNums[first] + 3 * sortedNums[first + 1] > target) {
      break;
    }
    // 第三个剪枝操作，第一个元素 + 3倍最后一个元素都比 target 小，则直接走下一个循环
    if (sortedNums[first] + 3 * sortedNums[sortedNums.length - 1] < target) {
      continue;
    }

    // 同 first ，区别是 second 起点是 first 的下一个元素
    for (let second = first + 1; second < sortedNums.length - 2; second++) {
      // 如果当前元素和上一个元素相同，则往下找
      if (second > first + 1 && sortedNums[second] === sortedNums[second - 1])
        continue;
      // 第四个剪枝操作，第一个元素 + 第二个元素 + 2倍最后一个元素都比 target 小，则直接走下一个循环
      if (
        sortedNums[first] +
          sortedNums[second] +
          2 * sortedNums[sortedNums.length - 1] <
        target
      ) {
        continue;
      }

      // 计算最后两个元素之和的目标值
      const newTarget = target - sortedNums[first] - sortedNums[second];
      // 第三个起点为 second + 1
      let third = second + 1;
      // 第四个起点为数组最后一位
      let four = sortedNums.length - 1;
      // 此处同三数之和
      while (third < four) {
        if (sortedNums[third] + sortedNums[four] === newTarget) {
          results.push([
            sortedNums[first],
            sortedNums[second],
            sortedNums[third],
            sortedNums[four],
          ]);
          third++;
          four--;
          while (third < four && sortedNums[third] === sortedNums[third - 1]) {
            third++;
          }
          while (third < four && sortedNums[four] === sortedNums[four + 1]) {
            four--;
          }
        } else if (sortedNums[third] + sortedNums[four] < newTarget) third++;
        else four--;
      }
    }
  }
  
  return results;
};
// @lc code=end
