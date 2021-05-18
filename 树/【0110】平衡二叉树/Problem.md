<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">110. 平衡二叉树</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Recursion</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/balanced-binary-tree/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/balanced-binary-tree/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，判断它是否是高度平衡的二叉树。</p>

<p>本题中，一棵高度平衡二叉树定义为：</p>

<blockquote>
<p>一个二叉树<em>每个节点 </em>的左右两个子树的高度差的绝对值不超过 1 。</p>
</blockquote>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg" style="width: 342px; height: 221px;" />
<pre>
<strong>输入：</strong>root = [3,9,20,null,null,15,7]
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg" style="width: 452px; height: 301px;" />
<pre>
<strong>输入：</strong>root = [1,2,2,3,3,null,null,4,4]
<strong>输出：</strong>false
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>root = []
<strong>输出：</strong>true
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中的节点数在范围 <code>[0, 5000]</code> 内</li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>
