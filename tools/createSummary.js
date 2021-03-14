var path = require("path");
var fs = require("fs");
var generatorContext = require('./createMarkdown');
var writeFileToLine = require('./writeFileToLine');
var readFileList = require('./readFilePath');
var http = require("http");
var qs = require('querystring');  

var pathName = path.resolve('./');

const times = [];

const DIFFICULT_MAP = {
    easy: '容易题',
    medium: '中等题',
    hard: '困难题'
};

const TAG_MAP = {
    'tree': '树型类型',
    'array': '数组类型',
    'linked-list': '链表类型',
    'Unknown': '未分类',
    'brainteaser': '脑筋急转弯',
    'design': '设计类',
    'dynamic-programming': '动态规划',
    'hash-table': '哈希表类型',
    'math': '数学类型',
    'string': '字符串类型'
};

fs.readdir(pathName, function (err, files) {
    let dirList = [];
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (file.startsWith('【')) {
            dirList.push(file);
            times.push(file.split('】')[1])
        }
    }
    // generatorItemList(generatorSummary(dirList));
    generatorContext(dirList);

});

const generatorSummary = function (dirList) {
    let summaryMap = {};

    for (let i = 0; i < dirList.length; i++) {
        let dir = path.resolve('./' + dirList[i]);
        let fileMaps = readFileList(dir, [], dirList[i]);
        fileMaps.forEach(file => {
            let [difficult, tag, question] = file;
            question = question.split('.js')[0];

            if (!summaryMap[difficult]) {
                summaryMap[difficult] = {};
            }

            if (!summaryMap[difficult][tag]) {
                summaryMap[difficult][tag] = {};
            }

            if (!summaryMap[difficult][tag][question]) {
                summaryMap[difficult][tag][question] = [];
            }
            summaryMap[difficult][tag][question].push(dirList[i]);
        })
    }
    return summaryMap;
};


function generatorItemList(summaryMap) {
    let summaryStr = '';

    for (let difficult in summaryMap) {
        summaryStr += generatorItem(DIFFICULT_MAP[difficult] || difficult, 0);
        for (let tag in summaryMap[difficult]) {
            summaryStr += generatorItem((TAG_MAP[tag] || tag), 1);
            for (let question in summaryMap[difficult][tag]) {
                summaryStr += generatorItem(question, 2, './tools/template/' + question + '.md');
            }
        }
    }
    writeToSummary(summaryStr)
};

function generatorItem(item, level, link) {
    let padStart = '';
    while (level !== 0) {
        padStart += '  ';
        level--;
    }

    return `${padStart}* [${item}](${link || 'README.md'})\n`;
}

function writeToSummary(summary) {
    writeFileToLine(summary, '${content}', path.resolve('./SUMMARY.md'));
}