/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (66.79%)
 * Likes:    647
 * Dislikes: 0
 * Total Accepted:    157K
 * Total Submissions: 235K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例:
 *
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 定义一个哑结点，用来记录新链表的头节点
  // 类似需要生成新链表的，都是需要有一个哑结点
  const newHead = { next: head };
  // 定义一个临时变量，用来循环生成新链表
  let temp = newHead;

  /*
    null -> 1 -> 2 -> 3 -> 4
    temp    n1  n2              => n(x)为node x
    null -> 2 -> 1 -> 3 -> 4
                temp  n1   n2   => 经过一次循环
  */

  // 因为是两两交换，因此如果 next 为 null 或者 next.next 为 null，则不再需要交换了，结束循环
  while (temp.next !== null && temp.next.next !== null) {
    // 保存交换操作的第一个节点
    let node1 = temp.next;
    // 保存交换操作的第二个节点
    let node2 = temp.next.next;
    // 先修改 temp 的指向
    temp.next = node2;
    // 修改第一个节点，指向第二个节点的的后一个节点
    node1.next = node2.next;
    // 修改第二个节点，指向第一个节点
    node2.next = node1;
    // temp 往前走，寻找下一对比较的节点
    // temp 本身不参与交换，temp 的 next 和 next.next 参与交换
    // 因此 temp 只需要挪到 node1 位置即可
    temp = node1;
  }

  // 返回哑节点的 next 指向
  return newHead.next;
};
// @lc code=end
