import { runInThisContext } from "vm";
import { RoomManager } from "../../server/src/RoomManager";
import { Lobby } from "../../server/src/Lobby";
import { ObservableDictionary } from "@emobe/ts-collections";
import { Client } from "../../server/src/Client";
import { Command } from "./Command";

type ClientCollection = ObservableDictionary<Client>;

export class MessageHandler {
  roomManager: RoomManager;
  lobby: Lobby;
  constructor(roomManager: RoomManager) {
    this.roomManager = roomManager;
    this.lobby = this.roomManager.Rooms.lobby as Lobby;
  }

  public handleMessage(message: Command, id: string) {
    //if (typeof data !== "string") {
    //  data = JSON.parse(data);
    //}
    //console.error(data, id);
    message.execute();
    this.sendMessage(id, "hello", "hello");
    //switch (data.action) {
    //  case "handshake":
    //    //this.roomManager.join('Lobby', )
    //    break;
    //  case "rooms":
    //    this.sendMessage(data.from, data.action, this.lobby);
    //  case "createGame":
    //    console.log("creating");
    //    //this.lobby.createGame();
    //    this.sendMessage(data.from, "refreshRooms", this.lobby);
    //    break;
    //}
  }

  private sendMessage(to: string, action: string, data: any) {
    this.roomManager.rooms
      .get("lobby")
      .clients.get(to)
      .send({ action, data });
  }
}
