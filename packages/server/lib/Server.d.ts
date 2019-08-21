import { RoomManager } from "./RoomManager";
export declare class Server {
    private ws;
    roomManager: RoomManager;
    private state;
    private messages;
    constructor(port: number);
    private connected;
    close(): void;
}
