/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
 *
 * https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (58.49%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    31.9K
 * Total Submissions: 54.5K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
 *
 * 案例 1:
 *
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 *
 * Target = 9
 *
 * 输出: True
 *
 *
 *
 *
 * 案例 2:
 *
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 *
 * Target = 28
 *
 * 输出: False
 *
 *
 *
 *
 */

// @lc code=start
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 思路和求两数之和类似，使用一个 Map 维护所有遍历过的数据，
  // 当遍历到某个元素时，去 Map 中查找是否存在 target - 当前元素值 的元素，如果存在，则表示有这样的二元组
  const hashMap = new Map();
  // 定义一个队列，去遍历每个节点
  const stacks = [];
  // 根节点入队
  stacks.push(root);

  // 一个节点出队列，需要将其左右节点入队列，当队列为空，则证明所有节点遍历完成
  while (stacks.length !== 0) {
    // 队列顶部出节点
    const treeNode = stacks.pop();
    // 关键：去 Map 中查找 k - 当前 val 的值是否存在，存在则直接返回 true
    if (hashMap.get(k - treeNode.val)) return true;
    // 不存在就返回 false，方便后续调用
    else hashMap.set(treeNode.val, true);
    // 左子树进去
    if (treeNode.left) {
      stacks.push(treeNode.left);
    }
    // 右子树进去
    if (treeNode.right) {
      stacks.push(treeNode.right);
    }
  }
  // 如果走了一遍都没找到，则返回 false
  return false;
};
// @lc code=end
