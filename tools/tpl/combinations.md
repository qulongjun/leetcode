<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">77. 组合</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/combinations/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/combinations/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定两个整数 <em>n</em> 和 <em>k</em>，返回 1 ... <em>n </em>中所有可能的 <em>k</em> 个数的组合。</p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong>&nbsp;n = 4, k = 2
<strong>输出:</strong>
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

// 回溯算法
var backTracking = function (results, dataSource, tracks, arrCount, index) {
  // 定义结束条件：当前 tracks 结果的长度 === arrCount
  if (tracks.length === arrCount) {
    results.push([...tracks]);
    return;
  }
  // 遍历 dataSource，查找下一个符合条件的元素进入 tracks
  // 因为不能重复，所以需要在参数中保存一个 index，表示下次查找开始的位置
  for (let i = index; i < dataSource.length; i++) {
    // 进入 tracks
    tracks.push(dataSource[i]);
    // 回溯算法
    backTracking(results, dataSource, tracks, arrCount, i + 1);
    // 回头
    tracks.pop();
  }
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 定义回溯算法需要使用的数据源 dataSource
  let dataSource = [];
  // 生成 n 个数组元素的数据源
  for (let i = 0; i < n; i++) {
    dataSource.push(i + 1);
  }
  // 定义结果集
  let results = [];
  // 回溯
  backTracking(results, dataSource, [], k, 0);
  // 返回结果集
  return results;
};
```