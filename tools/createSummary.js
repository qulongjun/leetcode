var path = require("path");
var fs = require("fs");
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
    generatorItemList(generatorSummary(dirList));
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
    console.log('正在构建目录');
    generatorShedule();
    let summaryStr = '# Summary\n\n* [介绍](README.md)\n* [刷题记录](./tools/markdowns/SCHEDULE.md)\n';

    for (let difficult in summaryMap) {
        summaryStr += generatorItem(DIFFICULT_MAP[difficult] || difficult, 0, './tools/markdowns/' + difficult + '.md');
        generatorMenu(difficult, null, summaryMap[difficult]);
        for (let tag in summaryMap[difficult]) {
            summaryStr += generatorItem((TAG_MAP[tag] || tag), 1, './tools/markdowns/' + difficult + '_' + tag + '.md');
            generatorMenu(difficult, tag, summaryMap[difficult][tag])
            for (let question in summaryMap[difficult][tag]) {
                let questionBuf = fs.readFileSync(summaryMap[difficult][tag][question][0] + '/' + difficult + '/' + tag + '/' + question + '.js', 'utf8').split(/\r\n|\n|\r/gm);
                let questionUrl = questionBuf.find(item => item.startsWith(' * https://leetcode-cn.com/problems/'));
                const questionTitle = questionUrl.replace(' * https://leetcode-cn.com/problems/', '').replace('/description/', '');
                summaryStr += generatorItem(question, 2, './tools/tpl/' + questionTitle + '.md');
            }
        }
    }
    writeToSummary(summaryStr)
};

function generatorShedule() {
    let scheduleBuf = fs.readFileSync('SCHEDULE.md', 'utf8').split(/\r\n|\n|\r/gm);
    for(let i = 0 ; i<scheduleBuf.length; i++){
        const pathList = scheduleBuf[i].match(/\.\/((?!\.js).)+\.js/g);
        const urlList = scheduleBuf[i].match(/(http[s]?:\/\/([\w-]+.)+([:\d+])?(\/[\w-\.\/\?%&=]*)?)/gi);
        if(pathList !== null && urlList !== null) {
            const urls = urlList[0].split('/');
            let url = '';
            const cnName = pathList[0].split('/').pop();
            while(url === '' && urls.length !== 0) {
                url = urls.pop();
            }

            if(url !== ''){
                for(let j = 0; j < pathList.length; j++){
                    scheduleBuf[i] = scheduleBuf[i].replace(pathList[j], '/tools/tpl/' + url + '.md');
                }
            }
        }
    }
    if(fs.existsSync('./tools/markdowns/SCHEDULE.md')){
        fs.unlinkSync('./tools/markdowns/SCHEDULE.md');
    }

    writeFileToLine(scheduleBuf, '', path.resolve('./tools/markdowns/SCHEDULE.md'));
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
            let questionBuf = fs.readFileSync(dataSource[question][0] + '/' + difficult + '/' + tag + '/' + question + '.js', 'utf8').split(/\r\n|\n|\r/gm);
            let questionUrl = questionBuf.find(item => item.startsWith(' * https://leetcode-cn.com/problems/'));
            const questionTitle = questionUrl.replace(' * https://leetcode-cn.com/problems/', '').replace('/description/', '');
            results.push('* ['+question+'](/tools/tpl/' + questionTitle + '.md)');
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
    console.log('正在生成 SUMMARY 文件');
    if(fs.existsSync('./SUMMARY.md')){
        fs.unlinkSync('./SUMMARY.md');
    }
    writeFileToLine(summary, '', path.resolve('./SUMMARY.md'));
}