<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">145. 二叉树的后序遍历</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>Tree</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-postorder-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-postorder-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，返回它的 <em>后序&nbsp;</em>遍历。</p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong> [1,null,2,3]  
   1
    \
     2
    /
   3 

<strong>输出:</strong> [3,2,1]</pre>

<p><strong>进阶:</strong>&nbsp;递归算法很简单，你可以通过迭代算法完成吗？</p>

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
 * @return {number[]}
 */
// var postorderTraversal = function (root) {
//   // 终止条件 / 边界条件
//   if (root === null) return [];

//   // 中序遍历：[左叶子节点，根节点，右叶子节点]

//   return [
//     // 递归遍历左叶子节点
//     ...postorderTraversal(root.left),
//     // 递归遍历右叶子节点
//     ...postorderTraversal(root.right),
//     // 插入当前根节点
//     root.val,
//   ];
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function (root) {
//   // 存放栈信息
//   const stack = [];
//   // 存放结果信息
//   const result = [];

//   if (root) stack.push(root);

//   /*

//       入栈顺序是：从上到下，从左到右，因此出栈顺序是：从下到上，从右到左
//         A
//       B    C
//       第一步：A 入栈，stack = [A] result = []
//       第二步：A 出栈，并将 A 的值从头部插入 result，stack = [], result = [A]
//       第三步：B 和 C 依次入栈，stack = [B, C]，result = [A]
//       第四步：C 出栈，C 没有叶子节点，不入 stack 栈，将 C 的值从头部插入 result = [C, A]
//       第五步：B 出栈，B 没有叶子节点，不入 stack 栈，将 B 的值从头部插入 result = [B, C, A]

//       此时，[B, C, A] 即代表 [左叶子节点, 右叶子节点, 根节点]

//    */
//   while (stack.length > 0) {
//     root = stack.pop();
//     // 从头部输出根节点，依次输出顺序为根 -> 右 -> 左，最终显示为 左 -> 右 -> 根
//     result.unshift(root.val);
//     // 左子树入栈
//     if (root.left) stack.push(root.left);
//     // 右子树入栈
//     if (root.right) stack.push(root.right);
//   }
//   return result;
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root === null) return [];
  const stack = [root];
  const resultsMap = [];

  while (stack.length) {
    const node = stack.pop();
    // 根始终是最后一个，从头部塞进去
    resultsMap.unshift(node.val);
    // 后进先出，左边先进去，后出来
    if (node.left) stack.push(node.left);
    // 右边后进去，先出来
    if (node.right) stack.push(node.right);
  }

  return resultsMap;
};

```