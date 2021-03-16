<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">125. 验证回文串</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Two Pointers</code>&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/valid-palindrome/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/valid-palindrome/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。</p>

<p><strong>说明：</strong>本题中，我们将空字符串定义为有效的回文串。</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> &quot;A man, a plan, a canal: Panama&quot;
<strong>输出:</strong> true
</pre>

<p><strong>示例 2:</strong></p>

<pre><strong>输入:</strong> &quot;race a car&quot;
<strong>输出:</strong> false
</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
let isValid = function (s) {
  return ("a" <= s && s <= "z") || ("0" <= s && s <= "9");
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 因为大小写比较会错误，因此全部转成小写处理
  s = s.toLowerCase();

  // 前后双指针进行比较，当前指针指向的非数字非字母，则往前/往后进一位
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    // 暂存一下当前的结果
    let first = s[i],
      last = s[j];

    // 如果 first 和 last 都是标准字符
    if (isValid(first) && isValid(last)) {
      // 则比较值是否一样，不一样直接返回 false
      if (first !== last) return false;
      // 如果一样，则比较下一位
      i++;
      j--;
      // 如果 first 不是标准字符，则往后走一步
    } else if (!isValid(first)) {
      i++;
      // 如果 last 不是标准字符，则往前走一步
    } else if (!isValid(last)) {
      j--;
    }
  }

  // 如果 i >= j，表示比较结束，返回 true
  return true;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  j = s.length - 1;

  while (i < j) {
    // 排除掉不是 a～z A~Z 0~9 的字符
    if (
      !(
        (s[i] <= "z" && s[i] >= "a") ||
        (s[i] <= "Z" && s[i] >= "A") ||
        (s[i] <= "9" && s[i] >= "0")
      )
    ) {
      i++;
      continue;
    }
    // 排除掉不是 a～z A~Z 0~9 的字符
    if (
      !(
        (s[j] <= "z" && s[j] >= "a") ||
        (s[j] <= "Z" && s[j] >= "A") ||
        (s[j] <= "9" && s[j] >= "0")
      )
    ) {
      j--;
      continue;
    }
    // 直接比较是否相等，如果相等，继续比较
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++;
      j--;
    } else {
      // 如果不相等，直接返回
      break;
    }
  }

  // 判断是比较完成的，还是提前结束的
  return i >= j;
};
```