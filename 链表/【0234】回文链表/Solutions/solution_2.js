/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (52.00%)
 * Likes:    1456
 * Dislikes: 0
 * Total Accepted:    474.4K
 * Total Submissions: 909.5K
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,2,1]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 *
 *
 *
 *
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const list = [];
  /**
   * 将链表转成数组 / 字符串 / 数字
   * 判断 数组 / 字符串 / 数字是否为回文
   */
  while (head !== null) {
    list.push(head.val);
    head = head.next;
  }

  // 定义双指针判断
  let i = 0,
    j = list.length - 1;

  // 判断数组是否回文
  while (i <= j) {
    if (list[i] !== list[j]) return false;
    i++;
    j--;
  }

  return true;
};
// @lc code=end
