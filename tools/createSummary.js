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
    'string': '字符串类型',
    'backtracking': '回溯',
    'heap': '堆'
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
    let summaryStr = '# Summary\n\n* [Introduction](README.md)\n';

    for (let difficult in summaryMap) {
        summaryStr += generatorItem(DIFFICULT_MAP[difficult] || difficult, 0, './tools/markdowns/' + difficult + '.md');
        generatorMenu(difficult, null, summaryMap[difficult]);
        for (let tag in summaryMap[difficult]) {
            summaryStr += generatorItem((TAG_MAP[tag] || tag), 1, './tools/markdowns/' + difficult + '_' + tag + '.md');
            generatorMenu(difficult, tag, summaryMap[difficult][tag])
            for (let question in summaryMap[difficult][tag]) {
                summaryStr += generatorItem(question, 2, './tools/tpl/' + question + '.md');
            }
        }
    }
    writeToSummary(summaryStr)
};

function generatorMenu(difficult, tag, dataSource) {
    let results = [];
    
    if(tag === null){
        results.push(`<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">${DIFFICULT_MAP[difficult]}</div>`);
    } else {
        results.push(`<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">${TAG_MAP[tag]}</div>`);
    }

    results.push('<hr style="height: 1px; margin: 1em 0px;" />');
    results.push('');
    results.push('当前'+(tag === null?'难度':'分类')+'下有如下内容：')
    results.push('');
    if(tag === null){
        for(let tagName in dataSource) {
            results.push('* ['+TAG_MAP[tagName]+'](/tools/markdowns/'+difficult+'_'+tagName+'.md)');
        }
        writeFileToLine(results, '', path.resolve('./tools/markdowns/'+difficult+'.md'));
    } else {
        for(let question in dataSource) {
            results.push('* ['+question+'](/tools/tpl/' + question + '.md)');
        }
        writeFileToLine(results, '', path.resolve('./tools/markdowns/'+difficult+'_'+tag+'.md'));
    }
}

function generatorItem(item, level, link) {
    let padStart = '';
    while (level !== 0) {
        padStart += '  ';
        level--;
    }

    return `${padStart}* [${item}](${link || ''})\n`;
}

function writeToSummary(summary) {
    if(fs.existsSync('./SUMMARY.md')){
        fs.unlinkSync('./SUMMARY.md');
    }
    writeFileToLine(summary, '', path.resolve('./SUMMARY.md'));
}