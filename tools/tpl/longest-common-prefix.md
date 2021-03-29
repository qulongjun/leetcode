<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">14. 最长公共前缀</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/longest-common-prefix/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/longest-common-prefix/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>编写一个函数来查找字符串数组中的最长公共前缀。</p>

<p>如果不存在公共前缀，返回空字符串 <code>""</code>。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>strs = ["flower","flow","flight"]
<strong>输出：</strong>"fl"
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>strs = ["dog","racecar","car"]
<strong>输出：</strong>""
<strong>解释：</strong>输入不存在公共前缀。</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> 仅由小写英文字母组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let index = 0;
  // 纵向比较，每个数组元素的 index 位置的值是否一样，如果不一样，直接return 0 ～ index - 1的子串
  while (true) {
    // 基准比较第一个元素的第 index 位置
    let flags = strs[0][index];
    // 特殊case：如果当前 index 为 undefined，那么直接返回第一个元素就行了
    if (flags === undefined) return strs[0];
    // 依次遍历数组中的每个元素的 index 位置
    for (let i = 1; i < strs.length; i++) {
      // 如果不一样，直接获取前面的字串就行了
      if (strs[i][index] !== flags) {
        return strs[i].slice(0, index);
      }
    }
    // 如果一样，就比较后一位
    index++;
  }
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 * @description 这个解法效率不高，不建议参考
 * @deprecated
 */
// var longestCommonPrefix = function (strs) {
//   // 边界问题，当 strs 为空时，会取不到 strs[0] 的值
//   if (strs.length === 0) return "";
//   // 用来定位当前比较到哪一个位置的索引
//   let index = 0;

//   // 终止条件：第一个元素全部走完，就表示最长子串就是第一个元素
//   while (index !== strs[0].length) {
//     for (let i = 0; i < strs.length; i++) {
//       // 依次遍历每一个字符串的当前 index 位置的值是否和第一个元素相同位置一样，不一样就返回了
//       if (strs[0][index] !== strs[i][index]) {
//         return strs[0].substring(0, index);
//       }
//     }

//     index++;
//   }
//   return strs[0];
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 边界问题，当 strs 为空时，会取不到 strs[0] 的值
  if (strs.length === 0) return "";
  // 优化点：可以获取长度最短的字符串，减少后续遍历次数
  const minLength = Math.min(...strs.map((item) => item.length));
  // 用来存放临时公共前缀
  let str = "";

  // 第一层循环用来遍历定位公共前缀
  for (let i = 0; i < minLength; i++) {
    // 第二层循环用来查看每个字符串是否符合当前的公共前缀
    for (let j = 1; j < strs.length; j++) {
      // 如果不符合，就直接返回了
      if (strs[j][i] !== strs[0][i]) {
        return str;
      }
    }
    // 如果符合，就更新公共前缀
    str += strs[0][i];
  }
  return str;
};

```