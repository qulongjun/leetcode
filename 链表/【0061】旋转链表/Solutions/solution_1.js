/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (40.71%)
 * Likes:    430
 * Dislikes: 0
 * Total Accepted:    114.8K
 * Total Submissions: 282.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 *
 *
 * 示例 2:
 *
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 边界条件，如果 head 为 null，则返回 null
  if (head === null) return null;

  // 找到链表的最后一个节点，将最后一个节点指向 head 节点
  // 向右移动 k 个位置 = 链表最后 k 个节点被放置到链表头部 = 原来链表的前 (n - k) 个位置的节点指向 null
  // 三步走：1. 获取最后一个节点，2. 将最后一个节点指向 head，3.将 head 开始的 n - k 个节点指向 null
  let last = head;
  let count = 1;
  // 第一步：找到最后一个节点，同时记录当前链表长度
  while (last.next !== null) {
    last = last.next;
    count++;
  }

  // 由于k可能超出链表长度，为了节省时间，需要取余操作，只走一遍环
  let realKey = k % count;

  // 第二步：此时 last 是链表结束的节点，指向 head 节点
  last.next = head;

  // 第三步：将 n - k 个节点位置指针指向 NULL
  while (count - realKey > 0) {
    last = last.next;
    realKey++;
  }

  // 此时 last 就是理论上的最后一个节点，暂存一下理论上的开始节点
  let temp = last.next;
  // 将 last 指针指向 null
  last.next = null;

  return temp;
};
// @lc code=end
