<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">129. 求根节点到叶节点数字之和</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/sum-root-to-leaf-numbers/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
给你一个二叉树的根节点 <code>root</code> ，树中每个节点都存放有一个 <code>0</code> 到 <code>9</code> 之间的数字。
<div class="original__bRMd">
<div>
<p>每条从根节点到叶节点的路径都代表一个数字：</p>

<ul>
	<li>例如，从根节点到叶节点的路径 <code>1 -> 2 -> 3</code> 表示数字 <code>123</code> 。</li>
</ul>

<p>计算从根节点到叶节点生成的 <strong>所有数字之和</strong> 。</p>

<p><strong>叶节点</strong> 是指没有子节点的节点。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg" style="width: 212px; height: 182px;" />
<pre>
<strong>输入：</strong>root = [1,2,3]
<strong>输出：</strong>25
<strong>解释：</strong>
从根到叶子节点路径 <code>1->2</code> 代表数字 <code>12</code>
从根到叶子节点路径 <code>1->3</code> 代表数字 <code>13</code>
因此，数字总和 = 12 + 13 = <code>25</code></pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg" style="width: 292px; height: 302px;" />
<pre>
<strong>输入：</strong>root = [4,9,0,5,1]
<strong>输出：</strong>1026
<strong>解释：</strong>
从根到叶子节点路径 <code>4->9->5</code> 代表数字 495
从根到叶子节点路径 <code>4->9->1</code> 代表数字 491
从根到叶子节点路径 <code>4->0</code> 代表数字 40
因此，数字总和 = 495 + 491 + 40 = <code>1026</code>
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点的数目在范围 <code>[1, 1000]</code> 内</li>
	<li><code>0 <= Node.val <= 9</code></li>
	<li>树的深度不超过 <code>10</code></li>
</ul>
</div>
</div>

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
 *
 * @param {TreeNode} root 根结点
 * @param {number} sum 已经计算的全部路径的值
 * @param {number} path 当前路径中的值
 */
const getSum = (root, sum, path) => {
  // 如果当前结点为空，则路径为0
  if (root === null) return 0;
  // 计算当前路径的结点值
  path = 10 * path + root.val;
  // 如果当前结点是叶子结点，则表示该路径已经计算完了，把计算结果保存到全部路径的值中
  if (root.left === null && root.right === null) {
    sum.count += path;
  }
  // 如果不是叶子结点，则递归计算左子树和右子树的路径值
  getSum(root.left, sum, path);
  getSum(root.right, sum, path);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * @description 这道题是 【0124】 / 【0129】 两题的变种，区别是这两题是指定计算路径总和为 nums，且打印路径，本题为遍历路径，打印路径总和
 */
var sumNumbers = function (root) {
  // 用一个 Object 类型存储路径总和，因为 Object 类型为引用类型，计算过程中不会丢失变量
  const sum = { count: 0 };
  getSum(root, sum, 0);
  return sum.count;
};
```