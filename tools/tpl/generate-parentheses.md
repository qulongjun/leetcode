<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">22. 括号生成</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>String</code>&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/generate-parentheses/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/generate-parentheses/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>数字 <code>n</code> 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 <strong>有效的 </strong>括号组合。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>n = 3
<strong>输出：</strong>["((()))","(()())","(())()","()(())","()()()"]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>n = 1
<strong>输出：</strong>["()"]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= n <= 8</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript

// 用来校验当前 str 是否满足括号规范
var isValidate = function (str) {
  // 用一个 stack 临时变量存放左括号个数，遇到左括号 +1，遇到右括号 -1，当左括号为 0，且此时为右括号时，返回 false
  let stack = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack++;
    } else {
      if (stack === 0) return false;
      stack--;
    }
  }

  return stack === 0;
};

// 回溯算法
var backTracking = function (n, tracks, results) {
  // Tips 判断条件是 tracks 的长度为 2n，因为要生成 n对，一对2个字符
  if (tracks.length === 2 * n) {
    // 如果校验通过，则将结果压入结果集
    isValidate(tracks) && results.push(tracks);
    return;
  }
  // dataSource 是候选集
  let dataSource = ["(", ")"];
  
  for (let i = 0; i < dataSource.length; i++) {
    tracks += dataSource[i];
    backTracking(n, tracks, results);
    tracks = tracks.slice(0, tracks.length - 1);
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let results = [];
  backTracking(n, "", results);
  return results;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
// 这里是括号的合法性校验，在最终 push 到 result 之前阶段完成校验逻辑
var isValidate = function (tracks) {
  // 设定一个临时变量，用于存放 ( 的个数
  let stack = 0;
  // 依次遍历字符串，遇到 ( 则计数器 +1， 遇到 ) 则计数器 -1
  for (let i = 0; i < tracks.length; i++) {
    // 遇到 (, 计数器 +1
    if (tracks[i] === "(") {
      stack++;
    } else {
      // 判断当前计数器是否为空了，如果为空了，则表示 ) 没法与 ( 配对，因此报错
      if (stack === 0) return false;
      // 如果非空，则计数器 -1
      stack--;
    }
  }
  // 最终需要计数器为空才能完美匹配
  return stack === 0;
};

// 回溯算法
var backTracking = function (n, tracks, results) {
  // 如果本次回溯的字符串值长度已经是 2n 了，则表示已经回溯结束了
  if (tracks.length === 2 * n) {
    // 校验通过则放入结果集中 result
    isValidate(tracks) && results.push(tracks);
    return;
  }
  // 这是全量的数据集
  var sourceList = ["(", ")"];
  // 遍历全部数据集元素，依次进行回溯
  for (let choice in sourceList) {
    // 选中一个元素，将其追加到路径的最后一位，然后再进行回溯
    tracks += sourceList[choice];
    // 再次对子元素进行回溯
    backTracking(n, tracks, results);
    // 回溯结束后需要回退到上一步
    tracks = tracks.slice(0, tracks.length - 1);
  }
};

var generateParenthesis = function (n) {
  // 这道题可以转换思路：求 2n 个位置，每个位置可以放置字符 （ 或者 ） ， 组成的所有括号组合中，有多少个是合法的。
  // 定义结果集
  let results = [];
  // 这次回溯变量使用字符串保存，节省空间
  let tracks = "";
  // 调用回溯
  backTracking(n, tracks, results);
  // 返回结果集
  return results;
};
```