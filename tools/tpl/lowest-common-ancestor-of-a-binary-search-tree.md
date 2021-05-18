<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">235. 二叉搜索树的最近公共祖先</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。</p>

<p><a href="https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin" target="_blank">百度百科</a>中最近公共祖先的定义为：&ldquo;对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（<strong>一个节点也可以是它自己的祖先</strong>）。&rdquo;</p>

<p>例如，给定如下二叉搜索树:&nbsp; root =&nbsp;[6,2,8,0,4,7,9,null,null,3,5]</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png" style="width: 200px; height: 190px;" /></p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
<strong>输出:</strong> 6 
<strong>解释: </strong>节点 <code>2 </code>和节点 <code>8 </code>的最近公共祖先是 <code>6。</code>
</pre>

<p><strong>示例 2:</strong></p>

<pre><strong>输入:</strong> root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
<strong>输出:</strong> 2
<strong>解释: </strong>节点 <code>2</code> 和节点 <code>4</code> 的最近公共祖先是 <code>2</code>, 因为根据定义最近公共祖先节点可以为节点本身。</pre>

<p>&nbsp;</p>

<p><strong>说明:</strong></p>

<ul>
	<li>所有节点的值都是唯一的。</li>
	<li>p、q 为不同节点且均存在于给定的二叉搜索树中。</li>
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
  // 边界条件
  if (root === null) return null;

  // 二叉搜索树左子树 < 根 < 右子树
  // 如果 p < root, q > root，那么 root 就是公共祖先
  // 如果 p 和 q 都 < root，那么公共祖先节点在 root 的左边
  // 如果 p 和 q 都 > root，那么公共祖先节点在 root 的右边
  while (true) {
    if (p.val < root.val && q.val < root.val) root = root.left;
    else if (p.val > root.val && q.val > root.val) root = root.right;
    else break;
  }
  
  return root;
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

const getPath = (root, target, path) => {
  if (root === null) return null;
  // 路径中记录下当前节点
  path.push(root.val);
  // 如果当前节点值小于目标节点值，则目标节点在当前节点的右侧
  if (root.val < target.val) getPath(root.right, target, path);
  // 如果当前节点值大于目标节点值，则目标节点在当前节点的左侧
  if (root.val > target.val) getPath(root.left, target, path);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 定义一个容器存放 p 的路径
  const pPath = [];
  // 定义一个容器存放 q 的路径
  const qPath = [];
  // 计算 p 的路径
  getPath(root, p, pPath);
  // 计算 q 的路径
  getPath(root, q, qPath);
  // 计算 p 路径和 q 路径的最小值，公共节点肯定出现在最小值路径上
  const size = Math.min(pPath.length, qPath.length);
  // 特殊 case：当前节点不存在，即 root = null
  if (size === 0) return null;
  // 特殊 case：当前节点只有一个节点
  if (size === 1) return { val: pPath[0] };

  // 遍历查找 p 路径和 q 路径的公共部分，找到它们第一个不相等的地方，就退出，则它前一个地方就是公共节点
  for (let i = 1; i < size; i++) {
    if (pPath[i] === qPath[i]) continue;
    else return { val: pPath[i - 1] };
  }
  // 如果始终是一致的，意味着一个节点的路径完全是另一个节点的路径的子集，则直接返回短的路径的最后一个元素
  return { val: pPath[size - 1] };
};
```