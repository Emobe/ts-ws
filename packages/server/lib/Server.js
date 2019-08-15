"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const RoomManager_1 = require("./RoomManager");
const nanoid_1 = __importDefault(require("nanoid"));
const Client_1 = require("./Client");
class Server {
    constructor(port) {
        this.roomManager = new RoomManager_1.RoomManager();
        this.ws = new ws_1.default.Server({ port });
        this.ws.on("connection", socket => this.connected(socket));
    }
    connected(socket) {
        const id = nanoid_1.default();
        const client = new Client_1.Client(socket);
        this.roomManager.Rooms.lobby.add(id, client);
    }
    close() {
        this.ws.close();
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map