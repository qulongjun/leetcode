<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">1035. 二叉树的堂兄弟节点</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/cousins-in-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/cousins-in-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>在二叉树中，根节点位于深度 <code>0</code> 处，每个深度为 <code>k</code> 的节点的子节点位于深度 <code>k+1</code> 处。</p>

<p>如果二叉树的两个节点深度相同，但<strong> 父节点不同</strong> ，则它们是一对<em>堂兄弟节点</em>。</p>

<p>我们给出了具有唯一值的二叉树的根节点 <code>root</code> ，以及树中两个不同节点的值 <code>x</code> 和 <code>y</code> 。</p>

<p>只有与值 <code>x</code> 和 <code>y</code> 对应的节点是堂兄弟节点时，才返回 <code>true</code> 。否则，返回 <code>false</code>。</p>

<p> </p>

<p><strong>示例 1：<br />
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/12/q1248-01.png" style="width: 180px; height: 160px;" /></strong></p>

<pre>
<strong>输入：</strong>root = [1,2,3,4], x = 4, y = 3
<strong>输出：</strong>false
</pre>

<p><strong>示例 2：<br />
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/12/q1248-02.png" style="width: 201px; height: 160px;" /></strong></p>

<pre>
<strong>输入：</strong>root = [1,2,3,null,4,null,5], x = 5, y = 4
<strong>输出：</strong>true
</pre>

<p><strong>示例 3：</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/02/13/q1248-03.png" style="width: 156px; height: 160px;" /></strong></p>

<pre>
<strong>输入：</strong>root = [1,2,3,null,4], x = 2, y = 3
<strong>输出：</strong>false</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>二叉树的节点数介于 <code>2</code> 到 <code>100</code> 之间。</li>
	<li>每个节点的值都是唯一的、范围为 <code>1</code> 到 <code>100</code> 的整数。</li>
</ul>

<p> </p>
