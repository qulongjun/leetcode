/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (66.35%)
 * Likes:    930
 * Dislikes: 0
 * Total Accepted:    157.6K
 * Total Submissions: 237.5K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出：3
 * 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出：5
 * 解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], p = 1, q = 2
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [2, 10^5] 内。
 * -10^9
 * 所有 Node.val 互不相同 。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
 *
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 边界条件，如果 root 是 null，肯定就没有节点了
  if (root === null) return null;
  // 如果 p 和 q 有一个或者全部是 root，则 root 是公共节点
  if (root === p || root === q) return root;
  // 去左子树找等于 p 或者 q 的节点
  let rootLeft = lowestCommonAncestor(root.left, p, q);
  // 去右子树找等于 p 或者 q 的节点
  let rootRight = lowestCommonAncestor(root.right, p, q);
  // 如果左子树和右子树都找到节点，说明公共节点就是 root
  if (rootLeft !== null && rootRight !== null) return root;
  // 如果只在左子树里找到，就表示根节点是左子树
  if (rootLeft !== null) return rootLeft;
  // 如果只在右子树里找到，就表示根节点是右子树
  if (rootRight !== null) return rootRight;
  // 否则表示啥都没找到，返回 null
  return null;
};
// @lc code=end
