import WebSocket from "isomorphic-ws";
import { RoomManager } from "./RoomManager";
import { ServerState } from "./ServerState";
import MessageHandler from "@ts-ws/messaging";
import { Client } from "./Client";
export class Server {
  private ws: WebSocket.Server;
  public roomManager = new RoomManager();
  private state = new ServerState();
  private messages = new MessageHandler();
  constructor(port: number) {
    this.ws = new WebSocket.Server({ port });
    this.ws.on("connection", socket => this.connected(socket));
  }

  private connected(socket: WebSocket) {
    const client = new Client(socket);
    const id = client.ID;
    socket.on("message", (
      message: any // TODO fix issue with typing
    ) => this.messages.handleMessage(message, id));
    this.roomManager.join("lobby", client);
    this.messages.send(socket, { action: "handshake", data: { id } });
  }

  public close() {
    this.ws.close();
  }
}
