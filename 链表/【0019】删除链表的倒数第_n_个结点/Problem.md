<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">19. 删除链表的倒数第 N 个结点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/">访问源站</a></span></div>
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
	<li><code>1 &lt;= sz &lt;= 30</code></li>
	<li><code>0 &lt;= Node.val &lt;= 100</code></li>
	<li><code>1 &lt;= n &lt;= sz</code></li>
</ul>
