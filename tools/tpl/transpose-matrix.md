<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">898. 转置矩阵</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/transpose-matrix/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/transpose-matrix/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个二维整数数组 <code>matrix</code>， 返回 <code>matrix</code> 的 <strong>转置矩阵</strong> 。</p>

<p>矩阵的 <strong>转置</strong> 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png" style="width: 600px; height: 197px;" /></p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>输出：</strong>[[1,4,7],[2,5,8],[3,6,9]]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>matrix = [[1,2,3],[4,5,6]]
<strong>输出：</strong>[[1,4],[2,5],[3,6]]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 <= m, n <= 1000</code></li>
	<li><code>1 <= m * n <= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> <= matrix[i][j] <= 10<sup>9</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  // 需要考虑边界条件，如果 matrix 不存在，就取不到 itemLength 的长度
  if (matrix.length === 0) return [];

  // 获取每个数组子元素的长度
  const itemLength = matrix[0].length;

  // 坑点：
  // var temp = new Array(3).fill(new Array());
  // temp[0][0] = 1;
  // console.log(temp[1][0]) // 1
  // 当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。因此不能通过这种方式传递一个 new Array 进去
  let results = new Array(itemLength)
    .fill(0)
    .map(() => new Array(matrix.length).fill(0));

  // [i, j]和 [j ,i] 坐标互换位置
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < itemLength; j++) {
      results[j][i] = matrix[i][j];
    }
  }

  // 返回结果集
  return results;
};
```