import { ObservableDictionary } from "@emobe/ts-collections";
import { Room } from "./Room";
import { RoomFactory } from "./RoomFactory";
export declare class RoomManager {
    factory: RoomFactory;
    rooms: ObservableDictionary<Room>;
    constructor();
    createRoom<T extends Room>(key: string, room: {
        new (): T;
    }): void;
    readonly Rooms: import("@emobe/ts-collections/dist/models/DictionaryCollection").KeyPair<Room>;
}
