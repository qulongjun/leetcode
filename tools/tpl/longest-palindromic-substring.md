<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">5. 最长回文子串</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>String</code>&nbsp;<code>Dynamic Programming</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/longest-palindromic-substring/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/longest-palindromic-substring/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个字符串 <code>s</code>，找到 <code>s</code> 中最长的回文子串。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "babad"
<strong>输出：</strong>"bab"
<strong>解释：</strong>"aba" 同样是符合题意的答案。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = "cbbd"
<strong>输出：</strong>"bb"
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>s = "a"
<strong>输出：</strong>"a"
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>s = "ac"
<strong>输出：</strong>"a"
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= s.length <= 1000</code></li>
	<li><code>s</code> 仅由数字和英文字母（大写和/或小写）组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript

/**
 * 标准解法：判断当前字符串是否为回文字符串
 * @param {string}} str
 */
const isPalindrome = function (str) {
  // 遍历一遍当前字符串，判断是否为回文字符串
  for (let i = 0; i < str.length; i++) {
    // 注意：此处其实用了两个指针，一个为从头到尾部的 i ，一个为从尾部到头的 length - i -1
    // 如果 i 不大于字符串长度的一半，则比较，否则结束比较，返回 true
    if (i > str.length / 2) {
      return true;
    }
    // 如果第 i 个和第 length - i - 1 个的字符不一致，则不是回文
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  // 遍历完成，没有提前结束，证明是回文
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 用于存放临时的最大回文内容
  let longestStr = "";
  // 用于存放临时的最大回文的字符长度
  let max = 0;
  // 获取字符串长度
  const length = s.length;

  // 暴力算法，从第一个开始，直到最后，判断第 i 个到第 j 个元素组成的字符串是否为回文
  for (let i = 0; i < length; i++) {
    // <= 是因为 substring，必须指定长度
    for (let j = i + 1; j <= length; j++) {
      // 获取第 i 个到第 j 个元素组成的字符串
      const subStr = s.substring(i, j);
      // 判断如果是回文，并且如果当前回文的字符串长度比之前最大的回文字符串更大，则替换掉之前的记录
      if (isPalindrome(subStr) && subStr.length > max) {
        // 记录最新的回文字符串
        longestStr = subStr;
        // 记录最大回文字符串长度
        max = subStr.length;
      }
    }
  }
  // 返回最大回文字符串
  return longestStr;
};
```