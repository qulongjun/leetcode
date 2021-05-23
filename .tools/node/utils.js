const path = require("path");
const fs = require("fs");
const join = require("path").join;

const ignoreDirNames = [".git", ".tools", "未归类"];

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath, callbacks) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err);
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn("获取文件stats失败");
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              callbacks && callbacks(filedir);
            }
            if (isDir) {
              fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
}

function dirDisplay(filePath, callbacks, obj) {
  //根据文件路径读取文件，返回文件列表
  const files = fs.readdirSync(filePath);

  //遍历读取到的文件列表
  files.forEach(function (filename) {
    //获取当前文件的绝对路径
    var filedir = path.join(filePath, filename);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    const result = fs.statSync(filedir);
    if (result.isDirectory()) {
      const current = callbacks && callbacks(filedir);
      if (current !== null) obj.current = current;
      fileDisplay(filedir, callbacks, obj); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}

/**
 * 获取当前 Problem 已经被归类的标签
 * @param {*} fileName 问题名称，目前格式：【00ID】xxxxxx
 * @param {*} dirList 检索文件夹列表
 * @returns
 */
function getCurrentProblemTag(fileName, dirList) {
  if (!fileName) return null;
  if (dirList.length === 0) return null;

  function getFilePosition(filedir) {
    const dirNameList = filedir.split("/");
    const dirName = dirNameList[dirNameList.length - 1];
    return dirName === fileName ? dirNameList : null;
  }

  let currentTag = "";

  for (let i = 0; i < dirList.length; i++) {
    let obj = {};
    dirDisplay(path.resolve("./" + "/" + dirList[i]), getFilePosition, obj);
    if (obj && obj.current) {
      currentTag = obj.current[obj.current.length - 2];
      break;
    }
  }

  return currentTag;
}

/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
  let result = [];
  function finder(path) {
    let files = fs.readdirSync(path);
    files.forEach((val, index) => {
      let fPath = join(path, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory() && !ignoreDirNames.includes(fPath)) {
        result.push(fPath);
        // 递归读取文件夹下文件
        // finder(fPath);
      }
      // 读取文件名
      // if(stats.isFile()) result.push(fPath);
    });
  }
  finder(startPath);
  return result;
}

function prefixZero(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}

function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

module.exports = {
  fileDisplay,
  dirDisplay,
  getCurrentProblemTag,
  findSync,
  prefixZero,
  mkdirsSync
};
