/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (65.08%)
 * Likes:    410
 * Dislikes: 0
 * Total Accepted:    83.3K
 * Total Submissions: 127.2K
 * Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
 *
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
 *
 *
 *
 *
 *
 * 示例 1:
 *
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 *
 *
 * 示例 2:
 *
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * 输出: 2
 * 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 *
 * 说明:
 *
 *
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉搜索树中。
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

const getPath = (root, target, path) => {
  if (root === null) return null;
  // 路径中记录下当前节点
  path.push(root.val);
  // 如果当前节点值小于目标节点值，则目标节点在当前节点的右侧
  if (root.val < target.val) getPath(root.right, target, path);
  // 如果当前节点值大于目标节点值，则目标节点在当前节点的左侧
  if (root.val > target.val) getPath(root.left, target, path);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 定义一个容器存放 p 的路径
  const pPath = [];
  // 定义一个容器存放 q 的路径
  const qPath = [];
  // 计算 p 的路径
  getPath(root, p, pPath);
  // 计算 q 的路径
  getPath(root, q, qPath);
  // 计算 p 路径和 q 路径的最小值，公共节点肯定出现在最小值路径上
  const size = Math.min(pPath.length, qPath.length);
  // 特殊 case：当前节点不存在，即 root = null
  if (size === 0) return null;
  // 特殊 case：当前节点只有一个节点
  if (size === 1) return { val: pPath[0] };

  // 遍历查找 p 路径和 q 路径的公共部分，找到它们第一个不相等的地方，就退出，则它前一个地方就是公共节点
  for (let i = 1; i < size; i++) {
    if (pPath[i] === qPath[i]) continue;
    else return { val: pPath[i - 1] };
  }
  // 如果始终是一致的，意味着一个节点的路径完全是另一个节点的路径的子集，则直接返回短的路径的最后一个元素
  return { val: pPath[size - 1] };
};
// @lc code=end
