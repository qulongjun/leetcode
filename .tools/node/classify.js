const path = require("path");
const fs = require("fs");
const taskPool = require("../plugins/taskPool");
const { login, getProblem } = require("../plugins/leetcodeAPI");
const { choosePath } = require("./interaction");
const { fileDisplay } = require('./utils');

login();

const pathName = path.resolve("./");

var pool = new taskPool();
pool.removeTask();

function getProblemSlug(fileDir) {
  let questionBuf = fs.readFileSync(fileDir, "utf8").split(/\r\n|\n|\r/gm);

  const urlRow = questionBuf.find(
    (item) => item.indexOf("* https://leetcode-cn.com/problems") !== -1
  );

  return urlRow
    ? urlRow
        .replace(" * https://leetcode-cn.com/problems/", "")
        .replace("/description/", "")
    : null;
}

async function renderProblem(slug, problemName, filedir) {
  const detail = await getProblem(slug);
  await choosePath(detail, problemName, filedir);
}

function problemTask(filedir) {
  const problemSlug = getProblemSlug(filedir);
  const fileName = filedir.split("/")[filedir.split("/").length - 1];
  const problemName = fileName.split(".")[1];

  if (problemSlug) {
    pool.addTask(function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          renderProblem(problemSlug, problemName, filedir).then(resolve);
        }, 2000);
      });
    });
  }
}

fileDisplay(path.resolve(pathName, "未归类"), problemTask);
