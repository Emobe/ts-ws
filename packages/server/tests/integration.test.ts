import test from "tape";
import WebSocket from "isomorphic-ws";
import msgpack from "msgpack";
import { Server } from "../src/Server";
import { Message } from "@ts-ws/messaging/lib/Message";

const server = new Server(1234);
test("Server test", t => {
  t.plan(3);
  const client = new WebSocket("ws://localhost:1234");

  client.onopen = e => {
    t.assert(true, "Client connected to server");
    server.roomManager.Rooms.get("Lobby");
  };

  client.onmessage = e => {
    const message: Message = msgpack.unpack(e.data);
    if (message.action === "handshake") {
      const id = message.data.id;
      t.assert(true, "Handshake message on join");
      t.true(
        server.roomManager.Rooms.get("lobby").Clients.containsKey(id),
        "Client has been added to lobby on accepted connection"
      );
    }
  };

  client.onerror = e => {
    t.assert(false, "Client failed to connect");
  };
});

test.onFinish(() => server.close());
