<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">15. 三数之和</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(255, 161, 25);">中等</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Array</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/3sum/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/3sum/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给你一个包含 <code>n</code> 个整数的数组 <code>nums</code>，判断 <code>nums</code> 中是否存在三个元素 <em>a，b，c ，</em>使得 <em>a + b + c = </em>0 ？请你找出所有和为 <code>0</code> 且不重复的三元组。</p>

<p><strong>注意：</strong>答案中不可以包含重复的三元组。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [-1,0,1,2,-1,-4]
<strong>输出：</strong>[[-1,-1,2],[-1,0,1]]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = []
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [0]
<strong>输出：</strong>[]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 3000</code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description
 *
 * 定义三个指针，first, second, third 分别去寻找三元组的三个元素
 * first 指针从数组第 0 个位置出发，直到倒数第三个位置停止（得给后面两个元祖点空间）
 * second 指针从 first 指针之后的第一个位置出发，依次往后找第二个元组的位置
 * third 指针从 数组最后一位找起，因为数组是有序的，second 往后移，数字越大，意味着留给第三个的数字必须越小，因此 third 只能往前移
 *
 * 注意点：
 * 1. 为了避免重复，需要将当前指针的元素和前一个做对比，如果当前的和前一个一样，就不用比较了
 * 2. second 和 third 可以在一次遍历里完成，减少时间复杂度
 * 3. 数组必须是有序的
 */
var threeSum = function (nums) {
  // 先给数组排个序，JS排序的坑：默认 sort 是按照字符先后顺序排列
  const sortedNums = nums.sort((a, b) => a - b);
  // 给一个空数组，用于存放三元组的结果
  const results = [];

  // 定义 first 从 0 到 长度前2位（给 second 和 third 留两个坑，因为不允许重复）
  for (let first = 0; first < sortedNums.length - 2; first++) {
    // 因为排过序了，如果第一个就大于0了，直接表示后面肯定都大于0，不用比了
    if (sortedNums[first] > 0) break;
    // 需要比较当前元素和前一个元素的值是否一样，如果一样，就不往下比了，三元组不允许重复
    if (first > 0 && sortedNums[first] === sortedNums[first - 1]) continue;
    // 到了这里，证明第一个元素不大于0，且与前一个不一样，剩下只需要找 second + third 的值为 0 - first 即可
    const target = -sortedNums[first];
    // 定义 second 开始的位置
    let second = first + 1;
    // 定义 third 开始的位置，因为 second 是越来越大，为了等于0，third 只会越来越小
    let third = sortedNums.length - 1;
    // 终止条件就是 second 和 third 碰头了
    while (second < third) {
      // 找到了
      if (sortedNums[second] + sortedNums[third] === target) {
        // 就把当前三元组存到 results 结果集里
        results.push([
          sortedNums[first],
          sortedNums[second],
          sortedNums[third],
        ]);
        // 继续往下找，second 数字增大
        second++;
        // third 数字减小
        third--;
        // 如果当前 second 的值和前一个一样，需要往后继续找到第一个不一样的，防止重复的三元组
        while (
          second < third &&
          sortedNums[second] === sortedNums[second - 1]
        ) {
          second++;
        }
        // 如果当前 third 的值和前一个一样，需要往前继续找到第一个不一样的，防止重复的三元组
        while (second < third && sortedNums[third] === sortedNums[third + 1]) {
          third--;
        }
        // 如果当前 second 和 target 的值的和小于 target，说明当前的 second 太小了，要变大一些
      } else if (sortedNums[second] + sortedNums[third] < target) {
        second++;
        // 如果当前 second 和 target 的值的和大于 target，说明当前的 third 太大了，要变小一些
      } else third--;
    }
  }

  return results;
};
```