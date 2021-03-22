<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">328. 奇偶链表</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/odd-even-linked-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/odd-even-linked-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。</p>

<p>请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL
<strong>输出:</strong> 1-&gt;3-&gt;5-&gt;2-&gt;4-&gt;NULL
</pre>

<p><strong>示例 2:</strong></p>

<pre><strong>输入:</strong> 2-&gt;1-&gt;3-&gt;5-&gt;6-&gt;4-&gt;7-&gt;NULL 
<strong>输出:</strong> 2-&gt;3-&gt;6-&gt;7-&gt;1-&gt;5-&gt;4-&gt;NULL</pre>

<p><strong>说明:</strong></p>

<ul>
	<li>应当保持奇数节点和偶数节点的相对顺序。</li>
	<li>链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。</li>
</ul>

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
var oddEvenList = function (head) {
  // 边界条件
  if (head === null) return null;
  // 定义奇数和偶数链表的根，并定义奇数偶数链表的临时变量，用于遍历指定 next 节点
  // head 的第一个节点为奇数开始，第二个节点为偶数开始
  let oddList = head;
  let evenList = head.next;
  // 临时变量
  let oddLink = oddList;
  let evenLink = evenList;

  // 由于 head 前两个节点被指定过了，因此这里从第三个开始
  if (head.next) {
    head = head.next.next;
  } else return head;

  // 计数，用来标识当前是奇数还是偶数
  let i = 1;
  // 依次遍历 head 的每一个节点
  while (head !== null) {
    if (i % 2 === 0) {
      // 偶数
      evenLink.next = head;
      evenLink = evenLink.next;
    } else {
      // 奇数
      oddLink.next = head;
      oddLink = oddLink.next;
    }
    // head 节点往前走一步
    head = head.next;
    // i 往前走一步
    i++;
  }

  // 存在种情况：如果最后一位是奇数，则偶数为 head 链表的倒数第二个节点，因此需要将 next 设置为 null
  evenLink.next = null;

  // 将偶数链表追加到奇数链表的尾部
  oddLink.next = evenList;

  // 返回奇数链表
  return oddList;
};
```