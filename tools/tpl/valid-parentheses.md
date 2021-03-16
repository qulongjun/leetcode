<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">20. 有效的括号</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/valid-parentheses/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/valid-parentheses/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个只包括 <code>'('</code>，<code>')'</code>，<code>'{'</code>，<code>'}'</code>，<code>'['</code>，<code>']'</code> 的字符串 <code>s</code> ，判断字符串是否有效。</p>

<p>有效字符串需满足：</p>

<ol>
	<li>左括号必须用相同类型的右括号闭合。</li>
	<li>左括号必须以正确的顺序闭合。</li>
</ol>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "()"
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = "()[]{}"
<strong>输出：</strong>true
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>s = "(]"
<strong>输出：</strong>false
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>s = "([)]"
<strong>输出：</strong>false
</pre>

<p><strong>示例 5：</strong></p>

<pre>
<strong>输入：</strong>s = "{[]}"
<strong>输出：</strong>true</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= s.length <= 10<sup>4</sup></code></li>
	<li><code>s</code> 仅由括号 <code>'()[]{}'</code> 组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 将左括号加入栈中，遇到右空号出栈，如果左右括号不匹配，返回 false， 如果循环结束后栈中还有数据，说明不匹配
  let stacks = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stacks.push(s[i]);
    }
    if (
      (s[i] === ")" && stacks.pop() !== "(") ||
      (s[i] === "}" && stacks.pop() !== "{") ||
      (s[i] === "]" && stacks.pop() !== "[")
    ) {
      return false;
    }
  }

  return stacks.length === 0;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 括号匹配映射关系
  const matchMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // 用一个 Stack 存放满足要求的左括号。
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // 如果命中左边括号，就把括号放入 Stack
    if (["(", "[", "{"].includes(s[i])) {
      stack.push(s[i]);
      // 如果当前字符不是左括号，就通过匹配映射关系查找当前对应的左括号和上次最后插入到 Stack 里的左括号
    } else if (matchMap[s[i]] === stack[stack.length - 1]) {
      // 如果一致，说明两个括号匹配，则当前括号校验完成
      stack.pop();
    } else {
      // 如果不一致，则直接返回 false
      return false;
    }
  }
  // 如果 Stack 为空，则证明全部比较完成，全部匹配成功
  return stack.length === 0;
};
```