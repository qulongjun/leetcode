<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">8. 字符串转换整数 (atoi)</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Math</code>&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/string-to-integer-atoi/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/string-to-integer-atoi/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>请你来实现一个 <code>myAtoi(string s)</code> 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 <code>atoi</code> 函数）。</p>

<p>函数 <code>myAtoi(string s)</code> 的算法如下：</p>

<ul>
	<li>读入字符串并丢弃无用的前导空格</li>
	<li>检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。</li>
	<li>读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。</li>
	<li>将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 <code>0</code> 。必要时更改符号（从步骤 2 开始）。</li>
	<li>如果整数数超过 32 位有符号整数范围 <code>[−2<sup>31</sup>,  2<sup>31 </sup>− 1]</code> ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 <code>−2<sup>31</sup></code> 的整数应该被固定为 <code>−2<sup>31</sup></code> ，大于 <code>2<sup>31 </sup>− 1</code> 的整数应该被固定为 <code>2<sup>31 </sup>− 1</code> 。</li>
	<li>返回整数作为最终结果。</li>
</ul>

<p><strong>注意：</strong></p>

<ul>
	<li>本题中的空白字符只包括空格字符 <code>' '</code> 。</li>
	<li>除前导空格或数字后的其余字符串外，<strong>请勿忽略</strong> 任何其他字符。</li>
</ul>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "42"
<strong>输出：</strong>42
<strong>解释：</strong>加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
第 1 步："42"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："<strong>42</strong>"（读入 "42"）
           ^
解析得到整数 42 。
由于 "42" 在范围 [-2<sup>31</sup>, 2<sup>31</sup> - 1] 内，最终结果为 42 。</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = "   -42"
<strong>输出：</strong>-42
<strong>解释：</strong>
第 1 步："<strong>   </strong>-42"（读入前导空格，但忽视掉）
            ^
第 2 步："   <strong>-</strong>42"（读入 '-' 字符，所以结果应该是负数）
             ^
第 3 步："   -<strong>42</strong>"（读入 "42"）
               ^
解析得到整数 -42 。
由于 "-42" 在范围 [-2<sup>31</sup>, 2<sup>31</sup> - 1] 内，最终结果为 -42 。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>s = "4193 with words"
<strong>输出：</strong>4193
<strong>解释：</strong>
第 1 步："4193 with words"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："4193 with words"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："<strong>4193</strong> with words"（读入 "4193"；由于下一个字符不是一个数字，所以读入停止）
             ^
解析得到整数 4193 。
由于 "4193" 在范围 [-2<sup>31</sup>, 2<sup>31</sup> - 1] 内，最终结果为 4193 。
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>s = "words and 987"
<strong>输出：</strong>0
<strong>解释：</strong>
第 1 步："words and 987"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："words and 987"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："words and 987"（由于当前字符 'w' 不是一个数字，所以读入停止）
         ^
解析得到整数 0 ，因为没有读入任何数字。
由于 0 在范围 [-2<sup>31</sup>, 2<sup>31</sup> - 1] 内，最终结果为 0 。</pre>

<p><strong>示例 5：</strong></p>

<pre>
<strong>输入：</strong>s = "-91283472332"
<strong>输出：</strong>-2147483648
<strong>解释：</strong>
第 1 步："-91283472332"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："<strong>-</strong>91283472332"（读入 '-' 字符，所以结果应该是负数）
          ^
第 3 步："-<strong>91283472332</strong>"（读入 "91283472332"）
                     ^
解析得到整数 -91283472332 。
由于 -91283472332 小于范围 [-2<sup>31</sup>, 2<sup>31</sup> - 1] 的下界，最终结果被截断为 -2<sup>31</sup> = -2147483648 。</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 <= s.length <= 200</code></li>
	<li><code>s</code> 由英文字母（大写和小写）、数字（<code>0-9</code>）、<code>' '</code>、<code>'+'</code>、<code>'-'</code> 和 <code>'.'</code> 组成</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // 定义结果集，存储最后的数字
  let result = 0;
  // 标记当前是否检测到过数字字符串，如果没有检测到数字字符串，则直接返回 0
  let isStartFlag = false;
  // 检测到数字字符串后，需要标记这个字符串的起始位置和结束位置
  let startIndex = 0,
    endIndex = 0;
  // 判断当前是否为负数
  let isNagitive = false;
  // 从字符串头部开始找，找到尾部，当第一次出现数字字符串或者 - / + 时，标记当前进入数字字符串了，直到遇到不是数字字符串之后停止
  for (; endIndex < s.length; endIndex++) {
    // 暂存一下当前字符串
    let str = s[endIndex];
    // 如果当前字符串是 - / + / 0～9
    if (str === "-" || str === "+" || (str >= "0" && str <= "9")) {
      // 如果当前没被标记过，则被认为是第一次找到数字字符串
      if (!isStartFlag) {
        // 保存一下起始的位置
        startIndex = endIndex;
        // 标记一下
        isStartFlag = true;
        // 如果读到的是一个 - 号。则标记为负数
        if (str === "-") isNagitive = true;
      } else {
        // 这里处理一个特殊的case："   -123-123+123 "
        if (str === "-" || str === "+") break;
      }
    } else {
      // 如果不是数字字符串且当前已经被标记过进入数字字符串了，则停止往后找
      if (isStartFlag) break;
      // 这里处理一个特殊case：如果不是以数字字符串开头，或者空字符开头，则直接返回0
      // 即没进入数字字符串查找，并且 str 还不是空字符
      if (!isStartFlag && str !== " ") {
        return 0;
      }
    }
  }

  // 如果到最后都没进入数字字符串状态，则直接返回 0，case： "     "
  if (!isStartFlag) return 0;

  // 定义数字字符串的起始索引，如果开头没有 - / +，则从 startIndex 开始，否则往后走一个
  let i = startIndex + (s[startIndex] === "-" || s[startIndex] === "+" ? 1 : 0);

  // 标准的字符串转数字
  for (i; i < endIndex; i++) {
    let digNum = s[i];
    result = result * 10 + parseInt(digNum);
  }

  // 结果转负数或者正数
  result = isNagitive ? -1 * result : result;

  // 比较边界条件
  if (Math.pow(2, 31) * -1 > result) return Math.pow(2, 31) * -1;
  if (Math.pow(2, 31) - 1 < result) return Math.pow(2, 31) - 1;
  return result;
};
```