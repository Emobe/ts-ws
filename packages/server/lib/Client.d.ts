import WebSocket from "ws";
export declare class Client {
    socket: WebSocket;
    room: string;
    private id;
    constructor(socket: WebSocket);
    send(message: any): void;
    readonly ID: string;
}
