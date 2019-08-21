"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_ws_1 = __importDefault(require("isomorphic-ws"));
const RoomManager_1 = require("./RoomManager");
const ServerState_1 = require("./ServerState");
const messaging_1 = __importDefault(require("@ts-ws/messaging"));
const Client_1 = require("./Client");
class Server {
    constructor(port) {
        this.roomManager = new RoomManager_1.RoomManager();
        this.state = new ServerState_1.ServerState();
        this.messages = new messaging_1.default();
        this.ws = new isomorphic_ws_1.default.Server({ port });
        this.ws.on("connection", socket => this.connected(socket));
    }
    connected(socket) {
        const client = new Client_1.Client(socket);
        const id = client.ID;
        socket.on("message", (message // TODO fix issue with typing
        ) => this.messages.handleMessage(message, id));
        this.roomManager.join("lobby", client);
        this.messages.send(socket, { action: "handshake", data: { id } });
    }
    close() {
        this.ws.close();
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map