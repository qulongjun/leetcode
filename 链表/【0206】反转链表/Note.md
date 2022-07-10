



# 0206. 反转链表

## 问题描述

给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。




<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" style="width: 542px; height: 222px;" />

<pre>
<strong>输入：</strong>head = [1,2,3,4,5]
<strong>输出：</strong>[5,4,3,2,1]
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" style="width: 182px; height: 222px;" />
<pre>
<strong>输入：</strong>head = [1,2]
<strong>输出：</strong>[2,1]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>head = []
<strong>输出：</strong>[]
</pre>
<p><strong>提示：</strong></p>

<ul>
	<li>链表中节点的数目范围是 <code>[0, 5000]</code></li>
	<li><code>-5000 &lt;= Node.val &lt;= 5000</code></li>
</ul>

<p> </p>

<p><strong>进阶：</strong>链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？</p>

## 答案解析

#### 迭代解法

迭代解法是最容易想到的，定义两个指针（双指针，分别指向当前节点的 `root` 和指向上一个节点 `prev`），每次循环，都将当前节点 `root` 指向上一个节点 `prev` 。然后都往链表下一个节点走一步。

##### 核心代码

```javascript
while (head !== null) {
  	// 先暂存一下链表中的下一个节点，防止赋值的时候丢失
    const next = head.next;
  	// 将当前节点的 next 指针指向上一个节点 prev
    head.next = prev;
  	// 将 prev 节点指向当前节点
    prev = head;
  	// 将当前节点指向下一个节点 next
    head = next;
  }
```

##### 图解

![image-20220710164326920](/Users/qulongjun/Library/Application Support/typora-user-images/image-20220710164326920.png)



##### 时间复杂度分析

- 时间复杂度：`O(n)`，其中 `n` 是链表的长度。需要遍历链表一次。
- 空间复杂度：`O(1)`。



#### 递归解法

