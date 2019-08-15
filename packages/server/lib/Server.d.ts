import { RoomManager } from "./RoomManager";
export declare class Server {
    private ws;
    roomManager: RoomManager;
    constructor(port: number);
    private connected;
    close(): void;
}
