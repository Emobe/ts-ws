"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_collections_1 = require("@emobe/ts-collections");
class Room {
    constructor(id) {
        this.clients = new ts_collections_1.ObservableDictionary();
        this.clients$ = this.clients.items$;
        this.id = id;
    }
    add(key, client) {
        this.clients.add(key, client);
    }
    set onUpdate(callback) {
        this.clients.items$.subscribe(callback);
    }
    remove(key) {
        this.clients.remove(key);
    }
    get Clients() {
        return this.clients;
    }
}
exports.Room = Room;
//# sourceMappingURL=Room.js.map