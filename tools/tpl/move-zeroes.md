<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">283. 移动零</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/move-zeroes/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/move-zeroes/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个数组 <code>nums</code>，编写一个函数将所有 <code>0</code> 移动到数组的末尾，同时保持非零元素的相对顺序。</p>

<p><strong>示例:</strong></p>

<pre><strong>输入:</strong> <code>[0,1,0,3,12]</code>
<strong>输出:</strong> <code>[1,3,12,0,0]</code></pre>

<p><strong>说明</strong>:</p>

<ol>
	<li>必须在原数组上操作，不能拷贝额外的数组。</li>
	<li>尽量减少操作次数。</li>
</ol>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // index 表示当前非空元素的索引，原始数组是散列的（包含了0）， index 是将 0 剔除后的索引位置
  // zeroCount 表示当前需要在数组尾部补 0 的个数
  let index = 0,
    zeroCount = 0;

  // 遍历整个数组，找出为 0 的个数，记录到 zeroCount 中，方便后续追加 0，如果遇到非 0 的元素，则 index 位置往后移一格，将当前元素赋值到 index 位置
  for (let i = 0; i < nums.length; i++) {
    // 如果不是 0
    if (nums[i] !== 0) {
      // index 为该元素合适的位置， i 之前可能含有 0
      nums[index] = nums[i];
      // index 往前走一格
      index++;
    } else {
      // 否则当前元素为 0，则增加一个
      zeroCount++;
    }
  }

  // 遍历填充 0 ，注意在上述遍历中，index 已经+1了，此处不再+1
  for (let i = 0; i < zeroCount; i++) {
    nums[i + index] = 0;
  }

  return nums;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  // 使用 i 作为基准指针，定位当前正在处理的元素， j 作为比较指针，寻找从 i 往后合适互换的元素
  while (i < nums.length) {
    // 如果当前元素是 0，则去后面找互换的元素
    if (nums[i] === 0) {
      // 定义比较指针起始位置为 i+1，即当前元素的下一个元素
      let j = i + 1;
      // 如果 j 已经到达终点了，说明 j 没有找到，证明后面元素都是0，就直接跳出循环，否则执行替换操作
      while (j < nums.length) {
        // 如果后面是 0 ，则往后找
        if (nums[j] === 0) {
          j++;
          continue;
          // 否则跳出寻找，找到了
        } else break;
      }
      // 如果 j 在终点之前找到了合适的位置，则互换
      if (j < nums.length) {
        // 常规互换逻辑
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        // 互换完成，i 继续往前走
        i++;
      } else break;
      // 否则往前走一步
    } else {
      i++;
    }
  }
};
```