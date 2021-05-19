/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 *
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/description/
 *
 * algorithms
 * Medium (68.70%)
 * Likes:    389
 * Dislikes: 0
 * Total Accepted:    97K
 * Total Submissions: 141.2K
 * Testcase Example:  '[1,2,3,4,5,6,7]'
 *
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 *
 *
 * struct Node {
 * ⁠ int val;
 * ⁠ Node *left;
 * ⁠ Node *right;
 * ⁠ Node *next;
 * }
 *
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 *
 * 初始状态下，所有 next 指针都被设置为 NULL。
 *
 *
 *
 * 进阶：
 *
 *
 * 你只能使用常量级额外空间。
 * 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 *
 *
 *
 *
 * 示例：
 *
 *
 *
 *
 * 输入：root = [1,2,3,4,5,6,7]
 * 输出：[1,#,2,3,#,4,5,6,7,#]
 * 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B
 * 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数量少于 4096
 * -1000
 *
 *
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var deepTree = function (node1, node2) {
  // 如果第一个节点或者第二个节点为空，则返回 null
  if (node1 === null || node2 === null) {
    return null;
  }
  // 具体的指向操作
  node1.next = node2;

  // 第一个节点的左子树的 next 指向第一个节点的右子树
  deepTree(node1.left, node1.right);
  // 第二个节点的左子树的 next 指向第二个节点的右子树
  deepTree(node2.left, node2.right);
  // 第一个节点的右子树的 next 指向第二个节点的左子树
  deepTree(node1.right, node2.right);
};

var connect = function (root) {
  // 如果根节点为空，则直接返回 null
  if (root === null) return null;
  // 深度遍历根节点
  deepTree(root.left, root.right);
  // 返回修改之后的节点
  return root;
};
// @lc code=end
