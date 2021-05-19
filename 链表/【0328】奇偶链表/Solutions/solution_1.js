/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 *
 * https://leetcode-cn.com/problems/odd-even-linked-list/description/
 *
 * algorithms
 * Medium (65.64%)
 * Likes:    388
 * Dislikes: 0
 * Total Accepted:    97K
 * Total Submissions: 147.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 *
 * 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 1->3->5->2->4->NULL
 *
 *
 * 示例 2:
 *
 * 输入: 2->1->3->5->6->4->7->NULL
 * 输出: 2->3->6->7->1->5->4->NULL
 *
 * 说明:
 *
 *
 * 应当保持奇数节点和偶数节点的相对顺序。
 * 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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
var oddEvenList = function (head) {
  // 边界条件
  if (head === null) return null;
  // 定义奇数和偶数链表的根，并定义奇数偶数链表的临时变量，用于遍历指定 next 节点
  // head 的第一个节点为奇数开始，第二个节点为偶数开始
  let oddList = head;
  let evenList = head.next;
  // 临时变量
  let oddLink = oddList;
  let evenLink = evenList;

  // 由于 head 前两个节点被指定过了，因此这里从第三个开始
  if (head.next) {
    head = head.next.next;
  } else return head;

  // 计数，用来标识当前是奇数还是偶数
  let i = 1;
  // 依次遍历 head 的每一个节点
  while (head !== null) {
    if (i % 2 === 0) {
      // 偶数
      evenLink.next = head;
      evenLink = evenLink.next;
    } else {
      // 奇数
      oddLink.next = head;
      oddLink = oddLink.next;
    }
    // head 节点往前走一步
    head = head.next;
    // i 往前走一步
    i++;
  }

  // 存在种情况：如果最后一位是奇数，则偶数为 head 链表的倒数第二个节点，因此需要将 next 设置为 null
  evenLink.next = null;

  // 将偶数链表追加到奇数链表的尾部
  oddLink.next = evenList;

  // 返回奇数链表
  return oddList;
};
// @lc code=end
