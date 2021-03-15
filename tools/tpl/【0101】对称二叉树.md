<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">101. 对称二叉树</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/symmetric-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/symmetric-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，检查它是否是镜像对称的。</p>

<p>&nbsp;</p>

<p>例如，二叉树&nbsp;<code>[1,2,2,3,4,4,3]</code> 是对称的。</p>

<pre>    1
   / \
  2   2
 / \ / \
3  4 4  3
</pre>

<p>&nbsp;</p>

<p>但是下面这个&nbsp;<code>[1,2,2,null,3,null,3]</code> 则不是镜像对称的:</p>

<pre>    1
   / \
  2   2
   \   \
   3    3
</pre>

<p>&nbsp;</p>

<p><strong>进阶：</strong></p>

<p>你可以运用递归和迭代两种方法解决这个问题吗？</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 比较两个节点是否一样
var isEqual = function (leftNode, rightNode) {
  // 左子树和右子树都是 null，是对称的，返回 true
  if (leftNode === null && rightNode === null) return true;
  // 左子树和右子树只有一个为 null，说明不是对称的，返回 false
  if (leftNode === null || rightNode === null) return false;
  // 左子树的节点值和右子树节点值不一样，不是对称的，返回 false
  if (leftNode.val !== rightNode.val) return false;

  // 递归比较左子树的左节点和右子树的右节点是否一样 && 左子树的右节点和右子树的左节点是否一样
  return (
    isEqual(leftNode.left, rightNode.right) &&
    isEqual(leftNode.right, rightNode.left)
  );
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 如果根节点为null，则是对称的
  if (root === null) return true;
  
  return isEqual(root.left, root.right);
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *
 * 用来进行节点比较的函数
 *
 * @param {*} leftLeaf 左子树
 * @param {*} rightLeaf 右子树
 */
const isEqual = (leftLeaf, rightLeaf) => {
  // 左子树为 null 且右子树为 null ，则返回 true
  if (leftLeaf === null && rightLeaf === null) return true;
  // 左子树或者右子树有一个为 null，另一个不为 null ，返回 false
  else if (leftLeaf === null || rightLeaf === null) return false;
  // 此时左子树和右子树都不为 null，左子树的值和右子树的值不同，返回 null
  if (leftLeaf.val !== rightLeaf.val) return false;

  return (
    // 镜像比较，节点的左子树和节点的右子树比较
    isEqual(leftLeaf.left, rightLeaf.right) &&
    // 反之一样
    isEqual(leftLeaf.right, rightLeaf.left)
  );
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 如果节点不存在，也是对称的二叉树
  if (!root) return true;
  return isEqual(root.left, root.right);
};
```