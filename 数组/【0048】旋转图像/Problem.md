<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">48. 旋转图像</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/rotate-image/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/rotate-image/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个 <em>n </em>× <em>n</em> 的二维矩阵 <code>matrix</code> 表示一个图像。请你将图像顺时针旋转 90 度。</p>

<p>你必须在<strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a></strong> 旋转图像，这意味着你需要直接修改输入的二维矩阵。<strong>请不要 </strong>使用另一个矩阵来旋转图像。</p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg" style="width: 642px; height: 242px;" />
<pre>
<strong>输入：</strong>matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>输出：</strong>[[7,4,1],[8,5,2],[9,6,3]]
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg" style="width: 800px; height: 321px;" />
<pre>
<strong>输入：</strong>matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
<strong>输出：</strong>[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>matrix = [[1]]
<strong>输出：</strong>[[1]]
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>matrix = [[1,2],[3,4]]
<strong>输出：</strong>[[3,1],[4,2]]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>matrix.length == n</code></li>
	<li><code>matrix[i].length == n</code></li>
	<li><code>1 &lt;= n &lt;= 20</code></li>
	<li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></li>
</ul>
