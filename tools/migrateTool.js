var path = require("path");
var fs = require("fs");
var { login, getProblem } = require("./leetcodeAPI");
var taskPool = require("./taskPool");
var writeFileToLine = require('./writeFileToLine');

var pathName = path.resolve("./");

const validFold = ["【完结】2020-秋季", "【进行中】2021-春季"];

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
String.prototype.replaceAll = function(s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
}

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

const ProblemDifficulty = ['Easy', 'Medium', 'Hard'];
// const DIFF = ["Easy", "Medium", "Hard"];
const ProblemDifficultyColor = [
  "rgb(90, 183, 38)",
  "rgb(255, 161, 25)",
  "rgb(236, 76, 71)",
];

for (let i = 0; i < validFold.length; i++) {
  fs.readdir(pathName + "/" + validFold[i], function (err, files) {
    for (let j = 0; j < files.length; j++) {
      fs.readdir(
        pathName + "/" + validFold[i] + "/" + files[j],
        function (err, tags) {
          for (let m = 0; m < tags.length; m++) {
            fs.readdir(
              pathName + "/" + validFold[i] + "/" + files[j] + "/" + tags[m],
              function (err, problems) {
                for (let n = 0; n < problems.length; n++) {
                  const newPath =
                    "./" + TAG_MAP[tags[m]] + "/" + problems[n].split(".")[0];

                  const data = fs
                    .readFileSync(newPath + "/Solutions/solution_1.js", "utf8")
                    .split(/\r\n|\n|\r/gm);
                  // console.log(data);
                  const urls = data.find(
                    (item) =>
                      item.indexOf(" * https://leetcode-cn.com/problems/") !==
                      -1
                  );
                  const questionTitle = urls
                    .replace(" * https://leetcode-cn.com/problems/", "")
                    .replace("/description/", "");

                  pool.addTask(function () {
                    return new Promise((resolve) => {
                      setTimeout(() => {
                        getProblem(questionTitle).then((res) => {
                          let header = [];
                          let questionData = [];
                          let difficulty = res.difficulty;

                          let translatedContent = res.translatedContent;
                          const imgReg = /<img.*?(?:>|\/>)/gi;
                          const originImgList = res.content.match(imgReg);
                          const translatedImgList =
                            res.translatedContent.match(imgReg) || [];

                          for (let i = 0; i < translatedImgList.length; i++) {
                            translatedContent = translatedContent.replace(
                              translatedImgList[i],
                              originImgList[i]
                            );
                          }

                          header.push(
                            `<div style="font-size: 20px; margin-bottom: 15px; font-weight: bold;">${res.id}. ${res.translatedTitle}</div>`
                          );
                          header.push(
                            `<div style="display: flex; font-size: 14px; justify-content: space-between;"><div><span style="margin-right: 30px;">难度:&nbsp;&nbsp;<label style="color: ${
                              ProblemDifficultyColor[difficulty]
                            };">${
                              ProblemDifficulty[difficulty]
                            }</label></span><span style="margin-right: 30px;">标签:&nbsp;&nbsp;${
                              res.tag.length === 0
                                ? "暂无"
                                : res.tag
                                    .map((item) => `<code>${item}</code>`)
                                    .join("&nbsp;")
                            }</span></div><div><span style="margin-right: 15px;"><a href="${
                              "https://leetcode.com/problems/" +
                              questionTitle +
                              "/"
                            }">英文原题</a></span><span><a href="${
                              "https://leetcode-cn.com/problems/" +
                              questionTitle +
                              "/"
                            }">访问源站</a></span></div>`
                          );

                          header.push(
                            '<hr style="height: 1px; margin: 1em 0px;" />'
                          );

                          questionData.push(
                            translatedContent
                              .replaceAll("<=", "&lt;=")
                              .replaceAll(">=", "&gt;=")
                          );

                          if (fs.existsSync(newPath + "/Problem.md")) {
                            fs.unlinkSync(newPath + "/Problem.md");
                          }
                          writeFileToLine([].concat(header).concat(questionData), '${data}', newPath + "/Problem.md");
                          resolve();
                        });
                      }, 2000);
                    });
                  });

                  // login();

                  // makeDir(newPath + '/Solutions');

                  // makeDir(newPath + '/Articles')

                  // const oldPath =
                  //   pathName +
                  //   "/" +
                  //   validFold[i] +
                  //   "/" +
                  //   files[j] +
                  //   "/" +
                  //   tags[m] +
                  //   "/" +
                  //   problems[n];

                  // const solutions = fs.readdirSync(newPath);

                  // fs.copyFileSync(
                  //   oldPath,
                  //   newPath +
                  //     "/" +
                  //     "solution_" +
                  //     (solutions.length + 1) +
                  //     ".js"
                  // );
                }
              }
            );
          }
        }
      );
    }
  });
}
