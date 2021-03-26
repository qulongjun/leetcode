<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">225. 用队列实现栈</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>Design</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/implement-stack-using-queues/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/implement-stack-using-queues/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通队列的全部四种操作（<code>push</code>、<code>top</code>、<code>pop</code> 和 <code>empty</code>）。</p>

<p>实现 <code>MyStack</code> 类：</p>

<ul>
	<li><code>void push(int x)</code> 将元素 x 压入栈顶。</li>
	<li><code>int pop()</code> 移除并返回栈顶元素。</li>
	<li><code>int top()</code> 返回栈顶元素。</li>
	<li><code>boolean empty()</code> 如果栈是空的，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li>
</ul>

<p> </p>

<p><strong>注意：</strong></p>

<ul>
	<li>你只能使用队列的基本操作 —— 也就是 <code>push to back</code>、<code>peek/pop from front</code>、<code>size</code> 和 <code>is empty</code> 这些操作。</li>
	<li>你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。</li>
</ul>

<p> </p>

<p><strong>示例：</strong></p>

<pre>
<strong>输入：</strong>
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
<strong>输出：</strong>
[null, null, null, 2, 2, false]

<strong>解释：</strong>
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= x <= 9</code></li>
	<li>最多调用<code>100</code> 次 <code>push</code>、<code>pop</code>、<code>top</code> 和 <code>empty</code></li>
	<li>每次调用 <code>pop</code> 和 <code>top</code> 都保证栈不为空</li>
</ul>

<p> </p>

<p><strong>进阶：</strong>你能否实现每种操作的均摊时间复杂度为 <code>O(1)</code> 的栈？换句话说，执行 <code>n</code> 个操作的总时间复杂度 <code>O(n)</code> ，尽管其中某个操作可能需要比其他操作更长的时间。你可以使用两个以上的队列。</p>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
  this.temp_queue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let length = this.queue.length;
  if (length === 0) return null;
  // 左手倒右手，将当前队列里的数据一个一个出队列，放到临时队列中去，只保留最后一个元素
  while (length > 1) {
    this.temp_queue.push(this.queue.shift());
    length--;
  }

  // 最后一个元素就是栈顶元素
  const result = this.queue.shift();

  // 右手再倒左手，将临时队列里的数据重新倒回去
  while (this.temp_queue.length !== 0) {
    this.queue.push(this.temp_queue.shift());
  }

  return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  // 先把栈顶元素取出来，然后再把它推回去
  let last = this.pop();
  this.push(last);
  return last;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  // 把栈顶元素取出来，如果是 null，则表示不存在栈顶元素，为空队列
  let last = this.pop();
  if (last !== null) {
    this.push(last);
    return false;
  }
  return true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```