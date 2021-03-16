<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">168. Excel表列名称</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Math</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/excel-sheet-column-title/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/excel-sheet-column-title/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个正整数，返回它在 Excel 表中相对应的列名称。</p>

<p>例如，</p>

<pre>    1 -&gt; A
    2 -&gt; B
    3 -&gt; C
    ...
    26 -&gt; Z
    27 -&gt; AA
    28 -&gt; AB 
    ...
</pre>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> 1
<strong>输出:</strong> &quot;A&quot;
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入:</strong> 28
<strong>输出:</strong> &quot;AB&quot;
</pre>

<p><strong>示例&nbsp;3:</strong></p>

<pre><strong>输入:</strong> 701
<strong>输出:</strong> &quot;ZY&quot;
</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  // 用于存放临时的结果，PS：由于是先计算尾部的，因此默认是倒序的字符串
  let strs = "";
  while (n > 0) {
    // 重点
    n -= 1;
    // 整除计算余数， 65 + 余数即为字母的位置
    strs += String.fromCharCode(65 + (n % 26));
    // 末尾计算完成，需要往前走
    n = parseInt(n / 26);
  }

  return strs.split("").reverse().join("");
};
```