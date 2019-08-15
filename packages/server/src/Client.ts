import WebSocket from "ws";
import { Message } from "./models/Message";
export class Client {
  public socket: WebSocket;
  constructor(socket: WebSocket) {
    this.socket = socket;
  }

  send(message: Message) {
    this.socket.send(JSON.stringify(message));
  }
}
