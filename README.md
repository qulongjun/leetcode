# ![leetcode](/tools/images/logo_en.svg)

![GitHub top language](https://img.shields.io/github/languages/top/qulongjun/leetcode)
![GitHub last commit](https://img.shields.io/github/last-commit/qulongjun/leetcode)
![GitHub](https://img.shields.io/github/license/qulongjun/leetcode)

只有熟练掌握基础的数据结构与算法，才能对复杂问题迎刃有余。

## 🌈  官方网站

[点此访问](http://leetcode.qulongjun.com/) 

## 📘 仓库介绍

基于 `Javascript` 的 leetcode 题解，记录自己的前端解题之路。

本仓库将会被分为**五个**部分(预计)：

* Leetcode 上一些经典的算法、数据结构题型。
* 前端向的一些题解，包括且不限于常见工具实现类、组件设计类、功能实现类等题型。
* 计算机通识知识，包括计算机组成原理，操作系统等题型。
* 主要面向大厂面试的项目、工作、个人相关的一些题型。
* 其他未被分类的题型。

> 本仓库会记录笔者的每一次 `AC` 记录，即使是一些 `时间 / 空间复杂度` 较高的解法, 随着刷题次数的逐步增加, 也会逐步记录一些更低复杂度的解法, 主要目的是用以回味曾经的思考历程。

## 🔱 关于笔者

笔者是一个刚入门算法数月的“纯小白”，深知前端同学在刷题时候，苦于网上对于 `Javascript` 的解法的匮乏，也苦于找不到解题思路。因此笔者打算将自己刷题过程中 `AC` 的题目进行记录并整理，作为开源社区贡献的一部分，欢迎大家食用品鉴。

这个仓库还在不停的补充之中，不足之处，还请各位大佬多多指点。

> 满纸荒唐言，一把辛酸泪。都云作者痴 谁解其中味？

## 🌍  目标读者

* 想提高算法能力的编程爱好者。
* 想在面试前进行前端刷题的小伙伴。

## 📦  食用指南

本仓库会**不定期**更新（取决于刷题速度），本仓库按照 `Leetcode` 官方 **标签** 进行归类，规则如下：

* 如若该 `Problem` 只提供了唯一 **标签** ， 则直接归类在该文件夹下。
* 如若该 `Problem` 提供了多个 **标签** ，则按照相关性（解题方法 -> 问题描述）递减归类。

本仓库目录结构如下：

<pre>
.
├── 树                              -> 归类标签 名称
│   ├── 【0094】二叉树的中序遍历       -> Problem 名称
|   |   ├── Solutions               -> 存放所有通过的解答
|   |   |   ├── solution_1.js       -> solution_*.js，* 越大，时间越近
|   |   |   └── solution_2.js
|   |   ├── Articles                -> 存放 Problem 的题解、笔记等
|   |   └── Problem.md              -> Problem 问题描述
│   └── 【0098】验证二叉搜啥树
└── README.md
</pre>


## 💻 插件

或许是一个可以改变你刷题效率的 `VS Code` 扩展插件。

[插件地址](https://github.com/LeetCode-OpenSource/vscode-leetcode)

## ❗ 怎么刷 LeetCode？

笔者也是从 leetcode 小白过来的，深知刚入门刷题时的举步维艰，下面的一些文章可能会帮到你：

* [大家都是如何刷Leetcode的](https://www.zhihu.com/question/280279208)
* [算法小白如何高效、快速刷leetcode](https://www.zhihu.com/question/321738058)

## ✨ Problem Guide

#### 数组

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0001 | [两数之和](https://leetcode-cn.com/problems/two-sum/) | [Solutions](./数组/【0001】两数之和/Solutions) | Easy | 2021-03-01  |
| 0011 | [盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/) | [Solutions](./数组/【0011】盛最多水的容器/Solutions) | Medium | 2021-03-29  |
| 0015 | [三数之和](https://leetcode-cn.com/problems/3sum/) | [Solutions](./数组/【0015】三数之和/Solutions) | Medium | 2020-09-28 |
| 0018 | [四数之和](https://leetcode-cn.com/problems/4sum/) | [Solutions](./数组/【0018】四数之和/Solutions) | Medium | 2020-09-28 |
| 0026 | [删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/) | [Solutions](./数组/【0026】删除排序数组中的重复项/Solutions) | Easy | 2021-02-27  |
| 0027 | [移除元素](https://leetcode-cn.com/problems/remove-element/) | [Solutions](./数组/【0027】移除元素/Solutions) | Easy | 2021-03-05  |
| 0034 | [在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | [Solutions](./数组/【0034】在排序数组中查找元素的第一个和最后一个位置/Solutions) | Medium | 2021-03-29  |
| 0035 | [搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/) | [Solutions](./数组/【0035】搜索插入位置/Solutions) | Easy | 2021-03-12  |
| 0048 | [旋转图像](https://leetcode-cn.com/problems/rotate-image/) | [Solutions](./数组/【0048】旋转图像/Solutions) | Medium | 2021-03-02  |
| 0055 | [跳跃游戏](https://leetcode-cn.com/problems/jump-game/) | [Solutions](./数组/【0055】跳跃游戏/Solutions) | Medium | 2021-04-13  |
| 0066 | [加一](https://leetcode-cn.com/problems/plus-one/) | [Solutions](./数组/【0066】加一/Solutions) | Easy | 2021-03-01  |
| 0088 | [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/) | [Solutions](./数组/【0088】合并两个有序数组/Solutions) | Easy | 2021-02-27  |
| 0118 | [杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/) | [Solutions](./数组/【0118】杨辉三角/Solutions) | Easy | 2021-02-25  |
| 0122 | [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/) | [Solutions](./数组/【0122】买卖股票的最佳时机_ii/Solutions) | Easy | 2021-02-25  |
| 0169 | [多数元素](https://leetcode-cn.com/problems/majority-element/) | [Solutions](./数组/【0169】多数元素/Solutions) | Easy | 2021-02-25  |
| 0217 | [存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/) | [Solutions](./数组/【0217】存在重复元素/Solutions) | Easy | 2021-02-27  |
| 0238 | [除自身以外数组的乘积](https://leetcode-cn.com/problems/product-of-array-except-self/) | [Solutions](./数组/【0238】除自身以外数组的乘积/Solutions) | Medium | 2021-03-02  |
| 0268 | [丢失的数字](https://leetcode-cn.com/problems/missing-number/) | [Solutions](./数组/【0268】丢失的数字/Solutions) | Easy | 2021-02-26  |
| 0283 | [移动零](https://leetcode-cn.com/problems/move-zeroes/) | [Solutions](./数组/【0283】移动零/Solutions) | Easy | 2021-02-25  |
| 0287 | [寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/) | [Solutions](./数组/【0287】寻找重复数/Solutions) | Medium | 2021-03-04  |
| 0448 | [找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/) | [Solutions](./数组/【0448】找到所有数组中消失的数字/Solutions) | Easy | 2021-03-04 |
| 0867 | [转置矩阵](https://leetcode-cn.com/problems/transpose-matrix/) | [Solutions](./数组/【0867】转置矩阵/Solutions) | Easy | 2021-03-23  |
| 0977 | [有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/) | [Solutions](./数组/【0977】有序数组的平方/Solutions) | Easy | 2021-03-23  |

#### 树

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0094 | [二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/) | [Solutions](./树/【0094】二叉树的中序遍历/Solutions) | Easy | 2021-02-28  |
| 0098 | [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/) | [Solutions](./树/【0098】验证二叉搜索树/Solutions) | Medium | 2021-03-05  |
| 0100 | [相同的树](https://leetcode-cn.com/problems/same-tree/) | [Solutions](./树/【0100】相同的树/Solutions) | Easy | 2021-04-29  |
| 0101 | [对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/) | [Solutions](./树/【0101】对称二叉树/Solutions) | Easy | 2021-02-28  |
| 0102 | [二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/) | [Solutions](./树/【0102】二叉树的层序遍历/Solutions) | Medium | 2021-03-03  |
| 0103 | [二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/) | [Solutions](./树/【0103】二叉树的锯齿形层序遍历/Solutions) | Medium | 2021-03-05  |
| 0104 | [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/) | [Solutions](./树/【0104】二叉树的最大深度/Solutions) | Easy | 2021-02-24  |
| 0105 | [从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [Solutions](./树/【0105】从前序与中序遍历序列构造二叉树/Solutions) | Medium | 2021-03-06  |
| 0106 | [从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | [Solutions](./树/【0106】从中序与后序遍历序列构造二叉树/Solutions) | Medium | 2021-03-06  |
| 0107 | [二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/) | [Solutions](./树/【0107】二叉树的层次遍历_ii/Solutions) | Medium | 2020-09-25 |
| 0108 | [将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/) | [Solutions](./树/【0108】将有序数组转换为二叉搜索树/Solutions) | Easy | 2021-03-05  |
| 0110 | [平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/) | [Solutions](./树/【0110】平衡二叉树/Solutions) | Easy | 2021-03-04  |
| 0111 | [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/) | [Solutions](./树/【0111】二叉树的最小深度/Solutions) | Easy | 2021-04-29  |
| 0112 | [路径总和](https://leetcode-cn.com/problems/path-sum/) | [Solutions](./树/【0112】路径总和/Solutions) | Easy | 2020-09-26 |
| 0113 | [路径总和 II](https://leetcode-cn.com/problems/path-sum-ii/) | [Solutions](./树/【0113】路径总和_ii/Solutions) | Medium | 2020-09-26 |
| 0114 | [二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/) | [Solutions](./树/【0114】二叉树展开为链表/Solutions) | Medium | 2021-02-08 |
| 0116 | [填充每个节点的下一个右侧节点指针](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/) | [Solutions](./树/【0116】填充每个节点的下一个右侧节点指针/Solutions) | Medium | 2021-03-05  |
| 0117 | [填充每个节点的下一个右侧节点指针 II](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/) | [Solutions](./树/【0117】填充每个节点的下一个右侧节点指针_ii/Solutions) | Medium | 2021-02-09 |
| 0129 | [求根节点到叶节点数字之和](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/) | [Solutions](./树/【0129】求根到叶子节点数字之和/Solutions) | Medium | 2020-09-26 |
| 0144 | [二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/) | [Solutions](./树/【0144】二叉树的前序遍历/Solutions) | Medium | 2020-09-25 |
| 0145 | [二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/) | [Solutions](./树/【0145】二叉树的后序遍历/Solutions) | Easy | 2020-09-29 |
| 0199 | [二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/) | [Solutions](./树/【0199】二叉树的右视图/Solutions) | Medium | 2020-09-26 |
| 0226 | [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/) | [Solutions](./树/【0226】翻转二叉树/Solutions) | Easy | 2021-03-04  |
| 0230 | [二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/) | [Solutions](./树/【0230】二叉搜索树中第k小的元素/Solutions) | Medium | 2021-03-05  |
| 0235 | [二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | [Solutions](./树/【0235】二叉搜索树的最近公共祖先/Solutions) | Easy | 2021-03-05  |
| 0236 | [二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/) | [Solutions](./树/【0236】二叉树的最近公共祖先/Solutions) | Medium | 2021-03-05  |
| 0509 | [斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/) | [Solutions](./树/【0509】斐波那契数/Solutions) | Easy | 2020-09-29 |
| 0543 | [二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/) | [Solutions](./树/【0543】二叉树的直径/Solutions) | Easy | 2021-02-12 |
| 0617 | [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/) | [Solutions](./树/【0617】合并二叉树/Solutions) | Easy | 2021-03-04  |

#### 链表

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0002 | [两数相加](https://leetcode-cn.com/problems/add-two-numbers/) | [Solutions](./链表/【0002】两数相加/Solutions) | Medium | 2021-03-05  |
| 0019 | [删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/) | [Solutions](./链表/【0019】删除链表的倒数第_n_个结点/Solutions) | Medium | 2021-03-05  |
| 0019 | [删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/) | [Solutions](./链表/【0019】删除链表的倒数第n个节点/Solutions) | Medium | 2021-03-05  |
| 0021 | [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/) | [Solutions](./链表/【0021】合并两个有序链表/Solutions) | Easy | 2021-02-26  |
| 0024 | [两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/) | [Solutions](./链表/【0024】两两交换链表中的节点/Solutions) | Medium | 2021-03-24  |
| 0061 | [旋转链表](https://leetcode-cn.com/problems/rotate-list/) | [Solutions](./链表/【0061】旋转链表/Solutions) | Medium | 2021-02-28  |
| 0083 | [删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/) | [Solutions](./链表/【0083】删除排序链表中的重复元素/Solutions) | Easy | 2021-03-26  |
| 0141 | [环形链表](https://leetcode-cn.com/problems/linked-list-cycle/) | [Solutions](./链表/【0141】环形链表/Solutions) | Easy | 2021-02-27  |
| 0142 | [环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/) | [Solutions](./链表/【0142】环形链表_ii/Solutions) | Medium | 2021-02-28  |
| 0147 | [对链表进行插入排序](https://leetcode-cn.com/problems/insertion-sort-list/) | [Solutions](./链表/【0147】对链表进行插入排序/Solutions) | Medium | 2021-02-28  |
| 0148 | [排序链表](https://leetcode-cn.com/problems/sort-list/) | [Solutions](./链表/【0148】排序链表/Solutions) | Medium | 2021-02-28  |
| 0160 | [相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/) | [Solutions](./链表/【0160】相交链表/Solutions) | Easy | 2021-02-26  |
| 0206 | [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/) | [Solutions](./链表/【0206】反转链表/Solutions) | Easy | 2021-02-25  |
| 0234 | [回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/) | [Solutions](./链表/【0234】回文链表/Solutions) | Easy | 2021-03-01  |
| 0237 | [删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/) | [Solutions](./链表/【0237】删除链表中的节点/Solutions) | Easy | 2021-02-24  |
| 0328 | [奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list/) | [Solutions](./链表/【0328】奇偶链表/Solutions) | Medium | 2021-03-05  |
| 0876 | [链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/) | [Solutions](./链表/【0876】链表的中间结点/Solutions) | Easy | 2021-04-14  |

#### 动态规划

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0005 | [最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/) | [Solutions](./动态规划/【0005】最长回文子串/Solutions) | Medium | 2021-03-12  |
| 0053 | [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/) | [Solutions](./动态规划/【0053】最大子序和/Solutions) | Easy | 2021-03-12  |
| 0062 | [不同路径](https://leetcode-cn.com/problems/unique-paths/) | [Solutions](./动态规划/【0062】不同路径/Solutions) | Medium | 2021-03-13  |
| 0070 | [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/) | [Solutions](./动态规划/【0070】爬楼梯/Solutions) | Easy | 2021-02-27  |
| 0121 | [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/) | [Solutions](./动态规划/【0121】买卖股票的最佳时机/Solutions) | Easy | 2021-03-29  |
| 0198 | [打家劫舍](https://leetcode-cn.com/problems/house-robber/) | [Solutions](./动态规划/【0198】打家劫舍/Solutions) | Medium | 2021-03-29  |
| 0300 | [最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/) | [Solutions](./动态规划/【0300】最长上升子序列/Solutions) | Medium | 2020-09-30 |
| 0322 | [零钱兑换](https://leetcode-cn.com/problems/coin-change/) | [Solutions](./动态规划/【0322】零钱兑换/Solutions) | Medium | 2021-04-26  |
| 0993 | [二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/) | [Solutions](./动态规划/【0993】二叉树的堂兄弟节点/Solutions) | Easy | 2021-05-17  |

#### 哈希表

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0049 | [字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/) | [Solutions](./哈希表/【0049】字母异位词分组/Solutions) | Medium | 2021-03-06  |
| 0136 | [只出现一次的数字](https://leetcode-cn.com/problems/single-number/) | [Solutions](./哈希表/【0136】只出现一次的数字/Solutions) | Easy | 2021-02-25  |
| 0204 | [计数质数](https://leetcode-cn.com/problems/count-primes/) | [Solutions](./哈希表/【0204】计数质数/Solutions) | Easy | 2021-03-01  |
| 0242 | [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/) | [Solutions](./哈希表/【0242】有效的字母异位词/Solutions) | Easy | 2021-02-26  |
| 0349 | [两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/) | [Solutions](./哈希表/【0349】两个数组的交集/Solutions) | Easy | 2021-03-02  |
| 0350 | [两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/) | [Solutions](./哈希表/【0350】两个数组的交集_ii/Solutions) | Easy | 2021-03-02  |
| 0387 | [字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/) | [Solutions](./哈希表/【0387】字符串中的第一个唯一字符/Solutions) | Easy | 2021-03-01  |

#### 回溯算法

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0017 | [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/) | [Solutions](./回溯算法/【0017】电话号码的字母组合/Solutions) | Medium | 2021-03-29  |
| 0022 | [括号生成](https://leetcode-cn.com/problems/generate-parentheses/) | [Solutions](./回溯算法/【0022】括号生成/Solutions) | Medium | 2021-03-02  |
| 0039 | [组合总和](https://leetcode-cn.com/problems/combination-sum/) | [Solutions](./回溯算法/【0039】组合总和/Solutions) | Medium | 2021-03-04  |
| 0046 | [全排列](https://leetcode-cn.com/problems/permutations/) | [Solutions](./回溯算法/【0046】全排列/Solutions) | Medium | 2021-02-28  |
| 0077 | [组合](https://leetcode-cn.com/problems/combinations/) | [Solutions](./回溯算法/【0077】组合/Solutions) | Medium | 2021-03-23  |
| 0078 | [子集](https://leetcode-cn.com/problems/subsets/) | [Solutions](./回溯算法/【0078】子集/Solutions) | Medium | 2021-02-28  |
| 0079 | [单词搜索](https://leetcode-cn.com/problems/word-search/) | [Solutions](./回溯算法/【0079】单词搜索/Solutions) | Medium | 2021-02-11 |
| 0131 | [分割回文串](https://leetcode-cn.com/problems/palindrome-partitioning/) | [Solutions](./回溯算法/【0131】分割回文串/Solutions) | Medium | 2021-03-05  |

#### 字符串

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0003 | [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/) | [Solutions](./字符串/【0003】无重复字符的最长子串/Solutions) | Medium | 2021-03-05  |
| 0006 | [Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion/) | [Solutions](./字符串/【0006】z_字形变换/Solutions) | Medium | 2020-09-26 |
| 0008 | [字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/) | [Solutions](./字符串/【0008】字符串转换整数_atoi/Solutions) | Medium | 2021-03-04  |
| 0014 | [最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/) | [Solutions](./字符串/【0014】最长公共前缀/Solutions) | Easy | 2021-02-26  |
| 0020 | [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/) | [Solutions](./字符串/【0020】有效的括号/Solutions) | Easy | 2021-02-27  |
| 0028 | [实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/) | [Solutions](./字符串/【0028】实现_str_str/Solutions) | Easy | 2021-02-26  |
| 0038 | [外观数列](https://leetcode-cn.com/problems/count-and-say/) | [Solutions](./字符串/【0038】外观数列/Solutions) | Easy | 2021-03-02  |
| 0058 | [最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/) | [Solutions](./字符串/【0058】最后一个单词的长度/Solutions) | Easy | 2021-03-06  |
| 0125 | [验证回文串](https://leetcode-cn.com/problems/valid-palindrome/) | [Solutions](./字符串/【0125】验证回文串/Solutions) | Easy | 2021-03-01  |
| 0344 | [反转字符串](https://leetcode-cn.com/problems/reverse-string/) | [Solutions](./字符串/【0344】反转字符串/Solutions) | Easy | 2021-02-25  |
| 0557 | [反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/) | [Solutions](./字符串/【0557】反转字符串中的单词_iii/Solutions) | Easy | 2021-02-27  |

#### 数学

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0007 | [整数反转](https://leetcode-cn.com/problems/reverse-integer/) | [Solutions](./数学/【0007】整数反转/Solutions) | Easy | 2021-02-27  |
| 0009 | [回文数](https://leetcode-cn.com/problems/palindrome-number/) | [Solutions](./数学/【0009】回文数/Solutions) | Easy | 2021-02-27  |
| 0013 | [罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/) | [Solutions](./数学/【0013】罗马数字转整数/Solutions) | Easy | 2021-02-28  |
| 0168 | [Excel表列名称](https://leetcode-cn.com/problems/excel-sheet-column-title/) | [Solutions](./数学/【0168】excel表列名称/Solutions) | Easy | 2020-10-30 |
| 0171 | [Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/) | [Solutions](./数学/【0171】excel表列序号/Solutions) | Easy | 2021-02-25  |
| 0202 | [快乐数](https://leetcode-cn.com/problems/happy-number/) | [Solutions](./数学/【0202】快乐数/Solutions) | Easy | 2021-02-28  |
| 0326 | [3的幂](https://leetcode-cn.com/problems/power-of-three/) | [Solutions](./数学/【0326】3_的幂/Solutions) | Easy | 2021-03-01  |

#### 设计

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0155 | [最小栈](https://leetcode-cn.com/problems/min-stack/) | [Solutions](./设计/【0155】最小栈/Solutions) | Easy | 2021-02-27  |
| 0225 | [用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/) | [Solutions](./设计/【0225】用队列实现栈/Solutions) | Easy | 2021-03-26  |
| 0232 | [用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/) | [Solutions](./设计/【0232】用栈实现队列/Solutions) | Easy | 2021-03-05  |

#### 脑筋急转弯

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0292 | [Nim 游戏](https://leetcode-cn.com/problems/nim-game/) | [Solutions](./脑筋急转弯/【0292】nim_游戏/Solutions) | Easy | 2021-02-28  |

#### 堆

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0215 | [数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/) | [Solutions](./堆/【0215】数组中的第k个最大元素/Solutions) | Medium | 2021-03-02  |

#### 其他

| # | 问题 | 解答 | 难度 | 最后提交日期 |
|:---:| :-----: | :--------: | :----------: | :--------: |
| 0412 | [Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/) | [Solutions](./其他/【0412】fizz_buzz/Solutions) | Easy | 2021-02-25  |
| 0701 | [二叉搜索树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/) | [Solutions](./其他/【0701】二叉搜索树中的插入操作/Solutions) | Medium | 2020-09-30 |
| 1480 | [一维数组的动态和](https://leetcode-cn.com/problems/running-sum-of-1d-array/) | [Solutions](./其他/【1480】一维数组的动态和/Solutions) | Easy | 2020-09-27 |
| 1550 | [存在连续三个奇数的数组](https://leetcode-cn.com/problems/three-consecutive-odds/) | [Solutions](./其他/【1550】存在连续三个奇数的数组/Solutions) | Easy | 2020-10-30 |

## 💝 贡献

我们很期待您能参与进来一起建设 :)，但我们希望您能遵守相关约定：

我们有一份[行为准则](CODE_OF_CONDUCT.md)，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保您能明白哪些是可以做的，哪些是不可以做的。

如果文章有所遗漏需要勘误，欢迎在 [Github](https://github.com/qulongjun) 与我取得联系。

如果您有较好的创意，我们也欢迎您通过 [Issue](https://github.com/qulongjun/leetcode/issues) 直接告诉我们。

## 💌 鸣谢

感谢为这个项目作出贡献的所有编程爱好者。

## 🍖 License

[MIT]('./LICENSE.md') © qulongjun