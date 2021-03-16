<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">412. Fizz Buzz</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;暂无</span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/fizz-buzz/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/fizz-buzz/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>写一个程序，输出从 1 到 <em>n</em> 数字的字符串表示。</p>

<p>1. 如果&nbsp;<em>n&nbsp;</em>是3的倍数，输出&ldquo;Fizz&rdquo;；</p>

<p>2. 如果&nbsp;<em>n&nbsp;</em>是5的倍数，输出&ldquo;Buzz&rdquo;；</p>

<p>3.如果&nbsp;<em>n&nbsp;</em>同时是3和5的倍数，输出 &ldquo;FizzBuzz&rdquo;。</p>

<p><strong>示例：</strong></p>

<pre>n = 15,

返回:
[
    &quot;1&quot;,
    &quot;2&quot;,
    &quot;Fizz&quot;,
    &quot;4&quot;,
    &quot;Buzz&quot;,
    &quot;Fizz&quot;,
    &quot;7&quot;,
    &quot;8&quot;,
    &quot;Fizz&quot;,
    &quot;Buzz&quot;,
    &quot;11&quot;,
    &quot;Fizz&quot;,
    &quot;13&quot;,
    &quot;14&quot;,
    &quot;FizzBuzz&quot;
]
</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let results = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) results.push("FizzBuzz");
    else if (i % 3 === 0) results.push("Fizz");
    else if (i % 5 === 0) results.push("Buzz");
    else results.push(i.toString());
  }
  return results;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let results = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) results.push("FizzBuzz");
    else if (i % 3 === 0) results.push("Fizz");
    else if (i % 5 === 0) results.push("Buzz");
    else results.push(i.toString());
  }
  return results;
};
```