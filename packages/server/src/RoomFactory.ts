import { Room } from "./Room";

export class RoomFactory {
  create<T extends Room>(c: { new (): T }): T {
    return new c();
  }
}
