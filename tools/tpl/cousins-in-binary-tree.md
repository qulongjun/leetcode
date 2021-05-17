<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">1035. 二叉树的堂兄弟节点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/cousins-in-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/cousins-in-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>在二叉树中，根节点位于深度 <code>0</code> 处，每个深度为 <code>k</code> 的节点的子节点位于深度 <code>k+1</code> 处。</p>

<p>如果二叉树的两个节点深度相同，但<strong> 父节点不同</strong> ，则它们是一对<em>堂兄弟节点</em>。</p>

<p>我们给出了具有唯一值的二叉树的根节点 <code>root</code> ，以及树中两个不同节点的值 <code>x</code> 和 <code>y</code> 。</p>

<p>只有与值 <code>x</code> 和 <code>y</code> 对应的节点是堂兄弟节点时，才返回 <code>true</code> 。否则，返回 <code>false</code>。</p>

<p> </p>

<p><strong>示例 1：<br />
<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/q1248-01.png" style="height: 160px; width: 180px;" /></strong></p>

<pre>
<strong>输入：</strong>root = [1,2,3,4], x = 4, y = 3
<strong>输出：</strong>false
</pre>

<p><strong>示例 2：<br />
<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/q1248-02.png" style="height: 160px; width: 201px;" /></strong></p>

<pre>
<strong>输入：</strong>root = [1,2,3,null,4,null,5], x = 5, y = 4
<strong>输出：</strong>true
</pre>

<p><strong>示例 3：</strong></p>

<p><strong><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/q1248-03.png" style="height: 160px; width: 156px;" /></strong></p>

<pre>
<strong>输入：</strong>root = [1,2,3,null,4], x = 2, y = 3
<strong>输出：</strong>false</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>二叉树的节点数介于 <code>2</code> 到 <code>100</code> 之间。</li>
	<li>每个节点的值都是唯一的、范围为 <code>1</code> 到 <code>100</code> 的整数。</li>
</ul>

<p> </p>

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // 判断两个节点是否为堂兄弟节点，主要有两点：1. 两个节点的父节点不是同一个，2. 两个位于同一层。
  // 因此每个节点至少需要两个变量来存放信息： parent用来存放父节点，depth用来存放节点深度
  // 只有当 parent 不相等，且 depth 相等，才是堂兄弟
  // 定义 x 节点信息
  let x_parent = null,
    x_depth = 0;
  // 定义 y 节点信息
  let y_parent = null,
    y_depth = 0;

  // 深度优先遍历
  const dfs = function (root, depth, parent) {
    // 如果根节点为 null，则结束遍历
    if (root === null) return null;
    // 如果根节点值 === x，或者根节点值 === y，则证明找到该节点了，更新当前节点的信息
    if (root.val === x) {
      // 更新其父节点和深度信息
      [x_parent, x_depth] = [parent, depth];
    }
    // 同上
    if (root.val === y) {
      [y_parent, y_depth] = [parent, depth];
    }
    // 剪枝操作，如果当前节点已经找到了 x 和 y，则不再比较子节点
    if (x_parent && y_parent) return;
    // 深度遍历左子树节点
    dfs(root.left, depth + 1, root);
    // 剪枝操作，如果当前节点已经找到了 x 和 y，则不再比较右节点
    if (x_parent && y_parent) return;
    // 深度遍历右子树节点
    dfs(root.right, depth + 1, root);
  };

  // 调用 dfs 方法遍历
  dfs(root, 0, null);

  // 判断依据：x 和 y 深度相同，但父节点不相同
  return x_depth === y_depth && x_parent !== y_parent;
};
```