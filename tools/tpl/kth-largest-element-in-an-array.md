<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">215. 数组中的第K个最大元素</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Heap</code>&nbsp;<code>Divide and Conquer</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/kth-largest-element-in-an-array/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/kth-largest-element-in-an-array/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>在未排序的数组中找到第 <strong>k</strong> 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> <code>[3,2,1,5,6,4] 和</code> k = 2
<strong>输出:</strong> 5
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入:</strong> <code>[3,2,3,1,2,4,5,5,6] 和</code> k = 4
<strong>输出:</strong> 4</pre>

<p><strong>说明: </strong></p>

<p>你可以假设 k 总是有效的，且 1 &le; k &le; 数组的长度。</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

// 一个标准的快排方案（二分），时间复杂度 O(NlogN)，最好 O(NlogN)，最差(O(N^2))
var fastSort = function (arr) {
  // 结束条件，不能再往下拆分了
  if (arr.length <= 1) {
    return arr;
  } else {
    // 找到中间一位的索引
    let middleIndex = Math.floor(arr.length / 2);
    // 找到中间的元素值，arr 中每一个都和中间的相比，比中间大的，放在 left 中，比中间小的，放在 right 中
    let middle = arr.splice(middleIndex, 1);
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
      // 下面的 left 和 right 互换就是从小到大排序，目前从大到小
      if (arr[i] > middle) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // 递归调用 fastSort 进行二分，最后合并成一个数组
    return fastSort(left).concat(middle, fastSort(right));
  }
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return fastSort(nums)[k - 1];
};
```