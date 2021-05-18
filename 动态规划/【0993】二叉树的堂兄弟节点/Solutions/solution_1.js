/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
 *
 * https://leetcode-cn.com/problems/cousins-in-binary-tree/description/
 *
 * algorithms
 * Easy (52.08%)
 * Likes:    178
 * Dislikes: 0
 * Total Accepted:    32K
 * Total Submissions: 58.2K
 * Testcase Example:  '[1,2,3,4]\n4\n3'
 *
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 *
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 *
 * 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
 *
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：root = [1,2,3,4], x = 4, y = 3
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 *
 * 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：root = [1,2,3,null,4], x = 2, y = 3
 * 输出：false
 *
 *
 *
 * 提示：
 *
 *
 * 二叉树的节点数介于 2 到 100 之间。
 * 每个节点的值都是唯一的、范围为 1 到 100 的整数。
 *
 *
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // 判断两个节点是否为堂兄弟节点，主要有两点：1. 两个节点的父节点不是同一个，2. 两个位于同一层。
  // 因此每个节点至少需要两个变量来存放信息： parent用来存放父节点，depth用来存放节点深度
  // 只有当 parent 不相等，且 depth 相等，才是堂兄弟
  // 定义 x 节点信息
  let x_parent = null,
    x_depth = 0;
  // 定义 y 节点信息
  let y_parent = null,
    y_depth = 0;

  // 深度优先遍历
  const dfs = function (root, depth, parent) {
    // 如果根节点为 null，则结束遍历
    if (root === null) return null;
    // 如果根节点值 === x，或者根节点值 === y，则证明找到该节点了，更新当前节点的信息
    if (root.val === x) {
      // 更新其父节点和深度信息
      [x_parent, x_depth] = [parent, depth];
    }
    // 同上
    if (root.val === y) {
      [y_parent, y_depth] = [parent, depth];
    }
    // 剪枝操作，如果当前节点已经找到了 x 和 y，则不再比较子节点
    if (x_parent && y_parent) return;
    // 深度遍历左子树节点
    dfs(root.left, depth + 1, root);
    // 剪枝操作，如果当前节点已经找到了 x 和 y，则不再比较右节点
    if (x_parent && y_parent) return;
    // 深度遍历右子树节点
    dfs(root.right, depth + 1, root);
  };

  // 调用 dfs 方法遍历
  dfs(root, 0, null);

  // 判断依据：x 和 y 深度相同，但父节点不相同
  return x_depth === y_depth && x_parent !== y_parent;
};
// @lc code=end
