import { ObservableDictionary } from "@emobe/ts-collections";
import { Room } from "./Room";
import { Client } from "./Client";
export declare class RoomManager {
    private factory;
    private rooms;
    constructor();
    createRoom<T extends Room>(key: string, room: {
        new (): T;
    }): void;
    readonly Rooms: ObservableDictionary<Room>;
    join(room: string, client: Client): void;
    leave(room: string, client: Client): void;
}
