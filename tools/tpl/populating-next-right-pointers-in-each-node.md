<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">116. 填充每个节点的下一个右侧节点指针</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/populating-next-right-pointers-in-each-node/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个 <strong>完美二叉树 </strong>，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：</p>

<pre>
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}</pre>

<p>填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 <code>NULL</code>。</p>

<p>初始状态下，所有 next 指针都被设置为 <code>NULL</code>。</p>

<p> </p>

<p><strong>进阶：</strong></p>

<ul>
	<li>你只能使用常量级额外空间。</li>
	<li>使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。</li>
</ul>

<p> </p>

<p><strong>示例：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2019/02/14/116_sample.png" style="height: 205px; width: 600px;" /></p>

<pre>
<b>输入：</b>root = [1,2,3,4,5,6,7]
<b>输出：</b>[1,#,2,3,#,4,5,6,7,#]
<b>解释：</b>给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点的数量少于 <code>4096</code></li>
	<li><code>-1000 &lt;= node.val &lt;= 1000</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // 解题思路：左子树.next = 右子树 ， 右子树.next = 根节点.next.左子树
  // 如果根节点为 null，则直接返回 null
  if (root === null) return null;
  // 左子树存在，则将左子树.next = 右子树
  if (root.left) {
    root.left.next = root.right;
  }
  // 右子树存在，则将右子树.next = 根.next.左子树，如果根.next不存在，则为 null
  if (root.right) {
    root.right.next = root.next ? root.next.left : null;
  }

  // 递归遍历左子树
  connect(root.left);
  // 递归遍历右子树
  connect(root.right);

  return root;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var deepTree = function (node1, node2) {
  // 如果第一个节点或者第二个节点为空，则返回 null
  if (node1 === null || node2 === null) {
    return null;
  }
  // 具体的指向操作
  node1.next = node2;

  // 第一个节点的左子树的 next 指向第一个节点的右子树
  deepTree(node1.left, node1.right);
  // 第二个节点的左子树的 next 指向第二个节点的右子树
  deepTree(node2.left, node2.right);
  // 第一个节点的右子树的 next 指向第二个节点的左子树
  deepTree(node1.right, node2.right);
};

var connect = function (root) {
  // 如果根节点为空，则直接返回 null
  if (root === null) return null;
  // 深度遍历根节点
  deepTree(root.left, root.right);
  // 返回修改之后的节点
  return root;
};
```