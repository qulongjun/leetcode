<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">94. 二叉树的中序遍历</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>Tree</code>&nbsp;<code>Hash Table</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-inorder-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-inorder-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树的根节点 <code>root</code> ，返回它的 <strong>中序</strong> 遍历。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="width: 202px; height: 324px;" />
<pre>
<strong>输入：</strong>root = [1,null,2,3]
<strong>输出：</strong>[1,3,2]
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
<strong>输出：</strong>[2,1]
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

<p><strong>进阶:</strong> 递归算法很简单，你可以通过迭代算法完成吗？</p>

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 模拟一个栈，push 、 pop 后进先出
  let stacks = [];
  // 定义一个结果集，用来存放中序遍历的结果
  let results = [];
  // 当 root 不为空或者栈没有清空的时候执行
  while (root !== null || stacks.length) {
    // 当 root 不为空，就将左子树源源不断的加到栈里，最后栈顶的就是最左子树的那个叶子节点
    while (root !== null) {
      stacks.push(root);
      root = root.left;
    }
    // 推出一个左子树节点
    root = stacks.pop();
    // 将节点值加入结果集
    results.push(root.val);
    // root 切换到右子树，再在右子树里找左子树 -> 根 -> 右子树
    root = root.right;
  }
  // 返回结果集
  return results;
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
 * @return {number[]}
 * @description 递归解法
 */
// var inorderTraversal = function (root) {
//   // 终止条件 / 边界条件
//   if (root === null) return [];

//   // 中序遍历：[左叶子节点，根节点，右叶子节点]
//   return [
//     // 递归遍历左叶子节点
//     ...inorderTraversal(root.left),
//     // 插入当前根节点
//     root.val,
//     // 递归遍历右叶子节点
//     ...inorderTraversal(root.right),
//   ];
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description 迭代解法
 */
var inorderTraversal = function (root) {
  // 用于临时存放结点信息
  const stack = [];
  // 用于存放最终结果
  const result = [];

  while (root !== null || stack.length) {
    // 将左右左边结点放到临时 stack 里，根节点 root 第一个进入，左边叶子结点后续进入，因此出 stack 的顺序即为先左边结点，后根结点
    while (root !== null) {
      stack.push(root);
      // 计算左边结点
      root = root.left;
    }
    // 此时 stack 已经将全部左叶子结点存储了， root 此时为 null
    root = stack.pop();
    // 存储当前出栈的结点值
    result.push(root.val);
    // 计算右边结点
    root = root.right;
  }

  return result;
};
```