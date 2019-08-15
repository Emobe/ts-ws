"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_collections_1 = require("@emobe/ts-collections");
class Room {
    constructor() {
        this.clients = new ts_collections_1.ObservableDictionary();
    }
    add(key, client) {
        this.clients.add(key, client);
    }
}
exports.Room = Room;
//# sourceMappingURL=Room.js.map