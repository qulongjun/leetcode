<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">106. 从中序与后序遍历序列构造二叉树</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>根据一棵树的中序遍历与后序遍历构造二叉树。</p>

<p><strong>注意:</strong><br>
你可以假设树中没有重复的元素。</p>

<p>例如，给出</p>

<pre>中序遍历 inorder =&nbsp;[9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]</pre>

<p>返回如下的二叉树：</p>

<pre>    3
   / \
  9  20
    /  \
   15   7
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

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/*
    中序遍历 [ 左子树 ][ 根 ][ 右子树 ]
    后序遍历 [ 左子树 ][ 右子树 ][ 根 ]

    从上述可得：new Tree(根，递归(左子树)，递归（右子树）)

    递归子树
        中序遍历：[inLeft, ..., inRoot - 1][inRoot][inRoot + 1, ..., inRight]
        后序遍历：[postLeft, ..., inRoot - inLeft - 1 + postLeft][inRoot - inLeft + postLeft, ..., postRight - 1][postRoot]
*/
var buildFactory = function (
  inOrder,
  postOrder,
  inLeft,
  inRight,
  postLeft,
  postRight,
  inOrderMap
) {
  // 如果当前遍历已经不存在了，则返回 null
  if (inLeft > inRight || postLeft > postRight) return null;

  // 获取根，因为后序遍历的最后一个节点必然是根
  let postRoot = postOrder[postRight];
  // 获取中序遍历根的索引，此处 inRoot 为索引值
  let inRoot = inOrderMap.get(postRoot);

  return new TreeNode(
    postRoot,
    buildFactory(
      inOrder,
      postOrder,
      inLeft,
      inRoot - 1,
      postLeft,
      inRoot - inLeft + postLeft - 1,
      inOrderMap
    ),
    buildFactory(
      inOrder,
      postOrder,
      inRoot + 1,
      inRight,
      inRoot - inLeft + postLeft,
      postRight - 1,
      inOrderMap
    )
  );
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 因为递归遍历每次都要去中序遍历里找根，因此定义一个 HashMap 存放中序遍历的每一个信息[中序遍历的根: 索引]
  let hashMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    hashMap.set(inorder[i], i);
  }
  return buildFactory(
    inorder,
    postorder,
    0,
    inorder.length - 1,
    0,
    postorder.length - 1,
    hashMap
  );
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
 * @param {number[]} inOrder 中序遍历序列
 * @param {number[]} postOrder 后序遍历数列
 * @param {number} inLeft 中序遍历起始位置
 * @param {number} inRight 中序遍历结束位置
 * @param {number} postLeft 后序遍历起始位置
 * @param {number} postRight 后序遍历结束位置
 * @param {Map} inOrderMap 中序遍历 值 - 索引 Map
 *
 * 后序遍历：[   左子树   ][   右子树   ][ 根 ]
 * 中序遍历：[   左子树   ][ 根 ][   右子树   ]
 * 第一步：后序遍历的最后一个节点 postRight 就是 [根]
 * 第二步：中序遍历中找出该节点 inRoot，该节点前节点（inLeft 至 inRoot-1）为左子树，该节点后节点（inRoot+1 至 inRight）为右子树
 * 第三步：由于后序遍历和中序遍历对左子树和右子树的节点数量是一致的，只有顺序的差异，因此，后序遍历左子树的节点索引范围为 inRoot - inLeft + postLeft -1，右子树的节点索引范围为 inRoot - inLeft + postLeft
 * 第四步：构建 TreeNode，其中根为 第一步 中获取，左子树和右子树通过递归获得。
 *
 */
const getTree = (
  inOrder,
  postOrder,
  inLeft,
  inRight,
  postLeft,
  postRight,
  inOrderMap
) => {
  // 终止条件：遍历队列左侧索引小于右侧
  if (inLeft > inRight || postLeft > postRight) {
    return null;
  }

  // 后序遍历里的根节点就是最后一个元素
  const postRoot = postOrder[postRight];
  // 找到中序遍历里的根节点
  const inRoot = inOrderMap.get(postRoot);

  // 创建一个新节点
  return new TreeNode(
    postRoot,
    // 递归获取左子树
    getTree(
      inOrder,
      postOrder,
      inLeft,
      inRoot - 1,
      postLeft,
      inRoot - inLeft + postLeft - 1,
      inOrderMap
    ),
    // 递归获取右子树
    getTree(
      inOrder,
      postOrder,
      inRoot + 1,
      inRight,
      inRoot - inLeft + postLeft,
      postRight - 1,
      inOrderMap
    )
  );
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const length = inorder.length;
  // 这里先生成一个中序遍历的 Map，避免后续递归查找中序遍历中根的位置
  const inOrderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inOrderMap.set(inorder[i], i);
  }

  return getTree(inorder, postorder, 0, length - 1, 0, length - 1, inOrderMap);
};
```