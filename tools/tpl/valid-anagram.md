<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">242. 有效的字母异位词</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Sort</code>&nbsp;<code>Hash Table</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/valid-anagram/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/valid-anagram/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定两个字符串 <em>s</em> 和 <em>t</em> ，编写一个函数来判断 <em>t</em> 是否是 <em>s</em> 的字母异位词。</p>

<p><strong>示例&nbsp;1:</strong></p>

<pre><strong>输入:</strong> <em>s</em> = &quot;anagram&quot;, <em>t</em> = &quot;nagaram&quot;
<strong>输出:</strong> true
</pre>

<p><strong>示例 2:</strong></p>

<pre><strong>输入:</strong> <em>s</em> = &quot;rat&quot;, <em>t</em> = &quot;car&quot;
<strong>输出: </strong>false</pre>

<p><strong>说明:</strong><br>
你可以假设字符串只包含小写字母。</p>

<p><strong>进阶:</strong><br>
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 定义一个 HashMap 存放 s 中每一个字符的个数，
  // 然后遍历 t 中的每一个字符，如果遇到了相同的，就减1，如果只剩1个，就删除该字符，如果不存在，则返回 false
  const hashMap = {};
  // 将 s 每个字符塞入 hashMap
  for (let i = 0; i < s.length; i++) {
    // 遇到重复的，就增加个数
    if (hashMap[s[i]]) hashMap[s[i]]++;
    else hashMap[s[i]] = 1;
  }

  // 遍历 t 中的每一个字符，三种情况：
  // 1. 该字符没出现在 hashMap 中，返回 false
  // 2. 该字符出现在 hashMap 中，且只出现一次，则直接删除 hashMap 中该字符
  // 3. 如果出现多次，就减少 1 次
  // 最终判断依据： hashMap 中字符应该正好全部用完，即 hashMap 的 key 为空 
  for (let i = 0; i < t.length; i++) {
    if (!hashMap[t[i]]) return false;
    if (hashMap[t[i]] === 1) delete hashMap[t[i]];
    else hashMap[t[i]]--;
  }

  return Object.keys(hashMap).length === 0;
};
```