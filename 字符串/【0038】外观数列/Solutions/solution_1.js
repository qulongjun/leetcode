/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (56.51%)
 * Likes:    564
 * Dislikes: 0
 * Total Accepted:    133.5K
 * Total Submissions: 236.2K
 * Testcase Example:  '1'
 *
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
 *
 * 注意：整数序列中的每一项将表示为一个字符串。
 *
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 第一项是数字 1
 *
 * 描述前一项，这个数是 1 即 “一个 1 ”，记作 11
 *
 * 描述前一项，这个数是 11 即 “两个 1 ” ，记作 21
 *
 * 描述前一项，这个数是 21 即 “一个 2 一个 1 ” ，记作 1211
 *
 * 描述前一项，这个数是 1211 即 “一个 1 一个 2 两个 1 ” ，记作 111221
 *
 *
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: "1"
 * 解释：这是一个基本样例。
 *
 * 示例 2:
 *
 * 输入: 4
 * 输出: "1211"
 * 解释：当 n = 3 时，序列是 "21"，其中我们有 "2" 和 "1" 两组，"2" 可以读作 "12"，也就是出现频次 = 1 而 值 =
 * 2；类似 "1" 可以读作 "11"。所以答案是 "12" 和 "11" 组合在一起，也就是 "1211"。
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // 定义一个结果集，存放每一次的结果，hashTable[i] 表示 第 i 次的结果
  let hashTable = ["1"];

  // 迭代走到第 i 个结果
  for (let i = 1; i < n; i++) {
    // 定义一个当前结果的存档
    let currentStr = "";
    // 获取上一个结果，也就是这一次结果的计算源
    let prevStr = hashTable[i - 1];

    // 定义两个指针，因为涉及到重复数字，start 用来标记重复数字的起始索引， end 用来标记重复数字的结束索引
    let start = 0,
      end = 0;

    // end 一直往后着
    while (end < prevStr.length) {
      // 如果 start 索引表示的值和 end 索引表示的值不一样了，就表示重复数字结束了
      if (prevStr[start] !== prevStr[end]) {
        // 找到重复数字个数，即 end - start，其中end指向下一个非重复的数字的起始
        currentStr += end - start + prevStr[start];
        // start 重新定位到新的开始
        start = end;
      }
      // 无论当前是否是重复的结束，在做完全流程后，end 都要往前走一步
      end++;
    }
    // 这是一个特殊场景，针对 end 走到末尾都没找到与 start 不同的值，需要额外加上
    currentStr += end - start + prevStr[start];
    // 将当前结果记录到 hashTable
    hashTable[i] = currentStr;
  }

  // 返回第 n 个结果
  return hashTable[n - 1];
};
// @lc code=end
