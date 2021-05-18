<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">46. 全排列</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/permutations/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/permutations/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个不含重复数字的数组 <code>nums</code> ，返回其 <strong>所有可能的全排列</strong> 。你可以 <strong>按任意顺序</strong> 返回答案。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,2,3]
<strong>输出：</strong>[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [0,1]
<strong>输出：</strong>[[0,1],[1,0]]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [1]
<strong>输出：</strong>[[1]]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 6</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
	<li><code>nums</code> 中的所有整数 <strong>互不相同</strong></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript

// 参考【2020-秋季】全排列
var backTracking = function (nums, tracks, results) {
  // 终止条件是 track 的长度 === 原数组 nums 的长度
  if (tracks.length === nums.length) {
    results.push([...tracks]);
    return;
  }

  // 回溯
  for (let i = 0; i < nums.length; i++) {
    // 排除不合理的选择
    if (tracks.includes(nums[i])) continue;
    // 做选择
    tracks.push(nums[i]);
    // 回溯
    backTracking(nums, tracks, results, i + 1);
    // 撤销
    tracks.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let results = [];
  let tracks = [];
  backTracking(nums, tracks, results);
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
// 回溯方法，第一个参数为全集可选的数据源，第二个参数为临时的回溯路径，比如[1] / [1, 3]
var backtrack = function (nums, track, results) {
  // 结束当前回溯条件：回溯路径的长度等于数据源的长度
  if (nums.length === track.length) {
    // 将回溯的路径追加到结果数组中，需要注意 JS 由于 track 是引用类型，因此需要进行一个拷贝，否则为空数组
    results.push([...track]);
    // 结束当前回溯
    return;
  }

  // 这个循环用于找出还没加入到回溯路径中的数据源
  for (let i = 0; i < nums.length; i++) {
    // 如果当前节点已经加入到了回溯路径了，说明是已经走过了的，就忽略掉，只需要找没走过的
    if (track.includes(nums[i])) continue;
    // 将没走过的节点加入到回溯路径中，组成新的路径：[xxx, 新加入的节点]
    track.push(nums[i]);
    // 调用回溯方法查找后续的节点
    backtrack(nums, track, results);
    // 回溯结束之后，需要撤销最后一个加入的节点，才能继续往下走
    track.pop();
  }
};

var permute = function (nums) {
  // 定义一个临时存放回溯结果的数组
  // [] => [[1, 2, 3]] => [[1, 2, 3], [1, 3, 2]]
  let results = [];
  // 定义一个临时存放回溯路径的数组
  // [] => [1] => [1, 2] => [1,2,3]
  let track = [];
  // 调用回溯方法计算路径
  backtrack(nums, track, results);
  // 返回结果
  return results;
};
```