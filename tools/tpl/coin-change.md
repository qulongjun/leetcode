<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">322. 零钱兑换</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Dynamic Programming</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/coin-change/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/coin-change/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定不同面额的硬币 <code>coins</code> 和一个总金额 <code>amount</code>。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 <code>-1</code>。</p>

<p>你可以认为每种硬币的数量是无限的。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>coins = <code>[1, 2, 5]</code>, amount = <code>11</code>
<strong>输出：</strong><code>3</code> 
<strong>解释：</strong>11 = 5 + 5 + 1</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>coins = <code>[2]</code>, amount = <code>3</code>
<strong>输出：</strong>-1</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>coins = [1], amount = 0
<strong>输出：</strong>0
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>coins = [1], amount = 1
<strong>输出：</strong>1
</pre>

<p><strong>示例 5：</strong></p>

<pre>
<strong>输入：</strong>coins = [1], amount = 2
<strong>输出：</strong>2
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= coins.length <= 12</code></li>
	<li><code>1 <= coins[i] <= 2<sup>31</sup> - 1</code></li>
	<li><code>0 <= amount <= 10<sup>4</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 初始化 amount+1 个元素的数组，用于存放前 amount 个数量，自底向上
  // 凑成 amount 金额的硬币数最多只可能等于 amount（全用 1 元面值的硬币），
  // 所以初始化为 amount + 1 就相当于初始化为正无穷，便于后续取最小值
  const caches = new Array(amount + 1).fill(amount + 1);
  // base case
  caches[0] = 0;
  // 从凑 0 元硬币开始，直到凑 amount 元硬币截止
  for (let i = 0; i < caches.length; i++) {
    // 求所有选择的最小值，遍历所有可能的硬币种类
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      // 如果当前需要凑的金额已经小于当前硬币的值，则直接跳过，不可能凑到
      if (i - coin < 0) continue;
      // 否则就比较当前现在的值，和 之前的钱 + 1，哪个值比较小
      caches[i] = Math.min(caches[i], 1 + caches[i - coin]);
    }
  }

  // 如果所求的 amount 对应的数量为初始化时候的值，则表示没有找到合适的数量
  if (caches[amount] === amount + 1) {
    return -1;
  }
  return caches[amount];
};
```