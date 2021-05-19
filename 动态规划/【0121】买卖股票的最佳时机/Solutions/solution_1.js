/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (54.95%)
 * Likes:    1258
 * Dislikes: 0
 * Total Accepted:    305.7K
 * Total Submissions: 555K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 *
 * 注意：你不能在买入股票前卖出股票。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 *
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // max - 最大收益
  let max = 0,
    // minPrice - 股票最低点
    minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // 计算股票买入的最低点，是【当前价格】是最低点，还是【前面】已经有最低点了
    minPrice = Math.min(prices[i], minPrice);
    // 比较【当前已经求出的最大收益】和【当前价格 - 最低价格】之间的最值
    max = Math.max(max, prices[i] - minPrice);
  }

  // 返回最大收益
  return max;
};
// @lc code=end
