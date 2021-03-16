<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">206. 反转链表</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/reverse-linked-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/reverse-linked-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>反转一个单链表。</p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong> 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL
<strong>输出:</strong> 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL</pre>

<p><strong>进阶:</strong><br>
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
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
var reverseList = function (head) {
  let prev = null,
    cur = head;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
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
var reverseList = function (head) {
  // 前后指针，cur 为当前需要改变 next 指向的节点，prev 表示上一个节点，初始为 null
  let prev = null,
    cur = head;

  // 遍历迭代，cur 在前面一个节点，如果 cur 不为 null，则继续执行下去
  while (cur !== null) {
    // 先暂存一下当前 cur 的下一个节点，方便后续使用
    let next = cur.next;
    // cur 反向，next 指向 prev
    cur.next = prev;
    // prev 向前走一个节点
    prev = cur;
    // 将之前暂存的下一个节点给 cur，相当于 cur 向前走一个节点
    cur = next;
  }

  // 因为 cur 现在指向了 null，prev 就是最后一个节点了
  return prev;
};
```