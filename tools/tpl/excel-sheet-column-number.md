<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">171. Excel表列序号</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Math</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/excel-sheet-column-number/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/excel-sheet-column-number/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个Excel表格中的列名称，返回其相应的列序号。</p>

<p>例如，</p>

<pre>    A -&gt; 1
    B -&gt; 2
    C -&gt; 3
    ...
    Z -&gt; 26
    AA -&gt; 27
    AB -&gt; 28 
    ...
</pre>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> &quot;A&quot;
<strong>输出:</strong> 1
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入: </strong>&quot;AB&quot;
<strong>输出:</strong> 28
</pre>

<p><strong>示例&nbsp;3:</strong></p>

<pre><strong>输入: </strong>&quot;ZY&quot;
<strong>输出:</strong> 701</pre>

<p><strong>致谢：</strong><br>
特别感谢&nbsp;<a href="http://leetcode.com/discuss/user/ts">@ts</a>&nbsp;添加此问题并创建所有测试用例。</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript

// A:1 ,B:2 =>  计算 X 到 A 之间的差值 + 1 即为当前的值
var getCharCode = function (char) {
  return char.charCodeAt() - "A".charCodeAt() + 1;
};

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  // 定义十进制结果集
  let sum = 0;
  // 从后往前遍历26进制字符串，计算方式为： x * 进制的(n-1)次方
  for (let i = s.length - 1; i >= 0; i--) {
    // 获取当前位置
    let char = s[i];
    // 计算当前第几位
    let num = s.length - i - 1;
    // 计算当前位置的十进制结果
    sum += getCharCode(char) * Math.pow(26, num);
  }
  // 返回结果集
  return sum;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

// A:1 ,B:2 =>  计算 X 到 A 之间的差值 + 1 即为当前的值
var getCharCode = function (char) {
  return char.charCodeAt() - "A".charCodeAt() + 1;
};

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  // 定义十进制结果集
  let sum = 0;
  // 从后往前遍历26进制字符串，计算方式为： x * 进制的(n-1)次方
  for (let i = s.length - 1; i >= 0; i--) {
    // 获取当前位置
    let char = s[i];
    // 计算当前第几位
    let num = s.length - i - 1;
    // 计算当前位置的十进制结果
    sum += getCharCode(char) * Math.pow(26, num);
  }
  // 返回结果集
  return sum;
};
```