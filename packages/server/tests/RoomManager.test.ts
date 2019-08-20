import test from "tape";
import { RoomManager } from "../src/RoomManager";
import { Lobby } from "../src/Lobby";
import { Room } from "../src/Room";
import WebSocket from "isomorphic-ws";
import { Server } from "../src/Server";
import msgpack from "msgpack";
import { Client } from "../src/Client";
import { skip } from "rxjs/operators";
class CustomRoom extends Room {}

let server: Server;

test("RoomManager.createRoom(room) should create room with factory and add to collection with key 'test'", t => {
  const manager = new RoomManager();
  manager.createRoom("test", CustomRoom);
  const actual = manager.Rooms.Items;
  const expected = { lobby: new Lobby(), test: new CustomRoom() };
  t.deepEqual(actual, expected);
  t.end();
});

test("RoomManager.join(client, room) should join rooms properly", t => {
  server = new Server(1235);
  const roomManager = new RoomManager();
  const client = new WebSocket("ws://localhost:1235");
  const testClient = new Client(client);
  client.onopen = e => {
    roomManager.join("lobby", testClient);
    roomManager.createRoom("testing", CustomRoom);

    let actual = roomManager.Rooms.get("lobby").Clients;
    let expected = { [testClient.ID]: testClient };

    t.deepEqual(actual, expected, "Should join lobby");

    roomManager.join("testing", testClient);
    expected = {};
    t.deepEqual(actual, expected, "Should leave lobby");

    actual = roomManager.Rooms.get("testing").Clients;
    expected = { [testClient.ID]: testClient };
    t.deepEqual(actual, expected, "Should join testing room ");

    t.end();
    server.close();
  };
});
