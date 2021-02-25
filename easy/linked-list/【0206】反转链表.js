/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (71.37%)
 * Likes:    1499
 * Dislikes: 0
 * Total Accepted:    429.8K
 * Total Submissions: 602.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList_v1 = function (head) {
  // 前后指针，cur 为当前需要改变 next 指向的节点，prev 表示上一个节点，初始为 null
  let prev = null,
    cur = head;

  // 遍历迭代，cur 在前面一个节点，如果 cur 不为 null，则继续执行下去
  while (cur !== null) {
    // 先暂存一下当前 cur 的下一个节点，方便后续使用
    let next = cur.next;
    // cur 反向，next 指向 prev
    cur.next = prev;
    // prev 向前走一个节点
    prev = cur;
    // 将之前暂存的下一个节点给 cur，相当于 cur 向前走一个节点
    cur = next;
  }

  // 因为 cur 现在指向了 null，prev 就是最后一个节点了
  return prev;
};

// =============================  2021 - 春季 =============================
var reverseList = function (head) {
  let prev = null,
    cur = head;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};
// @lc code=end
