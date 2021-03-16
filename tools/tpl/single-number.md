<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">136. 只出现一次的数字</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Bit Manipulation</code>&nbsp;<code>Hash Table</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/single-number/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/single-number/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个<strong>非空</strong>整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</p>

<p><strong>说明：</strong></p>

<p>你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> [2,2,1]
<strong>输出:</strong> 1
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入:</strong> [4,1,2,1,2]
<strong>输出:</strong> 4</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      hashTable[nums[i]]++;
    } else hashTable[nums[i]] = 1;
  }
  return Object.keys(hashTable).find(item => hashTable[item] === 1);
};
```