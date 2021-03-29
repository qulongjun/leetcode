<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">292. Nim 游戏</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Brainteaser</code>&nbsp;<code>Minimax</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/nim-game/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/nim-game/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>你和你的朋友，两个人一起玩 <a href="https://baike.baidu.com/item/Nim游戏/6737105" target="_blank">Nim 游戏</a>：</p>

<ul>
	<li>桌子上有一堆石头。</li>
	<li>你们轮流进行自己的回合，你作为先手。</li>
	<li>每一回合，轮到的人拿掉 1 - 3 块石头。</li>
	<li>拿掉最后一块石头的人就是获胜者。</li>
</ul>

<p>假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 <code>n</code> 的情况下赢得游戏。如果可以赢，返回 <code>true</code>；否则，返回 <code>false</code> 。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong><code>n = 4</code>
<strong>输出：</strong>false 
<strong>解释：</strong>如果堆中有 4 块石头，那么你永远不会赢得比赛；
     因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>n = 1
<strong>输出：</strong>true
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>n = 2
<strong>输出：</strong>true
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 结论：如果堆中石头的数量 n 不能被 4 整除，那么你总是可以赢得 Nim 游戏的胜利。
  // 如果是 1,2,3 ，由于是先手，因此胜利
  // 如果是 4，如果你取 1,2,3 块，最后都会给对手留下可取的全部
  // 如果是5,6,7，就可以只取1,2,3， 给对方留下 4 块，由于对方只能取 1,2,3 块，因此会留下可取的给你
  // 如果是8块，回到上述问题，无论你取1,2,3 块，对方都会有5,6,7 块，对方取1,2,3 块，就会让你至少会有4块，必输
  return n % 4 !== 0;
};
```