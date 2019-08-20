import { Dictionary } from "@emobe/ts-collections";
import { Message } from "./Message";
import msgpack from "msgpack";
import WebSocket from "isomorphic-ws";
export default class MessageHandler {
  constructor() {
    this.respondTo = this.respondTo.bind(this);
  }
  public actions = new Dictionary<Function>();
  public respondTo(action: string, callback: (message: Message) => void) {
    this.actions.add(action, callback);
    return this;
  }
  public handleMessage(data: WebSocket.MessageEvent, id: string) {
    const message: Message = msgpack.unpack(data);
    this.actions.Items[message.action](message.data);
  }
  public send(socket: WebSocket, message: Message) {
    const data = msgpack.pack(message);
    socket.send(data);
  }
}
