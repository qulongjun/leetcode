#!/bin/sh

echo '清除旧目录'
rm -rf SUMMARY.md
rm -rf tools/markdowns

echo '创建目录'
mkdir tools/markdowns

if [ $1 ]
then
    echo '单独指定生成 Problem '$1'，跳过清空全部 Problem Markdown 操作'
else
    echo '执行清空全部 Problem List 操作'
    rm -rf tools/tpl
    mkdir tools/tpl
fi

echo '准备构建 SUMMARY'
node tools/createSummary.js

echo '准备构建模板'
node tools/createMarkdown.js $1

echo '准备安装依赖'
cd . && gitbook install

echo '输出文件'
cd . && gitbook build

echo '开始打包 gitbook'
cd . && gitbook serve