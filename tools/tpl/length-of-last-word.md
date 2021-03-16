<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">58. 最后一个单词的长度</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/length-of-last-word/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/length-of-last-word/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个字符串 <code>s</code>，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。</p>

<p><strong>单词</strong> 是指仅由字母组成、不包含任何空格字符的最大子字符串。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "Hello World"
<strong>输出：</strong>5
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = " "
<strong>输出：</strong>0
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= s.length <= 10<sup>4</sup></code></li>
	<li><code>s</code> 仅有英文字母和空格 <code>' '</code> 组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 从尾部开始往前找，会遇到如下几种情况：
  // 1. 尾部为 n 个空格，通过 isEnter 标识当前是否进入单词，如果未进入，则不计算成 start
  // 2. 如果当前遇到了空格，且 isEnter 为 true 了，标识这里是单词的开头了，结束往前找
  // 3. 如果当前不是空格，且当前 isEnter 为false，标识当前是单词的结尾了，保存一下 start
  let i = s.length - 1;
  let isEnter = false;
  let start = i;

  while (i >= 0) {
    //  当前不是空格的情况
    if (s[i] !== " ") {
      // 如果没标记过，则标记一下，并且记为开始的索引
      if (!isEnter) {
        isEnter = true;
        start = i;
      }
    } else {
      // 否则是空格，且isEnter不为 false 的话，意味着当前是单词的开头了
      if (isEnter) break;
    }
    // 不管是不是空格，i 都要往前走一步
    i--;
  }

  // 特殊Case： " " => 0，这种处理方式是循环结束后都没有进入单词，说明整个字符串都没单词
  if (!isEnter) return 0;

  // 返回从单词结尾到单词头的长度
  return start - i;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 存放当前的最后一个的长度
  let lastCount = 0;
  for (let i = 0; i < s.length; i++) {
    // 如果当前的字符是空白，则往下找出第一个非空白的字符
    if (s[i] !== " ") {
      // 清空初始值
      lastCount = 0;
      // 两种情况结束字符长度计算：1.已经到达了字符串的末尾（因为末尾没有空格），2.已经到达了空格处。
      while (s[i + lastCount] && s[i + lastCount] !== " ") {
        lastCount++;
      }
      // i 不再重复判定，直接跳过这个单词
      i = i + lastCount;
    }
  }
  
  return lastCount;
};
```