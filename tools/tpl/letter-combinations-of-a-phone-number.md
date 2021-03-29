<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">17. 电话号码的字母组合</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Depth-first Search</code>&nbsp;<code>Recursion</code>&nbsp;<code>String</code>&nbsp;<code>Backtracking</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/letter-combinations-of-a-phone-number/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个仅包含数字 <code>2-9</code> 的字符串，返回所有它能表示的字母组合。答案可以按 <strong>任意顺序</strong> 返回。</p>

<p>给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。</p>

<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png" style="width: 200px;" /></p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>digits = "23"
<strong>输出：</strong>["ad","ae","af","bd","be","bf","cd","ce","cf"]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>digits = ""
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>digits = "2"
<strong>输出：</strong>["a","b","c"]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= digits.length &lt;= 4</code></li>
	<li><code>digits[i]</code> 是范围 <code>['2', '9']</code> 的一个数字。</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript

const backTracking = function (sourceMap, keys, results, tracks, index) {
  // 回溯算法的结束条件，当 tracks 收集到足够多的元素后
  if (tracks.length === keys.length) {
    // 输出字符串
    results.push(tracks.join(""));
    return;
  }

  // 定义需要遍历的集合，keys[index] => 当前遍历到的第几个位置
  const dataSource = sourceMap[keys[index]];

  // 回溯的遍历操作
  for (let i = 0; i < dataSource.length; i++) {
    tracks.push(dataSource[i]);
    backTracking(sourceMap, keys, results, tracks, index + 1);
    tracks.pop();
  }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 边界条件，防止出现 ['']的情况
  if (digits === "") return [];

  // 定义一个数据源
  const sourceMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // "23" => ["2", "3"]
  const keys = digits.split("");

  // 定义结果集
  const results = [];
  // 回溯
  backTracking(sourceMap, keys, results, [], 0);
  // 返回结果集
  return results;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */

const dictionary = [
  [],
  [],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

// 回溯方法
var backTracking = function (digits, tracks, results, index) {
  // 结束条件： 路径的长度 === 目标的长度
  if (tracks.length === digits.length) {
    // 将路径放入结果集中
    results.push(tracks);
    // 结束
    return;
  }

  // 获取当前期望的所有枚举值
  let enums = dictionary[digits[index]];

  // "abc" => 先进入 a => 然后回溯 "def" => ad / ae / af => 进入 b => ...
  for (let i = 0; i < enums.length; i++) {
    // 把当前选择加入 tracks，然后回溯 index + 1。
    backTracking(digits, tracks + enums[i], results, index + 1);
  }
};

var letterCombinations = function (digits) {
  if (digits === "") return [];
  // 定义结果集
  let results = [];
  // 临时路径
  let tracks = "";
  // 回溯
  backTracking(digits, tracks, results, 0);
  // 返回结果集
  return results;
};
```