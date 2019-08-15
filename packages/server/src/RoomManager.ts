import { ObservableDictionary } from "@emobe/ts-collections";
import { Room } from "./Room";
import { RoomFactory } from "./RoomFactory";
import { Lobby } from "./Lobby";

export class RoomManager {
  public factory = new RoomFactory();
  public rooms = new ObservableDictionary<Room>();
  constructor() {
    this.rooms.add("lobby", this.factory.create(Lobby));
  }

  public createRoom<T extends Room>(key: string, room: { new (): T }) {
    this.rooms.add(key, this.factory.create(room));
  }

  public get Rooms() {
    return this.rooms.Items;
  }
}
