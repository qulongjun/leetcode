import { ProblemDifficulty, ProblemStatus, Uris } from "../utils/interfaces";
import Submission from "./submission";
declare class Problem {
    readonly slug: string;
    id?: number | undefined;
    title?: string | undefined;
    difficulty?: ProblemDifficulty | undefined;
    starred?: boolean | undefined;
    locked?: boolean | undefined;
    likes?: number | undefined;
    dislikes?: number | undefined;
    status?: ProblemStatus | undefined;
    tag?: string[] | undefined;
    totalAccepted?: number | undefined;
    totalSubmission?: number | undefined;
    sampleTestCase?: string | undefined;
    content?: string | undefined;
    codeSnippets?: any[] | undefined;
    translatedTitle?: string | undefined;
    translatedContent?: string | undefined;
    static uris: Uris;
    static setUris(uris: Uris): void;
    constructor(slug: string, id?: number | undefined, title?: string | undefined, difficulty?: ProblemDifficulty | undefined, starred?: boolean | undefined, locked?: boolean | undefined, likes?: number | undefined, dislikes?: number | undefined, status?: ProblemStatus | undefined, tag?: string[] | undefined, totalAccepted?: number | undefined, totalSubmission?: number | undefined, sampleTestCase?: string | undefined, content?: string | undefined, codeSnippets?: any[] | undefined, translatedTitle?: string | undefined, translatedContent?: string | undefined);
    detail(): Promise<Problem>;
    getSubmissions(): Promise<Array<Submission>>;
    submit(lang: string, code: string): Promise<Submission>;
}
export default Problem;
