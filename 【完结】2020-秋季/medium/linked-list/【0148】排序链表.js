/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (67.59%)
 * Likes:    988
 * Dislikes: 0
 * Total Accepted:    138K
 * Total Submissions: 204.2K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 *
 * 进阶：
 *
 *
 * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5
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
var sortList = function (head) {
  let root = head;

  // 先计算链表总共的长度
  let count = 0;
  while (root !== null) {
    count++;
    root = root.next;
  }

  // 冒泡排序，依次遍历链表每一项，第一个 for 循环为需要遍历的次数，第二个 while 循环为单次链表的排序
  for (let i = 0; i < count; i++) {
    let first = head;
    // 剪枝操作，如果一次循环都没有交换数据，则表示已经是有序了，直接 break
    let flag = true;
    while (first !== null && first.next !== null) {
      // 交换两个节点的 val 值
      if (first.val > first.next.val) {
        let temp = first.next.val;
        first.next.val = first.val;
        first.val = temp;
        flag = false;
      }
      // 再往下走
      first = first.next;
    }
    // 剪枝操作
    if (flag) break;
  }

  return head;
};
// @lc code=end
