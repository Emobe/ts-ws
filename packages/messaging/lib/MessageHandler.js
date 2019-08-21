"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_collections_1 = require("@emobe/ts-collections");
const msgpack_1 = __importDefault(require("msgpack"));
class MessageHandler {
    constructor() {
        this.actions = new ts_collections_1.Dictionary();
        this.respondTo = this.respondTo.bind(this);
    }
    respondTo(action, callback) {
        this.actions.add(action, callback);
        return this;
    }
    handleMessage(data, id) {
        const message = msgpack_1.default.unpack(data);
        this.actions.Items[message.action](message.data);
    }
    send(socket, message) {
        const data = msgpack_1.default.pack(message);
        socket.send(data);
    }
}
exports.default = MessageHandler;
//# sourceMappingURL=MessageHandler.js.map