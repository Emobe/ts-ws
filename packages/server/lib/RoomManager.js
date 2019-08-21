"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_collections_1 = require("@emobe/ts-collections");
const RoomFactory_1 = require("./RoomFactory");
const Lobby_1 = require("./Lobby");
class RoomManager {
    constructor() {
        this.factory = new RoomFactory_1.RoomFactory();
        this.rooms = new ts_collections_1.ObservableDictionary();
        this.createRoom("lobby", Lobby_1.Lobby);
    }
    createRoom(key, room) {
        this.rooms.add(key, this.factory.create(room));
    }
    get Rooms() {
        return this.rooms;
    }
    join(room, client) {
        if (client.room) {
            this.leave(client.room, client);
        }
        client.room = room;
        this.rooms.get(room).add(client.ID, client);
    }
    leave(room, client) {
        this.rooms.get(client.room).remove(client.ID);
    }
}
exports.RoomManager = RoomManager;
//# sourceMappingURL=RoomManager.js.map