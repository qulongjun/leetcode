import { Credit, EndPoint, Uris } from '../utils/interfaces';
import Problem from './problem';
declare class Leetcode {
    session?: string;
    csrfToken: string;
    static uris: Uris;
    static setUris(uris: Uris): void;
    constructor(credit: Credit);
    get credit(): Credit;
    static build(username: string, password: string, endpoint: EndPoint): Promise<Leetcode>;
    static login(username: string, password: string): Promise<Credit>;
    getProfile(): Promise<any>;
    getAllProblems(): Promise<Array<Problem>>;
    getProblemsByTag(tag: string): Promise<Array<Problem>>;
}
export default Leetcode;
