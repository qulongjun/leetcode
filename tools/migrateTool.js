var path = require("path");
var fs = require("fs");
var { login, getProblem, getSubmission } = require("./leetcodeAPI");
var taskPool = require("./taskPool");
var writeFileToLine = require("./writeFileToLine");

var pathName = path.resolve("./");

const validFold = ["【完结】2020-秋季", "【进行中】2021-春季"];

function prefixZero(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}

const TAG_MAP = {
  tree: "树",
  array: "数组",
  "linked-list": "链表",
  Unknown: "其他",
  brainteaser: "脑筋急转弯",
  design: "设计",
  "dynamic-programming": "动态规划",
  "hash-table": "哈希表",
  math: "数学",
  string: "字符串",
  backtracking: "回溯算法",
  heap: "堆",
};
String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
};

function makeDir(dirpath) {
  if (!fs.existsSync(dirpath)) {
    var pathtmp;
    dirpath.split("/").forEach(function (dirname) {
      if (pathtmp) {
        pathtmp = path.join(pathtmp, dirname);
      } else {
        //如果在linux系统中，第一个dirname的值为空，所以赋值为"/"
        if (dirname) {
          pathtmp = dirname;
        } else {
          pathtmp = "/";
        }
      }
      if (!fs.existsSync(pathtmp)) {
        if (!fs.mkdirSync(pathtmp)) {
          return false;
        }
      }
    });
  }
  return true;
}
login();
var pool = new taskPool();
pool.removeTask();

const fileMap = {};

const types = [
  "动态规划",
  "哈希表",
  "回溯算法",
  "堆",
  "字符串",
  "数学",
  "数组",
  "树",
  "脑筋急转弯",
  "设计",
  "链表",
  "其他",
];

function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  Y = date.getFullYear() + "-";
  M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  D = date.getDate() + " ";
  h = date.getHours() + ":";
  m = date.getMinutes() + ":";
  s = date.getSeconds();
  return `${Y}${M}${D}`;
}

const DIFF = ["Easy", "Medium", "Hard"];

function render() {
  let mkd = [];
  const keys = Object.keys(fileMap);
  keys.forEach((key) => {
    mkd.push("### " + key + "\n\n");
    mkd.push("| # | 问题 | 解答 | 难度 | 最后提交日期 |\n");
    const mapKeys = Object.keys(fileMap[key]);
    mapKeys.forEach((mapKey) => {
      const info = fileMap[key][mapKey];
      mkd.push(
        `| ${prefixZero(info.id, 4)} | [${
          info.translatedTitle
        }](https://leetcode-cn.com/problems/${
          info.titleSlug
        }/) | [Solutions](./${key}/${mapKey}/Solutions) | ${
          info.difficulty
        } | ${info.lastTime ? info.lastTime : "空"} |\n`
      );
    });
    mkd.push("\n");
  });
  writeFileToLine(mkd, '${data}', './CONTENTS.md')
}

function getFileMap() {
  const filePaths = fs.readdirSync("./");
  for (let i = 0; i < filePaths.length; i++) {
    if (types.includes(filePaths[i])) {
      if (!fileMap[filePaths[i]]) {
        fileMap[filePaths[i]] = {};
      }
      const problems = fs.readdirSync("./" + filePaths[i]);

      problems.forEach((problem) => {
        if (!fileMap[filePaths[i]][problem]) {
          fileMap[filePaths[i]][problem] = {};
        }
        let solutionBlob = fs
          .readFileSync(
            "./" + filePaths[i] + "/" + problem + "/Solutions/solution_1.js",
            "utf8"
          )
          .split(/\r\n|\n|\r/gm);

        pool.addTask(function () {
          return new Promise((resolve) => {
            setTimeout(async () => {
              const lineBlob = solutionBlob.find((blob) =>
                blob.includes("https://leetcode-cn.com/problems")
              );
              const questionTitle = lineBlob
                .replace(" * https://leetcode-cn.com/problems/", "")
                .replace("/description/", "");
              console.log("开始获取：" + questionTitle);
              const problemInfo = await getProblem(questionTitle);
              if (problemInfo) {
                // console.log(problemInfo.translatedTitle,problemInfo.difficulty);
                fileMap[filePaths[i]][problem].difficulty = problemInfo.originDifficulty;
                fileMap[filePaths[i]][problem].id = problemInfo.id;
                fileMap[filePaths[i]][problem].translatedTitle =
                problemInfo.translatedTitle;
                fileMap[filePaths[i]][problem].titleSlug = questionTitle;
              }
              const submissions = await getSubmission(questionTitle);
              const last = submissions.find(
                (submission) => submission.status === 0
              );
              if (last) {
                fileMap[filePaths[i]][problem].lastTime = timestampToTime(
                  last.timestamp
                );
              } else {
                fileMap[filePaths[i]][problem].lastTime = null;
              }
              resolve();
            }, 2000);
          });
        });
      });
    }
  }
  pool.addTask(function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        render();
        resolve();
      });
    }, 2000);
  });
}

getFileMap();

// for (let i = 0; i < validFold.length; i++) {
//   fs.readdir(pathName + "/" + validFold[i], function (err, files) {
//     for (let j = 0; j < files.length; j++) {
//       fs.readdir(
//         pathName + "/" + validFold[i] + "/" + files[j],
//         function (err, tags) {
//           for (let m = 0; m < tags.length; m++) {
//             fs.readdir(
//               pathName + "/" + validFold[i] + "/" + files[j] + "/" + tags[m],
//               function (err, problems) {
//                 for (let n = 0; n < problems.length; n++) {
//                   const newPath =
//                     "./" + TAG_MAP[tags[m]] + "/" + problems[n].split(".")[0];

//                   console.log("newPath", newPath);
//                   const dirList = fs.readdirSync(newPath + "/Solutions");
//                   console.log("dirList", dirList);
//                   if(!fileMap[tags[m]]){
//                     fileMap[tags[m]] = {};
//                   }
//                   if(!fileMap[tags[m]][problems[n].split(".")[0]]) {
//                     fileMap[tags[m]][problems[n].split(".")[0]] = {};
//                   }
//                   console.log(fileMap);
//                 }
//               }
//             );
//           }
//         }
//       );
//     }
//   });
// }
