<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">70. 爬楼梯</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Dynamic Programming</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/climbing-stairs/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/climbing-stairs/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>假设你正在爬楼梯。需要 <em>n</em>&nbsp;阶你才能到达楼顶。</p>

<p>每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p>

<p><strong>注意：</strong>给定 <em>n</em> 是一个正整数。</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong> 2
<strong>输出：</strong> 2
<strong>解释：</strong> 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong> 3
<strong>输出：</strong> 3
<strong>解释：</strong> 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 定义一个 nums 数组，用于存放从 1 到 n 的时候的爬楼方式，nums[x] 表示第 x 台阶共有 nums[x] 种方式
  let nums = [1, 2];

  for (let i = 2; i < n; i++) {
    // 第 i 个台阶有 nums[i - 1] + nums[i - 2] 种爬楼方式
    nums[i] = nums[i - 1] + nums[i - 2];
  }

  // 返回第 n 阶的方式，因为从 0 开始计算的，因此为 n-1
  return nums[n - 1];
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  // 边界条件
  if (n === 0 || n === 1) return n;
  // 爬1级台阶有一种方法，爬2级台阶有两种方法（1+1 , 2）
  let steps = [1, 2];
  // 爬到第n级台阶的方法是F(n-1) + F(n-2) 的数量总和
  for (let i = 2; i < n; i++) {
    // 计算第n级台阶方法数量
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  // 因为是从0开始定义的，因此这里为 n-1 ，而不是 n
  return steps[n - 1];
};
```