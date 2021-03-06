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
 * 采用归并排序思想
 * 主要难点： 1. merge 两个有序链表，2. 快慢指针查找 middle 节点
 * 思路：先使用快慢指针，找出中间节点，将中间节点断开，分为左右两个链表，对两个链表进行分别排序后，再将两个有序链表 merge 成一个有序链表
 * 其中使用到了递归思想，左右两个链表有可以再次找到中间节点断开，分为左右两个链表。
 * 结束条件为：链表中只剩一个节点/或者不剩节点，即 head.next === null 或者  head === null
 *
 */

// 标准写法，将两个有序节点合并成一个节点，思路参考 【0021】合并两个有序链表
var merge = function (node1, node2) {
  // 存一个头节点，方便返回
  let root = {};
  let temp = root;
  // 两个链表都没空，则依次比较两个链表的值，选择一个加入到新链表
  while (node1 !== null && node2 !== null) {
    if (node1.val < node2.val) {
      temp.next = node1;
      node1 = node1.next;
    } else {
      temp.next = node2;
      node2 = node2.next;
    }
    temp = temp.next;
  }

  // node2 为空，就将 node1 全部加入链表
  if (node1 !== null) temp.next = node1;
  // node1 为空，就将 node2 全部加入链表
  if (node2 !== null) temp.next = node2;

  return root.next;
};

// 归并拆分思路，将长度为 N 的链表分割成长度为 N / 2, N / 4, ... 2 的小链表，依次排序
var mergeSort = function (head) {
  // 两个停止分割的终止条件， head === null 或者 head.next === null
  if (head === null) return null;
  if (head.next === null) return head;

  // 快慢指针，其中快指针一次走两步，慢指针一次走一步，当快指针走到头的时候，慢指针正好走到中间
  // pre 用来记录慢指针的上一个位置，因为快指针和慢指针一起走的，当快指针走到 null 的时候，慢指针走到了 middle + 1 的位置
  let fast = head,
    slow = head,
    pre = null;

  // 快指针没走到底就一直走
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    // pre 先存一份 slow 当前的位置，再让 slow 往前走
    pre = slow;
    slow = slow.next;
  }
  // 此时 pre 就是 middle 的位置，需要断开前后链表才能做 merge 两个链表操作
  pre.next = null;

  // 递归第一颗树
  let leftSort = mergeSort(head);
  // 递归第二颗树
  let rightSort = mergeSort(slow);

  // 合并两颗有序的树
  return merge(leftSort, rightSort);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  return mergeSort(head);
};
// @lc code=end
