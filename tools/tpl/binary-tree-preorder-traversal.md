<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">144. 二叉树的前序遍历</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>Tree</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-preorder-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-preorder-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你二叉树的根节点 <code>root</code> ，返回它节点值的 <strong>前序</strong><em> </em>遍历。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="width: 202px; height: 324px;" />
<pre>
<strong>输入：</strong>root = [1,null,2,3]
<strong>输出：</strong>[1,2,3]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>root = []
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>root = [1]
<strong>输出：</strong>[1]
</pre>

<p><strong>示例 4：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg" style="width: 202px; height: 202px;" />
<pre>
<strong>输入：</strong>root = [1,2]
<strong>输出：</strong>[1,2]
</pre>

<p><strong>示例 5：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg" style="width: 202px; height: 202px;" />
<pre>
<strong>输入：</strong>root = [1,null,2]
<strong>输出：</strong>[1,2]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点数目在范围 <code>[0, 100]</code> 内</li>
	<li><code>-100 <= Node.val <= 100</code></li>
</ul>

<p> </p>

<p><strong>进阶：</strong>递归算法很简单，你可以通过迭代算法完成吗？</p>

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
 * @return {number[]}
 */
// var preorderTraversal = function (root) {
//   if (root === null) return [];
//   return [
//     root.val,
//     ...preorderTraversal(root.left),
//     ...preorderTraversal(root.right),
//   ];
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 存储栈信息
  const stack = [];
  // 存储输出的结果
  const result = [];

  // 根先入栈
  if (root) stack.push(root);

  // 前序遍历顺序是 根 -> 左 -> 右，因此 Stack 入栈顺序是 右 -> 左
  while (stack.length > 0) {
    // 从尾部出一个
    const node = stack.pop();
    // 先将根打出来
    result.push(node.val);
    // 右边先进栈，意味着后出
    if (node.right !== null) stack.push(node.right);
    // 左边后进栈，意味着先出
    if (node.left !== null) stack.push(node.left);
  }

  return result;
};

```