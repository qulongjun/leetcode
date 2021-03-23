<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">1. 两数之和</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Hash Table</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/two-sum/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/two-sum/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值</strong> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p>

<p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p>

<p>你可以按任意顺序返回答案。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [2,7,11,15], target = 9
<strong>输出：</strong>[0,1]
<strong>解释：</strong>因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [3,2,4], target = 6
<strong>输出：</strong>[1,2]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [3,3], target = 6
<strong>输出：</strong>[0,1]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>2 <= nums.length <= 10<sup>3</sup></code></li>
	<li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code></li>
	<li><strong>只会存在一个有效答案</strong></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
// 标准回溯解法
var backTracking = function (nums, tracks, results, total, target, index) {
  if (tracks.length === 2) {
    if (total === target) {
      results.push([...tracks]);
    }
    return;
  }

  for (let i = index; i < nums.length; i++) {
    tracks.push(i);
    backTracking(nums, tracks, results, total + nums[i], target, i + 1);
    tracks.pop();
  }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_01 = function (nums, target) {
  let results = [];
  let tracks = [];
  backTracking(nums, tracks, results, 0, target, 0);
  return results[0];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[target - nums[i]] !== undefined) {
      return [hashMap[target - nums[i]], i];
    } else hashMap[nums[i]] = i;
  }
};

```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用两个 for 循环，实现不重复计算数组中两个元素之和。
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用一个 for 循环，然后直接去数组中找剩下的数是否存在。
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     const anotherIndex = nums.lastIndexOf(target - nums[i]);
//     // anotherIndex === -1 表示未找到，anotherIndex === 1 表示重复元素使用
//     if (anotherIndex !== -1 && anotherIndex !== i) {
//       return [i, anotherIndex];
//     }
//     continue;
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用一个数组存储补 diff 值，减少一次遍历。
 */
// var twoSum = function (nums, target) {
//   // 使用 tempArr[diff] 来判断当前 nums 数组是否存在这个元素。
//   const tempArr = [];

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     // 如果此时 tempArr[diff] 存在，则证明之前的 `i` 的值为 diff。
//     if (tempArr[diff] !== undefined) {
//       return [tempArr[diff], i];
//     }
//     // 第 i 个元素即为 diff 值
//     tempArr[nums[i]] = i;
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 和上一个方案类似，采用 Map 提高查找效率。
 */
var twoSum = function (nums, target) {
    // 使用 tempArr[diff] 来判断当前 nums 数组是否存在这个元素。
    const tempMap = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      // 如果此时 tempArr[diff] 存在，则证明之前的 `i` 的值为 diff。
      if (tempMap.get(diff) !== undefined) {
        return [tempMap.get(diff), i];
      }
      // 第 i 个元素即为 diff 值
      tempMap.set(nums[i], i);
    }
  };
  
```