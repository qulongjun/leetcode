/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (44.08%)
 * Likes:    774
 * Dislikes: 0
 * Total Accepted:    137.9K
 * Total Submissions: 312.9K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 *
 * 示例:
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 *
 *
 *
 * 提示：
 *
 *
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 回溯方法 index: 当前正在处理的 word 的索引位置， [x, y]：当前正在处理的坐标
var backTracking = function (board, word, index, [x, y]) {
  // x, y 超界， 或者当前坐标不符合 word[index]， 直接返回 false
  if (
    x < 0 ||
    y < 0 ||
    x >= board.length ||
    y >= board[0].length ||
    board[x][y] !== word[index]
  ) {
    return false;
  }

  // 如果当前索引位置已经到达了 word 末尾，则表示查找结束，全部匹配完成
  if (index === word.length - 1) {
    return true;
  }

  // 为了防止重复走已经走过的坐标，定义一个无意义的数值覆盖以前的内容
  // 将之前的数据暂存，以待后续恢复
  let temp = board[x][y];
  // 将走过的节点用无意义的数值代替，防止再次走到
  board[x][y] = ".";

  // 依次向上下左右查找下一个 word 索引位置的字符是否能找到与之对应的坐标
  let res =
    backTracking(board, word, index + 1, [x + 1, y]) ||
    backTracking(board, word, index + 1, [x - 1, y]) ||
    backTracking(board, word, index + 1, [x, y + 1]) ||
    backTracking(board, word, index + 1, [x, y - 1]);

  // 上下左右都找完了，恢复之前的值
  board[x][y] = temp;

  // 返回查找结果
  return res;
};

var exist = function (board, word) {
  // 两个 for 循环用来确认起始目标值
  for (let i = 0; i < board.length; i++) {
    // 获取 board 里每一个子数组
    let boardItem = board[i];
    // 遍历子数组
    for (let j = 0; j < boardItem.length; j++) {
      // 依次以 [i, j]作为起始目标查找
      if (backTracking(board, word, 0, [i, j])) return true;
    }
  }

  return false;
};
// @lc code=end
