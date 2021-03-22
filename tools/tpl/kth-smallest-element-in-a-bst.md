<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">230. 二叉搜索树中第K小的元素</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Binary Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉搜索树的根节点 <code>root</code> ，和一个整数 <code>k</code> ，请你设计一个算法查找其中第 <code>k</code><strong> </strong>个最小元素（从 1 开始计数）。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg" style="width: 212px; height: 301px;" />
<pre>
<strong>输入：</strong>root = [3,1,4,null,2], k = 1
<strong>输出：</strong>1
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg" style="width: 382px; height: 302px;" />
<pre>
<strong>输入：</strong>root = [5,3,6,2,4,null,null,1], k = 3
<strong>输出：</strong>3
</pre>

<p> </p>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中的节点数为 <code>n</code> 。</li>
	<li><code>1 <= k <= n <= 10<sup>4</sup></code></li>
	<li><code>0 <= Node.val <= 10<sup>4</sup></code></li>
</ul>

<p> </p>

<p><strong>进阶：</strong>如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 <code>k</code> 小的值，你将如何优化算法？</p>

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 迭代写法（非递归）
  // 思路：实现一个中序遍历，因为二叉搜索树都是 左子树 < 根 < 右子树，因此中序遍历是按照排序顺序输出
  // 找到第 k-1 次输出的结果，就是第 k 小的元素（因为 k 从 1 开始）
  //  以下为标准中序遍历写法
  let stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 这里和中序遍历有区别，常规中序遍历是将 root.val 追加到 results 结果集中
    if (k === 1) return root.val;
    else k--;
    root = root.right;
  }
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
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
 * @param {number} k
 * @return {number}
 */
// 这是一个中序遍历，二叉搜索树中序遍历的结果就是有序的，获取第 k-1 个元素就是第 k 个数字。
var inOrder = function (root, results) {
  // 遍历到叶子了
  if (root === null) {
    return null;
  }
  // 先遍历左子树
  inOrder(root.left, results);
  // 然后是根节点
  results.push(root.val);
  // 再遍历右子树
  inOrder(root.right, results);
};

var kthSmallest = function (root, k) {
  // 存放结果集（有序的结果）
  let results = [];
  // 中序遍历
  inOrder(root, results);
  // 第 k-1 个索引就是 k 个元素
  return results[k - 1];
};
```