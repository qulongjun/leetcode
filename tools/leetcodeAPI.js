const Leetcode = require("../tools/plugins/leetcode-api").default;
const Problem = require("../tools/plugins/leetcode-api/lib/problem").default;
const OpenIniFile = require("./plugins/InIReader/index");
const LEETCODE = OpenIniFile("tools/config.ini").LEETCODE;

// 登录 Leetcode
async function login() {
  leetcode = await Leetcode.build(
    LEETCODE.username,
    LEETCODE.password,
    LEETCODE.end_point === "CN" ? 1 : 0
  );
}

// 构建 Problem 对象进行查找（前提必须已经登录）
async function getProblem(problemSlug) {
  const problem = new Problem(problemSlug);
  const problemDetail = await problem.detail();

  return problemDetail;
}

async function getProblems(problemList) {
  let results = {};

  // 登录 leetcode
  await login();

  // 遍历查找每一个 Problem
  for (let i = 0; i < problemList.length; i++) {
    let problemDetail = await getProblem(problemList[i]);
    results[problemList[i]] = problemDetail;
  }

  return results;
}

async function getSubmission(problemSlug) {
  await login();

  const problem = new Problem(problemSlug);

  return problem.getSubmissions();

}

module.exports = {
  getProblem,
  getProblems,
  login,
  getSubmission,
};
