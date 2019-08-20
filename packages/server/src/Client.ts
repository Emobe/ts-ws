import WebSocket from "ws";
import msgpack from "msgpack";
import nanoid from "nanoid";
export class Client {
  public socket: WebSocket;
  public room: string;
  private id: string = nanoid();
  constructor(socket: WebSocket) {
    this.socket = socket;
  }

  public send(message: any) {
    this.socket.send(msgpack.pack(message));
  }

  public get ID() {
    return this.id;
  }
}
