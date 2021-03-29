<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">1013. 斐波那契数</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/fibonacci-number/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/fibonacci-number/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p><strong>斐波那契数</strong>，通常用 <code>F(n)</code> 表示，形成的序列称为 <strong>斐波那契数列</strong> 。该数列由 <code>0</code> 和 <code>1</code> 开始，后面的每一项数字都是前面两项数字的和。也就是：</p>

<pre>
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
</pre>

<p>给你 <code>n</code> ，请计算 <code>F(n)</code> 。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>2
<strong>输出：</strong>1
<strong>解释：</strong>F(2) = F(1) + F(0) = 1 + 0 = 1
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>3
<strong>输出：</strong>2
<strong>解释：</strong>F(3) = F(2) + F(1) = 1 + 1 = 2
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>4
<strong>输出：</strong>3
<strong>解释：</strong>F(4) = F(3) + F(2) = 2 + 1 = 3
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 30</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

/**
 *
 * 备忘录模式，用一个 caches 数组存放之前计算过的值，如果当前值存在，则直接使用，否则先保存，再返回
 *
 * @param {number} N 当前的值
 * @param {number[]} caches 缓存数组
 */
// const helper = (N, caches) => {
//   // base case，即起点位置或者结束位置
//   if (N === 0 || N === 1) return N;

//   // 从备忘录里找，看看是否已经出现过并存起来了
//   if (caches[N]) return caches[N];

//   // 如果没有出现过，就计算一下并且存起来
//   caches[N] = helper(N - 1, caches) + helper(N - 2, caches);

//   // 返回当前值
//   return caches[N];
// };

/**
 * @param {number} N
 * @return {number}
 * @description 备忘录模式，自顶向下
 */
// var fib = function (N) {
//   // 边界条件
//   if (N < 0) return 0;
//   // 备忘录
//   const caches = [];
//   // 返回计算结果
//   return helper(N, caches);
// };

/**
 * @param {number} N
 * @return {number}
 * @description DP模式，自底向上
 */
// var fib = function (N) {
//   // 边界条件
//   if (N < 0) return 0;
//   // 定义一个空的 DP Table
//   const dpTable = [];
//   // base case
//   dpTable[0] = 0;
//   dpTable[1] = 1;
//   // 依次往上计算
//   for (let i = 2; i <= N; i++) {
//     dpTable[i] = dpTable[i - 1] + dpTable[i - 2];
//   }
//   // 返回最顶上的结果
//   return dpTable[N];
// };

/**
 * @param {number} N
 * @return {number}
 * @description DP模式，自底向上，避免 DP Table 空间，用两个变量维护
 */
var fib = function (N) {
  // 边界条件
  if (N < 0) return 0;
  // base case
  if (N === 0 || N === 1) return N;
  // 定义两个变量，存储当前元素的前两个元素值，不再需要 DP Table 维护
  let prev = 0,
    next = 1;
  let i = 2;
  while (i <= N) {
    // 更新 prev 和 next 的值
    const temp = prev + next;
    prev = next;
    next = temp;
    i++;
  }

  return next;
};

```