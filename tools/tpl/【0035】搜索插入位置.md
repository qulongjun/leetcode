<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">35. 搜索插入位置</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Binary Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/search-insert-position/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/search-insert-position/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。</p>

<p>你可以假设数组中无重复元素。</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> [1,3,5,6], 5
<strong>输出:</strong> 2
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入:</strong> [1,3,5,6], 2
<strong>输出:</strong> 1
</pre>

<p><strong>示例 3:</strong></p>

<pre><strong>输入:</strong> [1,3,5,6], 7
<strong>输出:</strong> 4
</pre>

<p><strong>示例 4:</strong></p>

<pre><strong>输入:</strong> [1,3,5,6], 0
<strong>输出:</strong> 0
</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 标准的二分查找法，需要记忆
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let max = nums.length - 1;
  while (low <= max) {
    // parseInt 用来防止出现小数
    let mid = low + parseInt((max - low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) max = mid - 1;
    if (nums[mid] < target) low = mid + 1;
  }

  return low;
};
```