"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(socket) {
        this.socket = socket;
    }
    send(message) {
        this.socket.send(message);
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map