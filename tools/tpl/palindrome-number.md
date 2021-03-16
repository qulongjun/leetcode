<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">9. 回文数</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Math</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/palindrome-number/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/palindrome-number/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个整数 <code>x</code> ，如果 <code>x</code> 是一个回文整数，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>

<p>回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，<code>121</code> 是回文，而 <code>123</code> 不是。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>x = 121
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>x = -121
<strong>输出：</strong>false
<strong>解释：</strong>从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>x = 10
<strong>输出：</strong>false
<strong>解释：</strong>从右向左读, 为 01 。因此它不是一个回文数。
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>x = -101
<strong>输出：</strong>false
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code></li>
</ul>

<p> </p>

<p><strong>进阶：</strong>你能不将整数转为字符串来解决这个问题吗？</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let revertNum = 0,
    originNum = x;

  // 将整数反转一下 123 -> 321
  while (x !== 0) {
    revertNum = 10 * revertNum + (x % 10);
    x = parseInt(x / 10);
  }

  return revertNum === originNum;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   // 负数始终为 false
//   if (x < 0) return false;
//   // 123 -> '123' -> ['1','2','3'] -> ['3', '2', '1'] -> '321' -> 321
//   return parseInt(x.toString().split("").reverse().join("")) === x;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 暂存一份 x ，防止丢失后无法比较
  const y = x;
  // 负数始终为 false
  if (x < 0) return false;

  // 下面即为常规的求回文数方法，与【0007】整数反转 类似
  let num = 0;

  while (x) {
    num = num * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return y === num;
};

```