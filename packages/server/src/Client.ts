import WebSocket from "ws";
import msgpack from "msgpack";
export class Client {
  socket: WebSocket;
  constructor(socket: WebSocket) {
    this.socket = socket;
  }

  send(message: any) {
    this.socket.send(msgpack.pack(message));
  }
}
