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
var errors_1 = require("request-promise-native/errors");
var helper_1 = __importDefault(require("../utils/helper"));
var problem_1 = __importDefault(require("./problem"));
var Leetcode = /** @class */ (function () {
    function Leetcode(credit) {
        this.session = credit.session;
        this.csrfToken = credit.csrfToken;
    }
    Leetcode.setUris = function (uris) {
        Leetcode.uris = uris;
    };
    Object.defineProperty(Leetcode.prototype, "credit", {
        get: function () {
            return {
                session: this.session,
                csrfToken: this.csrfToken,
            };
        },
        enumerable: false,
        configurable: true
    });
    Leetcode.build = function (username, password, endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var credit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        helper_1.default.switchEndPoint(endpoint);
                        return [4 /*yield*/, this.login(username, password)];
                    case 1:
                        credit = _a.sent();
                        helper_1.default.setCredit(credit);
                        return [2 /*return*/, new Leetcode(credit)];
                }
            });
        });
    };
    Leetcode.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, token, credit, _response, session, csrfToken, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helper_1.default.HttpRequest({
                            url: Leetcode.uris.login,
                            resolveWithFullResponse: true,
                        })];
                    case 1:
                        response = _a.sent();
                        token = helper_1.default.parseCookie(response.headers['set-cookie'], "csrftoken");
                        credit = {
                            csrfToken: token
                        };
                        helper_1.default.setCredit(credit);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, helper_1.default.HttpRequest({
                                method: "POST",
                                url: Leetcode.uris.login,
                                form: {
                                    csrfmiddlewaretoken: token,
                                    login: username,
                                    password: password,
                                },
                                resolveWithFullResponse: true,
                            })];
                    case 3:
                        _response = _a.sent();
                        session = helper_1.default.parseCookie(_response.headers['set-cookie'], "LEETCODE_SESSION");
                        csrfToken = helper_1.default.parseCookie(_response.headers['set-cookie'], "csrftoken");
                        credit = {
                            session: session,
                            csrfToken: csrfToken,
                        };
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        if (e_1 instanceof errors_1.StatusCodeError) {
                            throw new Error("Login Fail");
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, credit];
                }
            });
        });
    };
    Leetcode.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helper_1.default.GraphQLRequest({
                            query: "\n            {\n                user {\n                    username\n                }\n            }\n            "
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.user];
                }
            });
        });
    };
    Leetcode.prototype.getAllProblems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, problems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helper_1.default.HttpRequest({
                            url: Leetcode.uris.problemsAll,
                        })];
                    case 1:
                        response = _a.sent();
                        response = JSON.parse(response);
                        problems = response.stat_status_pairs.map(function (p) {
                            return new problem_1.default(p.stat.question__title_slug, p.stat.question_id, p.stat.question__title, helper_1.default.difficultyMap(p.difficulty.level), p.is_favor, p.paid_only, undefined, undefined, helper_1.default.statusMap(p.status), undefined, p.stat.total_acs, p.stat.total_submitted, undefined, undefined, undefined);
                        });
                        return [2 /*return*/, problems];
                }
            });
        });
    };
    Leetcode.prototype.getProblemsByTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var response, problems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helper_1.default.GraphQLRequest({
                            query: "\n                query getTopicTag($slug: String!) {\n                    topicTag(slug: $slug) {\n                        questions {\n                            status\n                            questionId\n                            title\n                            titleSlug\n                            stats\n                            difficulty\n                            isPaidOnly\n                            topicTags {\n                                slug\n                            }\n                        }\n                    }\n                }\n            ",
                            variables: {
                                slug: tag,
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        problems = response.topicTag.questions.map(function (p) {
                            var stat = JSON.parse(p.stats);
                            return new problem_1.default(p.titleSlug, p.questionId, p.title, stat.title, undefined, p.isPaidOnly, undefined, undefined, helper_1.default.statusMap(p.status), p.topicTags.map(function (t) { return t.slug; }), stat.totalAcceptedRaw, stat.totalSubmissionRaw, undefined, undefined, undefined);
                        });
                        return [2 /*return*/, problems];
                }
            });
        });
    };
    return Leetcode;
}());
exports.default = Leetcode;
//# sourceMappingURL=leetcode.js.map