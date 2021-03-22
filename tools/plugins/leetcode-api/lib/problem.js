"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __importDefault(require("../utils/helper"));
var submission_1 = __importDefault(require("./submission"));
var Problem = /** @class */ (function () {
    function Problem(slug, id, title, difficulty, starred, locked, likes, dislikes, status, tag, totalAccepted, totalSubmission, sampleTestCase, content, codeSnippets, translatedTitle, translatedContent) {
        this.slug = slug;
        this.id = id;
        this.title = title;
        this.difficulty = difficulty;
        this.starred = starred;
        this.locked = locked;
        this.likes = likes;
        this.dislikes = dislikes;
        this.status = status;
        this.tag = tag;
        this.totalAccepted = totalAccepted;
        this.totalSubmission = totalSubmission;
        this.sampleTestCase = sampleTestCase;
        this.content = content;
        this.codeSnippets = codeSnippets;
        this.translatedTitle = translatedTitle;
        this.translatedContent = translatedContent;
    }
    Problem.setUris = function (uris) {
        Problem.uris = uris;
    };
    Problem.prototype.detail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, question, stats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helper_1.default.GraphQLRequest({
                            query: "\n                query getQuestionDetail($titleSlug: String!) {\n                    question(titleSlug: $titleSlug) {\n                        questionId\n                        title\n                        difficulty\n                        likes\n                        dislikes\n                        isLiked\n                        isPaidOnly\n                        stats\n                        status\n                        content\n                        translatedContent\n                        translatedTitle\n                        topicTags {\n                            name\n                        }\n                        codeSnippets {\n                            lang\n                            langSlug\n                            code\n                        }\n                        sampleTestCase\n                    }\n                }\n            ",
                            variables: {
                                titleSlug: this.slug,
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        question = response.question;
                        this.id = Number(question.questionId);
                        this.title = question.title;
                        this.difficulty = helper_1.default.difficultyMap(question.difficulty);
                        this.starred = question.isLiked !== null;
                        this.locked = question.isPaidOnly;
                        this.likes = question.likes;
                        this.dislikes = question.dislikes;
                        this.status = helper_1.default.statusMap(question.status);
                        this.tag = question.topicTags.map(function (t) {
                            return t.name;
                        });
                        stats = JSON.parse(question.stats);
                        this.totalAccepted = stats.totalAcceptedRaw;
                        this.totalSubmission = stats.totalSubmissionRaw;
                        this.sampleTestCase = question.sampleTestCase;
                        this.content = question.content;
                        this.codeSnippets = question.codeSnippets;
                        this.translatedContent = question.translatedContent;
                        this.translatedTitle = question.translatedTitle;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Problem.prototype.getSubmissions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var submissions, offet, limit, hasNext, response, submission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        submissions = [];
                        offet = 0;
                        limit = 20;
                        hasNext = true;
                        _a.label = 1;
                    case 1:
                        if (!hasNext) return [3 /*break*/, 3];
                        return [4 /*yield*/, helper_1.default.GraphQLRequest({
                                query: "\n                query Submissions($offset: Int!, $limit: Int!, $questionSlug: String!) {\n                    submissionList(offset: $offset, limit: $limit, questionSlug: $questionSlug) {\n                        lastKey\n                        hasNext\n                        submissions {\n                            id\n                            statusDisplay\n                            lang\n                            runtime\n                            timestamp\n                            url\n                            isPending\n                            memory\n                        }\n                    }\n                }\n                ",
                                variables: {
                                    offset: offet,
                                    limit: limit,
                                    questionSlug: this.slug,
                                }
                            })];
                    case 2:
                        response = _a.sent();
                        hasNext = response.submissionList.hasNext;
                        submission = response.submissionList.submissions;
                        offet += submission.length;
                        submission.map(function (s) {
                            submissions.push(new submission_1.default(Number(s.id), s.isPending, s.lang, s.memory, s.runtime, helper_1.default.submissionStatusMap(s.statusDisplay), Number(s.timestamp)));
                        });
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, submissions];
                }
            });
        });
    };
    Problem.prototype.submit = function (lang, code) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helper_1.default.HttpRequest({
                            url: Problem.uris.submit.replace("$slug", this.slug),
                            method: "POST",
                            body: {
                                lang: lang,
                                "question_id": this.id,
                                "typed_code": code,
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new submission_1.default(JSON.parse(response).submission_id)];
                }
            });
        });
    };
    return Problem;
}());
exports.default = Problem;
//# sourceMappingURL=problem.js.map