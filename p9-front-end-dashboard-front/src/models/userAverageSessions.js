import { userAverageSession } from "./userAverageSession";
export class userAverageSessions {
    constructor(data) {
        this.UserId = data.UserId;
        this.sessions = new userAverageSession(data.sessions);
    }
}