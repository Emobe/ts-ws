import { Room } from "./Room";
export declare class RoomFactory {
    create<T extends Room>(c: {
        new (): T;
    }): T;
}
