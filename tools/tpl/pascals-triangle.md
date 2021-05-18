<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">118. 杨辉三角</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/pascals-triangle/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/pascals-triangle/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个非负整数&nbsp;<em>numRows，</em>生成杨辉三角的前&nbsp;<em>numRows&nbsp;</em>行。</p>

<p><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px" /></p>

<p><small>在杨辉三角中，每个数是它左上方和右上方的数的和。</small></p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong> 5
<strong>输出:</strong>
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // 定义一个结果集
  const results = [];
  // 需要创建 numRows 层，肯定要遍历这么多遍
  for (let i = 0; i < numRows; i++) {
    // 先将准备遍历的这一层所有位置都填充为 1，后续再依次覆盖
    // 其中第一个位置和最后一个位置始终是 1 不再覆盖
    // 第 n 行共有 n + 1 个位置需要填充
    let currentArr = new Array(i + 1).fill(1);
    // 对当前行进行依次遍历计算实际的值，其中第 1 个和最后 1 个不参与计算
    for (let j = 1; j < currentArr.length - 1; j++) {
      // 找规律，每个数是它左上方和右上方的数的和。
      currentArr[j] = results[i - 1][j - 1] + results[i - 1][j];
    }
    // 将当前行推到整个结果集中
    results.push(currentArr);
  }
  // 返回结果集
  return results;
};
```