<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">110. 平衡二叉树</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Recursion</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/balanced-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/balanced-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，判断它是否是高度平衡的二叉树。</p>

<p>本题中，一棵高度平衡二叉树定义为：</p>

<blockquote>
<p>一个二叉树<em>每个节点 </em>的左右两个子树的高度差的绝对值不超过 1 。</p>
</blockquote>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg" style="width: 342px; height: 221px;" />
<pre>
<strong>输入：</strong>root = [3,9,20,null,null,15,7]
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg" style="width: 452px; height: 301px;" />
<pre>
<strong>输入：</strong>root = [1,2,2,3,3,null,null,4,4]
<strong>输出：</strong>false
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>root = []
<strong>输出：</strong>true
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中的节点数在范围 <code>[0, 5000]</code> 内</li>
	<li><code>-10<sup>4</sup> <= Node.val <= 10<sup>4</sup></code></li>
</ul>

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

// 计算当前最大深度
var getDepth = function (root) {
  if (root === null) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;

  // 当前节点必须是平衡二叉树，然后左右子节点也必须是平衡二叉树
  return (
    Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
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
 * 通用获取高度方法
 * @param {TreeNode} root
 */
// const getMaxDepth = (root) => {
//   if (root === null) return 0;

//   return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
// };

/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 自顶向下的检查,缺点：多次计算子树的高度
 */
// var isBalanced = function (root) {
//   // 如果结点不存在，自然是平衡的
//   if (root === null) return true;

//   return (
//     // 比较当前结点的左右子树是否平衡
//     Math.abs(getMaxDepth(root.left) - getMaxDepth(root.right)) <= 1 &&
//     // 递归比较左子树是否平衡
//     isBalanced(root.left) &&
//     // 递归比较右子树是否平衡
//     isBalanced(root.right)
//   );
// };

/**
 *
 * @param {TrreNode} root
 *
 * 用 -1 表示当前结点不是平衡二叉树
 */
const getHeight = (root) => {
  // 如果当前为空结点，则为平衡二叉树，返回 0
  if (root == null) return 0;
  // 递归到叶子结点
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  // leftHeight / rightHeight === -1 表示在它的底下已经不是平衡二叉树了，直接返回 -1
  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1;
  }
  // 如果他们之间的高度 <= 1，则获取他们的实际高度，以备后续使用
  return Math.max(leftHeight, rightHeight) + 1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 自底向上的检查
 */
var isBalanced = function (root) {
  return getHeight(root) >= 0;
};

```