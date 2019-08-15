import WebSocket from "ws";
import test from "tape";
import { Server } from "../src/Server";
import { Message } from "../src";
import { Command } from "../../messaging/src/Command";

let server: Server;
let client: WebSocket;

const setup = (port: number) => ({
  server: new Server(port),
  client: new WebSocket(`ws://localhost:${port}`)
});
test("Integration test of Server", t => {
  const { server, client } = setup(8080);
  const message: Message = { action: "test", data: { test: "hello!" } };
  client.onopen = () => {
    t.assert(true, "Server initialised + client connected");
    const clientList = server.roomManager.rooms.get("lobby").clients.Items;
    const clientId = Object.keys(clientList);
    clientList[clientId[0]].send(message);
  };
  client.onerror = () => {
    t.assert(false, "Problem with client connecting to server");
    server.close();
    t.end();
  };
  client.onmessage = event => {
    t.deepEqual(
      event.data,
      JSON.stringify(message),
      "client can receive message from server"
    );
    server.close();
    t.end();
  };
});

test("MessageHandling tests", t => {
  const { server, client } = setup(1212);
  client.onopen = () => {
    client.send("testttttt");
  };
  client.onmessage = event => {
    console.error(event.data);
    t.end();
    server.close();
  };
});
