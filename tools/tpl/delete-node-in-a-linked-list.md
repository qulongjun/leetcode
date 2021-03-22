<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">237. 删除链表中的节点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/delete-node-in-a-linked-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/delete-node-in-a-linked-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 <strong>要被删除的节点</strong> 。</p>

<p>&nbsp;</p>

<p>现有一个链表 --&nbsp;head =&nbsp;[4,5,1,9]，它可以表示为:</p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/237_example.png" style="height: 49px; width: 300px;"></p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>head = [4,5,1,9], node = 5
<strong>输出：</strong>[4,1,9]
<strong>解释：</strong>给定你链表中值为&nbsp;5&nbsp;的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 1 -&gt; 9.
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>head = [4,5,1,9], node = 1
<strong>输出：</strong>[4,5,9]
<strong>解释：</strong>给定你链表中值为&nbsp;1&nbsp;的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 5 -&gt; 9.
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表至少包含两个节点。</li>
	<li>链表中所有节点的值都是唯一的。</li>
	<li>给定的节点为非末尾节点并且一定是链表中的一个有效节点。</li>
	<li>不要从你的函数中返回任何结果。</li>
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```