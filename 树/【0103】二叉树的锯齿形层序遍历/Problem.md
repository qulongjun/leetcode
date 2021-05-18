<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">103. 二叉树的锯齿形层序遍历</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>Tree</code>&nbsp;<code>Breadth-first Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。</p>

<p>例如：<br />
给定二叉树 <code>[3,9,20,null,null,15,7]</code>,</p>

<pre>
    3
   / \
  9  20
    /  \
   15   7
</pre>

<p>返回锯齿形层序遍历如下：</p>

<pre>
[
  [3],
  [20,9],
  [15,7]
]
</pre>
