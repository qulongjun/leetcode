<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">238. 除自身以外数组的乘积</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/product-of-array-except-self/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/product-of-array-except-self/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个长度为&nbsp;<em>n</em>&nbsp;的整数数组&nbsp;<code>nums</code>，其中&nbsp;<em>n</em> &gt; 1，返回输出数组&nbsp;<code>output</code>&nbsp;，其中 <code>output[i]</code>&nbsp;等于&nbsp;<code>nums</code>&nbsp;中除&nbsp;<code>nums[i]</code>&nbsp;之外其余各元素的乘积。</p>

<p>&nbsp;</p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong> <code>[1,2,3,4]</code>
<strong>输出:</strong> <code>[24,12,8,6]</code></pre>

<p>&nbsp;</p>

<p><strong>提示：</strong>题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。</p>

<p><strong>说明: </strong>请<strong>不要使用除法，</strong>且在&nbsp;O(<em>n</em>) 时间复杂度内完成此题。</p>

<p><strong>进阶：</strong><br>
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组<strong>不被视为</strong>额外空间。）</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 思路就是当前 index 左侧所有数字的乘积 * 右侧所有数字的乘积
  // 左侧所有数字的乘积 = 前 index - 2 个所有数字的乘积 * 第 index - 1 位数字
  // 右侧所有数字的乘积 = 后 index + 2 个所有数字的乘积 * 第 index + 1 位数字
  let leftResults = [];
  let rightResults = [];
  let results = [];

  // 第 0 位起始是 1
  leftResults[0] = 1;
  // 从第1位开始，计算前 index 个数字的乘积
  for (let i = 1; i < nums.length; i++) {
    leftResults[i] = leftResults[i - 1] * nums[i - 1];
  }

  rightResults[nums.length - 1] = 1;
  // 从最后1位开始，计算后 index 个数字的乘积
  for (let i = nums.length - 2; i >= 0; i--) {
    rightResults[i] = rightResults[i + 1] * nums[i + 1];
  }

  // 最后左右相乘
  for (let i = 0; i < nums.length; i++) {
    results[i] = leftResults[i] * rightResults[i];
  }

  return results;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  /*
    主要思路是错位相乘，该元素前面所有元素的乘积 * 该元素后面所有元素的乘积 = 答案
    1. 该元素前面的乘积 = 上一个元素结果（上一个元素的前面的乘积） * 上一个元素的值
    2. 改元素后面的乘积 = 后一个元素结果（后一个元素的后面的乘积） * 后一个元素的值
    例如 nums = [1, 2, 3, 4, 5, 6, 7]，若target = 4，
    该元素前面的乘积 results[3] = 第 3 个元素的结果 * nums[3]
    该元素后面的乘积 results[5] = 第 5 个元素的结果 * nums[5]
    最终 target = 4 的结果为 results[3] * results[5]
  */

  // 定义一个空数组存放最终结果集
  let results = [];
  // 遍历每一个元素的前一个元素之前的乘积 * 前一个元素的值
  for (let i = 0; i < nums.length; i++) {
    // 比如当前是第 i 个元素，则先算出 1*2*3*...* i-1 个的乘积，再乘以 i 的值
    // 特殊情况，i = 0 的时候前一个不存在，所以设置为 1 （1 乘以任何数都不变）
    if (i === 0) {
      results[0] = 1;
      continue;
    }
    // results[i] 表示第i个元素的乘积，results[i - 1]表示前 i - 1 个乘积的值
    results[i] = results[i - 1] * nums[i - 1];
  }

  // 定义一个临时变量用来存放后面的计算乘积值
  let temp;
  // 同前面的，这波从后面开始计算
  for (let j = nums.length - 1; j >= 0; j--) {
    // 最后一个单独处理，和前面一样，设置为 1
    if (j !== nums.length - 1) {
      // 此时 temp 表示后面一位的乘积之值 * 当前的值
      temp *= nums[j + 1];
    } else {
      temp = 1;
    }
    // 最终将前后两个乘积相乘就是结果
    results[j] *= temp;
  }
  
  // 返回结果集
  return results;
};
```