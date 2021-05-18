<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">117. 填充每个节点的下一个右侧节点指针 II</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树</p>

<pre>
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}</pre>

<p>填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 <code>NULL</code>。</p>

<p>初始状态下，所有 next 指针都被设置为 <code>NULL</code>。</p>

<p> </p>

<p><strong>进阶：</strong></p>

<ul>
	<li>你只能使用常量级额外空间。</li>
	<li>使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。</li>
</ul>

<p> </p>

<p><strong>示例：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2019/02/15/117_sample.png" style="width: 640px; height: 218px;" /></p>

<pre>
<strong>输入</strong>：root = [1,2,3,4,5,null,7]
<strong>输出：</strong>[1,#,2,3,#,4,5,7,#]
<strong>解释：</strong>给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中的节点数小于 <code>6000</code></li>
	<li><code>-100 &lt;= node.val &lt;= 100</code></li>
</ul>

<p> </p>

<ul>
</ul>
