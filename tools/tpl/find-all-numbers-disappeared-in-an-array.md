<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">448. 找到所有数组中消失的数字</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个范围在&nbsp; 1 &le; a[i] &le; <em>n</em> (&nbsp;<em>n</em> = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。</p>

<p>找到所有在 [1, <em>n</em>] 范围之间没有出现在数组中的数字。</p>

<p>您能在不使用额外空间且时间复杂度为<em>O(n)</em>的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。</p>

<p><strong>示例:</strong></p>

<pre>
<strong>输入:</strong>
[4,3,2,7,8,2,3,1]

<strong>输出:</strong>
[5,6]
</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // 核心思路：因为数组长度为 n，且数组内每个元素的值都在 1 ~ n 之内，因此可以同时增加一个固定的值，比如 n，
  // 则每个元素就是在 n ~ 2n 之间，将数组元素值作为数组的index 索引，依次加上数组的长度 n
  // 然后再次遍历，< n 的索引就是不存在的值，因为没有一个索引指向这个位置
  for (let i = 0; i < nums.length; i++) {
    nums[nums[i] - 1] += nums.length;
  }

  let results = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] < nums.length) {
      results.push(i + 1);
    }
  }

  return results;
};
```