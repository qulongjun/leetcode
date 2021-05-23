const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const writeFileToLine = require("../plugins/writeFileToLine");
const {
  getCurrentProblemTag,
  findSync,
  prefixZero,
  mkdirsSync,
} = require("./utils");

String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
};

// 计算命令行中选中的目录地址
function getTagPath(answer) {
  let rootPath = "";
  if (answer.tagType === "new") {
    rootPath += answer.tagName;
  } else {
    if (answer.series === "new") {
      rootPath += "_系列题型_/" + answer.tagName;
    } else {
      if (answer.series) {
        rootPath += answer.series;
      } else {
        rootPath += answer.tag;
      }
    }
  }

  return rootPath;
}

// 命令行交互
async function choosePath(problemDetail, problemName, filedir) {
  // 获取Problem文件名，格式【00xx】xxxxx
  const filePath = "【" + prefixZero(problemDetail.id, 4) + "】" + problemName;
  // 查找所有可用分类文件夹['数组', '数学', '链表', '设计'...]
  const problemFiles = findSync("./");
  // 计算当前 Problem 已经存在在哪个分类下
  const currentTag = getCurrentProblemTag(filePath, problemFiles);
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      message: "是否对【" + problemName + "】进行分类?",
      name: "isTag",
      default: "Y", // 默认值
    },
    {
      type: "list",
      message:
        "请选择应用【" +
        problemName +
        "】的分类文件夹(" +
        (currentTag
          ? "当前已归类在【" + currentTag + "】中"
          : "当前未归类" + "):"),
      choices: [
        { name: "使用已有分类", value: "old" },
        { name: "创建新分类", value: "new" },
      ],
      default: currentTag ? "old" : "new",
      name: "tagType",
      when: (answer) => answer.isTag,
    },
    {
      type: "list",
      message: "请选择已有分类文件夹:",
      choices: [...problemFiles.map((dir) => ({ name: dir, value: dir }))],
      name: "tag",
      default: currentTag,
      when: (answer) => answer.tagType === "old",
    },
    {
      type: "list",
      message: "请选择需要将【" + problemName + "】分类到哪个系列:",
      choices: [
        ...findSync("./_系列题型_/").map((dir) => ({
          name: dir,
          value: dir,
        })),
        { name: "创建新系列", value: "new" },
      ],
      when: (answer) => answer.tag === "_系列题型_",
      name: "series",
    },
    {
      type: "input",
      message: "设置一个分类文件夹名称:",
      name: "tagName",
      default: problemDetail.tag.join(' / '), // 默认值
      when: (answer) => answer.tagType === "new" || answer.series === "new",
    },
    {
      type: "confirm",
      message: (answer) =>
        "是否将【" + problemName + "】分类至 【" + getTagPath(answer) + "】",
      name: "confirm",
      default: "Y", // 默认值
      when: (answer) => answer.isTag,
    },
    {
      type: "confirm",
      message: (answer) => "【" + getTagPath(answer) + "】分类不存在，是否创建",
      name: "confirmNewCreate",
      default: "Y", // 默认值
      when: (answer) =>
        answer.confirm &&
        !fs.existsSync(path.resolve("./") + "/" + getTagPath(answer)),
    },
    {
      type: "checkbox",
      message: "选择需要初始化的内容:",
      name: "initList",
      when: (answer) => answer.confirm,
      choices: [
        {
          // name: "问题描述",
          name: "问题描述（若存在，则更新）",
          value: "Problem.md",
          checked: true,
        },
        {
          // name: "追加解答",
          name: "追加解答",
          value: "Solutions",
          checked: true,
        },
        new inquirer.Separator("--- 其他可选 ---"), // 自定义分隔符
        {
          message: "【注意】笔记（若存在，则覆盖）",
          value: "Articles/note.md",
        },
      ],
    },
  ]);

  if (answer.confirm) {
    const tagPath = path.resolve("./") + "/" + getTagPath(answer);

    answer.confirmNewCreate && mkdirsSync(tagPath);
    const initList = answer.initList;
    mkdirsSync(tagPath + "/" + filePath);
    if (initList.includes("Problem.md")) {
      const problemPath = tagPath + "/" + filePath + "/Problem.md";
      if (fs.existsSync(problemPath)) {
        fs.unlinkSync(problemPath);
      }
      let translatedContent = problemDetail.translatedContent;
      const imgReg = /<img.*?(?:>|\/>)/gi;
      const originImgList = problemDetail.content.match(imgReg);
      const translatedImgList = translatedContent.match(imgReg) || [];

      for (let i = 0; i < translatedImgList.length; i++) {
        translatedContent = translatedContent.replace(
          translatedImgList[i],
          originImgList[i]
        );
      }
      const problemData = translatedContent
        .replaceAll("<=", "&lt;=")
        .replaceAll(">=", "&gt;=");
      writeFileToLine(problemData, "", problemPath);
    }

    if (initList.includes("Articles/note.md")) {
      const notePath = tagPath + "/" + filePath + "/Articles/note.md";

      const noteTemplate = fs
        .readFileSync(".tools/templates/note.md", "utf8")
        .split(/\r\n|\n|\r/gm);

      mkdirsSync(tagPath + "/" + filePath + "/Articles");
      if (fs.existsSync(notePath)) {
        fs.unlinkSync(notePath);
      }

      for (let i = 0; i < noteTemplate.length; i++) {
        noteTemplate[i] = noteTemplate[i].replaceAll("@title", problemName);
      }
      writeFileToLine(noteTemplate, "", notePath);
    }

    if (initList.includes("Solutions")) {
      const solutionsPath = tagPath + "/" + filePath + "/Solutions";
      if (fs.existsSync(solutionsPath)) {
        const solutionList = fs.readdirSync(solutionsPath);
        console.log("solutionList", solutionList);
        const solutionName = "solution_" + (solutionList.length + 1) + ".js";
        fs.copyFileSync(filedir, solutionsPath + "/" + solutionName);
      } else {
        const solutionName = "solution_1.js";
        mkdirsSync(solutionsPath);
        fs.copyFileSync(filedir, solutionsPath + "/" + solutionName);
      }
    }

    const result = await inquirer.prompt([
      {
        type: "confirm",
        message: "是否删除未归类文件夹下的【" + problemName + "】临时解答？",
        name: "confirm",
        default: "Y", // 默认值
      },
    ]);

    result.confirm && fs.existsSync(filedir) && fs.unlinkSync(filedir);
  }

  return true;
}

module.exports = {
  choosePath,
};
