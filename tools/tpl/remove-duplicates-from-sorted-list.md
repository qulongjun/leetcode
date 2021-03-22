<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">83. 删除排序链表中的重复元素</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。</p>

<p><strong>示例&nbsp;1:</strong></p>

<pre><strong>输入:</strong> 1-&gt;1-&gt;2
<strong>输出:</strong> 1-&gt;2
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入:</strong> 1-&gt;1-&gt;2-&gt;3-&gt;3
<strong>输出:</strong> 1-&gt;2-&gt;3</pre>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 边界问题，如果当前 head 为空或者只有一个元素，则直接返回 head
  if (head === null || head.next === null) return head;
  // 定义基准指针
  let first = head;
  // 定义比较指针
  let second = head.next;

  /*
    使用双指针来查找下一个不相同的结点，first 指针为基准指针，用来定位当前已完成比较的位置， second 指针为比较指针，用来查找和 first 指针指向元素不一致的元素的位置。
    
            1 1 1 1 2 2 3
            f s ->                初始位置
            f       s             发现 f 和 s 的值一样， s 去寻找后续值不为 f 的索引
            1 2 2 3
            f s                   找到之后，执行链表的删除操作
              f s                 f 往前走一步
  */

  // 结束条件为基准指针全部走完了链表
  while (first !== null) {
    // 如果基准指针和比较指针的值一样，则比较指针出发去寻找不一样的值
    if (first.val === second.val) {
      // 比较指针去寻找不一样的值，结束条件是 找到了 或者 到达链表末尾都没找到
      while (second !== null) {
        if (second.val === first.val) {
          second = second.next;
        } else {
          break;
        }
      }
      // 执行链表删除操作
      first.next = second;
    }
    // 基准指针往前进一步，后面的都已经比较完了
    first = first.next;
  }
  return head;
};
```