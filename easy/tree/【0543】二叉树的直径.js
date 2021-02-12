/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 *
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (52.15%)
 * Likes:    608
 * Dislikes: 0
 * Total Accepted:    91.9K
 * Total Submissions: 176.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 *
 *
 *
 * 示例 :
 * 给定二叉树
 *
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \
 * ⁠     4   5
 *
 *
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 *
 *
 *
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
  // 如果根节点为空，则直径为0
  if (root === null) return 0;
  // 定义一个全局变量，用来存放当前已经计算出来的最长路径
  let ans = 1;
  // 递归获取深度方法
  var depth = function (root) {
    // 如果根节点为空，则直径为0
    if (root === null) return 0;
    // 递归计算左子树深度
    let leftDepth = depth(root.left);
    // 递归计算右子树深度
    let rightDepth = depth(root.right);
    // 这里是用来计算当前已经拿到的最长直径和“以当前节点为根的路径 L + R + 1”中的最大值
    ans = Math.max(ans, leftDepth + rightDepth + 1);
    // 返回当前节点的最大深度
    return Math.max(leftDepth, rightDepth) + 1;
  };
  // 计算深度
  depth(root);
  // 这里-1是因为不是求深度，而是求直径，深度是节点，直径是边
  return ans - 1;
};
// @lc code=end
