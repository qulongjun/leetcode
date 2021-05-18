<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">28. 实现 strStr()</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Two Pointers</code>&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/implement-strstr/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/implement-strstr/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>实现 <a href="https://baike.baidu.com/item/strstr/811469" target="_blank">strStr()</a> 函数。</p>

<p>给你两个字符串 <code>haystack</code> 和 <code>needle</code> ，请你在 <code>haystack</code> 字符串中找出 <code>needle</code> 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  <code>-1</code><strong> </strong>。</p>

<p> </p>

<p><strong>说明：</strong></p>

<p>当 <code>needle</code> 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。</p>

<p>对于本题而言，当 <code>needle</code> 是空字符串时我们应当返回 0 。这与 C 语言的 <a href="https://baike.baidu.com/item/strstr/811469" target="_blank">strstr()</a> 以及 Java 的 <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)" target="_blank">indexOf()</a> 定义相符。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>haystack = "hello", needle = "ll"
<strong>输出：</strong>2
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>haystack = "aaaaa", needle = "bba"
<strong>输出：</strong>-1
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>haystack = "", needle = ""
<strong>输出：</strong>0
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= haystack.length, needle.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>haystack</code> 和 <code>needle</code> 仅由小写英文字符组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 边界条件，因为如果 needle 为空，则没有下方的 j 从 1 开始
  if (needle === "") return 0;
  // 依次遍历haystack的每一项，从0开始，到 最后第（needle）的长度项为止
  let i = 0;
  for (i; i < haystack.length - needle.length + 1; i++) {
    // 如果当前位置的值和needle 相同，则进入比较
    if (haystack[i] === needle[0]) {
      // j 从 1开始，因为0已经比较过了
      let j = 1;
      // 比较 needle里每一项是否和 haystack 一样
      for (j; j < needle.length; j++) {
        // 不一样就不比较下去了
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      // 如果 j 的长度大于等于 needle 的长度，证明比较完成了，全都符合要求，返回 i 的索引
      if (j >= needle.length) return i;
    }
  }
  // 否则就是没找到
  return -1;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 边界问题特殊处理
  if (needle === "") return 0;

  /*
    最差情况：
      haystack:  a b c d e f g h i
      needle:                g h i
      i比较区间   |           |
      j比较区间               |   |
  */

  // 只需要比较从 0 到 needle 字符串长度之前的字符是否符合要求。
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // 判断是否需要开始逐个比较 needle 每一个字符的前提是第一个字符必须相同
    if (haystack[i] === needle[0]) {
      let j = 0;
      for (; j < needle.length; j++) {
        // 如果 needle 里某个字符不相同，直接退出比较
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      // j === needle 长度，表示比较到最后一位了，是匹配的，否则表示未匹配成功，j 重置。
      if (j === needle.length) return i;
      else j = 0;
    }
  }

  // i 走到最后都没匹配上
  return -1;
};
```