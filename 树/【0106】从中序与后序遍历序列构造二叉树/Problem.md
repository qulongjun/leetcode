<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">106. 从中序与后序遍历序列构造二叉树</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Tree</code>&nbsp;<code>Depth-first Search</code>&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>根据一棵树的中序遍历与后序遍历构造二叉树。</p>

<p><strong>注意:</strong><br>
你可以假设树中没有重复的元素。</p>

<p>例如，给出</p>

<pre>中序遍历 inorder =&nbsp;[9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]</pre>

<p>返回如下的二叉树：</p>

<pre>    3
   / \
  9  20
    /  \
   15   7
</pre>
