<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">908. 链表的中间结点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/middle-of-the-linked-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/middle-of-the-linked-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个头结点为 <code>head</code> 的非空单链表，返回链表的中间结点。</p>

<p>如果有两个中间结点，则返回第二个中间结点。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>[1,2,3,4,5]
<strong>输出：</strong>此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>[1,2,3,4,5,6]
<strong>输出：</strong>此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>给定链表的结点数介于 <code>1</code> 和 <code>100</code> 之间。</li>
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
 * @return {ListNode}
 */
var middleNode = function (head) {
  /**
   * 本题采用双指针思路，快指针往前走两步，慢指针往前走一步，当快指针走到底时，慢指针正好走到中间的位置
   * 注意边界条件：
   * 当 head 节点数为偶数时，last 每次走两步会导致最后一次循环走不到两步，此时 first 指向中间节点的前一个节点
   * 原始值： [1, 2, 3, 4, 5, 6]
   *         i,j
   * 第一次：     i  j
   * 第二次：        i     j
   * 第三次：        i            j(超出范围)
   */
  let first = head,
    last = head;
  // 由于非空限制，肯定是 last 先结束循环
  while (last !== null && last.next !== null) {
    // first 每次走一步
    first = first.next;
    // last 先走一步，然后看情况是否可以再走一步
    last = last.next;
    if (last === null) {
      // 如果不能再走一步，就返回 first 的下一个节点
      return first.next;
    } else {
      // 如果可以再走一步，就往前走一步
      last = last.next;
    }
  }
  // last 善终了，此时 first 指向中间节点
  return first;
};
```