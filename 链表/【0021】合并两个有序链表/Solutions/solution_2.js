/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (64.38%)
 * Likes:    1279
 * Dislikes: 0
 * Total Accepted:    375.6K
 * Total Submissions: 583.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 边界条件
  if (!l1 && !l2) return null;
  // 定义一个 ListNode，作为存储的根节点，不可被覆盖
  const root = {};
  // 定义一个活动的 ListNode，类似于指针，指定每次 next 的位置
  let temp = root;

  // l1 和 l2 都没比较完
  while ((l1 !== null) & (l2 !== null)) {
    if (l1.val <= l2.val) {
      // temp 定义值
      temp.next = l1;
      // temp 指针移动到 next 等待插入
      temp = temp.next;
      // l1 移动到下一个位置，等待比较
      l1 = l1.next;
    } else {
      temp.next = l2;
      temp = temp.next;
      l2 = l2.next;
    }
  }

  // l2 比较完了，就直接追加 l1 剩下的全部
  if (l1 !== null) {
    temp.next = l1;
  }

  // l1 比较完了，就直接追加 l2 剩下的全部
  if (l2 !== null) {
    temp.next = l2;
  }

  return root.next;
};
// @lc code=end
