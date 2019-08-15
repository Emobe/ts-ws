import { Command } from "../../../messaging/src/Command";
import { RoomManager } from "../RoomManager";
import { Client } from "../Client";
import nanoid = require("nanoid");

export class Authenticate implements Command {
  public roomManager: RoomManager;
  public client: Client;
  constructor(client: Client, roomManager: RoomManager) {}
  execute() {
    const id = nanoid();
    this.roomManager.rooms.get("lobby").add(id, this.client);
  }
}
