<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">61. 旋转链表</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/rotate-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/rotate-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个链表，旋转链表，将链表每个节点向右移动&nbsp;<em>k&nbsp;</em>个位置，其中&nbsp;<em>k&nbsp;</em>是非负数。</p>

<p><strong>示例&nbsp;1:</strong></p>

<pre><strong>输入:</strong> 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL, k = 2
<strong>输出:</strong> 4-&gt;5-&gt;1-&gt;2-&gt;3-&gt;NULL
<strong>解释:</strong>
向右旋转 1 步: 5-&gt;1-&gt;2-&gt;3-&gt;4-&gt;NULL
向右旋转 2 步: 4-&gt;5-&gt;1-&gt;2-&gt;3-&gt;NULL
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入:</strong> 0-&gt;1-&gt;2-&gt;NULL, k = 4
<strong>输出:</strong> <code>2-&gt;0-&gt;1-&gt;NULL</code>
<strong>解释:</strong>
向右旋转 1 步: 2-&gt;0-&gt;1-&gt;NULL
向右旋转 2 步: 1-&gt;2-&gt;0-&gt;NULL
向右旋转 3 步:&nbsp;<code>0-&gt;1-&gt;2-&gt;NULL</code>
向右旋转 4 步:&nbsp;<code>2-&gt;0-&gt;1-&gt;NULL</code></pre>

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
```