<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">27. 移除元素</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/remove-element/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/remove-element/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个数组 <code>nums</code><em> </em>和一个值 <code>val</code>，你需要 <strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地</a></strong> 移除所有数值等于 <code>val</code><em> </em>的元素，并返回移除后数组的新长度。</p>

<p>不要使用额外的数组空间，你必须仅使用 <code>O(1)</code> 额外空间并 <strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地 </a>修改输入数组</strong>。</p>

<p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p>

<p> </p>

<p><strong>说明:</strong></p>

<p>为什么返回数值是整数，但输出的答案是数组呢?</p>

<p>请注意，输入数组是以<strong>「引用」</strong>方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p>

<p>你可以想象内部操作如下:</p>

<pre>
// <strong>nums</strong> 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中<strong> 该长度范围内</strong> 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
</pre>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [3,2,2,3], val = 3
<strong>输出：</strong>2, nums = [2,2]
<strong>解释：</strong>函数应该返回新的长度 <strong>2</strong>, 并且 nums<em> </em>中的前两个元素均为 <strong>2</strong>。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [0,1,2,2,3,0,4,2], val = 2
<strong>输出：</strong>5, nums = [0,1,4,0,3]
<strong>解释：</strong>函数应该返回新的长度 <strong><code>5</code></strong>, 并且 nums 中的前五个元素为 <strong><code>0</code></strong>, <strong><code>1</code></strong>, <strong><code>3</code></strong>, <strong><code>0</code></strong>, <strong>4</strong>。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 50</code></li>
	<li><code>0 &lt;= val &lt;= 100</code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 定义双指针，i 负责从头到尾遍历，查找值为 val 的数组元素， j 从尾部到头部遍历，查找值非 val 的元素，与 i 互换
  let i = 0,
    j = nums.length - 1;

  // j+1 到 末尾都是 val 值，因此 i 只需要遍历从头到 j - 1 的值
  while (i <= j) {
    // 如果 i 是 val 且 j 也是 val，则 j 往前找，否则互换位置
    if (nums[i] === val) {
      // 如果 j 为 val，则往前找
      while (nums[j] === val && j > i) {
        j--;
      }
      // 如果最终找到的第一个非 val 的 j 的位置比 i 小，则结束掉了
      if (j <= i) break;
      // 找到后互换位置
      nums[i] = nums[j];
      nums[j] = val;
      // 交换完成之后，j 需要减1
      j--;
    }
    // 无论是否相等，i 都要往前走
    i++;
  }

  // 因为是求长度 ，i是索引，因此需要 +1
  return i;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 定义双指针，一个指向 nums 第一个元素，一个指向 nums 最后一个元素
  let i = 0;
  let j = nums.length - 1;

  /*
    val: 2
               0 1 2 2 3 0 4 2
    第一步      i ->          j  i 往后找，找到第一个 nums[i] === val 的索引
    第二步          i    <-   j  此时需要互换，首先要找到尾部允许交换的 j 的索引（不能把尾部 val 的值换回去）
    第三步          i       j    此时找到了尾部第一个非 val 值的索引，进行互换
               0 1 4 2 3 0 2 2
    第四步          i ->    j    i 往后找，找到下一个 nums[i] === val 的索引

    最后        0 1 4 3 0 2 2 2
                      j i       i > j 的时候退出循环
  */

  // 只要 i 不比 j 大，就可以继续找下去
  while (i <= j) {
    // 从前往后找，没找到就一直找
    if (nums[i] !== val) {
      i++;
    } else {
      // i 找到值为 val 的索引了，该 j 找了
      // 此时 j 有两种可能：1. 找到了 nums[j] !== val；2.没找到 j<=i
      while (nums[j] === val && j > i) {
        j--;
      }
      // 排除第二种情况
      if (j <= i) break;
      // 互换位置
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
    }
  }
  return i;
};
```