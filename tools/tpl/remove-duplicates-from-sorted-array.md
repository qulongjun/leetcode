<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">26. 删除有序数组中的重复项</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个有序数组 <code>nums</code> ，请你<strong><a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a></strong> 删除重复出现的元素，使每个元素 <strong>只出现一次</strong> ，返回删除后数组的新长度。</p>

<p>不要使用额外的数组空间，你必须在 <strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地 </a>修改输入数组 </strong>并在使用 O(1) 额外空间的条件下完成。</p>

<p> </p>

<p><strong>说明:</strong></p>

<p>为什么返回数值是整数，但输出的答案是数组呢?</p>

<p>请注意，输入数组是以<strong>「引用」</strong>方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p>

<p>你可以想象内部操作如下:</p>

<pre>
// <strong>nums</strong> 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中<strong> 该长度范围内</strong> 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
</pre>
 

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,1,2]
<strong>输出：</strong>2, nums = [1,2]
<strong>解释：</strong>函数应该返回新的长度 <strong><code>2</code></strong> ，并且原数组 <em>nums </em>的前两个元素被修改为 <strong><code>1</code></strong>, <strong><code>2 </code></strong><code>。</code>不需要考虑数组中超出新长度后面的元素。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [0,0,1,1,1,2,2,3,3,4]
<strong>输出：</strong>5, nums = [0,1,2,3,4]
<strong>解释：</strong>函数应该返回新的长度 <strong><code>5</code></strong> ， 并且原数组 <em>nums </em>的前五个元素被修改为 <strong><code>0</code></strong>, <strong><code>1</code></strong>, <strong><code>2</code></strong>, <strong><code>3</code></strong>, <strong><code>4</code></strong> 。不需要考虑数组中超出新长度后面的元素。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 <= nums.length <= 3 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>
	<li><code>nums</code> 已按升序排列</li>
</ul>

<p> </p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第2次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // i 用来标识当前需要插入的位置的索引
  // j 用来寻找下一个非重复的元素的索引
  let i = 0,
    j = 1;
  // 当 j 没找到末尾，就继续往下找
  while (j < nums.length) {
    // 如果 i 索引位置和 j 索引位置相同，则 j 继续往前寻找非重复的元素的索引
    if (nums[i] !== nums[j]) {
      // 如果 j 此时不同，则将 j 的值给 i+1，i 表示的是当前已经比较之后的最后一个位置
      nums[i + 1] = nums[j];
      // 当交换完成后，i 需要增加一位
      i++;
    }
    // j 无论如何都需要往前走一步
    j++;
  }
  // 因为返回的是长度，i是从0开始的，因此需要+1
  return i + 1;
};
```
<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 定义两个指针，分别指向 nums 的第一个位置和第二个位置
  let i = 0;
  let j = 1;

  /*
            1 1 1 2 2 2 3 3 3
    第一步   i j->               nums[i] >= nums[j]，j 负责去找第一个比 nums[i] 大的值
    第二步   i     j             此时找到了第一个 nums[i] < nums[j]
    第三步   i x   j             此时 nums[i+1]（记作nums[x]），与 nums[j] 互换位置
    第四步     i   j             i 往前走一步，继续比较下去
    此时     1 2 1 1 2 2 2 2 2   nums[i] >= nums[j]，j 负责去找第一个比 nums[i] 大的值
  */

  // 当 j 走到 nums 尾部时，意味着整个数组都替换完了
  while (j < nums.length) {
    if (nums[i] >= nums[j]) {
      // j 负责去找第一个比 nums[i] 大的值
      j++;
    } else {
      // 互换位置
      const temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;
      // i 往前走一步
      i++;
    }
  }
  // 因为返回的是长度，而 i 为索引，因此需要 +1 后返回。
  return ++i;
};
```