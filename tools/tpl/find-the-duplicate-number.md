<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">287. 寻找重复数</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Two Pointers</code>&nbsp;<code>Binary Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/find-the-duplicate-number/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/find-the-duplicate-number/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个包含 <code>n + 1</code> 个整数的数组 <code>nums</code> ，其数字都在 <code>1</code> 到 <code>n</code><em> </em>之间（包括 <code>1</code> 和 <code>n</code>），可知至少存在一个重复的整数。</p>

<p>假设 <code>nums</code> 只有 <strong>一个重复的整数</strong> ，找出 <strong>这个重复的数</strong> 。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,3,4,2,2]
<strong>输出：</strong>2
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [3,1,3,4,2]
<strong>输出：</strong>3
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,1]
<strong>输出：</strong>1
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,1,2]
<strong>输出：</strong>1
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>2 <= n <= 3 * 10<sup>4</sup></code></li>
	<li><code>nums.length == n + 1</code></li>
	<li><code>1 <= nums[i] <= n</code></li>
	<li><code>nums</code> 中 <strong>只有一个整数</strong> 出现 <strong>两次或多次</strong> ，其余整数均只出现 <strong>一次</strong></li>
</ul>

<p> </p>

<p><b>进阶：</b></p>

<ul>
	<li>如何证明 <code>nums</code> 中至少存在一个重复的数字?</li>
	<li>你可以在不修改数组 <code>nums</code> 的情况下解决这个问题吗？</li>
	<li>你可以只用常量级 <code>O(1)</code> 的额外空间解决这个问题吗？</li>
	<li>你可以设计一个时间复杂度小于 <code>O(n<sup>2</sup>)</code> 的解决方案吗？</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return nums[i];
    else map.set(nums[i], true);
  }
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 用一个临时对象存储所有数组元素，key为数组元素，value 若为 true，则表示以前曾经访问过
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    // 如果走过了，则直接return
    if (obj[nums[i]]) {
      return nums[i];
    } else {
      obj[nums[i]] = true;
    }
  }
};
```