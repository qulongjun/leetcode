<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">98. 验证二叉搜索树</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Recursion</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/validate-binary-search-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/validate-binary-search-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，判断其是否是一个有效的二叉搜索树。</p>

<p>假设一个二叉搜索树具有如下特征：</p>

<ul>
	<li>节点的左子树只包含<strong>小于</strong>当前节点的数。</li>
	<li>节点的右子树只包含<strong>大于</strong>当前节点的数。</li>
	<li>所有左子树和右子树自身必须也是二叉搜索树。</li>
</ul>

<p><strong>示例&nbsp;1:</strong></p>

<pre><strong>输入:</strong>
    2
   / \
  1   3
<strong>输出:</strong> true
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入:
</strong>    5
   / \
  1   4
&nbsp;    / \
&nbsp;   3   6
<strong>输出:</strong> false
<strong>解释:</strong> 输入为: [5,1,4,null,null,3,6]。
&nbsp;    根节点的值为 5 ，但是其右子节点值为 4 。
</pre>

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

const isBST = function (root, lower, upper) {
  // 如果根节点为null，则返回true
  if (root === null) return true;
  // 如果当前节点小于最小值或者大于最大值，则返回 false
  if (root.val <= lower || root.val >= upper) return false;
  // 比较当前节点的左子树（最大值：根节点） 和 当前节点的右子树（最小值：根节点）
  return (
    isBST(root.left, lower, root.val) && isBST(root.right, root.val, upper)
  );
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // -Infinity / Infinity 定义极小值和极大值
  return isBST(root, -Infinity, Infinity);
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValid(root, null, null);
};

/**
 *
 * @param {TreeNode} root
 * @param {Number} lower
 * @param {Number} upper
 * @description 抽象成：只需要比较节点的左子树是否小于当前节点，节点的右子树是否大于当前节点
 */
const isValid = (root, lower, upper) => {
  // 如果当前节点为 null，则表示不存在节点，直接返回true
  if (root === null) return true;
  // 如果当前节点（在左子树上）不大于根节点，则返回 false
  if (lower !== null && root.val <= lower) return false;
  // 如果当前节点（在右子树上）不小于根节点，则返回 false
  if (upper !== null && root.val >= upper) return false;

  // 同时比较左子树和右子树是否符合要求
  return (
    isValid(root.left, lower, root.val) && isValid(root.right, root.val, upper)
  );
};
```