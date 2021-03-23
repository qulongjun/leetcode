<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">53. 最大子序和</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Divide and Conquer</code>&nbsp;<code>Dynamic Programming</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/maximum-subarray/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/maximum-subarray/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个整数数组 <code>nums</code> ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [-2,1,-3,4,-1,2,1,-5,4]
<strong>输出：</strong>6
<strong>解释：</strong>连续子数组 [4,-1,2,1] 的和最大，为 6 。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [1]
<strong>输出：</strong>1
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [0]
<strong>输出：</strong>0
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>nums = [-1]
<strong>输出：</strong>-1
</pre>

<p><strong>示例 5：</strong></p>

<pre>
<strong>输入：</strong>nums = [-100000]
<strong>输出：</strong>-100000
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= nums.length <= 3 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code></li>
</ul>

<p> </p>

<p><strong>进阶：</strong>如果你已经实现复杂度为 <code>O(n)</code> 的解法，尝试使用更为精妙的 <strong>分治法</strong> 求解。</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 用来存放 前 i-1 位索引的时候的最大值，第 i 位只需要比较 i-1 位的值和第 i 位的值即可
  let maxCount = [nums[0]];
  // 用来存放总的最大值
  let maxValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 比较前 i-1 位的和+当前位 和 当前位 哪个值更大
    maxCount[i] = Math.max(maxCount[i - 1] + nums[i], nums[i]);
    // 获取最大值
    maxValue = Math.max(maxValue, maxCount[i]);
  }

  return maxValue;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 * @description dpTable 里每个元素表示以 nums[i] 结尾的最大连续子序列的和的值
 */
var maxSubArray = function (nums) {
  // 定义一个长度为 nums 的数组，且每个元素值初始为 -Infinity，没有值比它更小，因此在 Math.max 的时候可以更精准比较
  const dpTable = new Array(nums.length).fill(-Infinity);
  // base case
  dpTable[0] = nums[0];
  // 变化条件，需要计算每一个 dpTable 的元素的值，即 nums 里每一个元素的最大连续子数组的和
  for (let i = 1; i < dpTable.length; i++) {
    // 只会有两种情况：要么当前元素比前一个元素大，直接 前一个元素的值 + 当前元素的值，要么当前元素小，直接用当前元素作为最大和的连续子数组
    dpTable[i] = Math.max(nums[i], dpTable[i - 1] + nums[i]);
  }

  // 以下为找出最大值
  let maxCount = -Infinity;
  for (let i = 0; i < dpTable.length; i++) {
    if (dpTable[i] > maxCount) maxCount = dpTable[i];
  }
  
  return maxCount;
};
```