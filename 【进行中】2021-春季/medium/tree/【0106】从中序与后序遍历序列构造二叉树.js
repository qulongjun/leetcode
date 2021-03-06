/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (71.31%)
 * Likes:    453
 * Dislikes: 0
 * Total Accepted:    92.1K
 * Total Submissions: 129.1K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 *
 * 返回如下的二叉树：
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*
    中序遍历 [ 左子树 ][ 根 ][ 右子树 ]
    后序遍历 [ 左子树 ][ 右子树 ][ 根 ]

    从上述可得：new Tree(根，递归(左子树)，递归（右子树）)

    递归子树
        中序遍历：[inLeft, ..., inRoot - 1][inRoot][inRoot + 1, ..., inRight]
        后序遍历：[postLeft, ..., inRoot - inLeft - 1 + postLeft][inRoot - inLeft + postLeft, ..., postRight - 1][postRoot]
*/
var buildFactory = function (
  inOrder,
  postOrder,
  inLeft,
  inRight,
  postLeft,
  postRight,
  inOrderMap
) {
  // 如果当前遍历已经不存在了，则返回 null
  if (inLeft > inRight || postLeft > postRight) return null;

  // 获取根，因为后序遍历的最后一个节点必然是根
  let postRoot = postOrder[postRight];
  // 获取中序遍历根的索引，此处 inRoot 为索引值
  let inRoot = inOrderMap.get(postRoot);

  return new TreeNode(
    postRoot,
    buildFactory(
      inOrder,
      postOrder,
      inLeft,
      inRoot - 1,
      postLeft,
      inRoot - inLeft + postLeft - 1,
      inOrderMap
    ),
    buildFactory(
      inOrder,
      postOrder,
      inRoot + 1,
      inRight,
      inRoot - inLeft + postLeft,
      postRight - 1,
      inOrderMap
    )
  );
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 因为递归遍历每次都要去中序遍历里找根，因此定义一个 HashMap 存放中序遍历的每一个信息[中序遍历的根: 索引]
  let hashMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    hashMap.set(inorder[i], i);
  }
  return buildFactory(
    inorder,
    postorder,
    0,
    inorder.length - 1,
    0,
    postorder.length - 1,
    hashMap
  );
};
// @lc code=end
