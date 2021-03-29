<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">11. 盛最多水的容器</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/container-with-most-water/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/container-with-most-water/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你 <code>n</code> 个非负整数 <code>a<sub>1</sub>，a<sub>2，</sub>...，a</code><sub><code>n</code>，</sub>每个数代表坐标中的一个点 <code>(i, a<sub>i</sub>)</code> 。在坐标内画 <code>n</code> 条垂直线，垂直线 <code>i</code> 的两个端点分别为 <code>(i, a<sub>i</sub>)</code> 和 <code>(i, 0)</code> 。找出其中的两条线，使得它们与 <code>x</code> 轴共同构成的容器可以容纳最多的水。</p>

<p><strong>说明：</strong>你不能倾斜容器。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg" style="height: 287px; width: 600px;" /></p>

<pre>
<strong>输入：</strong>[1,8,6,2,5,4,8,3,7]
<strong>输出：</strong>49 
<strong>解释：</strong>图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>height = [1,1]
<strong>输出：</strong>1
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>height = [4,3,2,1,4]
<strong>输出：</strong>16
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>height = [1,2,1]
<strong>输出：</strong>2
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>n = height.length</code></li>
	<li><code>2 &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= height[i] &lt;= 3 * 10<sup>4</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /*
        定义双指针 i, j ，分别表示容器的 左边界 和 右边界，则长度为 (j - i)，宽度为 Math.min(i的宽度, j的宽度)
        计算容积方式： Math.min(height[i], height[j]) * (j - i)，即 长 * 宽，短板 * 长度
        因为容器的体积受限于最小的那个宽度，因此当 i <= j 时，i 往前走， j < i 时， j 往回走
    */
  // 容器左边界
  let i = 0,
    // 容器右边界
    j = height.length - 1,
    // 容器当前能盛的最大值
    currentMax = 0;

  // 当左边界没有超过右边界时候，就一直找最大值
  while (i <= j) {
    // 比较当前最大值，用现有的最大值和当前边界计算出来的最大值比较
    currentMax = Math.max(currentMax, (j - i) * Math.min(height[i], height[j]));
    // 如果左边界 <= 右边界，则 左边界 往前找，反之 右边界 往回找
    if (height[i] <= height[j]) i++;
    else j--;
  }

  // 返回最大的容器体积
  return currentMax;
};
```