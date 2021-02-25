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
 *
 * 用一种前后指针的方式，获取最后第 N 个元素，首先 first 和 last 拉开 n 的距离，当 last 走到最后的时候， first 到最后就是 n 的距离。
 *
 *         1 -> 2 -> 3 -> 4 -> 5  n=2
 * 第一步：f(l)                      两个都在起始位置
 * 第二步： f <- n ->  l             first 和 last 之间拉开 n 的距离
 * 第三步：            f        l    first 和 last 一起往前跑，直到 last.next === null 为止
 * 第四步： 1 -> 2 -> 3 -> 5         first.next = first.next.next，单链表常规删除操作
 *
 * 注意点：如果出现第二步之后， last === null，则表示 last 走到了末尾，即 n >= head 的长度，只要把头节点删掉一个就行，常规删除头节点操作： head = head.next
 *
 */
var removeNthFromEnd = function (head, n) {
  // 定义双指针，默认都指向开头为止
  let first = head,
    last = head;

  // 将 first 和 last 拉开差距，注意：有可能链表长度 <= n，因此当拉到 last == null 时即可停止
  while (n > 0 && last) {
    last = last.next;
    n--;
  }

  // 如果 last === null，表示链表长度 <= n，删除头节点即可
  if (last === null) {
    head = head.next;
    return head;
  }

  // 如果 last !== null，则 first 和 last 一起往前跑，直到 last.next 为 null，此时 first 的下一个就是即将删除的节点
  while (last !== null && last.next !== null) {
    first = first.next;
    last = last.next;
  }

  // 常规删除下一个链表节点的方式
  first.next = first.next.next;

  return head;
};
// @lc code=end
