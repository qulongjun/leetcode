<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">349. 两个数组的交集</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Sort</code>&nbsp;<code>Hash Table</code>&nbsp;<code>Two Pointers</code>&nbsp;<code>Binary Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/intersection-of-two-arrays/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/intersection-of-two-arrays/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定两个数组，编写一个函数来计算它们的交集。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>nums1 = [1,2,2,1], nums2 = [2,2]
<strong>输出：</strong>[2]
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>输出：</strong>[9,4]</pre>

<p>&nbsp;</p>

<p><strong>说明：</strong></p>

<ul>
	<li>输出结果中的每个元素一定是唯一的。</li>
	<li>我们可以不考虑输出结果的顺序。</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 定义一个 hashTable 存放 nums1 里访问过的数据，然后在 nums2 里又被访问到了，说明是交集
  let nums = [];

  // 第一次遍历，将 nums1 数据塞到 hashTable 里
  for (let i = 0; i < nums1.length; i++) {
    if (!nums[nums1[i]]) {
      nums[nums1[i]] = 1;
    }
  }
  // 这里其实是第二次遍历，在遍历之前，先去重，然后再过滤掉 hashTable 里不存在到元素
  return [...new Set(nums2)].filter((item) => nums[item]);
};
```