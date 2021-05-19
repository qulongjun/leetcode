/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (69.27%)
 * Likes:    904
 * Dislikes: 0
 * Total Accepted:    160.2K
 * Total Submissions: 231.2K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 *
 * 返回如下的二叉树：
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*

前序遍历： [ 根 ][ 左子树 ][ 右子树 ]
中序遍历： [ 左子树 ][ 根 ][ 右子树 ]

从上述可得：new Tree(根，递归(左子树)，递归（右子树）)

递归子树：前序遍历：[preRoot][preRoot + 1, ..., inRoot - inLeft + preLeft][inRoot - inLeft + preLeft + 1, ..., preRight]
           中序遍历：[inLeft, ..., inRoot - 1][inRoot][inRoot + 1, ..., inRight]
*/

var buildFactory = function (
  preOrder, // 前序遍历
  inOrder, // 中序遍历
  preLeft, // 前序最左侧节点
  preRight, // 前序最右侧节点
  inLeft, // 中序最左侧节点
  inRight, // 中序最右侧节点
  inOrderMap // hash表，提高索引速度
) {
  // 如果当前遍历已经不存在了，则返回 null
  if (preLeft > preRight || inLeft > inRight) return null;
  // 获取根，因为前序遍历的第一个节点必然是根
  let preRoot = preOrder[preLeft];
  // 获取中序遍历根的索引，此处 inRoot 为索引值
  let inRoot = inOrderMap.get(preRoot);

  // 递归遍历
  return new TreeNode(
    preRoot,
    buildFactory(
      preOrder,
      inOrder,
      preLeft + 1,
      inRoot - inLeft + preLeft,
      inLeft,
      inRoot - 1,
      inOrderMap
    ),
    buildFactory(
      preOrder,
      inOrder,
      inRoot - inLeft + preLeft + 1,
      preRight,
      inRoot + 1,
      inRight,
      inOrderMap
    )
  );
};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 因为递归遍历每次都要去中序遍历里找根，因此定义一个 HashMap 存放中序遍历的每一个信息[中序遍历的根: 索引]
  let hashMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    hashMap.set(inorder[i], i);
  }

  return buildFactory(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    inorder.length - 1,
    hashMap
  );
};
// @lc code=end
