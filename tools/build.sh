#!/bin/sh

echo '清除旧目录'
# rm -rf SUMMARY.md
# rm -rf tools/tpl
# rm -rf tools//markdowns

echo '创建目录'
# mkdir tools/tpl
# mkdir tools/markdowns

echo '准备构建 SUMMARY'
# node tools/createSummary.js

echo '准备构建模板'
# node tools/createMarkdown.js

echo '准备安装依赖'
cd . && gitbook install

echo '开始打包 gitbook'
cd . && gitbook serve