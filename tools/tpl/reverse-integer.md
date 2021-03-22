<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">7. 整数反转</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Math</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/reverse-integer/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/reverse-integer/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个 32 位的有符号整数 <code>x</code> ，返回将 <code>x</code> 中的数字部分反转后的结果。</p>

<p>如果反转后整数超过 32 位的有符号整数的范围 <code>[−2<sup>31</sup>,  2<sup>31 </sup>− 1]</code> ，就返回 0。</p>
<strong>假设环境不允许存储 64 位整数（有符号或无符号）。</strong>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>x = 123
<strong>输出：</strong>321
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>x = -123
<strong>输出：</strong>-321
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>x = 120
<strong>输出：</strong>21
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>x = 0
<strong>输出：</strong>0
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 用于存放最终的结果集
  let n = 0;
  // x % 10 -> 获取最后一位数字 x / 10 -> 去掉最后一位数字后的数字
  while (x !== 0) {
    // 123 % 10 -> 3 ， n * 10 -> 往前进一位
    n = n * 10 + (x % 10);
    // 123 / 10 -> 12.3 -> 12
    x = parseInt(x / 10);
  }

  // 判断边界条件
  if (n < Math.pow(2, 31) * -1 || n > Math.pow(2, 31) - 1) {
    return 0;
  }

  return n;
};
<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">7. 整数反转</div>,<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Math</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/reverse-integer/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/reverse-integer/">访问源站</a></span></div>,<hr style="height: 1px; margin: 1em 0px;" />,<p>给你一个 32 位的有符号整数 <code>x</code> ，返回将 <code>x</code> 中的数字部分反转后的结果。</p>

<p>如果反转后整数超过 32 位的有符号整数的范围 <code>[−2<sup>31</sup>,  2<sup>31 </sup>− 1]</code> ，就返回 0。</p>
<strong>假设环境不允许存储 64 位整数（有符号或无符号）。</strong>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>x = 123
<strong>输出：</strong>321
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>x = -123
<strong>输出：</strong>-321
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>x = 120
<strong>输出：</strong>21
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>x = 0
<strong>输出：</strong>0
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code></li>
</ul>
,<hr style="height: 1px; margin: 1em 0px;" />,<strong>第2次解答</strong>,```javascript,/**, * @param {number} x, * @return {number}, */,var reverse = function (x) {,  // 用于存放最终的结果集,  let n = 0;,  // x % 10 -> 获取最后一位数字 x / 10 -> 去掉最后一位数字后的数字,  while (x !== 0) {,    // 123 % 10 -> 3 ， n * 10 -> 往前进一位,    n = n * 10 + (x % 10);,    // 123 / 10 -> 12.3 -> 12,    x = parseInt(x / 10);,  },,  // 判断边界条件,  if (n < Math.pow(2, 31) * -1 || n > Math.pow(2, 31) - 1) {,    return 0;,  },,  return n;,};,```,<hr style="height: 1px; margin: 1em 0px;" />,<strong>第1次解答</strong>,```javascript,/**, * @param {number} x, * @return {number}, */,var reverse = function (x) {,  // 用于计算最终输出值,  let num = 0;,,  // x % 10 -> 获取当前 x 的最后一位数字,  // parseInt(x / 10) -> 获取当前 x 前面的数字（非最后一位）,  while (x) {,    num = num * 10 + (x % 10);,    x = parseInt(x / 10);,  },,  return num <= Math.pow(2, 31) - 1 && num >= Math.pow(2, 31) * -1 ? num : 0;,};,```