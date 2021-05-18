<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">131. 分割回文串</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">Easy</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Depth-first Search</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/palindrome-partitioning/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/palindrome-partitioning/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个字符串 <code>s</code>，请你将<em> </em><code>s</code><em> </em>分割成一些子串，使每个子串都是 <strong>回文串</strong> 。返回 <code>s</code> 所有可能的分割方案。</p>

<p><strong>回文串</strong> 是正着读和反着读都一样的字符串。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "aab"
<strong>输出：</strong>[["a","a","b"],["aa","b"]]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = "a"
<strong>输出：</strong>[["a"]]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 16</code></li>
	<li><code>s</code> 仅由小写英文字母组成</li>
</ul>
