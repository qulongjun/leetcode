<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">39. 组合总和</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/combination-sum/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/combination-sum/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个<strong>无重复元素</strong>的数组&nbsp;<code>candidates</code>&nbsp;和一个目标数&nbsp;<code>target</code>&nbsp;，找出&nbsp;<code>candidates</code>&nbsp;中所有可以使数字和为&nbsp;<code>target</code>&nbsp;的组合。</p>

<p><code>candidates</code>&nbsp;中的数字可以无限制重复被选取。</p>

<p><strong>说明：</strong></p>

<ul>
	<li>所有数字（包括&nbsp;<code>target</code>）都是正整数。</li>
	<li>解集不能包含重复的组合。&nbsp;</li>
</ul>

<p><strong>示例&nbsp;1：</strong></p>

<pre><strong>输入：</strong>candidates = <code>[2,3,6,7], </code>target = <code>7</code>,
<strong>所求解集为：</strong>
[
  [7],
  [2,2,3]
]
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre><strong>输入：</strong>candidates = [2,3,5]<code>, </code>target = 8,
<strong>所求解集为：</strong>
[
&nbsp; [2,2,2,2],
&nbsp; [2,3,3],
&nbsp; [3,5]
]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= candidates.length &lt;= 30</code></li>
	<li><code>1 &lt;= candidates[i] &lt;= 200</code></li>
	<li><code>candidate</code> 中的每个元素都是独一无二的。</li>
	<li><code>1 &lt;= target &lt;= 500</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript

// 回溯这边注意点：需要有一个 index，用来标示当前走到数组的哪一个了，因为可以允许重复，因此每次回溯不需要 i + 1，只需要 i 即可。
let backTracking = function (
  candidates,
  target,
  total,
  tracks,
  results,
  index
) {
  if (total >= target || index >= candidates.length) {
    total === target && results.push([...tracks]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    // 剪枝操作
    if (total + candidates[i] > target) continue;
    tracks.push(candidates[i]);
    // 因为可以重复，所以回溯只需要传一个 i， 而非 i + 1
    backTracking(candidates, target, total + candidates[i], tracks, results, i);
    tracks.pop();
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let results = [];
  backTracking(candidates, target, 0, [], results, 0);
  return results;
};
<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">39. 组合总和</div>,<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/combination-sum/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/combination-sum/">访问源站</a></span></div>,<hr style="height: 1px; margin: 1em 0px;" />,<p>给定一个<strong>无重复元素</strong>的数组&nbsp;<code>candidates</code>&nbsp;和一个目标数&nbsp;<code>target</code>&nbsp;，找出&nbsp;<code>candidates</code>&nbsp;中所有可以使数字和为&nbsp;<code>target</code>&nbsp;的组合。</p>

<p><code>candidates</code>&nbsp;中的数字可以无限制重复被选取。</p>

<p><strong>说明：</strong></p>

<ul>
	<li>所有数字（包括&nbsp;<code>target</code>）都是正整数。</li>
	<li>解集不能包含重复的组合。&nbsp;</li>
</ul>

<p><strong>示例&nbsp;1：</strong></p>

<pre><strong>输入：</strong>candidates = <code>[2,3,6,7], </code>target = <code>7</code>,
<strong>所求解集为：</strong>
[
  [7],
  [2,2,3]
]
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre><strong>输入：</strong>candidates = [2,3,5]<code>, </code>target = 8,
<strong>所求解集为：</strong>
[
&nbsp; [2,2,2,2],
&nbsp; [2,3,3],
&nbsp; [3,5]
]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= candidates.length &lt;= 30</code></li>
	<li><code>1 &lt;= candidates[i] &lt;= 200</code></li>
	<li><code>candidate</code> 中的每个元素都是独一无二的。</li>
	<li><code>1 &lt;= target &lt;= 500</code></li>
</ul>
,<hr style="height: 1px; margin: 1em 0px;" />,<strong>第2次解答</strong>,```javascript,,// 回溯这边注意点：需要有一个 index，用来标示当前走到数组的哪一个了，因为可以允许重复，因此每次回溯不需要 i + 1，只需要 i 即可。,let backTracking = function (,  candidates,,  target,,  total,,  tracks,,  results,,  index,) {,  if (total >= target || index >= candidates.length) {,    total === target && results.push([...tracks]);,    return;,  },,  for (let i = index; i < candidates.length; i++) {,    // 剪枝操作,    if (total + candidates[i] > target) continue;,    tracks.push(candidates[i]);,    // 因为可以重复，所以回溯只需要传一个 i， 而非 i + 1,    backTracking(candidates, target, total + candidates[i], tracks, results, i);,    tracks.pop();,  },};,,/**, * @param {number[]} candidates, * @param {number} target, * @return {number[][]}, */,var combinationSum = function (candidates, target) {,  let results = [];,  backTracking(candidates, target, 0, [], results, 0);,  return results;,};,```,<hr style="height: 1px; margin: 1em 0px;" />,<strong>第1次解答</strong>,```javascript,/**, * @param {number[]} candidates, * @param {number} target, * @return {number[][]}, */,,// 回溯函数,var backTracking = function (,  candidates,,  target,,  addCount, // 当前路径总和，该值总是 <= target,  tracks, // 当前路径数组,  results,,  index // 当前 candidates 的索引位置,) {,  // 如果 index 索引到 candidates 最后都没能算出这个 target，则直接结束,  if (index >= candidates.length) return;,  // 如果当前路径总和 === 目标target，则将当前路径保存到结果集中,  if (addCount === target) {,    // 保存结果集,    results.push([...tracks]);,    // 结束回溯,    return;,  },,  // 遍历侯选值，由于可以重复使用元素，但不能往回找，否则会出现 [2,2,3], [3,2,2] 这样的情况,  for (let i = index; i < candidates.length; i++) {,    // 如果当前路径的值 + 候选值 > target，则不再回溯了，直接找下一个值了,    if (addCount + candidates[i] > target) continue;,    // 将当前值加入路径中,    tracks.push(candidates[i]);,    // 回溯,    backTracking(,      candidates,,      target,,      addCount + candidates[i], // 获取最新的路径之和,      tracks,,      results,,      i // index 传递当前的索引，为什么不传递 i+1，是因为当前元素可以被重复使用,    );,    // 回退,    tracks.pop();,  },};,,var combinationSum = function (candidates, target) {,  // 定义一个结果集,  let results = [];,  // 存放临时的路径,  let tracks = [];,  // 回溯,  backTracking(candidates, target, 0, tracks, results, 0);,  // 返回结果集,  return results;,};,```