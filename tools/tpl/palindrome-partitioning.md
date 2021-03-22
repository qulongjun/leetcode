<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">131. 分割回文串</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Depth-first Search</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/palindrome-partitioning/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/palindrome-partitioning/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个字符串 <code>s</code>，请你将<em> </em><code>s</code><em> </em>分割成一些子串，使每个子串都是 <strong>回文串</strong> 。返回 <code>s</code> 所有可能的分割方案。</p>

<p><strong>回文串</strong> 是正着读和反着读都一样的字符串。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "aab"
<strong>输出：</strong>[["a","a","b"],["aa","b"]]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = "a"
<strong>输出：</strong>[["a"]]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= s.length <= 16</code></li>
	<li><code>s</code> 仅由小写英文字母组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
// 判断是否为回文字符串
var isPalindromic = function (str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};

// 回溯算法
var backTracking = function (s, tracks, results, index) {
  // 结束条件：当前索引已经到最后一位了，后面没有字符给分割了
  if (index >= s.length) {
    results.push([...tracks]);
    return;
  }
  // 回溯算法实现
  for (let i = index; i < s.length; i++) {
    // 分割一个子串，如果这个子串是一个回文，则将它加入到 tracks 结果集中，如果不是，则继续往下找
    let subStr = s.substring(index, i + 1);
    if (isPalindromic(subStr)) {
      tracks.push(subStr);
    } else continue;
    // 回溯
    backTracking(s, tracks, results, i + 1);
    // 回退
    tracks.pop();
  }
};
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let results = [];
  backTracking(s, [], results, 0);
  return results;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {string[][]}
 */

// 判断字符串 str 是否为回文
// 双指针，一个从头开始，一个从结尾开始，到中间相遇，期间值一样就是回文
var isPalindromic = function (str) {
  let first = 0,
    last = str.length - 1;

  while (first < last) {
    if (str[first] !== str[last]) return false;
    first++;
    last--;
  }

  return true;
};

// 回溯方法
var backTracking = function (s, tracks, results, index) {
  // 结束回溯条件：当前索引已经超过了 s 的长度
  if (index >= s.length) {
    results.push([...tracks]);
    return;
  }

  // 这里分割条件是
  for (let i = index; i < s.length; i++) {
    // 生成从上次结束后到当前索引的子字符串
    let str = s.substring(index, i + 1);
    // 判断是否为回文，如果是回文，则追加到路径中，继续往下找，如果不是，则重新生成字符串
    if (isPalindromic(str)) {
      tracks.push(str);
    } else continue;
    // 回溯，从第 i+1 位置作为新的 index 往后找
    backTracking(s, tracks, results, i + 1);
    // 弹出
    tracks.pop();
  }
};

var partition = function (s) {
  // 结果集
  let results = [];
  // 关键路径
  let tracks = [];
  // 回溯
  backTracking(s, tracks, results, 0);
  // 返回结果集
  return results;
};
```