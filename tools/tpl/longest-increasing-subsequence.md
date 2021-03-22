<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">300. 最长递增子序列</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Binary Search</code>&nbsp;<code>Dynamic Programming</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/longest-increasing-subsequence/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/longest-increasing-subsequence/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个整数数组 <code>nums</code> ，找到其中最长严格递增子序列的长度。</p>

<p>子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，<code>[3,6,2,7]</code> 是数组 <code>[0,3,1,6,2,2,7]</code> 的子序列。</p>
 

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [10,9,2,5,3,7,101,18]
<strong>输出：</strong>4
<strong>解释：</strong>最长递增子序列是 [2,3,7,101]，因此长度为 4 。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [0,1,0,3,2,3]
<strong>输出：</strong>4
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [7,7,7,7,7,7,7]
<strong>输出：</strong>1
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= nums.length <= 2500</code></li>
	<li><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>
</ul>

<p> </p>

<p><b>进阶：</b></p>

<ul>
	<li>你可以设计时间复杂度为 <code>O(n<sup>2</sup>)</code> 的解决方案吗？</li>
	<li>你能将算法的时间复杂度降低到 <code>O(n log(n))</code> 吗?</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

const dp = (nums) => {
  // 定义一个长度正好等于 nums 的数组，由于最长上升子序列最少为自己，因此至少为 1，故填充 1
  const dpTable = new Array(nums.length).fill(1);
  // 需要将 dpTable 每一个都计算出来，自底向上计算，先计算 dpTable[0] -> dpTable[1] -> ... -> dpTable[i]
  // dpTable[i] 如何计算？dpTable[n] 表示以 nums[n] 结尾的最长上升子序列个数为 x，如果 nums[i] > nums[n],只需要把 nums[n] + 1 即可表示当前的最长个数
  for (let i = 0; i < dpTable.length; i++) {
    // 比较从 0 ~ j 的前面全部元素，表示以 nums[j] 为结尾的最长上升子序列的个数
    for (let j = 0; j < i; j++) {
      // 如果当前的元素比之前的大，只需要比较当前元素个数和（之前个数 + 1）哪个大即可
      if (nums[i] > nums[j]) {
        dpTable[i] = Math.max(dpTable[i], dpTable[j] + 1);
      }
    }
  }

  // 以下为找出 dpTable 的最大值
  let maxCount = 0;

  for (let i = 0; i < dpTable.length; i++) {
    if (maxCount < dpTable[i]) maxCount = dpTable[i];
  }

  return maxCount;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  return dp(nums);
};
```