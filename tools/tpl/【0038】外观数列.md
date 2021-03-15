<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">38. 外观数列</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>String</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/count-and-say/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/count-and-say/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个正整数 <code>n</code> ，输出外观数列的第 <code>n</code> 项。</p>

<p>「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。</p>

<p>你可以将其视作是由递归公式定义的数字字符串序列：</p>

<ul>
	<li><code>countAndSay(1) = "1"</code></li>
	<li><code>countAndSay(n)</code> 是对 <code>countAndSay(n-1)</code> 的描述，然后转换成另一个数字字符串。</li>
</ul>

<p>前五项如下：</p>

<pre>
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 <code>1</code> 即 “ 一 个 1 ”，记作 <code>"11"
</code>描述前一项，这个数是 <code>11</code> 即 “ 二 个 1 ” ，记作 <code>"21"
</code>描述前一项，这个数是 <code>21</code> 即 “ 一 个 2 + 一 个 1 ” ，记作 "<code>1211"
</code>描述前一项，这个数是 <code>1211</code> 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "<code>111221"</code>
</pre>

<p>要 <strong>描述</strong> 一个数字字符串，首先要将字符串分割为 <strong>最小</strong> 数量的组，每个组都由连续的最多 <strong>相同字符</strong> 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。</p>

<p>例如，数字字符串 <code>"3322251"</code> 的描述如下图：</p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg" style="width: 581px; height: 172px;" />
<ul>
</ul>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>n = 1
<strong>输出：</strong>"1"
<strong>解释：</strong>这是一个基本样例。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>n = 4
<strong>输出：</strong>"1211"
<strong>解释：</strong>
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= n <= 30</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // 定义一个结果集，存放每一次的结果，hashTable[i] 表示 第 i 次的结果
  let hashTable = ["1"];

  // 迭代走到第 i 个结果
  for (let i = 1; i < n; i++) {
    // 定义一个当前结果的存档
    let currentStr = "";
    // 获取上一个结果，也就是这一次结果的计算源
    let prevStr = hashTable[i - 1];

    // 定义两个指针，因为涉及到重复数字，start 用来标记重复数字的起始索引， end 用来标记重复数字的结束索引
    let start = 0,
      end = 0;

    // end 一直往后着
    while (end < prevStr.length) {
      // 如果 start 索引表示的值和 end 索引表示的值不一样了，就表示重复数字结束了
      if (prevStr[start] !== prevStr[end]) {
        // 找到重复数字个数，即 end - start，其中end指向下一个非重复的数字的起始
        currentStr += end - start + prevStr[start];
        // start 重新定位到新的开始
        start = end;
      }
      // 无论当前是否是重复的结束，在做完全流程后，end 都要往前走一步
      end++;
    }
    // 这是一个特殊场景，针对 end 走到末尾都没找到与 start 不同的值，需要额外加上
    currentStr += end - start + prevStr[start];
    // 将当前结果记录到 hashTable
    hashTable[i] = currentStr;
  }

  // 返回第 n 个结果
  return hashTable[n - 1];
};
```