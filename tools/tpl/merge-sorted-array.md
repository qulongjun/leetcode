<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">88. 合并两个有序数组</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/merge-sorted-array/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/merge-sorted-array/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你两个有序整数数组 <code>nums1</code><em> </em>和 <code>nums2</code>，请你将 <code>nums2</code><em> </em>合并到 <code>nums1</code><em> </em>中<em>，</em>使 <code>nums1</code><em> </em>成为一个有序数组。</p>

<p>初始化 <code>nums1</code> 和 <code>nums2</code> 的元素数量分别为 <code>m</code> 和 <code>n</code><em> </em>。你可以假设 <code>nums1</code><em> </em>的空间大小等于 <code>m + n</code>，这样它就有足够的空间保存来自 <code>nums2</code> 的元素。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
<strong>输出：</strong>[1,2,2,3,5,6]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums1 = [1], m = 1, nums2 = [], n = 0
<strong>输出：</strong>[1]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>nums1.length == m + n</code></li>
	<li><code>nums2.length == n</code></li>
	<li><code>0 <= m, n <= 200</code></li>
	<li><code>1 <= m + n <= 200</code></li>
	<li><code>-10<sup>9</sup> <= nums1[i], nums2[i] <= 10<sup>9</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 尾插法，nums1 和 nums2 中比较最后一位，比较小的那个插入到 nums1 中的最后位置，m 表示 nums1 中有数据的最后一位
  // i 表示当前需要被插入的位置的索引
  let i = m + n - 1;
  // 当 nums1 的数据和 nums2 的数据都没插入完，则需要依次插入
  // 如果 nums2 数据已经插完了，就结束掉了
  // 如果 nums1 数据已经插完 ，就把 nums2 剩下的数据放到 nums1 的前面
  while (m !== 0 && n !== 0) {
    // nums2 数据更小一些
    if (nums1[m - 1] > nums2[n - 1]) {
      // 就把 nums2 的最后一位插入到 i 的位置
      nums1[i] = nums1[m - 1];
      m--;
    } else {
      // 否则把 nums1 的最后一位插入到 i 的位置
      nums1[i] = nums2[n - 1];
      n--;
    }
    // 无论哪个插入了，i始终往前走一步
    i--;
  }

  // 当 nums1 全部走完后，需要把 nums2 剩下的部分插入到 nums1 中剩下的位置
  if (m === 0) {
    while (n !== 0) {
      nums1[i] = nums2[n - 1];
      n--;
      // 无论哪个插入了，i始终往前走一步
      i--;
    }
  }
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /**
   * 定义两个指针 i, j，分别指向 num1 和 num2 的当前索引，如果 num1 < num2，则 i++
   * 如果 num1 >= num2，则需要把 num1 从 i 到 m+j 之间所有的为止均往后挪一个位置
   * 把 num2[j] 的元素塞到空出来的 num1[i] 的位置
   *
   * 如果 num1 跑到底都没能把 num2 全部插完，就把 num2 剩下的全部插到后面
   *
   */
  let i = 0,
    j = 0;

  // 结束条件：nums2 全部被插完了
  while (j < n && i < m + j) {
    // 如果 nums1 当前位置的元素 小于 nums2 当前位置的元素，就往后继续找合适的插入位置
    if (nums1[i] < nums2[j]) {
      i++;
      // 否则表示当前位置的元素已经 大于 nums2 当前位置的元素，需要往后挪一下了
    } else {
      // 往后挪
      for (let x = m + j; x > i; x--) {
        nums1[x] = nums1[x - 1];
      }
      // 挪完后，直接插入
      nums1[i] = nums2[j];
      j++;
      i++;
    }
  }

  // 如果插入一遍后发现 nums2 还有元素，就直接把他们插入 nums1 的尾部
  for (; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
};
```