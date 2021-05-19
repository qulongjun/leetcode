/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.19%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    81.3K
 * Total Submissions: 122.9K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 *
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 *
 *
 * 给定 N，计算 F(N)。
 *
 *
 *
 * 示例 1：
 *
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 *
 * 示例 2：
 *
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 *
 * 示例 3：
 *
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 ≤ N ≤ 30
 *
 *
 */

// @lc code=start

/**
 *
 * 备忘录模式，用一个 caches 数组存放之前计算过的值，如果当前值存在，则直接使用，否则先保存，再返回
 *
 * @param {number} N 当前的值
 * @param {number[]} caches 缓存数组
 */
// const helper = (N, caches) => {
//   // base case，即起点位置或者结束位置
//   if (N === 0 || N === 1) return N;

//   // 从备忘录里找，看看是否已经出现过并存起来了
//   if (caches[N]) return caches[N];

//   // 如果没有出现过，就计算一下并且存起来
//   caches[N] = helper(N - 1, caches) + helper(N - 2, caches);

//   // 返回当前值
//   return caches[N];
// };

/**
 * @param {number} N
 * @return {number}
 * @description 备忘录模式，自顶向下
 */
// var fib = function (N) {
//   // 边界条件
//   if (N < 0) return 0;
//   // 备忘录
//   const caches = [];
//   // 返回计算结果
//   return helper(N, caches);
// };

/**
 * @param {number} N
 * @return {number}
 * @description DP模式，自底向上
 */
// var fib = function (N) {
//   // 边界条件
//   if (N < 0) return 0;
//   // 定义一个空的 DP Table
//   const dpTable = [];
//   // base case
//   dpTable[0] = 0;
//   dpTable[1] = 1;
//   // 依次往上计算
//   for (let i = 2; i <= N; i++) {
//     dpTable[i] = dpTable[i - 1] + dpTable[i - 2];
//   }
//   // 返回最顶上的结果
//   return dpTable[N];
// };

/**
 * @param {number} N
 * @return {number}
 * @description DP模式，自底向上，避免 DP Table 空间，用两个变量维护
 */
var fib = function (N) {
  // 边界条件
  if (N < 0) return 0;
  // base case
  if (N === 0 || N === 1) return N;
  // 定义两个变量，存储当前元素的前两个元素值，不再需要 DP Table 维护
  let prev = 0,
    next = 1;
  let i = 2;
  while (i <= N) {
    // 更新 prev 和 next 的值
    const temp = prev + next;
    prev = next;
    next = temp;
    i++;
  }

  return next;
};

// @lc code=end
