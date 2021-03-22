var fs = require("fs");

//往固定的行写入数据
function writeFileToLine(value, prefix, path) {
    fs.access(path, err => {
        if (err && err.code == "ENOENT") {
            fs.writeFileSync(path, Array.isArray(value)? value.join('\r\n'): value)
        } else {
            // readFileSync的第一个参数是文件名
            let data = fs.readFileSync(path, 'utf8').split(/\r\n|\n|\r/gm);
            data.splice(data.findIndex(item => item === prefix), 1, value);
            fs.writeFileSync(path, data.join('\r\n'))
        }
    });
}

module.exports = writeFileToLine;