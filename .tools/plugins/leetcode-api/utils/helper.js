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
var graphql_request_1 = require("graphql-request");
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var config_1 = __importDefault(require("../lib/config"));
var leetcode_1 = __importDefault(require("../lib/leetcode"));
var problem_1 = __importDefault(require("../lib/problem"));
var submission_1 = __importDefault(require("../lib/submission"));
var interfaces_1 = require("./interfaces");
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.setCredit = function (credit) {
        Helper.credit = credit;
    };
    Helper.setUris = function (uris) {
        Helper.uris = uris;
    };
    Helper.parseCookie = function (cookies, key) {
        if (!cookies) {
            return "";
        }
        for (var ix = 0; ix !== cookies.length; ++ix) {
            var result = cookies[ix].match(new RegExp(key + "=(.+?);"));
            if (result) {
                return result[1] || "";
            }
        }
        return "";
    };
    Helper.levelToName = function (level) {
        switch (level) {
            case 1: return 'Easy';
            case 2: return 'Medium';
            case 3: return 'Hard';
            default: return '';
        }
    };
    Helper.statusMap = function (status) {
        switch (status) {
            case "ac": return interfaces_1.ProblemStatus["Accept"];
            case "notac": return interfaces_1.ProblemStatus["Not Accept"];
            case null: return interfaces_1.ProblemStatus["Not Start"];
            default: return interfaces_1.ProblemStatus["Not Start"];
        }
    };
    Helper.difficultyMap = function (difficulty) {
        switch (difficulty) {
            case 1: return interfaces_1.ProblemDifficulty.Easy;
            case 2: return interfaces_1.ProblemDifficulty.Medium;
            case 3: return interfaces_1.ProblemDifficulty.Hard;
            default: return interfaces_1.ProblemDifficulty.Easy;
        }
    };
    Helper.submissionStatusMap = function (submission) {
        switch (submission) {
            case "Accepted": return interfaces_1.SubmissionStatus["Accepted"];
            case "Compile Error": return interfaces_1.SubmissionStatus["Compile Error"];
            case "Time Limit Exceeded": return interfaces_1.SubmissionStatus["Time Limit Exceeded"];
            case "Wrong Answer": return interfaces_1.SubmissionStatus["Wrong Answer"];
            case "10": return interfaces_1.SubmissionStatus["Accepted"];
            case "11": return interfaces_1.SubmissionStatus["Wrong Answer"];
            case "14": return interfaces_1.SubmissionStatus["Time Limit Exceeded"];
            case "20": return interfaces_1.SubmissionStatus["Compile Error"];
            // TODO : find out what this numbers mean
            // 12 => MLE
            // 13 => OLE
            // 15 => RE
            // 16 => IE
            // 21 => UE
            // 30 => TO
            // default => UE
            default: return interfaces_1.SubmissionStatus["Wrong Answer"];
        }
    };
    Helper.HttpRequest = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request_promise_native_1.default({
                            method: options.method || "GET",
                            uri: options.url,
                            followRedirect: false,
                            headers: {
                                Cookie: Helper.credit ? "LEETCODE_SESSION=" + Helper.credit.session + ";csrftoken=" + Helper.credit.csrfToken : "",
                                "X-Requested-With": 'XMLHttpRequest',
                                "X-CSRFToken": Helper.credit ? Helper.credit.csrfToken : "",
                                Referer: options.referer || Helper.uris.base,
                            },
                            resolveWithFullResponse: options.resolveWithFullResponse || false,
                            form: options.form || null,
                            body: JSON.stringify(options.body) || "",
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Helper.GraphQLRequest = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new graphql_request_1.GraphQLClient(Helper.uris.graphql, {
                            headers: {
                                Origin: options.origin || Helper.uris.base,
                                Referer: options.referer || Helper.uris.base,
                                Cookie: "LEETCODE_SESSION=" + Helper.credit.session + ";csrftoken=" + Helper.credit.csrfToken + ";",
                                "X-Requested-With": 'XMLHttpRequest',
                                "X-CSRFToken": Helper.credit.csrfToken,
                            }
                        });
                        return [4 /*yield*/, client.request(options.query, options.variables || {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Helper.switchEndPoint = function (endPoint) {
        if (endPoint === interfaces_1.EndPoint.US) {
            var uris = config_1.default.uri.us;
            Helper.setUris(uris);
            leetcode_1.default.setUris(uris);
            problem_1.default.setUris(uris);
            submission_1.default.setUris(uris);
        }
        else if (endPoint === interfaces_1.EndPoint.CN) {
            var uris = config_1.default.uri.cn;
            Helper.setUris(uris);
            leetcode_1.default.setUris(uris);
            problem_1.default.setUris(uris);
            submission_1.default.setUris(uris);
        }
    };
    return Helper;
}());
exports.default = Helper;
//# sourceMappingURL=helper.js.map