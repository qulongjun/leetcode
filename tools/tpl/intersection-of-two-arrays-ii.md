<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">350. 两个数组的交集 II</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Sort</code>&nbsp;<code>Hash Table</code>&nbsp;<code>Two Pointers</code>&nbsp;<code>Binary Search</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/intersection-of-two-arrays-ii/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定两个数组，编写一个函数来计算它们的交集。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>nums1 = [1,2,2,1], nums2 = [2,2]
<strong>输出：</strong>[2,2]
</pre>

<p><strong>示例 2:</strong></p>

<pre><strong>输入：</strong>nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>输出：</strong>[4,9]</pre>

<p>&nbsp;</p>

<p><strong>说明：</strong></p>

<ul>
	<li>输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。</li>
	<li>我们可以不考虑输出结果的顺序。</li>
</ul>

<p><strong><strong>进阶</strong>：</strong></p>

<ul>
	<li>如果给定的数组已经排好序呢？你将如何优化你的算法？</li>
	<li>如果&nbsp;<em>nums1&nbsp;</em>的大小比&nbsp;<em>nums2&nbsp;</em>小很多，哪种方法更优？</li>
	<li>如果&nbsp;<em>nums2&nbsp;</em>的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 本题和 349 的区别是本题不涉及去重，如果 nums1 和 nums2 里分别有俩个相同的值，则交集中包含了这俩相同的值
// 整体思路类似，区别是最后 nums2 遍历时，如果当前 hashTable 保存的值 > 1,则 将值 -1 后，方便后续的比较
var intersect = function (nums1, nums2) {
  let hashTable = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!hashTable[nums1[i]]) {
      hashTable[nums1[i]] = 1;
    } else hashTable[nums1[i]]++;
  }

  return nums2.filter((item) => {
    if (hashTable[item]) {
      hashTable[item]--;
      return true;
    }
    return false;
  });
};
```