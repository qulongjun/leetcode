<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">543. 二叉树的直径</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/diameter-of-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/diameter-of-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。</p>

<p>&nbsp;</p>

<p><strong>示例 :</strong><br>
给定二叉树</p>

<pre>          1
         / \
        2   3
       / \     
      4   5    
</pre>

<p>返回&nbsp;<strong>3</strong>, 它的长度是路径 [4,2,1,3] 或者&nbsp;[5,2,1,3]。</p>

<p>&nbsp;</p>

<p><strong>注意：</strong>两结点之间的路径长度是以它们之间边的数目表示。</p>

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

var diameterOfBinaryTree = function (root) {
  // 如果根节点为空，则直径为0
  if (root === null) return 0;
  // 定义一个全局变量，用来存放当前已经计算出来的最长路径
  let ans = 1;
  // 递归获取深度方法
  var depth = function (root) {
    // 如果根节点为空，则直径为0
    if (root === null) return 0;
    // 递归计算左子树深度
    let leftDepth = depth(root.left);
    // 递归计算右子树深度
    let rightDepth = depth(root.right);
    // 这里是用来计算当前已经拿到的最长直径和“以当前节点为根的路径 L + R + 1”中的最大值
    ans = Math.max(ans, leftDepth + rightDepth + 1);
    // 返回当前节点的最大深度
    return Math.max(leftDepth, rightDepth) + 1;
  };
  // 计算深度
  depth(root);
  // 这里-1是因为不是求深度，而是求直径，深度是节点，直径是边
  return ans - 1;
};
```