<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">66. 加一</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/plus-one/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/plus-one/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个由 <strong>整数 </strong>组成的<strong> 非空</strong> 数组所表示的非负整数，在该数的基础上加一。</p>

<p>最高位数字存放在数组的首位， 数组中每个元素只存储<strong>单个</strong>数字。</p>

<p>你可以假设除了整数 0 之外，这个整数不会以零开头。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>digits = [1,2,3]
<strong>输出：</strong>[1,2,4]
<strong>解释：</strong>输入数组表示数字 123。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>digits = [4,3,2,1]
<strong>输出：</strong>[4,3,2,2]
<strong>解释：</strong>输入数组表示数字 4321。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>digits = [0]
<strong>输出：</strong>[1]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= digits.length <= 100</code></li>
	<li><code>0 <= digits[i] <= 9</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 从数组最后一位 +1，逢 10 进 1 位，使用 isPlusOne 表示前一位是否需要 +1
  let isPlusOne = 0;
  // 先给最后一位 + 1
  digits[digits.length - 1]++;
  // 从末尾起遍历数组中每一项
  for (let i = digits.length - 1; i >= 0; i--) {
    // 当前位的值 = 已有的值 + 进位的值
    let count = digits[i] + isPlusOne;
    // 如果 count > 9，说明还要再往前进位， isPlusOne 标记为 1
    if (count > 9) {
      isPlusOne = 1;
      // 当前位只保留个位数字
      digits[i] = count - 10;
    } else {
      // 如果 count <= 9，则不再往前进位了，循环结束了
      digits[i] = count;
      // 清空一下 isPlusOne，表示不用进位了
      isPlusOne = 0;
      break;
    }
  }

  // 如果整个数组循环结束后，进位标志还为 1 ，说明首位大于 10，需要再往前走一位 [9] => [1, 0]
  if (isPlusOne) digits.unshift(1);

  return digits;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 * @description 题干的意思是，数组中只允许出现 0~9 这几个数字，且首位必非 0，如果 +1 后变成了 10，需要向前进一位，例如 [9, 9] -> [1, 0, 0]
 */
var plusOne = function (digits) {
  // 从末尾往前遍历，查找需要 +1 的元素
  for (let i = digits.length - 1; i >= 0; i--) {
    // 如果当前位数不为9，直接 +1 并且退出，完成查找，前序元素不需要改动
    if (digits[i] !== 9) {
      digits[i]++;
      break;
      // 否则，当前元素为 9， 则将当前元素变成 0 ，前面一位元素需要 +1
    } else {
      digits[i] = 0;
    }
  }
  // 特殊情况：如果首位为0，则表示首位元素之前为 9 ，且第二位元素为 10，首位需要向前 +1
  if (digits[0] === 0) digits.unshift(1);

  return digits;
};
```