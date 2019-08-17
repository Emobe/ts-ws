import WebSocket from "ws";
import { ObservableDictionary } from "@emobe/ts-collections";
import { Room } from "./Room";
import { RoomManager } from "./RoomManager";
import nanoid from "nanoid";
import { ServerState } from "./ServerState";
import MessageHandler from "@ts-ws/messaging";
import { Client } from "./Client";
//import { MessageHandler } from "../../messaging/src/MessageHandler";
export class Server {
  private ws: WebSocket.Server;
  public roomManager = new RoomManager();
  private state = new ServerState();
  private messages = new MessageHandler();
  constructor(port: number) {
    this.ws = new WebSocket.Server({ port });
    this.ws.on("connection", socket => this.connected(socket));
    this.state.combine;
  }

  private connected(socket: WebSocket) {
    const id = nanoid();
    const client = new Client(socket);
    socket.on("message", message => this.messages.handleMessage(message, id));
    this.roomManager.Rooms.lobby.add(id, client);
  }

  public close() {
    this.ws.close();
  }
}
