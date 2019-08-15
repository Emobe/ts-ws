import WebSocket from "ws";
import { Message } from "./models/Message";
export declare class Client {
    socket: WebSocket;
    constructor(socket: WebSocket);
    send(message: Message): void;
}
