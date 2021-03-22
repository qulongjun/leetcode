<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">78. 子集</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Bit Manipulation</code>&nbsp;<code>Array</code>&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/subsets/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/subsets/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个整数数组 <code>nums</code> ，数组中的元素 <strong>互不相同</strong> 。返回该数组所有可能的子集（幂集）。</p>

<p>解集 <strong>不能</strong> 包含重复的子集。你可以按 <strong>任意顺序</strong> 返回解集。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,2,3]
<strong>输出：</strong>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [0]
<strong>输出：</strong>[[],[0]]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= nums.length <= 10</code></li>
	<li><code>-10 <= nums[i] <= 10</code></li>
	<li><code>nums</code> 中的所有元素 <strong>互不相同</strong></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript

// 回溯算法参考 [【2020-秋季】子集
var backTracking = function (nums, tracks, results, index) {
  // 触发结束条件
  if (index > nums.length) return;

  // 回溯算法
  for (let i = index; i < nums.length; i++) {
    // 做选择
    tracks.push(nums[i]);
    // 回溯
    backTracking(nums, tracks, results, i + 1);
    // 撤销选择
    tracks.pop();
  }

  // 保存结果集
  results.push([...tracks]);
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let results = [];
  let tracks = [];
  backTracking(nums, tracks, results, 0);
  return results;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯算法
// [] => [1] => [1, 2] => [1, 2, 3]（不能重复，所以不能将[2, 3]同时作为备选节点）
var backTracking = function (nums, tracks, results, index) {
  // 结束条件，当查找路径 index 索引超过 nums 的长度的时候，就结束了
  // 为什么不是 index >= nums.length：因为回溯的上次传入的 index 是 (i+1)，因此当 index === nums.length 的时候，是最后一个全集。
  // 当 index === nums.length：tracks === [1, 2, 3]
  if (index > nums.length) return;

  // 回溯，因为不能重复追加备选节点，因此需要增加一个 index，用来存放当前走到哪一个节点了，只能添加该节点往后的节点
  for (let i = index; i < nums.length; i++) {
    // 将当前结果加入路径中
    tracks.push(nums[i]);
    // 回溯
    backTracking(nums, tracks, results, i + 1);
    // 回头
    tracks.pop();
  }
  // 将当前路径加入结果集
  results.push([...tracks]);
};

var subsets = function (nums) {
  // 定义结果集
  let results = [];
  // 定义临时存放回溯路径
  let tracks = [];
  // 调用回溯
  backTracking(nums, tracks, results, 0);
  // 返回结果集
  return results;
};
```