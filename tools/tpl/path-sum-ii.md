<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">113. 路径总和 II</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/path-sum-ii/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/path-sum-ii/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你二叉树的根节点 <code>root</code> 和一个整数目标和 <code>targetSum</code> ，找出所有 <strong>从根节点到叶子节点</strong> 路径总和等于给定目标和的路径。</p>

<p><strong>叶子节点</strong> 是指没有子节点的节点。</p>

<div class="original__bRMd">
<div>
<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg" style="width: 500px; height: 356px;" />
<pre>
<strong>输入：</strong>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
<strong>输出：</strong>[[5,4,11,2],[5,8,4,5]]
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" style="width: 212px; height: 181px;" />
<pre>
<strong>输入：</strong>root = [1,2,3], targetSum = 5
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>root = [1,2], targetSum = 0
<strong>输出：</strong>[]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点总数在范围 <code>[0, 5000]</code> 内</li>
	<li><code>-1000 <= Node.val <= 1000</code></li>
	<li><code>-1000 <= targetSum <= 1000</code></li>
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
 * @param {number} sum 需要计算的总数
 * @param {number[][]} results 全量符合要求的路径集合
 * @param {number[]} pathList 当前计算中的路径集合
 */
const getPath = (root, sum, results, pathList) => {
  // 如果根结点为空，则直接没有路径
  if (root == null) {
    return [];
  }
  // 记录一下当前走到的路径，[...前序路径，当前结点值]
  pathList = [...pathList, root.val];
  // 如果当前结点是叶子结点，且当前结点的值 === 需要的总数，就直接将当前路径推送到全量路径中
  if (root.left === null && root.right === null && root.val === sum) {
    results.push(pathList);
  }
  // 如果当前结点不是叶子结点，就继续往下找，此时 sum 为去掉当前结点值之后的总数
  getPath(root.left, sum - root.val, results, pathList);
  getPath(root.right, sum - root.val, results, pathList);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const results = [];
  getPath(root, sum, results, []);
  return results;
};
```