/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (39.51%)
 * Likes:    1002
 * Dislikes: 0
 * Total Accepted:    239.4K
 * Total Submissions: 606.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 *
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *
 *
 * 说明：
 *
 * 给定的 n 保证是有效的。
 *
 * 进阶：
 *
 * 你能尝试使用一趟扫描实现吗？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //  快慢指针，都从头部开始，fast 先走 n 步， slow 再开始走，当 fast 走到头时， slow 正好走到 倒数第 n 个的位置
  let fast = head,
    slow = head;
  // fast 先走 n 步
  while (n > 0 && fast) {
    fast = fast.next;
    n--;
  }

  // 特殊case： fast 是 null 了，就是 fast 走到头了，说明  n >= head 的长度
  if (fast === null) {
    head = head.next;
  }

  // 找到倒数第 n+1 个节点，因为要删除倒数第 n 个节点，因此找到前一个节点，next 指向第 n-1 节点即可
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 指向
  if (slow.next !== null) {
    slow.next = slow.next.next;
  }

  return head;
};
// @lc code=end
