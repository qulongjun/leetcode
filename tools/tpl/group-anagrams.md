<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">49. 字母异位词分组</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Hash Table</code>&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/group-anagrams/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/group-anagrams/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。</p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong> <code>[&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;]</code>
<strong>输出:</strong>
[
  [&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;],
  [&quot;nat&quot;,&quot;tan&quot;],
  [&quot;bat&quot;]
]</pre>

<p><strong>说明：</strong></p>

<ul>
	<li>所有输入均为小写字母。</li>
	<li>不考虑答案输出的顺序。</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 虽然字符串字符顺序不同，但经过 sort() 后会保持一样，使用一个 hashMap 存放所有相同的字符串，key 为经过 sort 之后的字符串，value 为数组
  // {[sorted Str]: [str1, str2, str3]}
  let map = new Map();

  // 遍历每一个 str
  for (let str of strs) {
    // 先给它排序，字符串 -> 数组(split) -> 排序(sort) -> 字符串(join)
    let sortedStr = str.split("").sort().join("");
    // 如果当前排序后字符串在 hashMap 中存在，说明前面已经有相同的了，则追加列表
    if (map.get(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr), str]);
      // 否则新增一个 entry
    } else {
      map.set(sortedStr, [str]);
    }
  }

  // map.values 获取全部属性值
  return [...map.values()];
};
```