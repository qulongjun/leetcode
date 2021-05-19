# 广度优先搜索（BFS）

### 核心思想

将一些问题抽象为 **图**，从一个点开始，向四周扩散。一般来说，采用 **队列** 这种数据结构，每次将一个节点周围的所有节点加入队列。

> BFS 找到的路径一定是最短的，但代价是空间复杂度会比 DFS 大很多。

### 算法框架

#### 本质问题

在一幅 “图” 中，找到从起点 `start` 到终点 `target` 的最近距离。

记住如下代码模板：

```javascript
const bfs = function (start) {
  // 定义边界条件
  if (start 不满足要求) return;
  // 定义一个队列，push - 入队操作， shift - 出队操作
  const stacks = [];
  // 定义存放结果值变量
  let step = 0;
  // 将 root 入队
  stacks.push(start);

  // 一次 while 循环就是一层广度，BFS 是以 “面” 来查找的
  while (stacks.length !== 0) {
    // 获取当前层节点的个数
    let size = stacks.length;
    // 遍历当前层中的每一个点
    for (let i = 0; i < size; i++) {
      let node = stacks.shift();
      // 如果当前符合 target 的要求，则直接结束查找，返回 step，避免重复查找
      if (node 满足 target 的要求) {
        return step;
      }
      // 如果 node 的子节点存在，则加入到队列中，下一层 while 循环轮到它
      if (node.children 存在) {
        stacks.push(node.children);
      }
      
    }
    // 如果当前层没有满足结束条件，则去查找下一层，此时深度需要+1
    step++;
  }
  
  // 返回最小深度
  return step;
};
```

参考：

* [【0111】二叉树的最小深度](./树/【0111】二叉树的最小深度/Solutions/solution_3.js)
