<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">199. 二叉树的右视图</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Breadth-first Search</code>&nbsp;<code>Recursion</code>&nbsp;<code>Queue</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-right-side-view/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-right-side-view/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong>&nbsp;[1,2,3,null,5,null,4]
<strong>输出:</strong>&nbsp;[1, 3, 4]
<strong>解释:
</strong>
   1            &lt;---
 /   \
2     3         &lt;---
 \     \
  5     4       &lt;---
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
 * @return {number[]}
 * @description 类似于层次遍历，区别是层次遍历在最后返回时直接返回，本题只取最边上的结点
 */
var rightSideView = function (root) {
  if (root === null) return [];
  const resultMap = [];
  const stack = [{ data: root, level: 0 }];

  while (stack.length) {
    const { level, data } = stack.pop();

    if (resultMap[level]) {
      resultMap[level].push(data.val);
    } else {
      resultMap[level] = [data.val];
    }

    if (data.left) stack.push({ level: level + 1, data: data.left });
    if (data.right) stack.push({ level: level + 1, data: data.right });
  }

  // 唯一的区别
  return resultMap.map((item) => item.shift());
};
```