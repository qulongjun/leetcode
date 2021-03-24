<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">24. 两两交换链表中的节点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Recursion</code>&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/swap-nodes-in-pairs/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/swap-nodes-in-pairs/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。</p>

<p><strong>你不能只是单纯的改变节点内部的值</strong>，而是需要实际的进行节点交换。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg" style="width: 422px; height: 222px;" />
<pre>
<strong>输入：</strong>head = [1,2,3,4]
<strong>输出：</strong>[2,1,4,3]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>head = []
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>head = [1]
<strong>输出：</strong>[1]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表中节点的数目在范围 <code>[0, 100]</code> 内</li>
	<li><code>0 <= Node.val <= 100</code></li>
</ul>

<p> </p>

<p><strong>进阶：</strong>你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）</p>

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
var swapPairs = function (head) {
  // 定义一个哑结点，用来记录新链表的头节点
  // 类似需要生成新链表的，都是需要有一个哑结点
  const newHead = { next: head };
  // 定义一个临时变量，用来循环生成新链表
  let temp = newHead;

  /*
    null -> 1 -> 2 -> 3 -> 4
    temp    n1  n2              => n(x)为node x
    null -> 2 -> 1 -> 3 -> 4
                temp  n1   n2   => 经过一次循环
  */

  // 因为是两两交换，因此如果 next 为 null 或者 next.next 为 null，则不再需要交换了，结束循环
  while (temp.next !== null && temp.next.next !== null) {
    // 保存交换操作的第一个节点
    let node1 = temp.next;
    // 保存交换操作的第二个节点
    let node2 = temp.next.next;
    // 先修改 temp 的指向
    temp.next = node2;
    // 修改第一个节点，指向第二个节点的的后一个节点
    node1.next = node2.next;
    // 修改第二个节点，指向第一个节点
    node2.next = node1;
    // temp 往前走，寻找下一对比较的节点
    // temp 本身不参与交换，temp 的 next 和 next.next 参与交换
    // 因此 temp 只需要挪到 node1 位置即可
    temp = node1;
  }

  // 返回哑节点的 next 指向
  return newHead.next;
};
```