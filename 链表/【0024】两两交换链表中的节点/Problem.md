<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">24. 两两交换链表中的节点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Recursion</code>&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/swap-nodes-in-pairs/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/swap-nodes-in-pairs/">访问源站</a></span></div>
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
	<li><code>0 &lt;= Node.val &lt;= 100</code></li>
</ul>

<p> </p>

<p><strong>进阶：</strong>你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）</p>
