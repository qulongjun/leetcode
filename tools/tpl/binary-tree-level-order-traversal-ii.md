<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">107. 二叉树的层序遍历 II</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-level-order-traversal-ii/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）</p>

<p>例如：<br />
给定二叉树 <code>[3,9,20,null,null,15,7]</code>,</p>

<pre>
    3
   / \
  9  20
    /  \
   15   7
</pre>

<p>返回其自底向上的层序遍历为：</p>

<pre>
[
  [15,7],
  [9,20],
  [3]
]
</pre>

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
 * @return {number[][]}
 * @description 本题类似于 【0120】二叉树的层次遍历，解析参考该题
 */
var levelOrderBottom = function (root) {
  if (root === null) return [];
  const queue = [{ level: 0, data: root }];
  const resultMap = [];

  while (queue.length) {
    const { level, data } = queue.shift();
    if (resultMap[level]) resultMap[level].push(data.val);
    else resultMap[level] = [data.val];

    if (data.left) queue.push({ level: level + 1, data: data.left });
    if (data.right) queue.push({ level: level + 1, data: data.right });
  }

  // 唯一的不同，就是将结果反转之后输出
  return resultMap.reverse();
};
```