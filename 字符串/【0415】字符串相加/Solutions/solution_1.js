/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (54.93%)
 * Likes:    585
 * Dislikes: 0
 * Total Accepted:    215.4K
 * Total Submissions: 392.2K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 *
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 *
 *
 * 示例 2：
 *
 *
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 *
 *
 * 示例 3：
 *
 *
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // 定义变量
  // i： num1 的字符串长度
  // j： num2 的字符串长度
  // step： 需要进位的数量
  // result： 返回值
  let i = num1.length - 1;
  let j = num2.length - 1;
  let step = 0;
  let result = "";
  // 从后往前循环，依次进行加法操作
  while (i >= 0 || j >= 0) {
    let temp = "";
    // 共有如下几种情况：
    // 1. 如果 num1 已经比较完了（即 i < 0），则只加上 num2
    // 2. 如果 num2 已经比较完了（即 j < 0），则只加上 num1
    // 3. 否则计算 num1 和 num2 之和
    if (i < 0) {
      // 1
      temp = parseInt(num2[j]) + step;
    } else if (j < 0) {
      // 2
      temp = parseInt(num1[i]) + step;
    }
    // 3
    else temp = parseInt(num1[i]) + parseInt(num2[j]) + step;

    // 以下为三种情况都走的逻辑
    // 计算当前比较位置的真实值：上一位的进位 + 当前位的值，求余，例如 23 % 3 -》 3
    result = (temp % 10) + result;
    // 计算进位的值， 例如：23 / 3 = 2.3， parseInt(2.3) = 2
    step = parseInt(temp / 10);
    // 都往前走一步
    i--;
    j--;
  }

  // 特殊CASE： 针对比较到第一位，但还有进位的情况，例如： '1' + '9' = '10' 的情况
  if (step) result = step + result;
  
  return result;
};
// @lc code=end
