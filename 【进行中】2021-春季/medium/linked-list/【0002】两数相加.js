/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (39.64%)
 * Likes:    5737
 * Dislikes: 0
 * Total Accepted:    731.3K
 * Total Submissions: 1.8M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 *
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 *
 *
 * 示例 2：
 *
 *
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 *
 *
 * 示例 3：
 *
 *
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0
 * 题目数据保证列表表示的数字不含前导零
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

var addCount = function (firstValue, lastValue, addMore, results) {
  // 计算当前真实值，first + last + 上一位的进位增量
  let currentValue = firstValue + lastValue + addMore;
  // 如果当前真实值<9，则清空进位，直接存放结果
  if (currentValue <= 9) {
    results.push(currentValue);
    addMore = 0;
  } else {
    // 否则取余获取当前节点值
    results.push(currentValue % 10);
    // /10 获取进位值
    addMore = parseInt(currentValue / 10);
  }
  // results 不需要返回，因为引用类型
  return addMore;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 将两个链表计算结果存放在结果集中
  let results = [];
  // 这是一个进位的增量值，例如 链表1:9，链表2:9，则 9+9 = 18，addMore = 1
  let addMore = 0;

  // 如果两个链表都非空，则需要相加计算
  while (l1 !== null && l2 !== null) {
    addMore = addCount(l1.val, l2.val, addMore, results);
    l1 = l1.next;
    l2 = l2.next;
  }

  // 如果 l2 为 null 了，只需要计算 l1 就行了
  while (l1 !== null) {
    addMore = addCount(l1.val, 0, addMore, results);
    l1 = l1.next;
  }

  // 如果 l1 为 null 了，只需要计算 l2 就行了
  while (l2 !== null) {
    addMore = addCount(0, l2.val, addMore, results);
    l2 = l2.next;
  }

  // 当 l1 和 l2 都计算完了，还得考虑末尾一位会不会类似于9+9这种有进位的，还得把进位算上去
  if (addMore) results.push(addMore);

  // 下面是尾递归生成链表
  let temp = null;
  let i = results.length - 1;
  while (i >= 0) {
    temp = { val: results[i], next: temp };
    i--;
  }
  return temp;
};
// @lc code=end
