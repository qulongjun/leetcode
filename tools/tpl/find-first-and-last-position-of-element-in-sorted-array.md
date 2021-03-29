<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">34. 在排序数组中查找元素的第一个和最后一个位置</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Binary Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个按照升序排列的整数数组 <code>nums</code>，和一个目标值 <code>target</code>。找出给定目标值在数组中的开始位置和结束位置。</p>

<p>如果数组中不存在目标值 <code>target</code>，返回 <code>[-1, -1]</code>。</p>

<p><strong>进阶：</strong></p>

<ul>
	<li>你可以设计并实现时间复杂度为 <code>O(log n)</code> 的算法解决此问题吗？</li>
</ul>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [<code>5,7,7,8,8,10]</code>, target = 8
<strong>输出：</strong>[3,4]</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [<code>5,7,7,8,8,10]</code>, target = 6
<strong>输出：</strong>[-1,-1]</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [], target = 0
<strong>输出：</strong>[-1,-1]</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>nums</code> 是一个非递减数组</li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

/**
 *
 * @param {*} nums 需要查找的数据源数组
 * @param {*} target 需要查找的目标
 * @param {*} isEqual 是否查找的为 leftIndex， 如果是 leftIndex， 则需要判断 nums[middle] === target
 * @returns 数组索引，返回 nums 中 大于（或等于，如果 isEqual === true）的索引值
 *
 * 二分查找的思路：
 * 定义一个左指针 lower 和右指针 higher，先计算中间的索引位置 middle;
 * 如果 nums[middle] < target，则证明要找的 target 在右侧，即 lower = middle + 1;
 * 如果 nums[middle] > target，则证明要找的 target 在左侧，即 higher = middle - 1;
 */
const binarySearch = function (nums, target, isEqual) {
  // 双指针，定义 lower
  let lower = 0,
    // 定义 higher
    higher = nums.length - 1,
    // 初始化 index ，用于存放最终的索引结果，初始值设为 nums.length，定义一个不存在的初始值，方便后续做边界检查
    index = nums.length;

  while (lower <= higher) {
    // 找到中间位置的索引
    let middle = Math.floor((lower + higher) / 2);
    // 如果中间位置 大于（或等于） target， 则证明 target 都在 middle 的左侧，higher 要更新
    if (nums[middle] > target || (isEqual && nums[middle] === target)) {
      index = middle;
      higher = middle - 1;
    } else {
      // 否则，证明 target 在 middle 右侧， lower 要更新
      lower = middle + 1;
    }
  }

  return index;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /*
    考虑到数组是有序排列的，本题查找 target 的起始位置和结束位置，可以转换成：查找 target 的值的位置和 查找第一个比 target 值大的位置。
    本地有时间复杂度要求，因此可以采用二分查找方式。
    二分查找返回值：返回 nums 中大于【或等于，取决于 isEqual】 target 的索引值
  */
  // 返回 nums 中第一个大于【等于】 target 的索引值
  const leftIndex = binarySearch(nums, target, true);
  // 返回 nums 中第一个大于 target 的索引值，将该索引 - 1即最后一个 target 对于的索引值
  const rightIndex = binarySearch(nums, target, false) - 1;
  // 初始 position 的位置
  let position = [-1, -1];
  // 判断边界条件
  if (
    leftIndex <= rightIndex &&
    leftIndex < nums.length &&
    rightIndex <= nums.length
  ) {
    // 更新 position 的位置
    position = [leftIndex, rightIndex];
  }

  // 返回 position 的位置
  return position;
};
```