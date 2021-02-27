/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 *
 * https://leetcode-cn.com/problems/nim-game/description/
 *
 * algorithms
 * Easy (69.59%)
 * Likes:    412
 * Dislikes: 0
 * Total Accepted:    69.4K
 * Total Submissions: 99.7K
 * Testcase Example:  '4'
 *
 * 你和你的朋友，两个人一起玩 Nim 游戏：
 *
 *
 * 桌子上有一堆石头。
 * 你们轮流进行自己的回合，你作为先手。
 * 每一回合，轮到的人拿掉 1 - 3 块石头。
 * 拿掉最后一块石头的人就是获胜者。
 *
 *
 * 假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false
 * 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4
 * 输出：false
 * 解释：如果堆中有 4 块石头，那么你永远不会赢得比赛；
 * 因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 2
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 结论：如果堆中石头的数量 n 不能被 4 整除，那么你总是可以赢得 Nim 游戏的胜利。
  // 如果是 1,2,3 ，由于是先手，因此胜利
  // 如果是 4，如果你取 1,2,3 块，最后都会给对手留下可取的全部
  // 如果是5,6,7，就可以只取1,2,3， 给对方留下 4 块，由于对方只能取 1,2,3 块，因此会留下可取的给你
  // 如果是8块，回到上述问题，无论你取1,2,3 块，对方都会有5,6,7 块，对方取1,2,3 块，就会让你至少会有4块，必输
  return n % 4 !== 0;
};
// @lc code=end
