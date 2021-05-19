/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (64.21%)
 * Likes:    1873
 * Dislikes: 0
 * Total Accepted:    291K
 * Total Submissions: 453.2K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 *
 *
 *
 *
 *
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 *
 *
 * 示例：
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /*
        定义双指针 i, j ，分别表示容器的 左边界 和 右边界，则长度为 (j - i)，宽度为 Math.min(i的宽度, j的宽度)
        计算容积方式： Math.min(height[i], height[j]) * (j - i)，即 长 * 宽，短板 * 长度
        因为容器的体积受限于最小的那个宽度，因此当 i <= j 时，i 往前走， j < i 时， j 往回走
    */
  // 容器左边界
  let i = 0,
    // 容器右边界
    j = height.length - 1,
    // 容器当前能盛的最大值
    currentMax = 0;

  // 当左边界没有超过右边界时候，就一直找最大值
  while (i <= j) {
    // 比较当前最大值，用现有的最大值和当前边界计算出来的最大值比较
    currentMax = Math.max(currentMax, (j - i) * Math.min(height[i], height[j]));
    // 如果左边界 <= 右边界，则 左边界 往前找，反之 右边界 往回找
    if (height[i] <= height[j]) i++;
    else j--;
  }

  // 返回最大的容器体积
  return currentMax;
};
// @lc code=end
