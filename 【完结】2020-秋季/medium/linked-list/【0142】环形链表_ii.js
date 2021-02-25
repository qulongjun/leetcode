/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (54.36%)
 * Likes:    847
 * Dislikes: 0
 * Total Accepted:    179.9K
 * Total Submissions: 331K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是
 * -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 *
 * 说明：不允许修改给定的链表。
 *
 * 进阶：
 *
 *
 * 你是否可以使用 O(1) 空间解决此题？
 *
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：head = [1], pos = -1
 * 输出：返回 null
 * 解释：链表中没有环。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围在范围 [0, 10^4] 内
 * -10^5
 * pos 的值为 -1 或者链表中的一个有效索引
 *
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 定义快慢指针，fast 每次走 2 步，slow 每次走 1 步
  let fast = head,
    slow = head;

  // 因为 fast 走的快，当 fast 为 null 的时候，则表示没有环
  while (fast !== null) {
    // slow 每次走一步
    slow = slow.next;
    // fast 下一个为 null，则表示没有环
    if (fast.next === null) return null;
    // fast 每次走两步
    fast = fast.next.next;
    // 如果 fast 和 slow 相遇了，则证明有环
    if (fast === slow) {
      // 开始一个第三个指针，指向 head
      let ptr = head;
      // ptr 指针和 slow 同时往前走，相遇点就是入环点
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      // 返回入环点
      return ptr;
    }
  }
  
  // 否则没有环
  return null;
};
// @lc code=end
