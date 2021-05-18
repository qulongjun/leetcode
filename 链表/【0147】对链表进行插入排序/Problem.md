<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">147. 对链表进行插入排序</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Sort</code>&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/insertion-sort-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/insertion-sort-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>对链表进行插入排序。</p>

<p><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif" style="height:180px; width:300px" /><br>
<small>插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。<br>
每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。</small></p>

<p>&nbsp;</p>

<p><strong>插入排序算法：</strong></p>

<ol>
	<li>插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。</li>
	<li>每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。</li>
	<li>重复直到所有输入数据插入完为止。</li>
</ol>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入:</strong> 4-&gt;2-&gt;1-&gt;3
<strong>输出:</strong> 1-&gt;2-&gt;3-&gt;4
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre><strong>输入:</strong> -1-&gt;5-&gt;3-&gt;4-&gt;0
<strong>输出:</strong> -1-&gt;0-&gt;3-&gt;4-&gt;5
</pre>
