/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (45.54%)
 * Likes:    872
 * Dislikes: 0
 * Total Accepted:    200.6K
 * Total Submissions: 440.5K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
  // 遍历链表，将链表值存到数组中
  let results = [];
  while (head !== null) {
    results.push(head.val);
    head = head.next;
  }

  // 然后使用双指针查看数组是否是回文的
  let i = 0,
    j = results.length - 1;
  while (i < j) {
    if (results[i] !== results[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
// @lc code=end
