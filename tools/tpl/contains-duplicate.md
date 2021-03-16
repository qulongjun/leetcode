<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">217. 存在重复元素</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Hash Table</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/contains-duplicate/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/contains-duplicate/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个整数数组，判断是否存在重复元素。</p>

<p>如果存在一值在数组中出现至少两次，函数返回 <code>true</code> 。如果数组中每个元素都不相同，则返回 <code>false</code> 。</p>

<p> </p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> [1,2,3,1]
<strong>输出:</strong> true</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入: </strong>[1,2,3,4]
<strong>输出:</strong> false</pre>

<p><strong>示例 3:</strong></p>

<pre>
<strong>输入: </strong>[1,1,1,3,3,4,3,2,4,2]
<strong>输出:</strong> true</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 如果 hashTable 中已经存在了某个值，就表示重复了
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      return true;
    } else hashTable[nums[i]] = 1;
  }
  return false;
};
```