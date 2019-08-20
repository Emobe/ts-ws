import WebSocket, { OpenEvent, ErrorEvent } from "isomorphic-ws";
import msgpack from "msgpack";
import MessageHandler from "@ts-ws/messaging";
export class Client {
  public socket: WebSocket;
  public messaging = new MessageHandler();
  public connected: (event: OpenEvent) => void;
  public room: string;
  private id: string = "";
  constructor(url: string) {
    this.socket = new WebSocket(url);
    this.socket.onopen = event => this.connected(event);
    this.socket.onerror = event => this.error(event);
    this.socket.onmessage = message =>
      this.messaging.handleMessage(message, this.id);
  }

  error(event: ErrorEvent) {}

  close() {
    this.socket.close();
  }

  send(message: any) {
    this.socket.send(msgpack.pack(message));
  }
}
