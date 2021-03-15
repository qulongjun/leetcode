<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">104. 二叉树的最大深度</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Recursion</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，找出其最大深度。</p>

<p>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</p>

<p><strong>说明:</strong>&nbsp;叶子节点是指没有子节点的节点。</p>

<p><strong>示例：</strong><br>
给定二叉树 <code>[3,9,20,null,null,15,7]</code>，</p>

<pre>    3
   / \
  9  20
    /  \
   15   7</pre>

<p>返回它的最大深度&nbsp;3 。</p>

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
// 层次遍历二叉树方式BFS
var maxDepth = function (root) {
  // 如果根节点为 null，直接返回 0
  if (root === null) return 0;
  // 定义一个变量存放深度，层次就是深度
  let count = 0;
  // 定义一个队列存放每一层的树的节点，一层就是 1 个深度，将子节点从队尾插入，从队头取出
  let queue = [root];
  // 当队列没有空，就证明当前层次遍历还没进行完成
  while (queue.length !== 0) {
    // 每层会走一次 while，其中 size 表示该层总共的节点数
    count++;
    // 暂存一下该层的节点数
    let size = queue.length;
    // 遍历该层的节点数（为什么要暂存节点数，因为队列会实时追加子节点，数量动态变化的）
    for (let i = 0; i < size; i++) {
      // 当前节点出队列
      let tempNode = queue.shift();
      // 将左子树入队列
      if (tempNode.left !== null) queue.push(tempNode.left);
      // 将右子树入队列
      if (tempNode.right !== null) queue.push(tempNode.right);
    }
  }
  // 返回深度
  return count;
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
var maxDepth_v1 = function (root) {
  // 如果节点为 null，表示当前节点不存在
  if (root === null) return 0;

  // Math.max 比较多个值之中的最大值
  // maxDepth(root.left) + 1：当前节点为 1 层，加上左子树的层数/右子树的层数
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

// 层次遍历二叉树方式BFS
var maxDepth = function (root) {
  // 如果根节点为 null，直接返回 0
  if (root === null) return 0;
  // 定义一个变量存放深度，层次就是深度
  let count = 0;
  // 定义一个队列存放每一层的树的节点，一层就是 1 个深度，将子节点从队尾插入，从队头取出
  let queue = [root];
  // 当队列没有空，就证明当前层次遍历还没进行完成
  while (queue.length !== 0) {
    // 每层会走一次 while，其中 size 表示该层总共的节点数
    count++;
    // 暂存一下该层的节点数
    let size = queue.length;
    // 遍历该层的节点数（为什么要暂存节点数，因为队列会实时追加子节点，数量动态变化的）
    for (let i = 0; i < size; i++) {
      // 当前节点出队列
      let tempNode = queue.shift();
      // 将左子树入队列
      if (tempNode.left !== null) queue.push(tempNode.left);
      // 将右子树入队列
      if (tempNode.right !== null) queue.push(tempNode.right);
    }
  }
  // 返回深度
  return count;
};

```