<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">21. 合并两个有序链表</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Recursion</code>&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/merge-two-sorted-lists/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/merge-two-sorted-lists/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 </p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
<pre>
<strong>输入：</strong>l1 = [1,2,4], l2 = [1,3,4]
<strong>输出：</strong>[1,1,2,3,4,4]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = []
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = [0]
<strong>输出：</strong>[0]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>两个链表的节点数目范围是 <code>[0, 50]</code></li>
	<li><code>-100 <= Node.val <= 100</code></li>
	<li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li>
</ul>

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return null;
  const root = {};
  let temp = root;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }

  if (l1 !== null) temp.next = l1;
  if (l2 !== null) temp.next = l2;

  return root.next;
};
<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">21. 合并两个有序链表</div>,<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Recursion</code>&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/merge-two-sorted-lists/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/merge-two-sorted-lists/">访问源站</a></span></div>,<hr style="height: 1px; margin: 1em 0px;" />,<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 </p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
<pre>
<strong>输入：</strong>l1 = [1,2,4], l2 = [1,3,4]
<strong>输出：</strong>[1,1,2,3,4,4]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = []
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = [0]
<strong>输出：</strong>[0]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>两个链表的节点数目范围是 <code>[0, 50]</code></li>
	<li><code>-100 <= Node.val <= 100</code></li>
	<li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li>
</ul>
,<hr style="height: 1px; margin: 1em 0px;" />,<strong>第2次解答</strong>,```javascript,/**, * Definition for singly-linked list., * function ListNode(val, next) {, *     this.val = (val===undefined ? 0 : val), *     this.next = (next===undefined ? null : next), * }, */,/**, * @param {ListNode} l1, * @param {ListNode} l2, * @return {ListNode}, */,var mergeTwoLists = function (l1, l2) {,  if (l1 === null && l2 === null) return null;,  const root = {};,  let temp = root;,,  while (l1 !== null && l2 !== null) {,    if (l1.val < l2.val) {,      temp.next = l1;,      l1 = l1.next;,    } else {,      temp.next = l2;,      l2 = l2.next;,    },    temp = temp.next;,  },,  if (l1 !== null) temp.next = l1;,  if (l2 !== null) temp.next = l2;,,  return root.next;,};,```,<hr style="height: 1px; margin: 1em 0px;" />,<strong>第1次解答</strong>,```javascript,/**, * Definition for singly-linked list., * function ListNode(val, next) {, *     this.val = (val===undefined ? 0 : val), *     this.next = (next===undefined ? null : next), * }, */,/**, * @param {ListNode} l1, * @param {ListNode} l2, * @return {ListNode}, */,var mergeTwoLists = function (l1, l2) {,  // 边界条件,  if (!l1 && !l2) return null;,  // 定义一个 ListNode，作为存储的根节点，不可被覆盖,  const root = {};,  // 定义一个活动的 ListNode，类似于指针，指定每次 next 的位置,  let temp = root;,,  // l1 和 l2 都没比较完,  while ((l1 !== null) & (l2 !== null)) {,    if (l1.val <= l2.val) {,      // temp 定义值,      temp.next = l1;,      // temp 指针移动到 next 等待插入,      temp = temp.next;,      // l1 移动到下一个位置，等待比较,      l1 = l1.next;,    } else {,      temp.next = l2;,      temp = temp.next;,      l2 = l2.next;,    },  },,  // l2 比较完了，就直接追加 l1 剩下的全部,  if (l1 !== null) {,    temp.next = l1;,  },,  // l1 比较完了，就直接追加 l2 剩下的全部,  if (l2 !== null) {,    temp.next = l2;,  },,  return root.next;,};,```