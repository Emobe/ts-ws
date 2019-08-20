/// <reference types="ws" />
import { Dictionary } from "@emobe/ts-collections";
import { Message } from "./Message";
import WebSocket from "isomorphic-ws";
export default class MessageHandler {
    actions: Dictionary<Function>;
    respondTo(action: string, callback: (message: Message) => void): this;
    handleMessage(data: WebSocket.Data, id: string): void;
    send(socket: WebSocket, message: Message): void;
}
