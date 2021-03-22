"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPoint = exports.SubmissionStatus = exports.ProblemDifficulty = exports.ProblemStatus = void 0;
var ProblemStatus;
(function (ProblemStatus) {
    ProblemStatus[ProblemStatus["Accept"] = 0] = "Accept";
    ProblemStatus[ProblemStatus["Not Accept"] = 1] = "Not Accept";
    ProblemStatus[ProblemStatus["Not Start"] = 2] = "Not Start";
})(ProblemStatus || (ProblemStatus = {}));
exports.ProblemStatus = ProblemStatus;
var ProblemDifficulty;
(function (ProblemDifficulty) {
    ProblemDifficulty[ProblemDifficulty["Easy"] = 0] = "Easy";
    ProblemDifficulty[ProblemDifficulty["Medium"] = 1] = "Medium";
    ProblemDifficulty[ProblemDifficulty["Hard"] = 2] = "Hard";
})(ProblemDifficulty || (ProblemDifficulty = {}));
exports.ProblemDifficulty = ProblemDifficulty;
var SubmissionStatus;
(function (SubmissionStatus) {
    SubmissionStatus[SubmissionStatus["Accepted"] = 0] = "Accepted";
    SubmissionStatus[SubmissionStatus["Compile Error"] = 1] = "Compile Error";
    SubmissionStatus[SubmissionStatus["Wrong Answer"] = 2] = "Wrong Answer";
    SubmissionStatus[SubmissionStatus["Time Limit Exceeded"] = 3] = "Time Limit Exceeded";
})(SubmissionStatus || (SubmissionStatus = {}));
exports.SubmissionStatus = SubmissionStatus;
var EndPoint;
(function (EndPoint) {
    EndPoint[EndPoint["US"] = 0] = "US";
    EndPoint[EndPoint["CN"] = 1] = "CN";
})(EndPoint || (EndPoint = {}));
exports.EndPoint = EndPoint;
//# sourceMappingURL=interfaces.js.map