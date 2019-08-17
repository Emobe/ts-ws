import { Dictionary } from "@emobe/ts-collections";
import { Message } from "./Message";
import msgpack from "msgpack";
import WebSocket from "ws";
export default class MessageHandler {
  public actions = new Dictionary<Function>();
  public respondTo(action: string, callback: (message: Message) => void): this {
    this.actions.add(action, callback);
    return this;
  }
  public handleMessage(data: WebSocket.Data, id: string) {
    const message: Message = msgpack.unpack(data);
    this.actions.Items[message.action](message.data);
  }
}
