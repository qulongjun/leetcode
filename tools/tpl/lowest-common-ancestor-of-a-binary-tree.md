<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">236. 二叉树的最近公共祖先</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p>

<p><a href="https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin" target="_blank">百度百科</a>中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（<strong>一个节点也可以是它自己的祖先</strong>）。”</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;" />
<pre>
<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
<strong>输出：</strong>3
<strong>解释：</strong>节点 <code>5 </code>和节点 <code>1 </code>的最近公共祖先是节点 <code>3 。</code>
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;" />
<pre>
<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
<strong>输出：</strong>5
<strong>解释：</strong>节点 <code>5 </code>和节点 <code>4 </code>的最近公共祖先是节点 <code>5 。</code>因为根据定义最近公共祖先节点可以为节点本身。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>root = [1,2], p = 1, q = 2
<strong>输出：</strong>1
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点数目在范围 <code>[2, 10<sup>5</sup>]</code> 内。</li>
	<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code></li>
	<li>所有 <code>Node.val</code> <code>互不相同</code> 。</li>
	<li><code>p != q</code></li>
	<li><code>p</code> 和 <code>q</code> 均存在于给定的二叉树中。</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 边界条件，如果 root 是 null，肯定就没有节点了
  if (root === null) return null;
  // 如果 p 和 q 有一个或者全部是 root，则 root 是公共节点
  if (root === p || root === q) return root;
  // 去左子树找等于 p 或者 q 的节点
  let rootLeft = lowestCommonAncestor(root.left, p, q);
  // 去右子树找等于 p 或者 q 的节点
  let rootRight = lowestCommonAncestor(root.right, p, q);
  // 如果左子树和右子树都找到节点，说明公共节点就是 root
  if (rootLeft !== null && rootRight !== null) return root;
  // 如果只在左子树里找到，就表示根节点是左子树
  if (rootLeft !== null) return rootLeft;
  // 如果只在右子树里找到，就表示根节点是右子树
  if (rootRight !== null) return rootRight;
  // 否则表示啥都没找到，返回 null
  return null;
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 边界条件，如果 root 为空，直接返回 null
  if (root === null) return null;
  // 如果根节点就是 p 或者 q，说明 公共祖先节点就是 root
  if (root.val === p.val || root.val === q.val) return root;
  // 去左子树找公共祖先节点
  let left = lowestCommonAncestor(root.left, p, q);
  // 去右子树找公共祖先节点
  let right = lowestCommonAncestor(root.right, p, q);
  // 左子树没找到，则说明祖先节点在右子树
  if (left === null) return right;
  // 右子树没找到，说明祖先节点在左子树
  if (right === null) return left;
  // 如果一边是左子树，一边是右子树，说明公共祖先节点就是根
  return root;
};
```