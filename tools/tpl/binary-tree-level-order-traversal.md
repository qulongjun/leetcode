<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">102. 二叉树的层序遍历</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-level-order-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个二叉树，请你返回其按 <strong>层序遍历</strong> 得到的节点值。 （即逐层地，从左到右访问所有节点）。</p>

<p> </p>

<p><strong>示例：</strong><br />
二叉树：<code>[3,9,20,null,null,15,7]</code>,</p>

<pre>
    3
   / \
  9  20
    /  \
   15   7
</pre>

<p>返回其层序遍历结果：</p>

<pre>
[
  [3],
  [9,20],
  [15,7]
]
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
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 边界条件
  if (root === null) return [];
  // 定义一个结果集
  let results = [];
  // 定义一个队列，数组尾部将节点塞入，数组头部出来，头部出来的是根节点，尾部进去的是叶子节点
  let queueStack = [{ node: root, level: 0 }];

  // 当队列没有被清空
  while (queueStack.length) {
    // 从队列头部拿一个节点出来
    let { node, level } = queueStack.shift();
    // 如果结果集中已经有了部分同层级节点，则追加到里面，否则新建一层存放
    if (results[level]) {
      results[level].push(node.val);
    } else results[level] = [node.val];
    // 将左子树存放进入
    if (node.left) {
      queueStack.push({ node: node.left, level: level + 1 });
    }
    // 将右子树存放进入
    if (node.right) {
      queueStack.push({ node: node.right, level: level + 1 });
    }
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 特殊Case： 如果 root 不存在，则返回空数组
  if (root === null) return [];
  // 定义一个 Queue，使用广度优先遍历（BFS）方式依次遍历根和左右子树
  const queue = [{ data: root, level: 0 }];
  // 存放最终的遍历结果
  const resultMap = [];
  // 只要 Queue 里还有数据，就取出来，放到 resultMap 里，并将左右子树压入队列
  // 使用一个 level 字段，用来标示当前的层级，则左右子树的层级为 level + 1
  while (queue.length) {
    // 获取节点数据和层级信息
    const { data, level } = queue.shift();
    // 如果 resultMap 里已经存在了这个层级，就直接追加到尾部
    if (resultMap[level]) resultMap[level].push(data.val);
    // 否则，标示这是一个新的层级，需要新建一个元素存放
    else resultMap[level] = [data.val];
    // 将左子树追加到队列里
    if (data.left) queue.push({ level: level + 1, data: data.left });
    // 将右子树追加到队列里
    if (data.right) queue.push({ level: level + 1, data: data.right });
  }

  return resultMap;
};
```