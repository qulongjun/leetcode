<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">103. 二叉树的锯齿形层序遍历</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>Tree</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。</p>

<p>例如：<br />
给定二叉树 <code>[3,9,20,null,null,15,7]</code>,</p>

<pre>
    3
   / \
  9  20
    /  \
   15   7
</pre>

<p>返回锯齿形层序遍历如下：</p>

<pre>
[
  [3],
  [20,9],
  [15,7]
]
</pre>

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // 边界条件
  if (root === null) return [];
  // 定义结果集
  let results = [];
  // node：保存当前节点， level：保存当前层级
  let queueList = [{ node: root, level: 0 }];
  // 当前队列没有清空，就走下去
  while (queueList.length) {
    // 从队伍头部出一个节点
    let { node, level } = queueList.shift();
    // 如果当前层级已经有节点了
    if (results[level]) {
      // 偶数 level 就从尾部推入，奇数 level 就从头部推入
      level % 2 !== 0
        ? results[level].unshift(node.val)
        : results[level].push(node.val);
    } else {
      // 如果是新层级，就新建一个数组
      results[level] = [node.val];
    }
    // 左子树
    if (node.left) queueList.push({ node: node.left, level: level + 1 });
    // 右子树
    if (node.right) queueList.push({ node: node.right, level: level + 1 });
  }

  return results;
};
```