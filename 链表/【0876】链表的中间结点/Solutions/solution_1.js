/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 *
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/description/
 *
 * algorithms
 * Easy (69.98%)
 * Likes:    323
 * Dislikes: 0
 * Total Accepted:    101.6K
 * Total Submissions: 145.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 *
 * 如果有两个中间结点，则返回第二个中间结点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[1,2,3,4,5]
 * 输出：此列表中的结点 3 (序列化形式：[3,4,5])
 * 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
 * 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next
 * = NULL.
 *
 *
 * 示例 2：
 *
 *
 * 输入：[1,2,3,4,5,6]
 * 输出：此列表中的结点 4 (序列化形式：[4,5,6])
 * 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 给定链表的结点数介于 1 和 100 之间。
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
var middleNode = function (head) {
  /**
   * 本题采用双指针思路，快指针往前走两步，慢指针往前走一步，当快指针走到底时，慢指针正好走到中间的位置
   * 注意边界条件：
   * 当 head 节点数为偶数时，last 每次走两步会导致最后一次循环走不到两步，此时 first 指向中间节点的前一个节点
   * 原始值： [1, 2, 3, 4, 5, 6]
   *         i,j
   * 第一次：     i  j
   * 第二次：        i     j
   * 第三次：        i            j(超出范围)
   */
  let first = head,
    last = head;
  // 由于非空限制，肯定是 last 先结束循环
  while (last !== null && last.next !== null) {
    // first 每次走一步
    first = first.next;
    // last 先走一步，然后看情况是否可以再走一步
    last = last.next;
    if (last === null) {
      // 如果不能再走一步，就返回 first 的下一个节点
      return first.next;
    } else {
      // 如果可以再走一步，就往前走一步
      last = last.next;
    }
  }
  // last 善终了，此时 first 指向中间节点
  return first;
};
// @lc code=end
