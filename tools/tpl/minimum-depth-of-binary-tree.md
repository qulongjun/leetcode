<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">111. 二叉树的最小深度</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/minimum-depth-of-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，找出其最小深度。</p>

<p>最小深度是从根节点到最近叶子节点的最短路径上的节点数量。</p>

<p><strong>说明：</strong>叶子节点是指没有子节点的节点。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg" style="width: 432px; height: 302px;" />
<pre>
<strong>输入：</strong>root = [3,9,20,null,null,15,7]
<strong>输出：</strong>2
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>root = [2,null,3,null,4,null,5,null,6]
<strong>输出：</strong>5
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点数的范围在 <code>[0, 10<sup>5</sup>]</code> 内</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
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
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    // 如果根节点为 null，则深度为 0
  if (root === null) return 0;

  // 计算左子树的最小深度
  let leftDepth = minDepth(root.left);
  // 计算右子树的最小深度
  let rightDepth = minDepth(root.right);

  // 如果左子树和右子树同时存在最小深度值（都不为0），则证明左子树和右子树都不为空，取两者的 更小值 + 1 即为最小深度
  // 否则，左子树和右子树至少有一个为 0，则证明至少左子树为空或者右子树为空。
  // 最小深度是从根节点到最近叶子节点的最短路径上的节点数量，也就是说除非是只有一个根节点，不然的话必须要有一个根节点跟叶子节点才能组成路径，根节点自己不能作为叶子节点。
  // 如果左子树最小深度为 0 ，则只能看右子树，如果右子树最小深度为 0，则只能看左子树
  return leftDepth && rightDepth
    ? 1 + Math.min(leftDepth, rightDepth)
    : 1 + (leftDepth || rightDepth);
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;
  // 如果左子树不为空，右子树为空，则左子树 + 1
  if (root.left !== null && root.right === null) return minDepth(root.left) + 1;
  // 如果左子树为空，右子树不为空，则右子树 + 1
  if (root.left === null && root.right !== null) return minDepth(root.right) + 1;

  // 返回子树里的最短长度，加上根节点
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
```