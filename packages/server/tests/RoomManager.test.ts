import test from "tape";
import { RoomManager } from "../src/RoomManager";
import { Lobby } from "../src/Lobby";
import { Room } from "../src/Room";

test("RoomManager() should initialise with a Lobby", t => {
  const manager = new RoomManager();
  const actual = manager.Rooms;
  const expected = { lobby: new Lobby() };
  t.deepEqual(actual, expected);
  t.end();
});

test("RoomManager.createRoom(room) should create room with factory and add to collection with key 'test'", t => {
  class customRoom extends Room {}
  const manager = new RoomManager();
  manager.createRoom("test", customRoom);
  const actual = manager.Rooms;
  const expected = { lobby: new Lobby(), test: new customRoom() };
  t.deepEqual(actual, expected);
  t.end();
});
