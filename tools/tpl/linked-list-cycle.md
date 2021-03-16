<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">141. 环形链表</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/linked-list-cycle/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/linked-list-cycle/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个链表，判断链表中是否有环。</p>

<p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意：<code>pos</code> 不作为参数进行传递</strong>，仅仅是为了标识链表的实际情况。</p>

<p>如果链表中存在环，则返回 <code>true</code> 。 否则，返回 <code>false</code> 。</p>

<p>&nbsp;</p>

<p><strong>进阶：</strong></p>

<p>你能用 <em>O(1)</em>（即，常量）内存解决此问题吗？</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" style="height: 97px; width: 300px;"></p>

<pre><strong>输入：</strong>head = [3,2,0,-4], pos = 1
<strong>输出：</strong>true
<strong>解释：</strong>链表中有一个环，其尾部连接到第二个节点。
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png" style="height: 74px; width: 141px;"></p>

<pre><strong>输入：</strong>head = [1,2], pos = 0
<strong>输出：</strong>true
<strong>解释：</strong>链表中有一个环，其尾部连接到第一个节点。
</pre>

<p><strong>示例 3：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png" style="height: 45px; width: 45px;"></p>

<pre><strong>输入：</strong>head = [1], pos = -1
<strong>输出：</strong>false
<strong>解释：</strong>链表中没有环。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表中节点的数目范围是 <code>[0, 10<sup>4</sup>]</code></li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
	<li><code>pos</code> 为 <code>-1</code> 或者链表中的一个 <strong>有效索引</strong> 。</li>
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 快慢指针，快指针一次走2步，慢指针一次走一步，如果有环的话，快慢指针迟早会相遇
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    // 快指针走两步
    fast = fast.next.next;
    // 慢指针走一步
    slow = slow.next;

    // 如果快慢指针相遇了，则返回 true
    if (fast === slow) return true;
  }

  // 否则返回 false
  return false;
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
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   // 边界条件，如果 head 为 null，则没有环
//   if (head === null) return false;
//   // 定义 first，last 两个指针，first 走一步， last 走两步
//   let first = head,
//     last = head.next;
//   // 当 first !== last 的时候，就继续往前走
//   while (first !== last) {
//     // 如果前面的指针已经为 null 或者即将为 null，则表示没有环
//     if (last === null || last.next === null) return false;
//     // first 节点往前走一步
//     first = first.next;
//     // last 节点万千走两步
//     last = last.next.next;
//   }
//   // 如果能结束循环，则表示找到环了
//   return true;
// };

var hasCycle = function (head) {
  // 快慢指针
  let fast = head,
    slow = head;

  // 当 fast 为 null，则表示没有环
  while (fast !== null) {
    // slow 往前走一步
    slow = slow.next;
    // fast.next 为 null，则表示没有环
    if (fast.next === null) return false;
    // fast 往前走两步
    fast = fast.next.next;
    // 如果 fast === slow，则两个指针相遇，就表示有环
    if (fast === slow) return true;
  }
  // 否则没有环
  return false;
};
```