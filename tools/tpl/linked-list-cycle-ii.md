<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">142. 环形链表 II</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/linked-list-cycle-ii/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/linked-list-cycle-ii/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 <code>null</code>。</p>

<p>为了表示给定链表中的环，我们使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意，<code>pos</code> 仅仅是用于标识环的情况，并不会作为参数传递到函数中。</strong></p>

<p><strong>说明：</strong>不允许修改给定的链表。</p>

<p><strong>进阶：</strong></p>

<ul>
	<li>你是否可以使用 <code>O(1)</code> 空间解决此题？</li>
</ul>

<p> </p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" style="height: 97px; width: 300px;" /></p>

<pre>
<strong>输入：</strong>head = [3,2,0,-4], pos = 1
<strong>输出：</strong>返回索引为 1 的链表节点
<strong>解释：</strong>链表中有一个环，其尾部连接到第二个节点。
</pre>

<p><strong>示例 2：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png" style="height: 74px; width: 141px;" /></p>

<pre>
<strong>输入：</strong>head = [1,2], pos = 0
<strong>输出：</strong>返回索引为 0 的链表节点
<strong>解释：</strong>链表中有一个环，其尾部连接到第一个节点。
</pre>

<p><strong>示例 3：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png" style="height: 45px; width: 45px;" /></p>

<pre>
<strong>输入：</strong>head = [1], pos = -1
<strong>输出：</strong>返回 null
<strong>解释：</strong>链表中没有环。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表中节点的数目范围在范围 <code>[0, 10<sup>4</sup>]</code> 内</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
	<li><code>pos</code> 的值为 <code>-1</code> 或者链表中的一个有效索引</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 思路是先判断有没有环，如果有环，就定义一个从 head 开始的新节点，和 slow 一起走，相遇的地方就是入环口
  // 边界条件
  if (head === null) return null;
  // 定义快慢指针，快指针一次走两步，慢指针一次走一步
  let fast = head,
    slow = head;
  // 标志符，标记是否有环
  let isCycle = false;
  // 快指针没走完就一直走下去，结束条件是 快指针 === 慢指针，不限于 两者都为同一个节点（有环），或者都为 null（没环）
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      isCycle = true;
      break;
    }
  }

  // 如果有环
  if (isCycle) {
    // 然后定义一个新的指针，指向 head， 和 slow 指针同时走，两者相遇的地方就是入环口
    let pointer = head;
    while (pointer !== slow) {
      slow = slow.next;
      pointer = pointer.next;
    }
    // 返回相遇的地方
    return slow;
  }
  // 如果 slow 为null，则返回 null
  return null;
};
```
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 定义快慢指针，fast 每次走 2 步，slow 每次走 1 步
  let fast = head,
    slow = head;

  // 因为 fast 走的快，当 fast 为 null 的时候，则表示没有环
  while (fast !== null) {
    // slow 每次走一步
    slow = slow.next;
    // fast 下一个为 null，则表示没有环
    if (fast.next === null) return null;
    // fast 每次走两步
    fast = fast.next.next;
    // 如果 fast 和 slow 相遇了，则证明有环
    if (fast === slow) {
      // 开始一个第三个指针，指向 head
      let ptr = head;
      // ptr 指针和 slow 同时往前走，相遇点就是入环点
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      // 返回入环点
      return ptr;
    }
  }
  
  // 否则没有环
  return null;
};
```