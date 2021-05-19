/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (70.32%)
 * Likes:    341
 * Dislikes: 0
 * Total Accepted:    62.9K
 * Total Submissions: 89.2K
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    (this.val = val), (this.left = left || null), (this.right = right || null);
  }
}

/**
 *
 * @param {number[]} inOrder 中序遍历序列
 * @param {number[]} postOrder 后序遍历数列
 * @param {number} inLeft 中序遍历起始位置
 * @param {number} inRight 中序遍历结束位置
 * @param {number} postLeft 后序遍历起始位置
 * @param {number} postRight 后序遍历结束位置
 * @param {Map} inOrderMap 中序遍历 值 - 索引 Map
 *
 * 后序遍历：[   左子树   ][   右子树   ][ 根 ]
 * 中序遍历：[   左子树   ][ 根 ][   右子树   ]
 * 第一步：后序遍历的最后一个节点 postRight 就是 [根]
 * 第二步：中序遍历中找出该节点 inRoot，该节点前节点（inLeft 至 inRoot-1）为左子树，该节点后节点（inRoot+1 至 inRight）为右子树
 * 第三步：由于后序遍历和中序遍历对左子树和右子树的节点数量是一致的，只有顺序的差异，因此，后序遍历左子树的节点索引范围为 inRoot - inLeft + postLeft -1，右子树的节点索引范围为 inRoot - inLeft + postLeft
 * 第四步：构建 TreeNode，其中根为 第一步 中获取，左子树和右子树通过递归获得。
 *
 */
const getTree = (
  inOrder,
  postOrder,
  inLeft,
  inRight,
  postLeft,
  postRight,
  inOrderMap
) => {
  // 终止条件：遍历队列左侧索引小于右侧
  if (inLeft > inRight || postLeft > postRight) {
    return null;
  }

  // 后序遍历里的根节点就是最后一个元素
  const postRoot = postOrder[postRight];
  // 找到中序遍历里的根节点
  const inRoot = inOrderMap.get(postRoot);

  // 创建一个新节点
  return new TreeNode(
    postRoot,
    // 递归获取左子树
    getTree(
      inOrder,
      postOrder,
      inLeft,
      inRoot - 1,
      postLeft,
      inRoot - inLeft + postLeft - 1,
      inOrderMap
    ),
    // 递归获取右子树
    getTree(
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
  const length = inorder.length;
  // 这里先生成一个中序遍历的 Map，避免后续递归查找中序遍历中根的位置
  const inOrderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inOrderMap.set(inorder[i], i);
  }

  return getTree(inorder, postorder, 0, length - 1, 0, length - 1, inOrderMap);
};
// @lc code=end
