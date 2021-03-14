var path = require("path");
var fs = require("fs");

function readFileList(dir, filesList = [], splitStr) {
    const files = fs.readdirSync(dir);

    files.forEach((item, index) => {
        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            readFileList(path.join(dir, item), filesList, splitStr); //递归读取文件
        } else {
            filesList.push(fullPath.split(splitStr + '/')[1].split('/'));
        }
    });
    return filesList;
}

module.exports = readFileList;