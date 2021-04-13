<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">55. 跳跃游戏</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Greedy</code>&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/jump-game/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/jump-game/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个非负整数数组 <code>nums</code> ，你最初位于数组的 <strong>第一个下标</strong> 。</p>

<p>数组中的每个元素代表你在该位置可以跳跃的最大长度。</p>

<p>判断你是否能够到达最后一个下标。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [2,3,1,1,4]
<strong>输出：</strong>true
<strong>解释：</strong>可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [3,2,1,0,4]
<strong>输出：</strong>false
<strong>解释：</strong>无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // b
  if (nums.length === 0) return false;

  // 本题核心思想为：不断更新能跳到的最远距离，如果能跳到的最远距离的值超过 nums 的长度，则表示能跳到结尾
  // 每走到一个位置 n，都需要更新当前能跳到的最远距离
  // 其中 farthest 用来表示能跳到的最远距离，这个值总是在不停的更新，每走到一个位置 n，
  // 都会比较 前 n - 1 个位置时的最远距离 和 当前位置+当前位置能跳的最远距离（即 i + nums[i]） 的最大值
  let farthest = 0;

  // 遍历更新最远距离
  for (let i = 0; i <= farthest; i++) {
    // 比较 前 n - 1 个位置时的最远距离 和 当前位置+当前位置能跳的最远距离（即 i + nums[i]） 的最大值
    farthest = Math.max(farthest, i + nums[i]);
    // 提前中止条件：如果当前的最远距离已经超过了 nums 索引的最大长度，则证明能跳的到
    if (farthest >= nums.length - 1) return true;
  }
  // 否则跳不到
  return false;
};
```