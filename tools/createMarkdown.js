var path = require("path");
var fs = require("fs");
var readFileList = require('./readFilePath');
var writeFileToLine = require('./writeFileToLine');
var {
    login,
    getProblem
} = require('./leetcodeAPI');
var taskPool = require('./taskPool');

var dirs = [];

const times = [];

var pathName = path.resolve('./');

const ProblemDifficulty = ['简单', '中等', '困难'];
const ProblemDifficultyColor = ['rgb(90, 183, 38)', 'rgb(255, 161, 25)', 'rgb(236, 76, 71)']

function generatorContext(dirList) {
    let fileMapWithTimes = {};
    login();
    for (let i = 0; i < dirList.length; i++) {
        let dir = path.resolve('./' + dirList[i]);
        let fileMaps = readFileList(dir, [], dirList[i]);
        for (let j = 0; j < fileMaps.length; j++) {
            let questionPath = fileMaps[j].join('/');
            if (fileMapWithTimes[questionPath]) {
                fileMapWithTimes[questionPath].push(dir);
            } else fileMapWithTimes[questionPath] = [dir];
        }
    }

    var pool = new taskPool();
    pool.removeTask();

    for (let [question, times] of Object.entries(fileMapWithTimes)) {
        let renderList = [];
        for (let time of times) {
            renderList.push(time + '/' + question);
        }

        pool.addTask(function () {
            return new Promise(resolve => {
                setTimeout(() => {
                    renderTemplate(renderList);
                    resolve();
                }, 2000);
            });
        })
    }
}




function renderTemplate(renderList) {
    let header = [];
    let questionData = [];
    let answerData = [];

    console.log('renderList', renderList);

    let questionBuf = fs.readFileSync(renderList[0], 'utf8').split(/\r\n|\n|\r/gm);

    for (let i = 0; i < questionBuf.length; i++) {
        if (questionBuf[i].indexOf('@lc code=start') !== -1) break;
        if (questionBuf[i].indexOf(' * https://leetcode-cn.com/problems/') !== -1) {
            const questionTitle = questionBuf[i].replace(' * https://leetcode-cn.com/problems/', '').replace('/description/', '');
            getProblem(questionTitle).then(res => {
                console.log('正在渲染：', questionTitle);
                const difficulty = renderList[0].indexOf('easy') !== -1 ? 0 : renderList[0].indexOf('medium') !== -1 ? 1 : 2;
                header.push(`<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">${res.id}. ${res.translatedTitle}</div>`);
                header.push(`<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: ${ProblemDifficultyColor[difficulty]};">${ProblemDifficulty[difficulty]}</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;${res.tag.length === 0 ? '暂无' : res.tag.map(item => `<code>${item}</code>`).join('&nbsp;')}</span></div><div><span style="margin-right: 15px;"><a href="${'https://leetcode.com/problems/'+ questionTitle + '/'}">英文原题</a></span><span><a href="${'https://leetcode-cn.com/problems/'+ questionTitle + '/'}">访问源站</a></span></div>`);

                header.push('<hr style="height: 1px; margin: 1em 0px;" />');

                questionData.push(res.translatedContent);

                for (let i = renderList.length - 1; i >= 0; i--) {
                    let data = fs.readFileSync(renderList[i], 'utf8').split(/\r\n|\n|\r/gm);
                    let isEnter = false;
                    for (let j = 0; j < data.length; j++) {
                        if (data[j].indexOf('@lc code=start') !== -1) {
                            isEnter = true;
                            answerData.push('<hr style="height: 1px; margin: 1em 0px;" />');
                            answerData.push('<strong>第' + (i + 1) + '次解答</strong>');
                            answerData.push('```javascript')
                            continue;
                        }
                        if (isEnter && data[j].indexOf('@lc code=end') !== -1) {
                            isEnter = false;
                            answerData.push('```')
                            break;
                        }
                        if (isEnter) answerData.push(data[j]);
                    }
                    const filePath = path.resolve('./tools/tpl/' + questionTitle + '.md');
                    
                    if(fs.existsSync(filePath)){
                        fs.unlinkSync(filePath);
                    }

                    writeFileToLine([...header, ...questionData, ...answerData], '${data}', filePath);
                }
            });
            break;
        }
    }
}

fs.readdir(pathName, function (err, files) {
    let dirList = [];
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (file.startsWith('【')) {
            dirList.push(file);
            times.push(file.split('】')[1])
        }
    }
    generatorContext(dirList);
});