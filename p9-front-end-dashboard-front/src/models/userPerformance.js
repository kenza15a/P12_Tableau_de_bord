import userPerformanceKind from './userPerformanceKind';
export class userPerformance {
    constructor(data) {
        this.UseID = data.UseID;
        this.kind = new userPerformanceKind(data.kind);
        this.data = data.data;
    }
}