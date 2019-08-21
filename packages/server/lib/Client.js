"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const msgpack_1 = __importDefault(require("msgpack"));
const nanoid_1 = __importDefault(require("nanoid"));
class Client {
    constructor(socket) {
        this.id = nanoid_1.default();
        this.socket = socket;
    }
    send(message) {
        this.socket.send(msgpack_1.default.pack(message));
    }
    get ID() {
        return this.id;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map