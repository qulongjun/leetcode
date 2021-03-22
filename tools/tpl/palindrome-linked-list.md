<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">234. 回文链表</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Linked List</code>&nbsp;<code>Two Pointers</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/palindrome-linked-list/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/palindrome-linked-list/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>请判断一个链表是否为回文链表。</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> 1-&gt;2
<strong>输出:</strong> false</pre>

<p><strong>示例 2:</strong></p>

<pre><strong>输入:</strong> 1-&gt;2-&gt;2-&gt;1
<strong>输出:</strong> true
</pre>

<p><strong>进阶：</strong><br>
你能否用&nbsp;O(n) 时间复杂度和 O(1) 空间复杂度解决此题？</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 遍历链表，将链表值存到数组中
  let results = [];
  while (head !== null) {
    results.push(head.val);
    head = head.next;
  }

  // 然后使用双指针查看数组是否是回文的
  let i = 0,
    j = results.length - 1;
  while (i < j) {
    if (results[i] !== results[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
```