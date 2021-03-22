<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">108. 将有序数组转换为二叉搜索树</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个整数数组 <code>nums</code> ，其中元素已经按 <strong>升序</strong> 排列，请你将其转换为一棵 <strong>高度平衡</strong> 二叉搜索树。</p>

<p><strong>高度平衡 </strong>二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" style="width: 302px; height: 222px;" />
<pre>
<strong>输入：</strong>nums = [-10,-3,0,5,9]
<strong>输出：</strong>[0,-3,9,-10,null,5]
<strong>解释：</strong>[0,-10,5,null,-3,null,9] 也将被视为正确答案：
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" style="width: 302px; height: 222px;" />
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" style="width: 342px; height: 142px;" />
<pre>
<strong>输入：</strong>nums = [1,3]
<strong>输出：</strong>[3,1]
<strong>解释：</strong>[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= nums.length <= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>
	<li><code>nums</code> 按 <strong>严格递增</strong> 顺序排列</li>
</ul>

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
function getTree(nums, left, right) {
  if (right < left || right < 0 || left < 0) return null;

  const middle = left + parseInt((right - left) / 2);

  const rootNode = new TreeNode(
    nums[middle],
    getTree(nums, left, middle - 1),
    getTree(nums, middle + 1, right)
  );

  return rootNode;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return getTree(nums, 0, nums.length - 1);
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
class TreeNode {
  constructor(val, left, right) {
    (this.val = val), (this.left = left || null), (this.right = right || null);
  }
}

/**
 *
 * @param {numbers[]}} nums
 * @param {number} start
 * @param {number} end
 *
 *     -10 -3 0 5 9
 *      s     m   e  -> 计算出中间位置的元素，即为根
 *      s  m-1 m+1 e -> 递归计算左子树 / 右子树范围
 *
 */
const getTree = (nums, start, end) => {
  // 结束条件
  if (end < start || end < 0 || start < 0) return null;
  // 计算中间的结点，平衡二叉树必须在中间位置，否则无法平衡
  const middle = start + parseInt((end - start) / 2);

  // 创建新结点
  const root = new TreeNode(
    // 结点值
    nums[middle],
    // 递归计算左子树
    middle === 0 ? null : getTree(nums, start, middle - 1),
    // 递归计算右子树
    middle === end ? null : getTree(nums, middle + 1, end)
  );

  return root;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return getTree(nums, 0, nums.length - 1);
};
```