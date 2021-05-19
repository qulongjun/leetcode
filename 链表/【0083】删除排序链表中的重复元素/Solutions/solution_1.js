/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (52.85%)
 * Likes:    515
 * Dislikes: 0
 * Total Accepted:    214.2K
 * Total Submissions: 403.8K
 * Testcase Example:  '[1,1,2]'
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
 *
 * 返回同样按升序排列的结果链表。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围 [0, 300] 内
 * -100
 * 题目数据保证链表已经按升序排列
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
var deleteDuplicates = function (head) {
  // 因为 last 指向的是 head 的下一个元素，因此需要保证 head.next 不能报错
  // 边界条件
  if (head === null) return head;
  // 快慢指针，first 是慢指针，指向当前重复链表节点的起始节点
  // last 是快指针，会在前面跑，找到第一个与 first 节点不重复的节点
  let first = head;
  let last = head.next;

  // 结束条件：last 找到了最后一个节点
  while (last !== null) {
    // 如果 first 和 last 节点值一样，则 last 往前继续找
    if (first.val === last.val) {
      last = last.next;
    } else {
      // 否则，证明找到了合适的 last（与 first 不相同的节点）
      // 将 first 的 next 指向 last
      first.next = last;
      // first 重新定位到新的起始位置
      first = last;
      // last 往前走一步
      last = last.next;
    }
  }

  // first 最后肯定是指向 null 的
  first.next = null;

  return head;
};
// @lc code=end
