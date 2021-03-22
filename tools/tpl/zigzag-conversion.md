<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">6. Z 字形变换</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/zigzag-conversion/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/zigzag-conversion/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>将一个给定字符串 <code>s</code> 根据给定的行数 <code>numRows</code> ，以从上往下、从左到右进行 Z 字形排列。</p>

<p>比如输入字符串为 <code>"PAYPALISHIRING"</code> 行数为 <code>3</code> 时，排列如下：</p>

<pre>
P   A   H   N
A P L S I I G
Y   I   R</pre>

<p>之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：<code>"PAHNAPLSIIGYIR"</code>。</p>

<p>请你实现这个将字符串进行指定行数变换的函数：</p>

<pre>
string convert(string s, int numRows);</pre>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s = "PAYPALISHIRING", numRows = 3
<strong>输出：</strong>"PAHNAPLSIIGYIR"
</pre>
<strong>示例 2：</strong>

<pre>
<strong>输入：</strong>s = "PAYPALISHIRING", numRows = 4
<strong>输出：</strong>"PINALSIGYAHRPI"
<strong>解释：</strong>
P     I    N
A   L S  I G
Y A   H R
P     I
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>s = "A", numRows = 1
<strong>输出：</strong>"A"
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= s.length <= 1000</code></li>
	<li><code>s</code> 由英文字母（小写和大写）、<code>','</code> 和 <code>'.'</code> 组成</li>
	<li><code>1 <= numRows <= 1000</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
 *      L     D     R
 *      E   O E   I I
 *      E C   I H   N
 *      T     S     G
 *
 *  i 表示从上往下的一个顺序，j 表示从左往右的顺序，使用 index 来表示当前等待填充的字符。
 *  [i, j]表示一个插入到 tableMap 里的位置，全部列都填充的规则是：(numRows - 1) * n，以 5 为例，需整列填充的为 0, 4, 8, 12, 16...
 *  如果该列不需要整列填充，则直接填充完成后，往右上角挪一格。
 *  如果整列为需要整列填充，则依次往下填充，直到 i === numRows - 1，然后往右上角挪一格
 *
 */
var convert = function (s, numRows) {
  // 如果是空字符串，直接返回空
  if (!s.length) return "";
  // 如果 numRows 为1，则直接打印当前字符串
  if (numRows === 1) return s;

  // 用一个 table 来标示当前的行和列 string[]，其中 table 元素之间叫 i，每个元素字符串内部 index 叫 j
  const tableMap = [];
  // 起始位置[0, 0]，index 用来标示当前等待处理的字符
  let i = 0,
    j = 0,
    index = 0;

  // 字符全部处理完才结束
  while (index < s.length) {
    // 直接将当前的字符写入[i ,j] 坐标的 table 中，如果当前元素不存在，需要先 new 一个空字符串
    if (!tableMap[i]) {
      tableMap[i] = "";
    }
    tableMap[i] += s[index];

    // 以下为计算下一次插入的坐标位置
    // 在需要整列绘制的列
    if (j % (numRows - 1) === 0) {
      // 如果当前列没有填充到底部，则继续往下填充
      if (i < numRows - 1) {
        i++;
        // 否则就往右上角挪一格
      } else {
        i--;
        j++;
      }
      // 否则，当前列不是需要整列绘制的列，则直接往右上角挪一格
    } else {
      // 注意：如果下一个列是需要整列填充的列，则只往右挪一格
      if ((j + 1) % (numRows - 1) === 0) {
        i = 0;
        j++;
        // 否则直接挪
      } else {
        i--;
        j++;
      }
    }
    // 当前字符已经填充完了，进行下一次填充了
    index++;
  }
  // 将表格里的字符串联合起来
  return tableMap.join("");
};
```