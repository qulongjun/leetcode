<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">202. 快乐数</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Hash Table</code>&nbsp;<code>Math</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/happy-number/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/happy-number/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>编写一个算法来判断一个数 <code>n</code> 是不是快乐数。</p>

<p>「快乐数」定义为：</p>

<ul>
	<li>对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。</li>
	<li>然后重复这个过程直到这个数变为 1，也可能是 <strong>无限循环</strong> 但始终变不到 1。</li>
	<li>如果 <strong>可以变为</strong>  1，那么这个数就是快乐数。</li>
</ul>

<p>如果 <code>n</code> 是快乐数就返回 <code>true</code> ；不是，则返回 <code>false</code> 。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>19
<strong>输出：</strong>true
<strong>解释：
</strong>1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>n = 2
<strong>输出：</strong>false
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
// 计算当前 num 值的每项平方和
var getNumber = function (num) {
  let sum = 0;
  // num / 10 -> 会将数每次都缩小 10 倍，直到0
  while (num !== 0) {
    // num % 10 -> 取出最后一位数值
    sum += (num % 10) * (num % 10);
    num = parseInt(num / 10);
  }
  
  return sum;
};
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 用一个快慢指针依次遍历，快指针每次计算2遍，慢指针每次计算1遍，
  // 如果最后 fast === slow === 1 则表示是快乐数，如果最后两个等于其他值，则表示不是快乐数
  let fast = getNumber(n),
    slow = n;
  while (fast !== slow) {
    // fast 走两次
    fast = getNumber(fast);
    fast = getNumber(fast);
    // slow 走一次
    slow = getNumber(slow);
  }
  // 判断 fast 是否为 1
  return fast === 1;
};
```