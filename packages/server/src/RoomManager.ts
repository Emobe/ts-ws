import { ObservableDictionary } from "@emobe/ts-collections";
import { Room } from "./Room";
import { RoomFactory } from "./RoomFactory";
import { Lobby } from "./Lobby";
import { Client } from "./Client";

export class RoomManager {
  private factory = new RoomFactory();
  private rooms = new ObservableDictionary<Room>();
  constructor() {
    this.createRoom("lobby", Lobby);
  }

  public createRoom<T extends Room>(key: string, room: { new (): T }) {
    this.rooms.add(key, this.factory.create(room));
  }

  public get Rooms() {
    return this.rooms;
  }

  public join(room: string, client: Client) {
    if (client.room) {
      this.leave(client.room, client);
    }
    client.room = room;
    this.rooms.get(room).add(client.ID, client);
  }

  public leave(room: string, client: Client) {
    this.rooms.get(client.room).remove(client.ID);
  }
}
