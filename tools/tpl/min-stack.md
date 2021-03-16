<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">155. 最小栈</div>
<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: rgb(90, 183, 38);">简单</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;<code>Stack</code>&nbsp;<code>Design</code></span></div><div><span style="margin-right: 15px;"><a href="https://leetcode.com/problems/min-stack/">英文原题</a></span><span><a href="https://leetcode-cn.com/problems/min-stack/">访问源站</a></span></div>
<hr style="height: 1px; margin: 1em 0px;" />
<p>设计一个支持 <code>push</code> ，<code>pop</code> ，<code>top</code> 操作，并能在常数时间内检索到最小元素的栈。</p>

<ul>
	<li><code>push(x)</code> &mdash;&mdash; 将元素 x 推入栈中。</li>
	<li><code>pop()</code>&nbsp;&mdash;&mdash; 删除栈顶的元素。</li>
	<li><code>top()</code>&nbsp;&mdash;&mdash; 获取栈顶元素。</li>
	<li><code>getMin()</code> &mdash;&mdash; 检索栈中的最小元素。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例:</strong></p>

<pre><strong>输入：</strong>
[&quot;MinStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;getMin&quot;,&quot;pop&quot;,&quot;top&quot;,&quot;getMin&quot;]
[[],[-2],[0],[-3],[],[],[],[]]

<strong>输出：</strong>
[null,null,null,null,-3,null,0,-2]

<strong>解释：</strong>
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --&gt; 返回 -3.
minStack.pop();
minStack.top();      --&gt; 返回 0.
minStack.getMin();   --&gt; 返回 -2.
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>pop</code>、<code>top</code> 和 <code>getMin</code> 操作总是在 <strong>非空栈</strong> 上调用。</li>
</ul>

<hr style="height: 1px; margin: 1em 0px;" />
<strong>第1次解答</strong>
```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = this.stack[0];
  for (let i = 1; i < this.stack.length; i++) {
    if (min > this.stack[i]) {
      min = this.stack[i];
    }
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```