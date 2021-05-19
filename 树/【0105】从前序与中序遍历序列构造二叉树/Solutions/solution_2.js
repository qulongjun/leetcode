/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (68.01%)
 * Likes:    685
 * Dislikes: 0
 * Total Accepted:    116.7K
 * Total Submissions: 171.5K
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
 * @param {number[]} preOrder 前序遍历数列
 * @param {number[]} inOrder 中序遍历序列
 * @param {number} preLeft 前序遍历起始位置
 * @param {number} preRight 前序遍历结束位置
 * @param {number} inLeft 中序遍历起始位置
 * @param {number} inRight 中序遍历结束位置
 * @param {Map} inOrderMap 中序遍历 值 - 索引 Map
 *
 * 前序遍历：[ 根 ][   左子树   ][   右子树   ]
 * 中序遍历：[   左子树   ][ 根 ][   右子树   ]
 * 第一步：前序遍历的第一个节点 preLeft 就是 [根]
 * 第二步：中序遍历中找出该节点 inRoot，该节点前节点（inLeft 至 inRoot-1）为左子树，该节点后节点（inRoot+1 至 inRight）为右子树
 * 第三步：由于前序遍历和中序遍历对左子树和右子树的节点数量是一致的，只有顺序的差异，因此，前序遍历左子树的节点索引范围为 inRoot - inLeft + preLeft，右子树的节点索引范围为 inRoot - inLeft + preLeft + 1
 * 第四步：构建 TreeNode，其中根为 第一步 中获取，左子树和右子树通过递归获得。
 */
const getTree = (
  preOrder,
  inOrder,
  preLeft,
  preRight,
  inLeft,
  inRight,
  inOrderMap
) => {
  // 终止条件：遍历队列左侧索引小于右侧
  if (preLeft > preRight || inLeft > inRight) {
    return null;
  }

  // 先序遍历里的根节点就是第一个元素
  const preRoot = preOrder[preLeft];
  // 找到中序遍历里的根节点
  const inRoot = inOrderMap.get(preRoot);

  // 创建一个新节点
  return new TreeNode(
    preRoot,
    // 递归获取左子树
    getTree(
      preOrder,
      inOrder,
      preLeft + 1,
      inRoot - inLeft + preLeft,
      inLeft,
      inRoot - 1,
      inOrderMap
    ),
    // 递归获取右子树
    getTree(
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
  const length = preorder.length;
  // 这里先生成一个中序遍历的 Map，避免后续递归查找中序遍历中根的位置
  const inOrderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inOrderMap.set(inorder[i], i);
  }
  
  return getTree(preorder, inorder, 0, length - 1, 0, length - 1, inOrderMap);
};
// @lc code=end
