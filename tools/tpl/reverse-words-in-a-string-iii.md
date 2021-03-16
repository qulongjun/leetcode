<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">557. 反转字符串中的单词 III</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/reverse-words-in-a-string-iii/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。</p>

<p>&nbsp;</p>

<p><strong>示例：</strong></p>

<pre><strong>输入：</strong>&quot;Let&#39;s take LeetCode contest&quot;
<strong>输出：</strong>&quot;s&#39;teL ekat edoCteeL tsetnoc&quot;
</pre>

<p>&nbsp;</p>

<p><strong><strong><strong><strong>提示：</strong></strong></strong></strong></p>

<ul>
	<li>在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 将字符串按空格拆分，返回时需要 join
  let strArr = s.split(" ");

  // 遍历数组中每一个子字符串，并将其反转
  for (let i = 0; i < strArr.length; i++) {
    let str = strArr[i];
    let temp = "";
    // 从字符串最后一位往前获取字符，加到 temp 上
    for (let j = str.length - 1; j >= 0; j--) {
      temp += str[j];
    }
    // 给数组传递新的值
    strArr[i] = temp;
  }

  return strArr.join(" ");
};
```