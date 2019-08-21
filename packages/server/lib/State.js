"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class State {
    constructor() {
        this.state = new rxjs_1.BehaviorSubject({});
    }
    get getState() {
        return this.state.value;
    }
    subscribe(callback) {
        this.state.subscribe(callback);
    }
}
exports.State = State;
//# sourceMappingURL=State.js.map