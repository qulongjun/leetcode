<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">19. 删除链表的倒数第 N 个结点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个链表，删除链表的倒数第 <code>n</code><em> </em>个结点，并且返回链表的头结点。</p>

<p><strong>进阶：</strong>你能尝试使用一趟扫描实现吗？</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>输入：</strong>head = [1,2,3,4,5], n = 2
<strong>输出：</strong>[1,2,3,5]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>head = [1], n = 1
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>head = [1,2], n = 1
<strong>输出：</strong>[1]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表中结点的数目为 <code>sz</code></li>
	<li><code>1 <= sz <= 30</code></li>
	<li><code>0 <= Node.val <= 100</code></li>
	<li><code>1 <= n <= sz</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //  快慢指针，都从头部开始，fast 先走 n 步， slow 再开始走，当 fast 走到头时， slow 正好走到 倒数第 n 个的位置
  let fast = head,
    slow = head;
  // fast 先走 n 步
  while (n > 0 && fast) {
    fast = fast.next;
    n--;
  }

  // 特殊case： fast 是 null 了，就是 fast 走到头了，说明  n >= head 的长度
  if (fast === null) {
    head = head.next;
  }

  // 找到倒数第 n+1 个节点，因为要删除倒数第 n 个节点，因此找到前一个节点，next 指向第 n-1 节点即可
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 指向
  if (slow.next !== null) {
    slow.next = slow.next.next;
  }

  return head;
};
```