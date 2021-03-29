<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">3. 无重复字符的最长子串</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Hash Table</code>&nbsp;<code>Two Pointers</code>&nbsp;<code>String</code>&nbsp;<code>Sliding Window</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个字符串，请你找出其中不含有重复字符的 <strong>最长子串 </strong>的长度。</p>

<p> </p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入: </strong>s = "abcabcbb"
<strong>输出: </strong>3 
<strong>解释:</strong> 因为无重复字符的最长子串是 <code>"abc"，所以其</code>长度为 3。
</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入: </strong>s = "bbbbb"
<strong>输出: </strong>1
<strong>解释: </strong>因为无重复字符的最长子串是 <code>"b"</code>，所以其长度为 1。
</pre>

<p><strong>示例 3:</strong></p>

<pre>
<strong>输入: </strong>s = "pwwkew"
<strong>输出: </strong>3
<strong>解释: </strong>因为无重复字符的最长子串是 <code>"wke"</code>，所以其长度为 3。
     请注意，你的答案必须是 <strong>子串 </strong>的长度，<code>"pwke"</code> 是一个<em>子序列，</em>不是子串。
</pre>

<p><strong>示例 4:</strong></p>

<pre>
<strong>输入: </strong>s = ""
<strong>输出: </strong>0
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> 由英文字母、数字、符号和空格组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 因为有双层for循环，第二层使用了 i+1，需要特殊处理i === 1的场景
  if (s.length === 0 || s.length === 1) return s.length;
  // 暂时记录最大的子串长度
  let maxLength = 0;
  // 第一层遍历，从头遍历到尾部
  for (let i = 0; i < s.length; i++) {
    // 剪枝操作，如果从 i 到 结尾的总长度都没有最大长度长了，则直接返回了
    if (s.length - i < maxLength) break;
    // 定义一个 Set 用来判断是否重复了, set.add / set.has
    let set = new Set();
    // 将第一个插入进入，因为 j 是从 i+1 开始的，会遗漏 i
    set.add(s[i]);
    // 滑动窗口，找第一个出现重复的字符
    for (let j = i + 1; j <= s.length; j++) {
      // 两种情况需要结束当前查找：1. 找到重复了，2.找到结束了
      if (set.has(s[j]) || j === s.length) {
        // 比较当前暂存的最大值和新的最大值
        maxLength = Math.max(maxLength, j - i);
        break;
      } else set.add(s[j]);
    }
    // 每次滑动窗口结束后，都要清空 set
    set.clear();
  }
  return maxLength;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 如果是空字符串，直接返回 0
  if (s.length == 0) return 0;

  // start： 基准的指针，指向字符子串起始位置
  let start = 0,
    // end：滑动指针，指向从 start 往后的字符
    end = 0,
    // maxCount：记录曾经找到的子串的最大值
    maxCount = 0;

  /**
   * 使用双指针 start 和 end 进行滑动窗口查找
   *         p  w  w  k  e  w
   * 第一次： s                初始位置 start 指向字符串开头位置，end 为动态指针，默认为 0 位置，代表 start + end 位置
   * 第二次： s  e             将 start 的位置作为基准， end 往后查找，每移动一位，都进行校验
   *                          如果 start + end 位置的字符位于 subStrings 字符子串内，则表示从 start 位置往后，有至少一个元素是和 start + end 位置元素相同了。
   *                          如果不在 subStrings 字符子串内，则说明从 start 往后没有出现过该字符，则追加到 subStrings 末尾
   * 第三次：    s             把 start 往前走一步，end 重置，重新执行流程。
   * 结束：                  s 结束条件就是 start 已经到达字符串末尾了，end 结束条件是 start + end 已经到字符串末尾了。
   */

  while (start < s.length) {
    // 初始化子串，每次基准指针改变均需要初始化
    let subStrings = "";

    while (start + end < s.length) {
      if (subStrings.indexOf(s[start + end]) === -1) {
        subStrings += s[start + end];
        end++;
      } else {
        break;
      }
    }
    if (maxCount < subStrings.length) maxCount = subStrings.length;
    start += 1;
    end = 0;
  }
  return maxCount;
};
```