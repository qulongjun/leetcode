<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">169. 多数元素</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Bit Manipulation</code>&nbsp;<code>Array</code>&nbsp;<code>Divide and Conquer</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/majority-element/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/majority-element/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个大小为 <em>n </em>的数组，找到其中的多数元素。多数元素是指在数组中出现次数 <strong>大于</strong> <code>⌊ n/2 ⌋</code> 的元素。</p>

<p>你可以假设数组是非空的，并且给定的数组总是存在多数元素。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>[3,2,3]
<strong>输出：</strong>3</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>[2,2,1,1,1,2,2]
<strong>输出：</strong>2
</pre>

<p> </p>

<p><strong>进阶：</strong></p>

<ul>
	<li>尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let maps = {};
  for (let i = 0; i < nums.length; i++) {
    if (maps[nums[i]]) {
      maps[nums[i]]++;
    } else maps[nums[i]] = 1;
  }

  return Object.keys(maps).find((item) => maps[item] > nums.length / 2);
};
```