/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (62.38%)
 * Likes:    743
 * Dislikes: 0
 * Total Accepted:    214.2K
 * Total Submissions: 343.3K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
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
// @lc code=end
