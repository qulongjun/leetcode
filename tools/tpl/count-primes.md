<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">204. 计数质数</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Hash Table</code>&nbsp;<code>Math</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/count-primes/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/count-primes/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>统计所有小于非负整数&nbsp;<em><code>n</code>&nbsp;</em>的质数的数量。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>n = 10
<strong>输出：</strong>4
<strong>解释：</strong>小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>n = 0
<strong>输出：</strong>0
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>n = 1
<strong>输出</strong>：0
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 5 * 10<sup>6</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    // 定义一个 HashTable 存放 0 ～ n 所有的数，因为 Array 内传入的是数组长度 n，生成 0 ～ n-1 下标的数组，因此需要 n+1。
  const hashTable = new Array(n + 1).fill(1);
  // 用于存放所有质数的和
  let sum = 0;
  // 0 和 1 不是质数，因此从 2 开始计算
  for (let i = 2; i < n; i++) {
      // 如果当前是质数，则加上 sum
    if (hashTable[i] === 1) {
      sum += hashTable[i];
      // 因为 i 是质数，因此 2i，3i，4i肯定不是质数了，因此只要小于n的 m*i 都不是质数，标记为 0
      for (let j = i + i; j < n; j += i) {
        hashTable[j] = 0;
      }
    }
  }
  
  return sum;
};
```